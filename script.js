
// 数値調整用（HTMLのonclickから呼ばれるためDOMContentLoadedの外に定義）
window.adjustCount = function(id, diff) {
    const input = document.getElementById(id);
    if (!input) return;
    let val = parseInt(input.value) + diff;
    if (val < 1) val = 1; 
    if (val > 4) val = 4;
    input.value = val;
    
    // ここから追加
    // プレイヤー数の場合は名前入力欄を更新
    if (id === 'playerCount') {
        updatePlayerNameInputs();
    }
    // ここまで追加
    
    // プレイヤー名入力欄の数を更新するイベントを発火
    const event = new Event('input');
    input.dispatchEvent(event);
};

// プレイヤー名入力欄を更新する関数（adjustCountから呼ばれるためDOMContentLoadedの外に定義）
window.updatePlayerNameInputs = function() {
    const container = document.getElementById('playerNameInputsContainer');
    const count = parseInt(document.getElementById('playerCount').value) || 1;
    const currentInputs = Array.from(container.querySelectorAll('input')).map(i => i.value);
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'text'; input.className = 'playerNameInput';
        input.placeholder = `プレイヤー${i + 1}の名前`;
        if (currentInputs[i]) input.value = currentInputs[i];
        container.appendChild(input);
    }
};

// タブ切り替え機能（HTMLのonclickから呼ばれるためグローバルに定義）
window.showTab = function(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabName).classList.remove('hidden');
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (tabName === 'charTab') document.getElementById('tab-char').classList.add('active');
    if (tabName === 'weaponTab') document.getElementById('tab-weapon').classList.add('active');
};

// 一括チェック機能（HTMLのonclickから呼ばれるためグローバルに定義）
window.bulkCheck = function(type, state) {
    if (type === 'char') {
        document.querySelectorAll('.char-owned').forEach(cb => cb.checked = state);
    } else if (type === 'weapon') {
        document.querySelectorAll('.weapon-owned').forEach(cb => cb.checked = state);
    }
};

// 画像パスのエンコード関数（DOMContentLoadedの外に定義して、loadPlayerDataから呼べるようにする）
function encodeImagePath(type, name) {
    if (!name) return null;
    const folderMap = {
        'boss': 'boss',
        'character': 'characters',
        'weapon': 'weapons'
    };
    const folder = folderMap[type];
    const cleanName = name.trim().replace(/\s+/g, '');
    const encodedName = encodeURIComponent(cleanName);
    console.log(`[IMAGE] type:${type}, name:${name}, path:/${folder}/${encodedName}.png`);
    return `/${folder}/${encodedName}.png`;
}

document.addEventListener('DOMContentLoaded', function() {

    // --- データベース（2026/02/09版、トワリン除外） ---
    const characters = [
        { name: "ジン", country: "モンド", weapon: "片手剣", element: "風", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "長身女性", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "無相の風", local_specialty: "蒲公英の種", ascension_stat: "与える治療効果", distributed: false, talent_book: "抗争", talent_weekly: "東風の羽根", special_dish: "継続回復系", trace: true, costume: true },
        { name: "アンバー", country: "モンド", weapon: "弓", element: "炎", birth_month: "８月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 40, talent_boss: "爆炎樹", local_specialty: "イグサ", ascension_stat: "攻撃力", distributed: true, talent_book: "自由", talent_weekly: "東風の吐息", special_dish: "復活系", trace: false, costume: true },
        { name: "リサ", country: "モンド", weapon: "法器", element: "雷", birth_month: "６月", version: "n.0", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドアタッカー"], energy: 80, talent_boss: "無相の雷", local_specialty: "ヴァルベリー", ascension_stat: "元素熟知", distributed: true, talent_book: "詩文", talent_weekly: "東風の爪", special_dish: "継続回復系", trace: false, costume: true },
        { name: "ガイア", country: "モンド", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "急凍樹", local_specialty: "ドドリアン", ascension_stat: "元素チャージ効率", distributed: true, talent_book: "詩文", talent_weekly: "北風の魂箱", special_dish: "回復系", trace: false, costume: true },
        { name: "バーバラ", country: "モンド", weapon: "法器", element: "水", birth_month: "７月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "純水精霊", local_specialty: "慕風のマッシュルーム", ascension_stat: "HP", distributed: true, talent_book: "自由", talent_weekly: "北風のリング", special_dish: "スタミナ軽減系", trace: false, costume: true },
        { name: "ディルック", country: "モンド", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "爆炎樹", local_specialty: "イグサ", ascension_stat: "会心率", distributed: false, talent_book: "抗争", talent_weekly: "東風の羽根", special_dish: "攻撃系", trace: true, costume: true },
        { name: "レザー", country: "モンド", weapon: "両手剣", element: "雷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "無相の雷", local_specialty: "ググプラム", ascension_stat: "物理ダメージ", distributed: false, talent_book: "抗争", talent_weekly: "東風の爪", special_dish: "回復系", trace: false, costume: false },
        { name: "ウェンティ", country: "モンド", weapon: "弓", element: "風", birth_month: "６月", version: "n.0", rarity: ['☆５'], body: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 60, talent_boss: "無相の風", local_specialty: "セシリアの花", ascension_stat: "元素チャージ効率", distributed: false, talent_book: "詩文", talent_weekly: "北風のしっぽ", special_dish: "スタミナ軽減系", trace: true, costume: false },
        { name: "クレー", country: "モンド", weapon: "法器", element: "炎", birth_month: "７月", version: "n.0", rarity: ['☆５'], body: "ロリ", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "爆炎樹", local_specialty: "慕風のマッシュルーム", ascension_stat: "炎元素ダメージ", distributed: false, talent_book: "自由", talent_weekly: "北風のリング", special_dish: "防御系", trace: true, costume: true },
        { name: "ベネット", country: "モンド", weapon: "片手剣", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "爆炎樹", local_specialty: "風車アスター", ascension_stat: "元素チャージ効率", distributed: true, talent_book: "抗争", talent_weekly: "東風の羽根", special_dish: "復活系", trace: false, costume: true },
        { name: "ノエル", country: "モンド", weapon: "両手剣", element: "岩", birth_month: "３月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オンフィールドアタッカー", "オンフィールドライフキーパー"], energy: 60, talent_boss: "無相の岩", local_specialty: "ヴァルベリー", ascension_stat: "防御力", distributed: false, talent_book: "抗争", talent_weekly: "東風の爪", special_dish: "復活系", trace: false, costume: false },
        { name: "フィッシュル", country: "モンド", weapon: "弓", element: "雷", birth_month: "５月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 60, talent_boss: "無相の雷", local_specialty: "イグサ", ascension_stat: "攻撃力", distributed: true, talent_book: "詩文", talent_weekly: "北風の魂箱", special_dish: "攻撃系", trace: false, costume: true },
        { name: "スクロース", country: "モンド", weapon: "法器", element: "風", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "無相の風", local_specialty: "風車アスター", ascension_stat: "風元素ダメージ", distributed: false, talent_book: "自由", talent_weekly: "北風の魂箱", special_dish: "復活系", trace: false, costume: false },
        { name: "モナ", country: "モンド", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "純水精霊", local_specialty: "慕風のマッシュルーム", ascension_stat: "元素チャージ効率", distributed: false, talent_book: "抗争", talent_weekly: "北風のリング", special_dish: "攻撃系", trace: false, costume: true },
        { name: "ディオナ", country: "モンド", weapon: "弓", element: "氷", birth_month: "１月", version: "n.1", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "急凍樹", local_specialty: "ドドリアン", ascension_stat: "氷元素ダメージ", distributed: true, talent_book: "自由", talent_weekly: "魔王の刃・残片", special_dish: "復活系", trace: false, costume: false },
        { name: "アルベド", country: "モンド", weapon: "片手剣", element: "岩", birth_month: "９月", version: "n.2", rarity: ['☆５'], body: "中身男性", role: ["オフフィールドアタッカー"], energy: 40, talent_boss: "無相の岩", local_specialty: "セシリアの花", ascension_stat: "岩元素ダメージ", distributed: false, talent_book: "詩文", talent_weekly: "吞天の鯨・只角", special_dish: "シールド系", trace: true, costume: false },
        { name: "ロサリア", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "１月", version: "n.4", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドアタッカー"], energy: 60, talent_boss: "急凍樹", local_specialty: "ヴァルベリー", ascension_stat: "攻撃力", distributed: false, talent_book: "詩文", talent_weekly: "武煉の魂・孤影", special_dish: "回復系", trace: false, costume: true },
        { name: "エウルア", country: "モンド", weapon: "両手剣", element: "氷", birth_month: "１０月", version: "n.5", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "無相の氷", local_specialty: "蒲公英の種", ascension_stat: "会心ダメージ", distributed: false, talent_book: "抗争", talent_weekly: "龍王の冠", special_dish: "シールド系", trace: false, costume: false },
        { name: "ミカ", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "８月", version: "n.5", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "風食ウェネト", local_specialty: "ググプラム", ascension_stat: "HP", distributed: false, talent_book: "詩文", talent_weekly: "無心の淵鏡", special_dish: "攻撃系", trace: false, costume: false },
        { name: "ダリア", country: "モンド", weapon: "片手剣", element: "水", birth_month: "５月", version: "n.7", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 80, talent_boss: "秘源機兵・統御デバイス", local_specialty: "ドドリアン", ascension_stat: "HP", distributed: false, talent_book: "詩文", talent_weekly: "蝕滅の羽鱗", special_dish: "継続回復系", trace: false, costume: false },
        { name: "ドゥリン", country: "モンド", weapon: "片手剣", element: "炎", birth_month: "３月", version: "n.3", rarity: ['☆５'], body: "中身男性", role: ["オフフィールドサポーター","オフフィールドアタッカー"], energy: 70, talent_boss: "重量級陸巡艦「バトルシップ」", local_specialty: "フロストランプ", ascension_stat: "会心ダメージ", distributed: false, talent_book: "詩文", talent_weekly: "蝕滅の陽炎", special_dish: "回復系", trace: false, costume: true },
        { name: "ファルカ", country: "モンド", weapon: "両手剣", element: "風", birth_month: "２月", version: "n.4", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "集光の月ヤモリ", local_specialty: "ググプラム", ascension_stat: "会心ダメージ", distributed: false, talent_book: "自由", talent_weekly: "昇揚のサンプル「ルーク」", special_dish: "スタミナ回復系", trace: false, costume: false }, 
        { name: "魈", country: "璃月", weapon: "長柄武器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "エンシェントヴィシャップ・岩", local_specialty: "清心", ascension_stat: "会心率", distributed: false, talent_book: "繁栄", talent_weekly: "武煉の魂・孤影", special_dish: "攻撃系", trace: false, costume: false },
        { name: "北斗", country: "璃月", weapon: "両手剣", element: "雷", birth_month: "２月", version: "n.0", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 80, talent_boss: "無相の雷", local_specialty: "夜泊石", ascension_stat: "雷元素ダメージ", distributed: true, talent_book: "黄金", talent_weekly: "東風の吐息", special_dish: "復活系", trace: false, costume: false },
        { name: "凝光", country: "璃月", weapon: "法器", element: "岩", birth_month: "８月", version: "n.0", rarity: ['☆４'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "無相の岩", local_specialty: "瑠璃百合", ascension_stat: "岩元素ダメージ", distributed: false, talent_book: "繁栄", talent_weekly: "北風の魂箱", special_dish: "復活系", trace: true, costume: true },
        { name: "香菱", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 80, talent_boss: "爆炎樹", local_specialty: "絶雲の唐辛子", ascension_stat: "元素熟知", distributed: true, talent_book: "勤労", talent_weekly: "東風の爪", special_dish: "継続回復系", trace: false, costume: true },
        { name: "行秋", country: "璃月", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 80, talent_boss: "純水精霊", local_specialty: "霓裳花", ascension_stat: "攻撃力", distributed: true, talent_book: "黄金", talent_weekly: "北風のしっぽ", special_dish: "継続回復系", trace: false, costume: true },
        { name: "重雲", country: "璃月", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 40, talent_boss: "急凍樹", local_specialty: "石珀", ascension_stat: "攻撃力", distributed: false, talent_book: "勤労", talent_weekly: "東風の吐息", special_dish: "スタミナ回復系", trace: false, costume: false },
        { name: "七七", country: "璃月", weapon: "片手剣", element: "氷", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "急凍樹", local_specialty: "瑠璃袋", ascension_stat: "与える治療効果", distributed: false, talent_book: "繁栄", talent_weekly: "北風のしっぽ", special_dish: "攻撃系", trace: true, costume: true },
        { name: "刻晴", country: "璃月", weapon: "片手剣", element: "雷", birth_month: "１１月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "無相の雷", local_specialty: "石珀", ascension_stat: "会心ダメージ", distributed: false, talent_book: "繁栄", talent_weekly: "北風のリング", special_dish: "回復系", trace: true, costume: true },
        { name: "鍾離", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body: "長身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 40, talent_boss: "無相の岩", local_specialty: "石珀", ascension_stat: "岩元素ダメージ", distributed: false, talent_book: "黄金", talent_weekly: "吞天の鯨・只角", special_dish: "継続回復系", trace: true, costume: false },
        { name: "辛炎", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１０月", version: "n.1", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 60, talent_boss: "爆炎樹", local_specialty: "瑠璃袋", ascension_stat: "攻撃力", distributed: true, talent_book: "黄金", talent_weekly: "吞天の鯨・只角", special_dish: "攻撃系", trace: false, costume: false },
        { name: "甘雨", country: "璃月", weapon: "弓", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "急凍樹", local_specialty: "清心", ascension_stat: "会心ダメージ", distributed: false, talent_book: "勤労", talent_weekly: "武煉の魂・孤影", special_dish: "回復系", trace: true, costume: true },
        { name: "胡桃", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "７月", version: "n.3", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "エンシェントヴィシャップ・岩", local_specialty: "霓裳花", ascension_stat: "会心ダメージ", distributed: false, talent_book: "勤労", talent_weekly: "魔王の刃・残片", special_dish: "復活系", trace: false, costume: true },
        { name: "煙緋", country: "璃月", weapon: "法器", element: "炎", birth_month: "７月", version: "n.5", rarity: ['☆４'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "エンシェントヴィシャップ・岩", local_specialty: "夜泊石", ascension_stat: "炎元素ダメージ", distributed: false, talent_book: "黄金", talent_weekly: "血玉の枝", special_dish: "復活系", trace: false, costume: false },
        { name: "申鶴", country: "璃月", weapon: "長柄武器", element: "氷", birth_month: "３月", version: "n.4", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "アビサルヴィシャップ", local_specialty: "清心", ascension_stat: "攻撃力", distributed: false, talent_book: "繁栄", talent_weekly: "獄炎の蝶", special_dish: "攻撃系", trace: true, costume: true },
        { name: "雲菫", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "５月", version: "n.4", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "黄金王獣", local_specialty: "瑠璃百合", ascension_stat: "元素チャージ効率", distributed: false, talent_book: "勤労", talent_weekly: "灰燼の心", special_dish: "スタミナ軽減系", trace: false, costume: false },
        { name: "夜蘭", country: "璃月", weapon: "弓", element: "水", birth_month: "４月", version: "n.7", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドアタッカー"], energy: 70, talent_boss: "遺跡サーペント", local_specialty: "星螺", ascension_stat: "会心率", distributed: false, talent_book: "繁栄", talent_weekly: "鍍金の鱗", special_dish: "シールド系", trace: true, costume: true },
        { name: "ヨォーヨ", country: "璃月", weapon: "長柄武器", element: "草", birth_month: "３月", version: "n.4", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "無相の草", local_specialty: "絶雲の唐辛子", ascension_stat: "HP", distributed: false, talent_book: "勤労", talent_weekly: "空行の虚鈴", special_dish: "継続回復系", trace: false, costume: true },
        { name: "白朮", country: "璃月", weapon: "法器", element: "草", birth_month: "４月", version: "n.6", rarity: ['☆５'], body: "長身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 80, talent_boss: "深罪の浸礼者", local_specialty: "瑠璃袋", ascension_stat: "HP", distributed: false, talent_book: "黄金", talent_weekly: "禍神の禊涙", special_dish: "治療効果系", trace: false, costume: false },
        { name: "閑雲", country: "璃月", weapon: "法器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "山隠れの猊獣", local_specialty: "清水玉", ascension_stat: "攻撃力", distributed: false, talent_book: "黄金", talent_weekly: "光なき渦の眼", special_dish: "攻撃系", trace: false, costume: false },
        { name: "嘉明", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１２月", version: "n.4", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "鉄甲熔炎帝王", local_specialty: "星螺", ascension_stat: "攻撃力", distributed: false, talent_book: "繁栄", talent_weekly: "光なき一塊", special_dish: "継続回復系", trace: false, costume: true },
        { name: "藍硯", country: "璃月", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆４'], body: "中身女性", role: ["オンフィールドアタッカー", "オンフィールドライフキーパー"], energy: 60, talent_boss: "秘源機兵・機構デバイス", local_specialty: "清水玉", ascension_stat: "攻撃力", distributed: false, talent_book: "勤労", talent_weekly: "蝕滅の陽炎", special_dish: "スタミナ回復系", trace: false, costume: false },
        { name: "兹白", country: "璃月", weapon: "片手剣", element: "岩", birth_month: "５月", version: "n.4", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "昏き魘夢の主", local_specialty: "瑠璃百合", ascension_stat: "会心ダメージ", distributed: false, talent_book: "黄金", talent_weekly: "昇揚のサンプル「王族」", special_dish: "防御系", trace: false, costume: false },
        { name: "神里綾華", country: "稲妻", weapon: "片手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "恒常からくり陣形", local_specialty: "緋櫻毬", ascension_stat: "会心ダメージ", distributed: false, talent_book: "風雅", talent_weekly: "血玉の枝", special_dish: "復活系", trace: true, costume: true },
        { name: "神里綾人", country: "稲妻", weapon: "片手剣", element: "水", birth_month: "３月", version: "n.6", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "無相の水", local_specialty: "緋櫻毬", ascension_stat: "会心ダメージ", distributed: false, talent_book: "風雅", talent_weekly: "凶将の手眼", special_dish: "シールド系", trace: true, costume: false },
        { name: "楓原万葉", country: "稲妻", weapon: "片手剣", element: "風", birth_month: "１０月", version: "n.6", rarity: ['☆５'], body: "中身男性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "魔偶剣鬼", local_specialty: "ウミレイシ", ascension_stat: "元素熟知", distributed: false, talent_book: "勤労", talent_weekly: "鍍金の鱗", special_dish: "回復系", trace: true, costume: false },
        { name: "宵宮", country: "稲妻", weapon: "弓", element: "炎", birth_month: "６月", version: "n.0", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "無相の炎", local_specialty: "鳴草", ascension_stat: "会心率", distributed: false, talent_book: "浮世", talent_weekly: "龍王の冠", special_dish: "回復系", trace: false, costume: false },
        { name: "早柚", country: "稲妻", weapon: "両手剣", element: "風", birth_month: "１０月", version: "n.0", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "魔偶剣鬼", local_specialty: "晶化骨髄", ascension_stat: "元素熟知", distributed: false, talent_book: "天光", talent_weekly: "鍍金の鱗", special_dish: "継続回復系", trace: false, costume: false },
        { name: "雷電将軍", country: "稲妻", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー", "オンフィールドサポーター"], energy: 90, talent_boss: "雷音権現", local_specialty: "天雲草の実", ascension_stat: "元素チャージ効率", distributed: false, talent_book: "天光", talent_weekly: "溶滅の刻", special_dish: "", trace: true, costume: false },
        { name: "九条裟羅", country: "稲妻", weapon: "弓", element: "雷", birth_month: "７月", version: "n.1", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "雷音権現", local_specialty: "血石華", ascension_stat: "攻撃力", distributed: false, talent_book: "風雅", talent_weekly: "灰燼の心", special_dish: "復活系", trace: false, costume: false },
        { name: "珊瑚宮心海", country: "稲妻", weapon: "法器", element: "水", birth_month: "２月", version: "n.1", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "無相の水", local_specialty: "珊瑚真珠", ascension_stat: "水元素ダメージ", distributed: false, talent_book: "浮世", talent_weekly: "獄炎の蝶", special_dish: "回復系", trace: false, costume: false },
        { name: "トーマ", country: "稲妻", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.2", rarity: ['☆４'], body: "長身男性", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "無相の炎", local_specialty: "ユウトウタケ", ascension_stat: "攻撃力", distributed: false, talent_book: "浮世", talent_weekly: "獄炎の蝶", special_dish: "継続回復系", trace: false, costume: false },
        { name: "荒瀧一斗", country: "稲妻", weapon: "両手剣", element: "岩", birth_month: "６月", version: "n.3", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "黄金王獣", local_specialty: "オニカブトムシ", ascension_stat: "会心率", distributed: false, talent_book: "風雅", talent_weekly: "灰燼の心", special_dish: "復活系", trace: false, costume: false },
        { name: "ゴロー", country: "稲妻", weapon: "弓", element: "岩", birth_month: "５月", version: "n.3", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "恒常からくり陣形", local_specialty: "珊瑚真珠", ascension_stat: "岩元素ダメージ", distributed: true, talent_book: "天光", talent_weekly: "溶滅の刻", special_dish: "回復系", trace: false, costume: false },
        { name: "八重神子", country: "稲妻", weapon: "法器", element: "雷", birth_month: "６月", version: "n.5", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドアタッカー"], energy: 90, talent_boss: "アビサルヴィシャップ", local_specialty: "ウミレイシ", ascension_stat: "会心率", distributed: false, talent_book: "天光", talent_weekly: "万劫の真意", special_dish: "復活系", trace: false, costume: false },
        { name: "久岐忍", country: "稲妻", weapon: "片手剣", element: "雷", birth_month: "７月", version: "n.7", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 60, talent_boss: "遺跡サーペント", local_specialty: "鳴草", ascension_stat: "HP", distributed: false, talent_book: "風雅", talent_weekly: "禍神の禊涙", special_dish: "スタミナ軽減系", trace: false, costume: false },
        { name: "鹿野院平蔵", country: "稲妻", weapon: "法器", element: "風", birth_month: "７月", version: "n.8", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "遺跡サーペント", local_specialty: "オニカブトムシ", ascension_stat: "風元素ダメージ", distributed: false, talent_book: "浮世", talent_weekly: "万劫の真意", special_dish: "攻撃系", trace: false, costume: false },
        { name: "綺良々", country: "稲妻", weapon: "片手剣", element: "草", birth_month: "１月", version: "n.7", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 60, talent_boss: "深罪の浸礼者", local_specialty: "天雲草の実", ascension_stat: "HP", distributed: true, talent_book: "浮世", talent_weekly: "太古の樹海の一瞬", special_dish: "継続回復系", trace: true, costume: true },
        { name: "千織", country: "稲妻", weapon: "片手剣", element: "岩", birth_month: "８月", version: "n.5", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 50, talent_boss: "氷風組武コッペリア", local_specialty: "血石華", ascension_stat: "会心率", distributed: false, talent_book: "天光", talent_weekly: "光なき糸", special_dish: "継続回復系", trace: false, costume: false },
        { name: "夢見月瑞希", country: "稲妻", weapon: "法器", element: "風", birth_month: "３月", version: "n.4", rarity: ['☆５', '恒常☆５'], body: "中身女性", role: ["オンフィールドアタッカー", "オンフィールドライフキーパー"], energy: 60, talent_boss: "迷える霊覚の修権者", local_specialty: "ウミレイシ", ascension_stat: "元素熟知", distributed: false, talent_book: "浮世", talent_weekly: "残火の灯燭", special_dish: "スタミナ回復系", trace: false, costume: false },
        { name: "ティナリ", country: "スメール", weapon: "弓", element: "草", birth_month: "１２月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "マッシュラプトル", local_specialty: "サウマラタ蓮", ascension_stat: "草元素ダメージ", distributed: false, talent_book: "忠言", talent_weekly: "万劫の真意", special_dish: "防御系", trace: false, costume: false },
        { name: "コレイ", country: "スメール", weapon: "弓", element: "草", birth_month: "５月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 60, talent_boss: "マッシュラプトル", local_specialty: "ルッカデヴァータダケ", ascension_stat: "攻撃力", distributed: true, talent_book: "篤行", talent_weekly: "禍神の禊涙", special_dish: "回復系", trace: false, costume: true },
        { name: "ドリー", country: "スメール", weapon: "両手剣", element: "雷", birth_month: "１２月", version: "n.0", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "迅電樹", local_specialty: "カルパラタ蓮", ascension_stat: "HP", distributed: true, talent_book: "創意", talent_weekly: "血玉の枝", special_dish: "攻撃系", trace: false, costume: false },
        { name: "セノ", country: "スメール", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "迅電樹", local_specialty: "聖金虫", ascension_stat: "会心ダメージ", distributed: false, talent_book: "忠言", talent_weekly: "凶将の手眼", special_dish: "継続回復系", trace: false, costume: false },
        { name: "キャンディス", country: "スメール", weapon: "長柄武器", element: "水", birth_month: "５月", version: "n.1", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "半永久統制マトリックス", local_specialty: "赤念の実", ascension_stat: "HP", distributed: true, talent_book: "忠言", talent_weekly: "禍神の禊涙", special_dish: "スタミナ回復系", trace: false, costume: false },
        { name: "ニィロウ", country: "スメール", weapon: "片手剣", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 70, talent_boss: "兆載永劫ドレイク", local_specialty: "パティサラ", ascension_stat: "HP", distributed: false, talent_book: "篤行", talent_weekly: "禍神の禊涙", special_dish: "スタミナ軽減系", trace: false, costume: true },
        { name: "ナヒーダ", country: "スメール", weapon: "法器", element: "草", birth_month: "１０月", version: "n.2", rarity: ['☆５'], body: "ロリ", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 50, talent_boss: "無相の草", local_specialty: "カルパラタ蓮", ascension_stat: "元素熟知", distributed: false, talent_book: "創意", talent_weekly: "傀儡の糸", special_dish: "防御系", trace: true, costume: false },
        { name: "レイラ", country: "スメール", weapon: "片手剣", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 40, talent_boss: "兆載永劫ドレイク", local_specialty: "サウマラタ蓮", ascension_stat: "HP", distributed: false, talent_book: "創意", talent_weekly: "無心の淵鏡", special_dish: "継続回復系", trace: false, costume: false },
        { name: "放浪者", country: "スメール", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "兆載永劫ドレイク", local_specialty: "ルッカデヴァータダケ", ascension_stat: "会心率", distributed: false, talent_book: "篤行", talent_weekly: "空行の虚鈴", special_dish: "治療効果系", trace: false, costume: false },
        { name: "ファルザン", country: "スメール", weapon: "弓", element: "風", birth_month: "８月", version: "n.3", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "半永久統制マトリックス", local_specialty: "赤念の実", ascension_stat: "攻撃力", distributed: true, talent_book: "忠言", talent_weekly: "傀儡の糸", special_dish: "復活系", trace: false, costume: false },
        { name: "アルハイゼン", country: "スメール", weapon: "片手剣", element: "草", birth_month: "２月", version: "n.4", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "風食ウェネト", local_specialty: "砂脂蛹", ascension_stat: "草元素ダメージ", distributed: false, talent_book: "創意", talent_weekly: "無心の淵鏡", special_dish: "回復系", trace: false, costume: false },
        { name: "ディシア", country: "スメール", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.5", rarity: ['☆５', '恒常☆５'], body: "長身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 70, talent_boss: "半永久統制マトリックス", local_specialty: "砂脂蛹", ascension_stat: "HP", distributed: false, talent_book: "篤行", talent_weekly: "傀儡の糸", special_dish: "HP強化系", trace: true, costume: false },
        { name: "カーヴェ", country: "スメール", weapon: "両手剣", element: "草", birth_month: "７月", version: "n.6", rarity: ['☆４'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "無相の草", local_specialty: "悼霊花", ascension_stat: "元素熟知", distributed: false, talent_book: "創意", talent_weekly: "原初のオアシスの初咲き", special_dish: "復活系", trace: false, costume: false },
        { name: "セトス", country: "スメール", weapon: "弓", element: "雷", birth_month: "５月", version: "n.7", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "山隠れの猊獣", local_specialty: "サングイト", ascension_stat: "元素熟知", distributed: false, talent_book: "篤行", talent_weekly: "空行の虚鈴", special_dish: "攻撃系", trace: false, costume: false },
        { name: "リネ", country: "フォンテーヌ", weapon: "弓", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "鉄甲熔炎帝王", local_specialty: "レインボーローズ", ascension_stat: "会心率", distributed: false, talent_book: "公平", talent_weekly: "原初のオアシスの初咲き", special_dish: "攻撃系", trace: false, costume: false },
        { name: "リネット", country: "フォンテーヌ", weapon: "片手剣", element: "風", birth_month: "２月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 70, talent_boss: "氷風組曲コッペリア", local_specialty: "ルミドゥースベル", ascension_stat: "風元素ダメージ", distributed: true, talent_book: "秩序", talent_weekly: "太古の樹海の一瞬", special_dish: "治療効果系", trace: false, costume: false },
        { name: "フレミネ", country: "フォンテーヌ", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "氷風組曲コペリウス", local_specialty: "ロマリタイムフラワー", ascension_stat: "攻撃力", distributed: true, talent_book: "正義", talent_weekly: "天地に映える蕨", special_dish: "継続回復系", trace: false, costume: false },
        { name: "ヌヴィレット", country: "フォンテーヌ", weapon: "法器", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "千年真珠の海駿", local_specialty: "ルエトワール", ascension_stat: "会心ダメージ", distributed: false, talent_book: "公平", talent_weekly: "太古の樹海の一瞬", special_dish: "攻撃系", trace: false, costume: true },
        { name: "リオセスリ", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "１１月", version: "n.1", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "実験用フィールド生成装置", local_specialty: "探測ユニット・子機", ascension_stat: "会心ダメージ", distributed: false, talent_book: "秩序", talent_weekly: "原初のオアシスの初咲き", special_dish: "回復系", trace: false, costume: false },
        { name: "シャルロット", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 80, talent_ボス: "実験用フィールド生成装置", local_specialty: "蒼晶螺", ascension_stat: "攻撃力", distributed: false, talent_book: "正義", talent_weekly: "光なき糸", special_dish: "スタミナ回復系", trace: false, costume: false },
        { name: "フリーナ", country: "フォンテーヌ", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.2", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "水形タルパ", local_specialty: "湖光の鈴蘭", ascension_stat: "会心率", distributed: false, talent_book: "正義", talent_weekly: "光なき一塊", special_dish: "HP強化系", trace: false, costume: false },
        { name: "ナヴィア", country: "フォンテーヌ", weapon: "両手剣", element: "岩", birth_month: "８月", version: "n.3", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "氷風組曲コペリウス", local_specialty: "初露の源", ascension_stat: "会心ダメージ", distributed: false, talent_book: "公平", talent_weekly: "光なき糸", special_dish: "スタミナ軽減系", trace: false, costume: false },
        { name: "シュヴルーズ", country: "フォンテーヌ", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.3", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "千年真珠の海駿", local_specialty: "ルミドゥースベル", ascension_stat: "HP", distributed: false, talent_book: "秩序", talent_weekly: "光なき渦の眼", special_dish: "治療効果系", trace: false, costume: false },
        { name: "クロリンデ", country: "フォンテーヌ", weapon: "片手剣", element: "雷", birth_month: "９月", version: "n.7", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "千年真珠の海駿", local_specialty: "ルエトワール", ascension_stat: "会心率", distributed: false, talent_book: "正義", talent_weekly: "太古の樹海の一瞬", special_dish: "スタミナ回復系", trace: false, costume: false },
        { name: "シグウィン", country: "フォンテーヌ", weapon: "弓", element: "水", birth_month: "３月", version: "n.7", rarity: ['☆５'], body: "ロリ", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "水形タルパ", local_specialty: "ロマリタイムフラワー", ascension_stat: "HP", distributed: false, talent_book: "公平", talent_weekly: "光なき渦の眼", special_dish: "継続回復系", trace: false, costume: false },
        { name: "エミリエ", country: "フォンテーヌ", weapon: "長柄武器", element: "草", birth_month: "９月", version: "n.8", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 50, talent_boss: "魔像レガトゥス", local_specialty: "湖光の鈴蘭", ascension_stat: "会心ダメージ", distributed: false, talent_book: "秩序", talent_weekly: "絹織りの羽", special_dish: "攻撃系", trace: false, costume: false },
        { name: "エスコフィエ", country: "フォンテーヌ", weapon: "長柄武器", element: "氷", birth_month: "６月", version: "n.6", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "秘源機兵・統御デバイス", local_specialty: "蒼晶螺", ascension_stat: "会心率", distributed: false, talent_book: "正義", talent_weekly: "蝕滅の焔角", special_dish: "攻撃系", trace: false, costume: false },
        { name: "イアンサ", country: "ナタ", weapon: "長柄武器", element: "雷", birth_month: "８月", version: "n.5", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "深淵なるミミック・パピラ", local_specialty: "琉鱗石", ascension_stat: "攻撃力", distributed: false, talent_book: "角逐", talent_weekly: "否定と裁決", special_dish: "復活系", trace: false, costume: false },
        { name: "チャスカ", country: "ナタ", weapon: "弓", element: "風", birth_month: "１２月", version: "n.2", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "深淵なるミミック・パピラ", local_specialty: "枯れ紫菖", ascension_stat: "会心率", distributed: false, talent_book: "紛争", talent_weekly: "絹織りの羽", special_dish: "スタミナ軽減系", trace: false, costume: false },
        { name: "ムアラニ", country: "ナタ", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "暴君・金焔のクク竜", local_specialty: "波しぶきのエラ", ascension_stat: "会心率", distributed: false, talent_book: "角逐", talent_weekly: "光なき一塊", special_dish: "シールド系", trace: false, costume: false },
        { name: "オロルン", country: "ナタ", weapon: "弓", element: "雷", birth_month: "１０月", version: "n.2", rarity: ['☆４'], body: "長身男性", role: ["オフフィールドアタッカー"], energy: 60, talent_boss: "暴君・金焔のクク竜", local_specialty: "蛍光ツノキノコ", ascension_stat: "攻撃力", distributed: false, talent_book: "焚燼", talent_weekly: "光なき糸", special_dish: "攻撃系", trace: false, costume: false },
        { name: "キィニチ", country: "ナタ", weapon: "両手剣", element: "草", birth_month: "１１月", version: "n.0", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "山の王・貪食のユムカ竜", local_specialty: "サウリアンサキュレント", ascension_stat: "会心ダメージ", distributed: false, talent_book: "焚燼", talent_weekly: "否定と裁決", special_dish: "攻撃系", trace: false, costume: false },
        { name: "カチーナ", country: "ナタ", weapon: "長柄武器", element: "岩", birth_month: "４月", version: "n.0", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドアタッカー"], energy: 70, talent_boss: "山の王・貪食のユムカ竜", local_specialty: "ケネパベリー", ascension_stat: "岩元素ダメージ", distributed: true, talent_book: "紛争", talent_weekly: "残火の灯燭", special_dish: "継続回復系", trace: false, costume: true },
        { name: "シトラリ", country: "ナタ", weapon: "法器", element: "氷", birth_month: "１月", version: "n.3", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "迷える霊覚の修権者", local_specialty: "ケネパベリー", ascension_stat: "元素熟知", distributed: false, talent_book: "焚燼", talent_weekly: "否定と裁決", special_dish: "復活系", trace: false, costume: false },
        { name: "マーヴィカ", country: "ナタ", weapon: "両手剣", element: "炎", birth_month: "８月", version: "n.3", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー", "オフフィールドアタッカー", "オンフィールドサポーター"], energy: 0, talent_boss: "秘源機兵・機構デバイス", local_specialty: "枯れ紫菖", ascension_stat: "会心ダメージ", distributed: false, talent_book: "角逐", talent_weekly: "蝕滅の焔角", special_dish: "攻撃系", trace: false, costume: false },
        { name: "ヴァレサ", country: "ナタ", weapon: "法器", element: "雷", birth_month: "１１月", version: "n.5", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "輝ける溶岩の龍像", local_specialty: "岩裂の花", ascension_stat: "会心率", distributed: false, talent_book: "紛争", talent_weekly: "蝕滅の羽鱗", special_dish: "攻撃系", trace: false, costume: false },
        { name: "イファ", country: "ナタ", weapon: "法器", element: "風", birth_month: "３月", version: "n.5", rarity: ['☆４'], body: "長身男性", role: ["オンフィールドライフキーパー"], energy: 60, talent_boss: "輝ける溶岩の龍像", local_specialty: "サウリアンサキュレント", ascension_stat: "元素熟知", distributed: false, talent_book: "紛争", talent_weekly: "昇揚のサンプル「ルーク」", special_dish: "防御系", trace: false, costume: false },
        { name: "シロネン", country: "ナタ", weapon: "片手剣", element: "岩", birth_month: "３月", version: "n.1", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "秘源機兵・機構デバイス", local_specialty: "シャクギク", ascension_stat: "防御力", distributed: false, talent_book: "焚燼", talent_weekly: "無心の淵鏡", special_dish: "スタミナ回復系", trace: false, costume: false },
        { name: "タルタリヤ", country: "スネージナヤ", weapon: "弓", element: "水", birth_month: "７月", version: "n.1", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "純水精霊", local_specialty: "星螺", ascension_stat: "水元素ダメージ", distributed: false, talent_book: "自由", talent_weekly: "魔王の刃・残片", special_dish: "防御系", trace: false, costume: false },
        { name: "アルレッキーノ", country: "スネージナヤ", weapon: "長柄武器", element: "炎", birth_month: "８月", version: "n.6", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "魔像レガトゥス", local_specialty: "レインボーローズ", ascension_stat: "会心ダメージ", distributed: false, talent_book: "秩序", talent_weekly: "残火の灯燭", special_dish: "回復系", trace: false, costume: true },
        { name: "イネファ", country: "ナドクライ", weapon: "長柄武器", element: "雷", birth_month: "４月", version: "n.8", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 60, talent_boss: "秘源機兵・統御デバイス", local_specialty: "蛍光ツノキノコ", ascension_stat: "会心率", distributed: false, talent_book: "紛争", talent_weekly: "蝕滅の陽炎", special_dish: "シールド系", trace: false, costume: false },
        { name: "フリンズ", country: "ナドクライ", weapon: "長柄武器", element: "雷", birth_month: "１０月", version: "n.0", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "ボコボコダック", local_specialty: "フロストランプ", ascension_stat: "会心ダメージ", distributed: false, talent_book: "流浪", talent_weekly: "昇揚のサンプル「王族」", special_dish: "回復系", trace: false, costume: false },
        { name: "アイノ", country: "ナドクライ", weapon: "両手剣", element: "水", birth_month: "９月", version: "n.0", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドサポーター"], energy: 50, talent_boss: "ボコボコダック", local_specialty: "携行型ベアリング", ascension_stat: "元素熟知", distributed: true, talent_book: "楽園", talent_weekly: "絹織りの羽", special_dish: "復活系", trace: false, costume: false },
        { name: "ラウマ", country: "ナドクライ", weapon: "法器", element: "草", birth_month: "３月", version: "n.0", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "集光の幻月蝶", local_specialty: "月落銀", ascension_stat: "元素熟知", distributed: false, talent_book: "月光", talent_weekly: "蝕滅の羽鱗", special_dish: "継続回復系", trace: false, costume: false },
        { name: "ネフェル", country: "ナドクライ", weapon: "法器", element: "草", birth_month: "５月", version: "n.1", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "霜夜の空を巡る霊主", local_specialty: "月落銀", ascension_stat: "会心ダメージ", distributed: false, talent_book: "楽園", talent_weekly: "昇揚のサンプル「ルーク」", special_dish: "復活系", trace: false, costume: false },
        { name: "ヤフォダ", country: "ナドクライ", weapon: "弓", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドヒーラー"], energy: 70, talent_boss: "集光の幻月蝶", local_specialty: "携行型ベアリング", ascension_stat: "与える治療効果", distributed: false, talent_book: "流浪", talent_weekly: "昇揚のサンプル「ナイト」", special_dish: "回復系", trace: false, costume: false },
        { name: "コロンビーナ", country: "ナドクライ", weapon: "法器", element: "水", birth_month: "１月", version: "n.4", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "霜夜の空を巡る霊主", local_specialty: "ヴィンテル草", ascension_stat: "会心率", distributed: false, talent_book: "月光", talent_weekly: "賢医の仮面", special_dish: "HP強化系", trace: false, costume: false },
        { name: "イルーガ", country: "ナドクライ", weapon: "長柄武器", element: "岩", birth_month: "１２月", version: "n.4", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "重量級陸巡艦「バトルシップ」", local_specialty: "琥珀香", ascension_stat: "元素熟知", distributed: false, talent_book: "楽園", talent_weekly: "蝕滅の焔角", special_dish: "回復系", trace: false, costume: false },
        { name: "旅人", country: "例外", weapon: "片手剣", element: "その他", birth_month: "その他", version: "n.0", rarity: ['☆５'], body: ["中身男性", "中身女性"], role: ["オンフィールドアタッカー", "オフフィールドアタッカー"], energy: 60, talent_boss: "", local_specialty: "風車アスター", ascension_stat: "攻撃力", displayNames: ["空", "蛍", "風旅人", "水旅人", "草旅人", "炎旅人", "雷旅人"], distributed: true, talent_book: "自由/繁栄/浮世/忠言/公平/焚燼/抗争/勤労/風雅/創意/正義/詩文/黄金/天光/篤行/紛争", talent_weekly: "東風の吐息/北風のしっぽ/凶将の手眼/天地に映える蕨/龍王の冠", special_dish: "", trace: false, costume: true },
        { name: "スカーク", country: "例外", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.7", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 0, talent_boss: "輝ける溶岩の龍像", local_specialty: "岩裂の花", ascension_stat: "会心ダメージ", distributed: false, talent_book: "角逐", talent_weekly: "昇揚のサンプル「ナイト」", special_dish: "回復系", trace: false, costume: false },
        { name: "ドール", country: "例外", weapon: "片手剣", element: "その他", birth_month: "その他", version: "n.2", rarity: ['☆５'], body: ["中身男性", "中身女性"], role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "", local_specialty: "", ascension_stat: "攻撃力", distributed: false, talent_book: "", talent_weekly: "", special_dish: "", trace: false, costume: false },
        { name: "アーロイ", country: "例外", weapon: "弓", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "無相の氷", local_specialty: "晶化骨髄", ascension_stat: "氷元素ダメージ", distributed: true, talent_book: "自由", talent_weekly: "溶滅の刻", special_dish: "回復系", trace: false, costume: false }
    ];

    const allWeapons = {
        "長柄武器": [
            { name: "聖祭者の輝杖", rarity: 4, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "血染めの荒れ地", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "金堀りのシャベル", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "香りのシンフォニスト", rarity: 4, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "砕け散る光輪", rarity: 5, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "玉響停の御噺", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "鎮山の釘", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "虹の行方", rarity: 4, type: "長柄武器", ascension_stat: "防御力", is_distributed: false },
            { name: "ルミドゥースの挽歌", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "赤月のシルエット", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "砂中の賢者達の問答", rarity: 4, type: "長柄武器", ascension_stat: "HP", is_distributed: true },
            { name: "プロスペクタードリル", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "フィヨルドの歌", rarity: 4, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "正義の報酬", rarity: 4, type: "長柄武器", ascension_stat: "HP", is_distributed: false },
            { name: "赤砂の杖", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "風信の矛", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: true },
            { name: "ムーンピアサー", rarity: 4, type: "長柄武器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "ドラゴンスピア", rarity: 4, type: "長柄武器", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "黒纓槍", rarity: 3, type: "長柄武器", ascension_stat: "HP", is_distributed: false },
            { name: "黒岩の突槍", rarity: 4, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "鉄尖槍", rarity: 2, type: "長柄武器", ascension_stat: "", is_distributed: false },
            { name: "鉾槍", rarity: 3, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "破天の槍", rarity: 5, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "星鎌・試作", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "西風長槍", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "草薙の稲光", rarity: 5, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "白纓槍", rarity: 3, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "流月の針", rarity: 4, type: "長柄武器", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "新米の長槍", rarity: 1, type: "長柄武器", ascension_stat: "", is_distributed: false },
            { name: "斬波のひれ長", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "護摩の杖", rarity: 5, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "息災", rarity: 5, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "旧貴族猟槍", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "天空の脊", rarity: 5, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "喜多院十文字槍", rarity: 4, type: "長柄武器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "和璞鳶", rarity: 5, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
            { name: "千岩長槍", rarity: 4, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "「漁獲」", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "匣中滅龍", rarity: 4, type: "長柄武器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "死闘の槍", rarity: 4, type: "長柄武器", ascension_stat: "会心率", is_distributed: false }
        ],
        "法器": [
            { name: "帳の夜曲", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "真言の匣", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "霜辰", rarity: 4, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "夜を紡ぐ天鏡", rarity: 5, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "天光のリュート", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "烏髄の孤灯", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "ヴィヴィッド・ハート", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "寝正月の初晴", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "祭星者の眺め", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "波乗りの旋回", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "ヤシュチェの環", rarity: 4, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "蒼紋の角杯", rarity: 4, type: "法器", ascension_stat: "HP", is_distributed: true },
            { name: "サーフィンタイム", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "鶴鳴の余韻", rarity: 5, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "凛流の監視者", rarity: 5, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "久遠流転の大典", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "果てなき紺碧の唄", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "古祠の瓏", rarity: 4, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "純水流華", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "碧落の瓏", rarity: 5, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "トゥライトゥーラの記憶", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "千夜に浮かぶ夢", rarity: 5, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "彷徨える星", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "満悦の実", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "黒岩の緋玉", rarity: 4, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "魔導緒論", rarity: 3, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "金珀・試作", rarity: 4, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "誓いの明瞳", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: true },
            { name: "龍殺しの英傑譚", rarity: 3, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "西風秘典", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "翡玉法珠", rarity: 3, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "祭礼の断片", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false },
            { name: "神楽の真意", rarity: 5, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "白辰の輪", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "特級の宝玉", rarity: 2, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "流浪楽章", rarity: 4, type: "法器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "ダークアレイの酒と詩", rarity: 4, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "昭心", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "冬忍びの実", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "異世界旅行記", rarity: 2, type: "法器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "浮世の錠", rarity: 5, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "旧貴族秘法録", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "生徒ノート", rarity: 1, type: "法器", ascension_stat: "", is_distributed: false },
            { name: "天空の巻", rarity: 5, type: "法器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "四風原典", rarity: 5, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "ドドコの物語", rarity: 4, type: "法器", ascension_stat: "攻撃力", is_distributed: true },
            { name: "ポケット魔導書", rarity: 2, type: "法器", ascension_stat: "", is_distributed: false },
            { name: "匣中日月", rarity: 4, type: "法器", ascension_stat: "会心率", is_distributed: false },
            { name: "不滅の月華", rarity: 5, type: "法器", ascension_stat: "HP", is_distributed: false },
            { name: "万国諸海の図譜", rarity: 4, type: "法器", ascension_stat: "元素熟知", is_distributed: false }
        ],
        "弓": [
            { name: "暁を告げる歴史", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "虹蛇の雨弦", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "羅網の針", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "冷寂の音", rarity: 4, type: "弓", ascension_stat: "HP", is_distributed: true },
            { name: "星鷲の紅き羽", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "花飾りの羽", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "チェーンブレイカー", rarity: 4, type: "弓", ascension_stat: "", is_distributed: false },
            { name: "築雲", rarity: 4, type: "弓", ascension_stat: "元素熟知", is_distributed: true },
            { name: "白雨心弦", rarity: 5, type: "弓", ascension_stat: "HP", is_distributed: false },
            { name: "レンジゲージ", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "烈日の後嗣", rarity: 4, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "静寂の唄", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "始まりの大魔術", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "トキの嘴", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: true },
            { name: "王の近侍", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "竭沢", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "狩人の道", rarity: 5, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "落霞", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "若水", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "黒岩の戦弓", rarity: 4, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "鴉羽の弓", rarity: 3, type: "弓", ascension_stat: "元素熟知", is_distributed: false },
            { name: "飛来の鳴弦", rarity: 5, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "風花の頌歌", rarity: 4, type: "弓", ascension_stat: "元素熟知", is_distributed: true },
            { name: "アモスの弓", rarity: 5, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "リングボウ", rarity: 4, type: "弓", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "澹月・試作", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "西風猟弓", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "青翠の狩猟弓", rarity: 4, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "絶弦", rarity: 4, type: "弓", ascension_stat: "元素熟知", is_distributed: false },
            { name: "終焉を嘆く詩", rarity: 5, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "祭礼の弓", rarity: 4, type: "弓", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "シャープシューターの誓い", rarity: 3, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "破魔の弓", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "狩猟弓", rarity: 2, type: "弓", ascension_stat: "", is_distributed: false },
            { name: "曚雲の月", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "ダークアレイの狩人", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "プレデター", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "弾弓", rarity: 3, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "弓蔵", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "幽夜のワルツ", rarity: 4, type: "弓", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "旧貴族長弓", rarity: 4, type: "弓", ascension_stat: "攻撃力", is_distributed: false },
            { name: "天空の翼", rarity: 5, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "リカーブボウ", rarity: 3, type: "弓", ascension_stat: "HP", is_distributed: false },
            { name: "歴戦の狩猟弓", rarity: 2, type: "弓", ascension_stat: "", is_distributed: false },
            { name: "冬極の白星", rarity: 5, type: "弓", ascension_stat: "会心率", is_distributed: false },
            { name: "文使い", rarity: 3, type: "弓", ascension_stat: "会心ダメージ", is_distributed: false }
        ],
        "両手剣": [
            { name: "狼の武勲詩", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "万能の鍵", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "千烈の日輪", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "実りの鉤鉈", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "アースシェイカー", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "山の王の長牙", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "「スーパーアルティメット覇王魔剣」", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "裁断", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "携帯型チェンソー", rarity: 4, type: "両手剣", ascension_stat: "HP", is_distributed: false },
            { name: "話死合い棒", rarity: 4, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "タイダル・シャドー", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "葦海の標", rarity: 5, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "鉄彩の花", rarity: 4, type: "両手剣", ascension_stat: "元素熟知", is_distributed: true },
            { name: "マカイラの水色", rarity: 4, type: "両手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "森林のレガリア", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "黒岩の斬刀", rarity: 4, type: "両手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "飛天大御剣", rarity: 3, type: "両手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "雪葬の星銀", rarity: 4, type: "両手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "雨裁", rarity: 4, type: "両手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "鉄影段平", rarity: 3, type: "両手剣", ascension_stat: "HP", is_distributed: false },
            { name: "鐘の剣", rarity: 4, type: "両手剣", ascension_stat: "HP", is_distributed: false },
            { name: "赤角石塵滅砕", rarity: 5, type: "両手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "古華・試作", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "訓練用大剣", rarity: 1, type: "両手剣", ascension_stat: "", is_distributed: false },
            { name: "西風大剣", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "銜玉の海皇", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: true },
            { name: "螭龍の剣", rarity: 4, type: "両手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "祭礼の大剣", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "白鉄の大剣", rarity: 3, type: "両手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "白影の剣", rarity: 4, type: "両手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "狼の末路", rarity: 5, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "龍血を浴びた剣", rarity: 3, type: "両手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "桂木斬長正", rarity: 4, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "松韻の響く頃", rarity: 5, type: "両手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "無工の剣", rarity: 5, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "惡王丸", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "旧貴族大剣", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "天空の傲", rarity: 5, type: "両手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "千岩古剣", rarity: 4, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "知恵の溶炎", rarity: 4, type: "両手剣", ascension_stat: "元素熟知", is_distributed: true },
            { name: "傭兵の重剣", rarity: 2, type: "両手剣", ascension_stat: "", is_distributed: false },
            { name: "理屈責め", rarity: 3, type: "両手剣", ascension_stat: "攻撃力", is_distributed: false }
        ],
        "片手剣": [
            { name: "三日月の含光", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "黒蝕", rarity: 5, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "月紡ぎの曙光", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "静謐の笛", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "厄水の災い", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: true },
            { name: "岩峰を巡る歌", rarity: 5, type: "片手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "ストロングボーン", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "エズピツァルの笛", rarity: 4, type: "片手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "赦罪", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "有楽御簾切", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "水仙十字の剣", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "静水流転の輝き", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "船渠剣", rarity: 4, type: "片手剣", ascension_stat: "HP", is_distributed: false },
            { name: "狼牙", rarity: 4, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "サーンドルの渡し守", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "海淵のフィナーレ", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "翠光の裁葉", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "東花坊時雨", rarity: 4, type: "片手剣", ascension_stat: "元素熟知", is_distributed: true },
            { name: "サイフォスの月明かり", rarity: 4, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "聖顕の鍵", rarity: 5, type: "片手剣", ascension_stat: "HP", is_distributed: false },
            { name: "原木刀", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "籠鶴瓶一心", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "黒岩の長剣", rarity: 4, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "黒剣", rarity: 4, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "黎明の神剣", rarity: 3, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "飛天御剣", rarity: 3, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "風鷹剣", rarity: 5, type: "片手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "霧切の廻光", rarity: 5, type: "片手剣", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "降臨の剣", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "銀の剣", rarity: 2, type: "片手剣", ascension_stat: "", is_distributed: false },
            { name: "鉄蜂の刺し", rarity: 4, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "シナバースピンドル", rarity: 4, type: "片手剣", ascension_stat: "防御力", is_distributed: true },
            { name: "斬岩・試作", rarity: 4, type: "片手剣", ascension_stat: "物理ダメージ", is_distributed: false },
            { name: "西風剣", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "蒼古なる自由への誓い", rarity: 5, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "腐食の剣", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: true },
            { name: "笛の剣", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "祭礼の剣", rarity: 4, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "盤岩結緑", rarity: 5, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "波乱月白経津", rarity: 5, type: "片手剣", ascension_stat: "会心率", is_distributed: false },
            { name: "暗鉄剣", rarity: 3, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "ダークアレイの閃光", rarity: 4, type: "片手剣", ascension_stat: "元素熟知", is_distributed: false },
            { name: "無鋒の剣", rarity: 1, type: "片手剣", ascension_stat: "", is_distributed: false },
            { name: "旅道の剣", rarity: 3, type: "片手剣", ascension_stat: "防御力", is_distributed: false },
            { name: "斬山の刃", rarity: 5, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "旧貴族長剣", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "天空の刃", rarity: 5, type: "片手剣", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "天目影打", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "チ虎魚の刀", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "匣中龍吟", rarity: 4, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "冷刃", rarity: 3, type: "片手剣", ascension_stat: "攻撃力", is_distributed: false },
            { name: "蒼耀", rarity: 5, type: "片手剣", ascension_stat: "会心率", is_distributed: false }
        ]
    };

    const bosses = [
        "アビサルヴィシャップ",
        "アペプ",
        "アンドリアス",
        "エンシェントヴィシャップ・岩",
        "キング＆クイーン",
        "グーシートース",
        "ボコボコダック",
        "マッシュラプトル",
        "兆載永劫ドレイク",
        "公子",
        "千年真珠の海駿",
        "半永久統制マトリックス",
        "召使",
        "吞星の鯨",
        "実験用フィールド生成装置",
        "山の王・貪食のユムカ竜",
        "山隠れの猊獣",
        "急凍樹",
        "恒常からくり陣形",
        "暴君・金焔のクク竜",
        "正機の神",
        "水形タルパ",
        "氷風組曲・コッペリア",
        "氷風組曲・コペリウス",
        "淑女",
        "深淵なるミミックパピラ",
        "深罪の浸礼者",
        "無相の岩",
        "無相の水",
        "無相の氷",
        "無相の炎",
        "無相の草",
        "無相の雷",
        "無相の風",
        "爆炎樹",
        "禍津御建鳴神命",
        "秘源機兵・機構デバイス",
        "秘源機兵・統御デバイス",
        "純水精霊",
        "若陀龍王",
        "輝ける溶岩の龍像",
        "迅電樹",
        "迷える霊覚の修権者",
        "遺跡サーペント",
        "鉄甲熔炎帝王",
        "集光の幻月蝶",
        "雷音権現",
        "風食ウェネト",
        "魔偶剣鬼",
        "魔像レガトゥス",
        "黄金王獣"
    ];
    const weeklyBosses = ["グーシートース", "キング＆クイーン", "召使", "吞星の鯨", "アペプ", "正機の神", "若陀龍王", "禍津御建鳴神命", "アンドリアス", "淑女", "公子"];
    const elementColors = { "水": "#00c0fe", "炎": "#fe6640", "雷": "#cc85ff", "氷": "#74E4E2", "風": "#36d6a0", "岩": "#F3AC11", "草": "#8dcc06", "その他": "#808080" };
    const ownership100Characters = ["香菱", "旅人", "ガイア", "バーバラ", "コレイ", "ノエル", "リサ", "アンバー"];
    const initialCharacters = ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"];
    const alphabetData = {"A": ["アイノ", "荒瀧一斗", "アルベド", "アルレッキーノ", "アルハイゼン", "アンバー", "アーロイ"], "B": ["バーバラ", "白朮", "ベネット", "北斗"], "C": ["キャンディス", "コロンビーナ", "クロリンデ", "コレイ", "シャルロット", "シュヴルーズ", "シトラリ", "セノ", "千織", "チャスカ", "重雲"], "D": ["ドール", "ドゥリン", "ドリー", "ディシア", "ディルック", "ディオナ", "ダリア"], "E": ["エミリエ", "エウルア", "エスコフィエ"], "F": ["フリンズ", "ファルザン", "フリーナ", "フレミネ", "フィッシュル"], "G": ["嘉明", "甘雨", "ゴロー"], "H": ["胡桃"], "I": ["イルーガ", "イアンサ", "イファ", "イネファ"], "J": ["ヤフォダ", "ジン"], "K": ["神里綾華", "神里綾人", "キィニチ", "綺良々", "久岐忍", "九条裟羅", "クレー", "刻晴", "カチーナ", "カーヴェ"], "L": ["ラウマ", "リサ", "リネ", "リネット", "レイラ", "藍硯"], "M": ["ミカ", "ムアラニ", "モナ", "マーヴィカ"], "N": ["ネフェル","ナヴィア", "ナヒーダ", "ニィロウ", "ヌヴィレット", "ノエル"], "O": ["オロルン"], "Q": ["七七"], "R": ["雷電将軍", "レザー", "ロサリア", "リオセスリ"], "S": ["早柚", "珊瑚宮心海", "鹿野院平蔵", "シグウィン", "申鶴", "スクロース", "セトス", "スカーク"], "T": ["旅人", "ティナリ", "タルタリヤ", "トーマ"], "V": ["ウェンティ", "ヴァレサ","ファルカ"], "W": ["放浪者"], "X": ["行秋", "魈", "香菱", "辛炎", "シロネン", "閑雲"], "Y": ["煙緋", "夜蘭", "雲菫", "八重神子", "宵宮", "ヨォーヨ", "夢見月瑞希"], "Z": ["鍾離"]};

    const binds = ["☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "国縛り", "初期キャラのみ", "UI非表示+リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止", "爆発禁止+リロール", "旅人縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆１、聖遺物なし", "武器縛り", "体型縛り", "役割縛り", "スキル禁止", "元素エネルギー縛り", "完凸禁止", "配布武器縛り", "配布キャラ縛り", "ボス素材縛り", "特産品縛り", "クラウン禁止", "突破ステータス縛り(キャラ)", "突破ステータス縛り(武器)", "聖遺物セット禁止", "天賦素材縛り", "別衣装縛り", "オリジナル料理種別縛り", "軌跡ついてるキャラ縛り", "週ボス素材縛り"];
    
    const jpSort = (list) => [...list].sort((a, b) => String(a).localeCompare(String(b), 'ja'));

    const subRoulettes = {
        "国縛り": jpSort([...new Set(characters.map(c => c.country))]),
        "モノ元素縛り": jpSort([...new Set(characters.filter(c => c.element !== "その他").map(c => c.element))]),
        "武器種縛り": jpSort(Object.keys(allWeapons)),
        "誕生月": ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"],
        "各1.1縛り": jpSort([...new Set(characters.map(c => c.version))].filter(v => v !== 'その他')),
        "アルファベット縛り": Object.keys(alphabetData).sort(),
        "武器縛り": jpSort(Object.values(allWeapons).flat().map(w => w.name)),
        "体型縛り": ["長身男性", "長身女性", "中身男性", "中身女性", "ロリ"],
        "役割縛り": ["オンフィールドアタッカー", "オンフィールドサポーター", "オンフィールドライフキーパー", "オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"],
        "元素エネルギー縛り": [0, 40, 50, 60, 70, 80, 90],
        "ボス素材縛り": jpSort([...new Set(characters.map(c => c.talent_boss).filter(b => b))]),
        "特産品縛り": jpSort([...new Set(characters.map(c => c.local_specialty).filter(l => l))]),
        "突破ステータス縛り(キャラ)": jpSort([...new Set(characters.map(c => c.ascension_stat).filter(s => s))]),
        "突破ステータス縛り(武器)": jpSort([...new Set(Object.values(allWeapons).flat().map(w => w.ascension_stat).filter(s => s))]),
        "配布武器縛り": jpSort(Object.values(allWeapons).flat().filter(w => w.is_distributed).map(w => w.name)),
        "配布キャラ縛り": jpSort([...characters.filter(c => c.distributed).map(c => c.name), "周年配布☆５で選んだキャラ", "海灯祭で選んだキャラ"]),
        "天賦素材縛り": jpSort([...new Set(characters.map(c => c.talent_book).filter(b => b && !b.includes('/')))]),
        "オリジナル料理種別縛り": jpSort([...new Set(characters.map(c => c.special_dish).filter(d => d))]),
        "週ボス素材縛り": jpSort([...new Set(characters.map(c => c.talent_weekly).filter(w => w && !w.includes('/')))])
    };

    const playerBindTypes = ["キャラルーレット", "キャラ武器ルーレット", "武器縛り", "アルファベット縛り", "誕生月", "武器種縛り", "体型縛り", "役割縛り", "元素エネルギー縛り", "ボス素材縛り", "特産品縛り", "突破ステータス縛り(キャラ)", "突破ステータス縛り(武器)", "配布キャラ縛り", "配布武器縛り", "天賦素材縛り", "別衣装縛り", "オリジナル料理種別縛り", "軌跡ついてるキャラ縛り", "週ボス素材縛り"];
    const bindOrder = ["国縛り", "モノ元素縛り", "恒常☆５縛り", "☆４キャラ武器", "初期キャラのみ", "所持率100％縛り", "旅人縛り", "配布キャラ縛り", "各1.1縛り", "体型縛り", "役割縛り", "元素エネルギー縛り", "ボス素材縛り", "特産品縛り", "突破ステータス縛り(キャラ)", "武器種縛り", "突破ステータス縛り(武器)", "配布武器縛り", "武器縛り", "誕生月", "アルファベット縛り", "天賦素材縛り", "別衣装縛り", "オリジナル料理種別縛り", "軌跡ついてるキャラ縛り", "週ボス素材縛り", "キャラルーレット", "キャラ武器ルーレット"];

    let playerCount, bindCount, mode, currentRoulette, currentBindName, currentBindIndex, items, angle = 0, spinning = false, results = {}, currentPlayer = 1, lastResult;
    let rerolledChars, rerolledWeapons, rerolledCommonWeapons, playerNames = [], bindSelectionPhase, bindsToResolve, excludedSubItems = {};
    let prerenderedRoulette = null, spinSpeed = 0, visualItems = [];
    let isWeeklyBossMode = false;

    const canvas = document.getElementById('rouletteCanvas');
    const ctx = canvas.getContext('2d');
    const defaultColors = ['#00c0fe', '#36d6a0', '#fe6640', '#8dcc06', '#74E4E2', '#cc85ff', '#F3AC11'];

    let playerPossession = JSON.parse(localStorage.getItem('genshin_roulette_possession') || '{}');
    let editingPlayer = "";



    function showScreen(screenId) {
        ['startScreen', 'bindSelection', 'rouletteScreen', 'resultScreen', 'customBindScreen'].forEach(id => {
            const el = document.getElementById(id);
            if(el) el.classList.add('hidden');
        });
        const target = document.getElementById(screenId);
        if(target) target.classList.remove('hidden');
    }
    
    function initialize() {
        playerCount = parseInt(document.getElementById('playerCount').value) || 1;
        bindCount = parseInt(document.getElementById('bindCount').value) || 1;
        playerNames = Array.from(document.querySelectorAll('.playerNameInput')).map((inp, i) => inp.value || `プレイヤー${i+1}`);
        results = { boss: null, common: {}, players: Array(playerCount).fill(0).map(() => ({})) };
        currentPlayer = 1; currentBindIndex = 0; lastResult = null;
        rerolledChars = Array(playerCount + 1).fill(0).map(() => []);
        rerolledWeapons = Array(playerCount + 1).fill(0).map(() => ({}));
        rerolledCommonWeapons = []; excludedSubItems = {};
        bindSelectionPhase = false; bindsToResolve = [];
    }

    function updateDisplayInfo() {
        const d = document.getElementById('currentPlayerNameDisplay');
        if (bindSelectionPhase) d.textContent = '縛りカテゴリーを抽選中...';
        else if (currentRoulette === 'boss') d.textContent = 'ボスを抽選中...';
        else if (playerBindTypes.includes(currentBindName)) d.textContent = `${playerNames[currentPlayer-1]} の ${currentBindName} 抽選`;
        else d.textContent = `全員共通: ${currentBindName} 抽選`;
    }

    function checkCharEligibility(char, filters, playerIdx) {
        const pName = playerNames[playerIdx - 1];
        const pData = playerPossession[pName];
        if (pData && pData.chars[char.name] && pData.chars[char.name].owned === false) return false;
        if (filters["完凸禁止"] && pData && pData.chars[char.name] && pData.chars[char.name].c6 === true) return false;
        if (filters["無凸縛り"] && pData && pData.chars[char.name] && pData.chars[char.name].c0 !== true) return false;
        for (const bindName in filters) {
            const value = filters[bindName];
            if (value === undefined || value === null || value === "") continue;
            let match = false;
            switch(bindName) {
                case "国縛り": match = (char.country === value); break;
                case "モノ元素縛り": match = (char.element === value); break;
                case "武器種縛り": match = (char.weapon === value); break;
                case "誕生月": match = (char.birth_month === value); break;
                case "各1.1縛り": match = (char.version === value); break;
                case "体型縛り": match = Array.isArray(char.body) ? char.body.includes(value) : (char.body === value); break;
                case "役割縛り": match = Array.isArray(char.role) ? char.role.includes(value) : (char.role === value); break;
                case "元素エネルギー縛り": match = Array.isArray(char.energy) ? char.energy.includes(value) : (char.energy === value); break;
                case "ボス素材縛り": match = (char.talent_boss === value); break;
                case "特産品縛り": match = (char.local_specialty === value); break;
                case "突破ステータス縛り(キャラ)": match = (char.ascension_stat === value); break;
                case "配布キャラ縛り": match = (typeof value === 'string' && value !== "true") ? (char.name === value) : char.distributed; break;
                case "天賦素材縛り": match = (char.talent_book === value); break;
                case "別衣装縛り": match = (char.costume === true); break;
                case "オリジナル料理種別縛り": match = (char.special_dish === value); break;
                case "軌跡ついてるキャラ縛り": match = (char.trace === true); break;
                case "週ボス素材縛り": match = (char.talent_weekly === value); break;
                case "回復禁止": match = !char.role.some(r => r.includes("ライフキーパー")); break;
                case "所持率100％縛り": match = ownership100Characters.includes(char.name); break;
                case "アルファベット縛り": match = (char.name === "旅人") ? (value === "T") : (alphabetData[value] && alphabetData[value].includes(char.name)); break;
                case "恒常☆５縛り": match = char.rarity.includes('恒常☆５'); break;
                case "☆４キャラ武器": match = char.rarity.includes('☆４'); break;
                case "初期キャラのみ": match = initialCharacters.includes(char.name); break;
                case "武器縛り": case "配布武器縛り": case "突破ステータス縛り(武器)": case "☆１、聖遺物なし":
                    const pool = allWeapons[char.weapon] || [];
                    match = pool.some(w => {
                        if (pData && pData.weapons[w.name] === false) return false;
                        if (bindName === "武器縛り" && w.name !== value) return false;
                        if (bindName === "配布武器縛り" && typeof value === 'string' && value !== "true" && w.name !== value) return false;
                        if (bindName === "配布武器縛り" && (typeof value !== 'string' || value === "true") && !w.is_distributed) return false;
                        if (bindName === "突破ステータス縛り(武器)" && w.ascension_stat !== value) return false;
                        if (bindName === "☆１、聖遺物なし" && w.rarity !== 1) return false;
                        return true;
                    });
                    break;
                default: match = true; break;
            }
            if (!match) return false;
        }
        // Weekly boss mode check - prevent duplicate characters
        if (isWeeklyBossMode) {
            for (let i = 0; i < playerIdx - 1; i++) {
                const pRes = results.players[i];
                const pChar = pRes['キャラルーレット'] || (pRes['キャラ武器ルーレット'] ? pRes['キャラ武器ルーレット'].char : null);
                if (pChar === char.name) return false;
            }
        }
        return true;
    }

    function getFilteredCharacters(customFilters = null, player = currentPlayer) {
        const filters = customFilters || {...results.common, ...results.players[player - 1]};
        return characters.filter(c => !rerolledChars[player].includes(c.name) && checkCharEligibility(c, filters, player));
    }

    function getFilteredWeapons(type, charName) {
        let pool = allWeapons[type] || [];
        const f = {...results.common, ...results.players[currentPlayer - 1]};
        const rw = rerolledWeapons[currentPlayer][charName] || [];
        const pData = playerPossession[playerNames[currentPlayer - 1]];
        return pool.filter(w => {
            if (pData && pData.weapons[w.name] === false) return false;
            if (rw.includes(w.name)) return false;
            if (f["☆４キャラ武器"] && w.rarity >= 5) return false;
            if (f["配布武器縛り"]) {
                const val = f["配布武器縛り"];
                if (typeof val === 'string' && val !== "true") { if(w.name !== val) return false; }
                else if (!w.is_distributed) return false;
            }
            if (f["突破ステータス縛り(武器)"] && w.ascension_stat !== f["突破ステータス縛り(武器)"]) return false;
            if (f["武器縛り"] && w.name !== f["武器縛り"]) return false;
            if (f["☆１、聖遺物なし"] && w.rarity !== 1) return false;
            return true;
        }).map(w => w.name);
    }

    function prerenderRouletteImage() {
        if (!items || items.length === 0) return;
        visualItems = [...items].sort(() => Math.random() - 0.5);
        if (visualItems.length > 0 && visualItems.length <= 10) {
            const factor = Math.ceil(15 / visualItems.length);
            visualItems = Array(factor).fill(visualItems).flat();
        }
        prerenderedRoulette = document.createElement('canvas');
        prerenderedRoulette.width = 500; prerenderedRoulette.height = 500;
        const pctx = prerenderedRoulette.getContext('2d');
        const arc = 2 * Math.PI / visualItems.length;
        visualItems.forEach((item, i) => {
            const start = i * arc;
            pctx.beginPath(); pctx.arc(250, 250, 230, start, start + arc); pctx.lineTo(250, 250);
            let color = defaultColors[i % defaultColors.length];
            const isCharBased = (currentRoulette === 'character' || (currentRoulette === 'sub' && (currentBindName === '配布キャラ縛り' || currentBindName === 'キャラルーレット')));
            if (isCharBased) {
                const char = characters.find(c => c.name === item);
                if (char) color = (char.name === "旅人" || char.name === "ドール") ? "#808080" : (elementColors[char.element] || "#808080");
            } else if (currentBindName === "モノ元素縛り") {
                color = elementColors[item] || color;
            }
            pctx.fillStyle = color; pctx.fill();
            pctx.strokeStyle = "#000"; pctx.lineWidth = 2; pctx.stroke();
            pctx.save(); pctx.translate(250, 250); pctx.rotate(start + arc/2);
            pctx.fillStyle = "#fff"; pctx.font = 'bold 14px Arial'; pctx.textAlign = 'right'; pctx.fillText(item, 220, 0); pctx.restore();
        });
    }

    function drawRoulette() {
        ctx.clearRect(0, 0, 500, 500);
        if (!prerenderedRoulette) return;
        ctx.save(); ctx.translate(250, 250); ctx.rotate(angle);
        ctx.drawImage(prerenderedRoulette, -250, -250); ctx.restore();
        ctx.beginPath(); ctx.moveTo(480, 235); ctx.lineTo(480, 265); ctx.lineTo(450, 250);
        ctx.fillStyle = '#FF0000'; ctx.fill();
    }

    function setupRouletteForBind(bindName, player = 1) {
        currentBindName = bindName; currentPlayer = player;
        const currentFilters = {...results.common, ...results.players[currentPlayer - 1]};
        if (subRoulettes[bindName]) {
            currentRoulette = 'sub';
            let subItems = subRoulettes[bindName];
            const exKey = bindName + "_" + player;
            const exList = excludedSubItems[exKey] || [];
            subItems = subItems.filter(si => !exList.includes(si));
            if (bindName === "武器縛り") {
                const wt = currentFilters["武器種縛り"];
                if(wt) subItems = subItems.filter(wName => Object.values(allWeapons[wt]).some(d => d.name === wName));
                if(currentFilters["☆４キャラ武器"]) subItems = subItems.filter(wName => {
                    const wd = Object.values(allWeapons).flat().find(d => d.name === wName);
                    return wd && wd.rarity < 5;
                });
            } else {
                 subItems = subItems.filter(opt => characters.some(char => checkCharEligibility(char, {...currentFilters, [bindName]: opt}, player)));
            }
            items = subItems;
        } else if (bindName === 'キャラルーレット' || bindName === 'キャラ武器ルーレット') {
            currentRoulette = 'character';
            if (bindName === 'キャラ武器ルーレット' && results.players[player - 1]['キャラ武器ルーレット'] && results.players[player-1]['キャラ武器ルーレット'].char) {
                const charData = characters.find(c => c.name === results.players[player - 1]['キャラ武器ルーレット'].char);
                currentRoulette = 'weapon'; items = getFilteredWeapons(charData.weapon, charData.name);
            } else {
                 items = getFilteredCharacters(null, player).map(c => c.name);
            }
        } else {
            results.common[bindName] = true; proceedToNext(); return;
        }
        updateDisplayInfo(); 
        if (items.length === 1 && currentRoulette !== 'boss' && currentRoulette !== 'bind') {
            lastResult = items[0]; processResult();
            showPopup(`${bindName}: ${lastResult} に確定`);
        } else if (items.length === 0) { proceedToNext(); }
        else { prerenderedRoulette = null; prerenderRouletteImage(); document.getElementById('spinButton').disabled = false; showScreen('rouletteScreen'); drawRoulette(); }
    }

    function spinRoulette() {
        if (spinning || !items || items.length === 0) return;
        spinning = true; spinSpeed = 0.2 + Math.random() * 0.1;
        document.getElementById('spinButton').disabled = true; document.getElementById('stopButton').disabled = false;
        (function anim() { if (spinning) { angle += spinSpeed; drawRoulette(); requestAnimationFrame(anim); } })();
    }

    function stopRoulette() {
        const si = setInterval(() => {
            spinSpeed *= 0.96; angle += spinSpeed;
            if (Math.abs(spinSpeed) < 0.001) {
                spinning = false; clearInterval(si);
                let idx = Math.floor(((2 * Math.PI - (angle % (2 * Math.PI))) % (2 * Math.PI)) / (2 * Math.PI / visualItems.length));
                lastResult = visualItems[idx]; showPopup(lastResult);
            } else drawRoulette();
        }, 20);
        document.getElementById('stopButton').disabled = true;
    }

    function showPopup(text) {
        const p = document.getElementById('popup');
        if (!p) {
            console.error('popup要素が見つかりません');
            return;
        }
        
        let content = `<span class="popup-close" onclick="this.parentElement.click()">×</span>`;
        content += `<div class="popup-text">${text}</div>`;
        
        // ボスルーレット時に画像を表示
        if (currentRoulette === 'boss' && text) {
            const imagePath = encodeImagePath('boss', text);
            console.log(`[POPUP] ボス: ${text}, パス: ${imagePath}`);
            if (imagePath) {
                content += `<img src="${imagePath}" alt="${text}" class="popup-image" onerror="console.log('画像読み込みエラー: ${imagePath}'); this.style.display='none'">`;
            }
        }
        
        p.innerHTML = content;
        p.style.display = 'block';
        
        const cb = () => {
            p.style.display = 'none';
            document.getElementById('nextButton').classList.remove('hidden');
            if(currentRoulette === 'character' || currentRoulette === 'weapon')
                document.getElementById('notOwnedButton').classList.remove('hidden');
            p.removeEventListener('click', cb);
        };
        p.addEventListener('click', cb);
    }

    function nextStep() { processResult(); document.getElementById('nextButton').classList.add('hidden'); document.getElementById('notOwnedButton').classList.add('hidden'); }

    function processResult() {
        if (bindSelectionPhase) {
            bindsToResolve.push(lastResult); if (lastResult.includes("リロール")) bindCount++;
            if (bindsToResolve.length < bindCount) { items = getAvailableBinds(); prerenderRouletteImage(); drawRoulette(); document.getElementById('spinButton').disabled = false; }
            else {
                bindSelectionPhase = false;
                let bindNames = bindsToResolve.map(b => typeof b === 'object' ? b.name : b);
                if(bindNames.includes("キャラ武器ルーレット")) bindNames = bindNames.filter(n => n !== "キャラルーレット");
                let full = []; bindNames.forEach(bName => {
                    if (playerBindTypes.includes(bName)) for (let i = 1; i <= playerCount; i++) full.push({ name: bName, player: i });
                    else full.push({ name: bName, player: 0 });
                });
                full.sort((a, b) => (bindOrder.indexOf(a.name) - bindOrder.indexOf(b.name)));
                bindsToResolve = full; currentBindIndex = 0; startNextSelectedBind();
            }
            return;
        }
        if (currentRoulette === 'boss') {
            results.boss = lastResult;
            if (mode === 'boss') showResults();
            else if (mode === 'custom_selected') proceedToNext();
            else { bindSelectionPhase = true; currentRoulette = 'bind'; items = getAvailableBinds(); prerenderRouletteImage(); drawRoulette(); document.getElementById('spinButton').disabled = false; }
            return;
        }
        if (playerBindTypes.includes(currentBindName)) {
            if (currentBindName === 'キャラ武器ルーレット') {
                if (currentRoulette === 'character') {
                    results.players[currentPlayer - 1][currentBindName] = { char: lastResult, weapon: null };
                    currentRoulette = 'weapon'; 
                    items = getFilteredWeapons(characters.find(c => c.name === lastResult).weapon, lastResult);
                    setupRouletteForBind('キャラ武器ルーレット', currentPlayer); return;
                } else results.players[currentPlayer - 1][currentBindName].weapon = lastResult;
            } else results.players[currentPlayer - 1][currentBindName] = lastResult;
        } else results.common[currentBindName] = lastResult;
        proceedToNext();
    }

    function notOwned() {
        document.getElementById('nextButton').classList.add('hidden');
        document.getElementById('notOwnedButton').classList.add('hidden');
        if(currentRoulette === 'character') { rerolledChars[currentPlayer].push(lastResult); items = getFilteredCharacters(null, currentPlayer).map(c => c.name); }
        else if (currentRoulette === 'weapon') {
            const cn = results.players[currentPlayer - 1]['キャラ武器ルーレット'].char;
            if (!rerolledWeapons[currentPlayer][cn]) rerolledWeapons[currentPlayer][cn] = [];
            rerolledWeapons[currentPlayer][cn].push(lastResult);
            items = getFilteredWeapons(characters.find(c => c.name === cn).weapon, cn);
        } else if (currentRoulette === 'sub') {
            const exKey = currentBindName + "_" + currentPlayer;
            if (!excludedSubItems[exKey]) excludedSubItems[exKey] = [];
            excludedSubItems[exKey].push(lastResult);
            setupRouletteForBind(currentBindName, currentPlayer); return;
        }
        if (items.length === 0) { alert("候補がいなくなりました"); proceedToNext(); return; }
        prerenderRouletteImage(); drawRoulette(); document.getElementById('spinButton').disabled = false;
    }

    function showResults() {
        showScreen('resultScreen'); 
        const resDiv = document.getElementById('results');
        
        let html = '';
        
        // ===== ボス画像セクション =====
        html += `<div class="result-section">`;
        html += `<h2>ボス：${results.boss || "未選択"}</h2>`;
        if (results.boss && results.boss !== "未選択") {
            const bossImagePath = encodeImagePath('boss', results.boss);
            console.log(`[RESULTS] ボス: ${results.boss}, パス: ${bossImagePath}`);
            if (bossImagePath) {
                html += `<img src="${bossImagePath}" alt="${results.boss}" class="result-image" onerror="console.log('ボス画像読み込みエラー'); this.style.display='none'">`;
            }
        }
        html += `</div>`;
        
        // ===== 共通の縛り =====
        if (Object.keys(results.common).length > 0) {
            html += `<h3>共通の縛り：</h3><ul>` + 
                    Object.keys(results.common).map(k => 
                        `<li>${k}${results.common[k]===true?'':': '+results.common[k]}</li>`
                    ).join('') + 
                    `</ul>`;
        }
        
        // ===== プレイヤーごとのセクション =====
        for (let i = 0; i < playerCount; i++) {
            const pb = results.players[i];
            html += `<div style="border-top:1px solid #7f8c8d; padding:15px 0;">`;
            html += `<h3>${playerNames[i]}の結果</h3>`;
            html += `<ul>`;
            
            Object.keys(pb).forEach(k => {
                let val = pb[k];
                if (k === 'キャラ武器ルーレット') {
                    val = `${pb[k].char} - ${pb[k].weapon || '未選択'}`;
                }
                html += `<li>${k}: ${val}</li>`;
            });
            html += `</ul>`;
            
            const f = {...results.common, ...pb};
            let chars = (pb['キャラルーレット']||(pb['キャラ武器ルーレット']&&pb['キャラ武器ルーレット'].char)) ? [{name:pb['キャラルーレット']||pb['キャラ武器ルーレット'].char}] : characters.filter(c => checkCharEligibility(c, f, i + 1));
            
            // ===== キャラクター画像 =====
            const selectedChar = pb['キャラルーレット'] || 
                                (pb['キャラ武器ルーレット'] && pb['キャラ武器ルーレット'].char);
            if (selectedChar) {
                const charImagePath = encodeImagePath('character', selectedChar);
                console.log(`[RESULTS] キャラ: ${selectedChar}, パス: ${charImagePath}`);
                html += `<div class="result-section">`;
                html += `<h4>キャラクター：</h4>`;
                html += `<p class="char-list-final">${selectedChar}</p>`;
                if (charImagePath) {
                    html += `<img src="${charImagePath}" alt="${selectedChar}" class="result-image" onerror="console.log('キャラ画像読み込みエラー'); this.style.display='none'">`;
                }
                html += `</div>`;
            }
            
            let wepText = "すべて";
            if (f["武器種縛り"]) wepText = f["武器種縛り"];
            if (f["☆４キャラ武器"]) wepText = "☆４" + (f["武器種縛り"] || "武器");
            if (f["配布武器縛り"]) {
                const charWeaponType = characters.find(cd => cd.name === chars[0]?.name)?.weapon;
                wepText = jpSort(allWeapons[charWeaponType || "片手剣"].filter(w => w.is_distributed).map(w => w.name)).join('、') || "なし";
            }
            if (pb["キャラ武器ルーレット"] && pb["キャラ武器ルーレット"].weapon) wepText = pb["キャラ武器ルーレット"].weapon;
            else if (f["武器縛り"]) wepText = f["武器縛り"];
            
            // ===== 武器画像 =====
            const selectedWeapon = (pb["キャラ武器ルーレット"] && pb["キャラ武器ルーレット"].weapon) || f["武器縛り"];
            if (selectedWeapon && selectedWeapon !== "すべて") {
                const weaponImagePath = encodeImagePath('weapon', selectedWeapon);
                console.log(`[RESULTS] 武器: ${selectedWeapon}, パス: ${weaponImagePath}`);
                html += `<div class="result-section">`;
                html += `<h4>使用可能武器:</h4>`;
                html += `<p class="char-list-final">${wepText}</p>`;
                if (weaponImagePath) {
                    html += `<img src="${weaponImagePath}" alt="${selectedWeapon}" class="result-image" onerror="console.log('武器画像読み込みエラー'); this.style.display='none'">`;
                }
                html += `</div>`;
            } else {
                html += `<h4>使用可能武器:</h4><p class="char-list-final">${wepText}</p>`;
            }
            
            if (!selectedChar) {
                html += `<h4>対象キャラクター:</h4><p class="char-list-final">${chars.map(c=>c.name).join('、')||'条件不一致'}</p>`;
            }
            html += `<button class="reroll-player-button" data-player-index="${i+1}">再抽選</button></div>`;
        }
        
        resDiv.innerHTML = html;
        document.querySelectorAll('.reroll-player-button').forEach(b => b.addEventListener('click', e => rerollPlayer(parseInt(e.target.dataset.playerIndex))));
    }

    function rerollPlayer(idx) {
        let pBinds = [];
        playerBindTypes.forEach(bt => { if (results.players[idx-1][bt] !== undefined) pBinds.push({ name: bt, player: idx }); });
        if (pBinds.length > 0) {
            results.players[idx-1] = {}; rerolledChars[idx] = []; rerolledWeapons[idx] = {}; excludedSubItems = {};
            bindsToResolve = pBinds.sort((a, b) => (bindOrder.indexOf(a.name) - bindOrder.indexOf(b.name)));
            currentBindIndex = 0; mode = 'reroll'; startNextSelectedBind();
        } else showResults();
    }

       function showCustomBindScreen() {
        initialize(); mode = 'custom'; showScreen('customBindScreen');
        const bSel = document.getElementById('customBossSelect');
        bSel.innerHTML = '<option value="random">ランダム</option>' + jpSort(bosses).map(b => `<option value="${b}">${b}</option>`).join('');
        const cg = document.getElementById('customBindGrid'), cb = document.getElementById('customBindButtonsCommon'), pc = document.getElementById('customBindsPlayersContainer');
        cg.innerHTML = ''; cb.innerHTML = ''; pc.innerHTML = '';
        ['国縛り', 'モノ元素縛り'].forEach(n => createBindItem(n, 'select', cg));
        ['恒常☆５縛り', '☆４キャラ武器', '初期キャラのみ', '所持率100％縛り', '旅人縛り', 'スキル禁止', '完凸禁止', 'クラウン禁止', '配布武器縛り', '回復禁止', '聖遺物セット禁止'].forEach(n => createBindItem(n, 'check', cb));
        for (let i = 1; i <= playerCount; i++) {
            const d = document.createElement('div'); d.className = 'custom-bind-player-section'; d.innerHTML = `<h3>${playerNames[i-1]}の縛り</h3>`;
            const g = document.createElement('div'); g.className = 'custom-bind-grid';
            ['各1.1縛り', '体型縛り', '役割縛り', '元素エネルギー縛り', 'ボス素材縛り', '特産品縛り', '突破ステータス縛り(キャラ)', '突破ステータス縛り(武器)', '武器種縛り', '誕生月', 'アルファベット縛り', '天賦素材縛り', 'オリジナル料理種別縛り', '週ボス素材縛り'].forEach(n => createBindItem(n, 'select', g, i));
            const b = document.createElement('div'); b.className = 'button-group-checkbox';
            ['武器縛り', 'キャラルーレット', 'キャラ武器ルーレット', '配布キャラ縛り', '配布武器縛り', '別衣装縛り', '軌跡ついてるキャラ縛り'].forEach(n => createBindItem(n, 'check', b, i));
            d.appendChild(g); d.appendChild(b); pc.appendChild(d);
        }
    }

    function createBindItem(n, t, c, pi = 0) {
        const item = document.createElement('div'); item.className = t === 'check' ? 'checkbox-label' : 'custom-bind-item';
        const l = document.createElement('label'); const cb = document.createElement('input');
        cb.type = 'checkbox'; cb.dataset.bindName = n; if(pi > 0) cb.dataset.player = pi;
        l.appendChild(cb); l.appendChild(document.createTextNode(' '+n)); item.appendChild(l);
        if (t === 'select') {
            const s = document.createElement('select'); s.style.display = 'none';
            s.innerHTML = '<option value="random">ランダム</option>' + subRoulettes[n].map(o => `<option value="${o}">${o}</option>`).join('');
            item.appendChild(s); cb.addEventListener('change', e => s.style.display = e.target.checked ? 'block' : 'none');
        }
        c.appendChild(item);
    }
    
    function executeCustomBinds() {
        initialize(); mode = 'custom_selected'; bindsToResolve = [];
        const bossVal = document.getElementById('customBossSelect').value;
        if(bossVal !== 'random') results.boss = bossVal;
        document.querySelectorAll('#customBindScreen input[type="checkbox"]:checked').forEach(c => {
            const n = c.dataset.bindName, p = c.dataset.player ? parseInt(c.dataset.player) : 0, s = c.closest('div').querySelector('select');
            let t = p ? results.players[p-1] : results.common;
            if (s && s.value !== 'random') t[n] = (n === '元素エネルギー縛り') ? parseInt(s.value) : s.value;
            else bindsToResolve.push({ name: n, player: p });
        });
        bindsToResolve.sort((a, b) => (bindOrder.indexOf(a.name) - bindOrder.indexOf(b.name)));
        if (!results.boss) { 
            currentRoulette = 'boss'; 
            items = bosses; 
            showScreen('rouletteScreen'); 
            updateDisplayInfo(); 
            prerenderRouletteImage(); 
            drawRoulette();
            document.getElementById('spinButton').disabled = false;
        }
        else { startNextSelectedBind(); }
    }

    function getAvailableBinds() {
        const selected = [...Object.keys(results.common), ...bindsToResolve.map(b => typeof b === 'object' ? b.name : b)];
        return binds.filter(b => !selected.includes(b)).filter(b => {
            const filters = { ...results.common };
            if (subRoulettes[b]) return subRoulettes[b].some(opt => characters.some(c => checkCharEligibility(c, {...filters, [b]: opt}, 1)));
            return characters.some(c => checkCharEligibility(c, filters, 1));
        });
    }

    function proceedToNext() { 
        currentBindIndex++; 
        if (currentBindIndex >= bindsToResolve.length) showResults();
        else startNextSelectedBind(); 
    }

      function backToStart() { spinning = false; initialize(); showScreen('startScreen'); }

   function showMemberSettings() {
    const modal = document.getElementById('memberSettingsModal');
    if (modal) modal.classList.remove('hidden');
    
    // Show player name input screen initially
    document.getElementById('playerNameInputScreen').classList.remove('hidden');
    document.querySelector('.member-select-row').classList.add('hidden');
    document.getElementById('possessionTabs').classList.add('hidden');
}

function closeMemberSettings() {
    const modal = document.getElementById('memberSettingsModal');
    if (modal) modal.classList.add('hidden');
    // Reset the modal to initial state
    document.getElementById('playerNameInputScreen').classList.remove('hidden');
    document.querySelector('.member-select-row').classList.add('hidden');
    document.getElementById('possessionTabs').classList.add('hidden');
}

function goToSettingsScreen() {
    const playerName = document.getElementById('modalPlayerNameInput').value.trim();
    if (!playerName) {
        alert('プレイヤー名を入力してください');
        return;
    }
    
    // Hide player name input screen
    document.getElementById('playerNameInputScreen').classList.add('hidden');
    
    // Show player selection area (for switching between players if needed)
    const memberSelectRow = document.querySelector('.member-select-row');
    memberSelectRow.classList.remove('hidden');
    memberSelectRow.innerHTML = '';
    
    // Add radio button for current player
    const label = document.createElement('label');
    label.style.display = 'flex';
    label.style.gap = '10px';
    label.style.alignItems = 'center';
    
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'playerSelection';
    radio.value = 0;
    radio.checked = true;
    
    label.appendChild(radio);
    label.appendChild(document.createTextNode(playerName));
    memberSelectRow.appendChild(label);
    
    // Show possession tabs
    const possessionTabs = document.getElementById('possessionTabs');
    if (possessionTabs) possessionTabs.classList.remove('hidden');
    
    // Load data for this player
    loadPlayerData(playerName);
}

function loadPlayerData(playerName) {
    editingPlayer = playerName;
    
    if (!playerPossession[playerName]) {
        playerPossession[playerName] = { chars: {}, weapons: {} };
    }
    
    const pData = playerPossession[playerName];
    const charList = document.getElementById('charSettingList');
    const weaponList = document.getElementById('weaponSettingList');
    
    // Group characters by country
    charList.innerHTML = '';
    const countries = [...new Set(characters.map(c => c.country))];
    countries.forEach(country => {
        const countryHeader = document.createElement('h3');
        countryHeader.textContent = country;
        countryHeader.style.marginTop = '15px';
        countryHeader.style.marginBottom = '10px';
        countryHeader.style.borderBottom = '2px solid #3498db';
        charList.appendChild(countryHeader);
        
        // Filter and sort characters: ☆5 first, then ☆4
        const countryChars = characters
            .filter(c => c.country === country)
            .sort((a, b) => {
                // Check if character has ☆5 in their rarity array
                const aIsFiveStar = a.rarity.some(r => r.includes('☆５'));
                const bIsFiveStar = b.rarity.some(r => r.includes('☆５'));
                
                if (aIsFiveStar && !bIsFiveStar) return -1;
                if (!aIsFiveStar && bIsFiveStar) return 1;
                return 0; // Keep original order within same rarity
            });
            
        countryChars.forEach(char => {
            const div = document.createElement('div');
            div.className = 'possession-item';
            const owned = pData.chars[char.name] ? pData.chars[char.name].owned !== false : true;
            const c6 = pData.chars[char.name] ? pData.chars[char.name].c6 : false;
            const c0 = pData.chars[char.name] ? pData.chars[char.name].c0 : false;
            
            // ===== キャラクター画像サムネイル =====
            const imageThumb = document.createElement('span');
            imageThumb.className = 'possession-item-thumbnail';
            const thumbImg = document.createElement('img');
            
            const charImagePath = encodeImagePath('character', char.name);
            if (charImagePath) {
                thumbImg.src = charImagePath;
                thumbImg.alt = char.name;
                thumbImg.style.display = 'block';
                thumbImg.style.marginBottom = '8px';
                thumbImg.style.maxWidth = '60px';
                thumbImg.style.maxHeight = '60px';
                thumbImg.style.borderRadius = '5px';
                thumbImg.onerror = function() { this.style.display = 'none'; };
                imageThumb.appendChild(thumbImg);
            }
            div.appendChild(imageThumb);
            
            const labelsContainer = document.createElement('div');
            labelsContainer.innerHTML = `
                <label style="display: block; margin-bottom: 5px;">
                    <input type="checkbox" class="char-owned" data-char="${char.name}" ${owned ? 'checked' : ''}>
                    ${char.name}
                </label>
                <label style="display: block; margin-bottom: 5px; margin-left: 10px;">
                    <input type="checkbox" class="char-c6" data-char="${char.name}" ${c6 ? 'checked' : ''}>
                    完凸
                </label>
                <label style="display: block; margin-left: 10px;">
                    <input type="checkbox" class="char-c0" data-char="${char.name}" ${c0 ? 'checked' : ''}>
                    無凸
                </label>
            `;
            div.appendChild(labelsContainer);
            charList.appendChild(div);
        });
    });
    
    // Group weapons by type
    weaponList.innerHTML = '';
    const weaponTypes = Object.keys(allWeapons);
    weaponTypes.forEach(weaponType => {
        const typeHeader = document.createElement('h3');
        typeHeader.textContent = weaponType;
        typeHeader.style.marginTop = '15px';
        typeHeader.style.marginBottom = '10px';
        typeHeader.style.borderBottom = '2px solid #3498db';
        weaponList.appendChild(typeHeader);
        
        const weaponsOfType = allWeapons[weaponType];
        weaponsOfType.forEach(weapon => {
            const div = document.createElement('div');
            div.className = 'possession-item';
            const owned = pData.weapons[weapon.name] !== false;
            
            // Create thumbnail image
            const imageThumb = document.createElement('span');
            imageThumb.className = 'possession-item-thumbnail';
            const weaponThumb = document.createElement('img');
            weaponThumb.src = encodeImagePath('weapon', weapon.name);
            weaponThumb.alt = weapon.name;
            weaponThumb.style.maxWidth = '50px';
            weaponThumb.style.maxHeight = '50px';
            weaponThumb.style.display = 'block';
            weaponThumb.style.marginBottom = '8px';
            weaponThumb.onerror = function() { this.style.display = 'none'; };
            imageThumb.appendChild(weaponThumb);
            div.appendChild(imageThumb);
            
            const labelContainer = document.createElement('div');
            labelContainer.innerHTML = `
                <label>
                    <input type="checkbox" class="weapon-owned" data-weapon="${weapon.name}" ${owned ? 'checked' : ''}>
                    ${weapon.name}
                </label>
            `;
            div.appendChild(labelContainer);
            weaponList.appendChild(div);
        });
    });
}

function savePlayerData() {
    const playerName = editingPlayer;
    
    if (!playerPossession[playerName]) {
        playerPossession[playerName] = { chars: {}, weapons: {} };
    }
    
    const pData = playerPossession[playerName];
    
    document.querySelectorAll('.char-owned').forEach(cb => {
        const charName = cb.dataset.char;
        if (!pData.chars[charName]) pData.chars[charName] = {};
        pData.chars[charName].owned = cb.checked;
    });
    
    document.querySelectorAll('.char-c6').forEach(cb => {
        const charName = cb.dataset.char;
        if (!pData.chars[charName]) pData.chars[charName] = {};
        pData.chars[charName].c6 = cb.checked;
    });
    
    document.querySelectorAll('.char-c0').forEach(cb => {
        const charName = cb.dataset.char;
        if (!pData.chars[charName]) pData.chars[charName] = {};
        pData.chars[charName].c0 = cb.checked;
    });
    
    document.querySelectorAll('.weapon-owned').forEach(cb => {
        const weaponName = cb.dataset.weapon;
        pData.weapons[weaponName] = cb.checked;
    });
    
    localStorage.setItem('genshin_roulette_possession', JSON.stringify(playerPossession));
    alert('保存しました！');
}

// タブ切り替え機能
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabName).classList.remove('hidden');
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (tabName === 'charTab') document.getElementById('tab-char').classList.add('active');
    if (tabName === 'weaponTab') document.getElementById('tab-weapon').classList.add('active');
}

// 一括チェック機能
function bulkCheck(type, state) {
    if (type === 'char') {
        document.querySelectorAll('.char-owned').forEach(cb => cb.checked = state);
    } else if (type === 'weapon') {
        document.querySelectorAll('.weapon-owned').forEach(cb => cb.checked = state);
    }
}

    function savePlayerData() {
        const playerName = editingPlayer;
        
        if (!playerPossession[playerName]) {
            playerPossession[playerName] = { chars: {}, weapons: {} };
        }
        
        const pData = playerPossession[playerName];
        
        document.querySelectorAll('.char-owned').forEach(cb => {
            const charName = cb.dataset.char;
            if (!pData.chars[charName]) pData.chars[charName] = {};
            pData.chars[charName].owned = cb.checked;
        });
        
        document.querySelectorAll('.char-c6').forEach(cb => {
            const charName = cb.dataset.char;
            if (!pData.chars[charName]) pData.chars[charName] = {};
            pData.chars[charName].c6 = cb.checked;
        });
        
        document.querySelectorAll('.char-c0').forEach(cb => {
            const charName = cb.dataset.char;
            if (!pData.chars[charName]) pData.chars[charName] = {};
            pData.chars[charName].c0 = cb.checked;
        });
        
        document.querySelectorAll('.weapon-owned').forEach(cb => {
            const weaponName = cb.dataset.weapon;
            pData.weapons[weaponName] = cb.checked;
        });
        
        localStorage.setItem('genshin_roulette_possession', JSON.stringify(playerPossession));
        alert('保存しました！');
    }

    function showAbout() {
        const modal = document.getElementById('aboutScreen');
        if (modal) modal.classList.remove('hidden');
    }

    function closeAbout() {
        const modal = document.getElementById('aboutScreen');
        if (modal) modal.classList.add('hidden');
    }

    function startRoulette(rouletteMode) {
        initialize();
        mode = rouletteMode;
        
        if (mode === 'all' || mode === 'boss') {
            currentRoulette = 'boss';
            items = bosses;
            updateDisplayInfo();
            prerenderRouletteImage();
            showScreen('rouletteScreen');
            drawRoulette();
            document.getElementById('spinButton').disabled = false;
        } else if (mode === 'bind') {
            bindSelectionPhase = true;
            items = getAvailableBinds();
            currentRoulette = 'bind';
            updateDisplayInfo();
            prerenderRouletteImage();
            showScreen('rouletteScreen');
            drawRoulette();
            document.getElementById('spinButton').disabled = false;
        }
    }

    function showBindSelection() {
        initialize();
        mode = 'selection';
        
        // bindButtonsに縛り選択チェックボックスを生成
        const bindButtonsDiv = document.getElementById('bindButtons');
        bindButtonsDiv.innerHTML = '';
        
        binds.forEach(bindName => {
            const label = document.createElement('label');
            label.className = 'checkbox-label';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.bindName = bindName;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(' ' + bindName));
            bindButtonsDiv.appendChild(label);
        });
        
        showScreen('bindSelection');
    }

    function startNextSelectedBind() {
        if (currentBindIndex >= bindsToResolve.length) {
            showResults();
            return;
        }
        
        const bindItem = bindsToResolve[currentBindIndex];
        const bindName = bindItem.name;
        const player = bindItem.player || currentPlayer;
        
        if (player > 0) {
            currentPlayer = player;
        }
        
        setupRouletteForBind(bindName, player > 0 ? player : currentPlayer);
    }

    function executeBinds() {
        initialize();
        mode = 'selected';
        
        const checkboxes = document.querySelectorAll('#bindButtons input[type="checkbox"]:checked');
        bindsToResolve = [];
        
        checkboxes.forEach(checkbox => {
            const bindName = checkbox.dataset.bindName;
            bindsToResolve.push({ name: bindName, player: 0 });
        });
        
        if (bindsToResolve.length === 0) {
            alert('縛りを選択してください');
            return;
        }
        
        bindsToResolve.sort((a, b) => bindOrder.indexOf(a.name) - bindOrder.indexOf(b.name));
        
        currentRoulette = 'boss';
        items = bosses;
        showScreen('rouletteScreen');
        updateDisplayInfo();
        prerenderRouletteImage();
        drawRoulette();
        document.getElementById('spinButton').disabled = false;
    }

    document.getElementById('stopButton').addEventListener('click', stopRoulette);
    document.getElementById('spinButton').addEventListener('click', spinRoulette);
    document.getElementById('nextButton').addEventListener('click', nextStep);
    document.getElementById('notOwnedButton').addEventListener('click', notOwned);
    document.getElementById('homeButton').addEventListener('click', backToStart);
    document.getElementById('backToStartButton').addEventListener('click', backToStart);

    document.getElementById('startAllButton').addEventListener('click', () => startRoulette('all'));
    document.getElementById('startBossButton').addEventListener('click', () => startRoulette('boss'));
    document.getElementById('startBindButton').addEventListener('click', () => {
        startRoulette('bind');
    });
    document.getElementById('showBindSelectionButton').addEventListener('click', showBindSelection);
    document.getElementById('executeSelectionButton').addEventListener('click', () => {
        isWeeklyBossMode = document.getElementById('weeklyBossModeSelection').checked;
        executeBinds();
    });
    document.getElementById('showCustomBindScreenButton').addEventListener('click', showCustomBindScreen);
    document.getElementById('executeCustomBindsButton').addEventListener('click', () => {
        isWeeklyBossMode = document.getElementById('weeklyBossModeCustom').checked;
        executeCustomBinds();
    });
    document.getElementById('showMemberSettingsButton').addEventListener('click', showMemberSettings);
    
    const goToSettingsBtn = document.getElementById('goToSettingsButton');
    if (goToSettingsBtn) {
        goToSettingsBtn.addEventListener('click', goToSettingsScreen);
    }
    
    const closeMemberSettingsBtn = document.getElementById('closeMemberSettings');
    if (closeMemberSettingsBtn) {
        closeMemberSettingsBtn.addEventListener('click', closeMemberSettings);
    }
    
    const savePlayerDataBtn = document.getElementById('savePlayerData');
    if (savePlayerDataBtn) {
        savePlayerDataBtn.addEventListener('click', savePlayerData);
    }
    
    document.getElementById('showAboutButton').addEventListener('click', showAbout);
    document.getElementById('closeAboutButton').addEventListener('click', closeAbout);

    updatePlayerNameInputs();
    function startRoulette(rouletteMode) {
        initialize();
        mode = rouletteMode;
        
        if (mode === 'all' || mode === 'boss') {
            currentRoulette = 'boss';
            items = bosses;
            updateDisplayInfo();
            prerenderRouletteImage();
            showScreen('rouletteScreen');
            drawRoulette();
            document.getElementById('spinButton').disabled = false;
        } else if (mode === 'bind') {
            bindSelectionPhase = true;
            items = getAvailableBinds();
            currentRoulette = 'bind';
            updateDisplayInfo();
            prerenderRouletteImage();
            showScreen('rouletteScreen');
            drawRoulette();
            document.getElementById('spinButton').disabled = false;
        }
    }

    function showBindSelection() {
        initialize();
        mode = 'selection';
        
        // bindButtonsに縛り選択チェックボックスを生成
        const bindButtonsDiv = document.getElementById('bindButtons');
        bindButtonsDiv.innerHTML = '';
        
        binds.forEach(bindName => {
            const label = document.createElement('label');
            label.className = 'checkbox-label';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.bindName = bindName;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(' ' + bindName));
            bindButtonsDiv.appendChild(label);
        });
        
        showScreen('bindSelection');
    }

    function startNextSelectedBind() {
        if (currentBindIndex >= bindsToResolve.length) {
            showResults();
            return;
        }
        
        const bindItem = bindsToResolve[currentBindIndex];
        const bindName = bindItem.name;
        const player = bindItem.player || currentPlayer;
        
        if (player > 0) {
            currentPlayer = player;
        }
        
        setupRouletteForBind(bindName, player > 0 ? player : currentPlayer);
    }

    function executeBinds() {
        initialize();
        mode = 'selected';
        
        const checkboxes = document.querySelectorAll('#bindButtons input[type="checkbox"]:checked');
        bindsToResolve = [];
        
        checkboxes.forEach(checkbox => {
            const bindName = checkbox.dataset.bindName;
            bindsToResolve.push({ name: bindName, player: 0 });
        });
        
        if (bindsToResolve.length === 0) {
            alert('縛りを選択してください');
            return;
        }
        
        bindsToResolve.sort((a, b) => bindOrder.indexOf(a.name) - bindOrder.indexOf(b.name));
        
        // Start with the first selected bind, not boss roulette
        currentBindIndex = 0;
        startNextSelectedBind();
    }

    updatePlayerNameInputs();
});
