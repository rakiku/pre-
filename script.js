document.addEventListener('DOMContentLoaded', function() {

    const characters = [
        { name: "ジン", country: "モンド", weapon: "片手剣", element: "風", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "長身女性", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "無相の風", local_specialty: "蒲公英の種", ascension_stat: "与える治療効果", distributed: false },
        { name: "アンバー", country: "モンド", weapon: "弓", element: "炎", birth_month: "８月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 40, talent_boss: "爆炎樹", local_specialty: "イグサ", ascension_stat: "攻撃力", distributed: true },
        { name: "リサ", country: "モンド", weapon: "法器", element: "雷", birth_month: "６月", version: "n.0", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドアタッカー"], energy: 80, talent_boss: "無相の雷", local_specialty: "ヴァルベリー", ascension_stat: "元素熟知", distributed: true },
        { name: "ガイア", country: "モンド", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body: "長身男性", role: [], energy: 60, talent_boss: "急凍樹", local_specialty: "ドドリアン", ascension_stat: "元素チャージ効率", distributed: true },
        { name: "バーバラ", country: "モンド", weapon: "法器", element: "水", birth_month: "７月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "純水精霊", local_specialty: "慕風のマッシュルーム", ascension_stat: "HP", distributed: true },
        { name: "ディルック", country: "モンド", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "爆炎樹", local_specialty: "イグサ", ascension_stat: "会心率", distributed: false },
        { name: "レザー", country: "モンド", weapon: "両手剣", element: "雷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "無相の雷", local_specialty: "ググプラム", ascension_stat: "物理ダメージ", distributed: false },
        { name: "ウェンティ", country: "モンド", weapon: "弓", element: "風", birth_month: "６月", version: "n.0", rarity: ['☆５'], body: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 60, talent_boss: "無相の風", local_specialty: "セシリアの花", ascension_stat: "元素チャージ効率", distributed: false },
        { name: "クレー", country: "モンド", weapon: "法器", element: "炎", birth_month: "７月", version: "n.0", rarity: ['☆５'], body: "ロリ", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "爆炎樹", local_specialty: "慕風のマッシュルーム", ascension_stat: "炎元素ダメージ", distributed: false },
        { name: "ベネット", country: "モンド", weapon: "片手剣", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "爆炎樹", local_specialty: "風車アスター", ascension_stat: "元素チャージ効率", distributed: true },
        { name: "ノエル", country: "モンド", weapon: "両手剣", element: "岩", birth_month: "３月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オンフィールドアタッカー", "オンフィールドライフキーパー"], energy: 60, talent_boss: "無相の岩", local_specialty: "ヴァルベリー", ascension_stat: "防御力", distributed: false },
        { name: "フィッシュル", country: "モンド", weapon: "弓", element: "雷", birth_month: "５月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 60, talent_boss: "無相の雷", local_specialty: "イグサ", ascension_stat: "攻撃力", distributed: true },
        { name: "スクロース", country: "モンド", weapon: "法器", element: "風", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "無相の風", local_specialty: "風車アスター", ascension_stat: "風元素ダメージ", distributed: false },
        { name: "モナ", country: "モンド", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "純水精霊", local_specialty: "慕風のマッシュルーム", ascension_stat: "元素チャージ効率", distributed: false },
        { name: "ディオナ", country: "モンド", weapon: "弓", element: "氷", birth_month: "１月", version: "n.1", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "急凍樹", local_specialty: "ドドリアン", ascension_stat: "氷元素ダメージ", distributed: true },
        { name: "アルベド", country: "モンド", weapon: "片手剣", element: "岩", birth_month: "９月", version: "n.2", rarity: ['☆５'], body: "中身男性", role: ["オフフィールドアタッカー"], energy: 40, talent_boss: "無相の岩", local_specialty: "セシリアの花", ascension_stat: "岩元素ダメージ", distributed: false },
        { name: "ロサリア", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "１月", version: "n.4", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドアタッカー"], energy: 60, talent_boss: "急凍樹", local_specialty: "ヴァルベリー", ascension_stat: "攻撃力", distributed: false },
        { name: "エウルア", country: "モンド", weapon: "両手剣", element: "氷", birth_month: "１０月", version: "n.5", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "無相の氷", local_specialty: "蒲公英の種", ascension_stat: "会心ダメージ", distributed: false },
        { name: "ミカ", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "８月", version: "n.5", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "風食ウェネト", local_specialty: "ググプラム", ascension_stat: "HP", distributed: false },
        { name: "ダリア", country: "モンド", weapon: "片手剣", element: "水", birth_month: "５月", version: "n.7", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 80, talent_boss: "秘源機兵・統御デバイス", local_specialty: "", ascension_stat: "HP", distributed: false },
        { name: "ドゥリン", country: "モンド", weapon: "片手剣", element: "炎", birth_month: "３月", version: "n.3", rarity: ['☆５'], body: "中身男性", role: ["オフフィールドサポーター","オフフィールドアタッカー"], energy: 70, talent_boss: "重量級陸巡艦「バトルシップ」", local_specialty: "フロストランプ", ascension_stat: "会心ダメージ", distributed: false },
        { name: "魈", country: "璃月", weapon: "長柄武器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "エンシェントヴィシャップ・岩", local_specialty: "清心", ascension_stat: "会心率", distributed: false },
        { name: "北斗", country: "璃月", weapon: "両手剣", element: "雷", birth_month: "２月", version: "n.0", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 80, talent_boss: "無相の雷", local_specialty: "夜泊石", ascension_stat: "雷元素ダメージ", distributed: true },
        { name: "凝光", country: "璃月", weapon: "法器", element: "岩", birth_month: "８月", version: "n.0", rarity: ['☆４'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "無相の岩", local_specialty: "瑠璃百合", ascension_stat: "岩元素ダメージ", distributed: false },
        { name: "香菱", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 80, talent_boss: "爆炎樹", local_specialty: "絶雲の唐辛子", ascension_stat: "元素熟知", distributed: true },
        { name: "行秋", country: "璃月", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 80, talent_boss: "純水精霊", local_specialty: "霓裳花", ascension_stat: "攻撃力", distributed: true },
        { name: "重雲", country: "璃月", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 40, talent_boss: "急凍樹", local_specialty: "石珀", ascension_stat: "攻撃力", distributed: false },
        { name: "七七", country: "璃月", weapon: "片手剣", element: "氷", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "急凍樹", local_specialty: "瑠璃袋", ascension_stat: "与える治療効果", distributed: false },
        { name: "刻晴", country: "璃月", weapon: "片手剣", element: "雷", birth_month: "１１月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "無相の雷", local_specialty: "石珀", ascension_stat: "会心ダメージ", distributed: false },
        { name: "鍾離", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body: "長身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 40, talent_boss: "無相の岩", local_specialty: "石珀", ascension_stat: "岩元素ダメージ", distributed: false },
        { name: "辛炎", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１０月", version: "n.1", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 60, talent_boss: "爆炎樹", local_specialty: "瑠璃袋", ascension_stat: "攻撃力", distributed: true },
        { name: "甘雨", country: "璃月", weapon: "弓", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "急凍樹", local_specialty: "清心", ascension_stat: "会心ダメージ", distributed: false },
        { name: "胡桃", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "７月", version: "n.3", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "エンシェントヴィシャップ・岩", local_specialty: "霓裳花", ascension_stat: "会心ダメージ", distributed: false },
        { name: "煙緋", country: "璃月", weapon: "法器", element: "炎", birth_month: "７月", version: "n.5", rarity: ['☆４'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "エンシェントヴィシャップ・岩", local_specialty: "夜泊石", ascension_stat: "炎元素ダメージ", distributed: false },
        { name: "申鶴", country: "璃月", weapon: "長柄武器", element: "氷", birth_month: "３月", version: "n.4", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "アビサルヴィシャップ", local_specialty: "清心", ascension_stat: "攻撃力", distributed: false },
        { name: "雲菫", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "５月", version: "n.4", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "黄金王獣", local_specialty: "瑠璃百合", ascension_stat: "元素チャージ効率", distributed: false },
        { name: "夜蘭", country: "璃月", weapon: "弓", element: "水", birth_month: "４月", version: "n.7", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドアタッカー"], energy: 70, talent_boss: "遺跡サーペント", local_specialty: "星螺", ascension_stat: "会心率", distributed: false },
        { name: "ヨォーヨ", country: "璃月", weapon: "長柄武器", element: "草", birth_month: "３月", version: "n.4", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "無相の草", local_specialty: "絶雲の唐辛子", ascension_stat: "HP", distributed: false },
        { name: "白朮", country: "璃月", weapon: "法器", element: "草", birth_month: "４月", version: "n.6", rarity: ['☆５'], body: "長身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 80, talent_boss: "深罪の浸礼者", local_specialty: "瑠璃袋", ascension_stat: "HP", distributed: false },
        { name: "閑雲", country: "璃月", weapon: "法器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "山隠れの猊獣", local_specialty: "清水玉", ascension_stat: "攻撃力", distributed: false },
        { name: "嘉明", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１２月", version: "n.4", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "鉄甲熔炎帝王", local_specialty: "星螺", ascension_stat: "攻撃力", distributed: false },
        { name: "藍硯", country: "璃月", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆４'], body: "中身女性", role: ["オンフィールドアタッカー", "オンフィールドライフキーパー"], energy: 60, talent_boss: "秘源機兵・機構デバイス", local_specialty: "清水玉", ascension_stat: "攻撃力", distributed: false },
        { name: "兹白", country: "璃月", weapon: "片手剣", element: "岩", birth_month: "５月", version: "n.4", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "昏き魘夢の主", local_specialty: "瑠璃百合", ascension_stat: "会心ダメージ", distributed: false },
        { name: "神里綾華", country: "稲妻", weapon: "片手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "恒常からくり陣形", local_specialty: "緋櫻毬", ascension_stat: "会心ダメージ", distributed: false },
        { name: "神里綾人", country: "稲妻", weapon: "片手剣", element: "水", birth_month: "３月", version: "n.6", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "無相の水", local_specialty: "緋櫻毬", ascension_stat: "会心ダメージ", distributed: false },
        { name: "楓原万葉", country: "稲妻", weapon: "片手剣", element: "風", birth_month: "１０月", version: "n.６", rarity: ['☆５'], body: "中身男性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "魔偶剣鬼", local_specialty: "ウミレイシ", ascension_stat: "元素熟知", distributed: false },
        { name: "宵宮", country: "稲妻", weapon: "弓", element: "炎", birth_month: "６月", version: "n.0", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "無相の炎", local_specialty: "鳴草", ascension_stat: "会心率", distributed: false },
        { name: "早柚", country: "稲妻", weapon: "両手剣", element: "風", birth_month: "１０月", version: "n.0", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "魔偶剣鬼", local_specialty: "晶化骨髄", ascension_stat: "元素熟知", distributed: false },
        { name: "雷電将軍", country: "稲妻", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー", "オンフィールドサポーター"], energy: 90, talent_boss: "雷音権現", local_specialty: "天雲草の実", ascension_stat: "元素チャージ効率", distributed: false },
        { name: "九条裟羅", country: "稲妻", weapon: "弓", element: "雷", birth_month: "７月", version: "n.1", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "雷音権現", local_specialty: "血石華", ascension_stat: "攻撃力", distributed: false },
        { name: "珊瑚宮心海", country: "稲妻", weapon: "法器", element: "水", birth_month: "２月", version: "n.1", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "無相の水", local_specialty: "珊瑚真珠", ascension_stat: "水元素ダメージ", distributed: false },
        { name: "トーマ", country: "稲妻", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.2", rarity: ['☆４'], body: "長身男性", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "無相の炎", local_specialty: "ユウトウタケ", ascension_stat: "攻撃力", distributed: false },
        { name: "荒瀧一斗", country: "稲妻", weapon: "両手剣", element: "岩", birth_month: "６月", version: "n.3", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "黄金王獣", local_specialty: "オニカブトムシ", ascension_stat: "会心率", distributed: false },
        { name: "ゴロー", country: "稲妻", weapon: "弓", element: "岩", birth_month: "５月", version: "n.3", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "恒常からくり陣形", local_specialty: "珊瑚真珠", ascension_stat: "岩元素ダメージ", distributed: true },
        { name: "八重神子", country: "稲妻", weapon: "法器", element: "雷", birth_month: "６月", version: "n.5", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドアタッカー"], energy: 90, talent_boss: "アビサルヴィシャップ", local_specialty: "ウミレイシ", ascension_stat: "会心率", distributed: false },
        { name: "久岐忍", country: "稲妻", weapon: "片手剣", element: "雷", birth_month: "７月", version: "n.7", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 60, talent_boss: "遺跡サーペント", local_specialty: "鳴草", ascension_stat: "HP", distributed: false },
        { name: "鹿野院平蔵", country: "稲妻", weapon: "法器", element: "風", birth_month: "７月", version: "n.8", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "遺跡サーペント", local_specialty: "オニカブトムシ", ascension_stat: "風元素ダメージ", distributed: false },
        { name: "綺良々", country: "稲妻", weapon: "片手剣", element: "草", birth_month: "１月", version: "n.7", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 60, talent_boss: "深罪の浸礼者", local_specialty: "天雲草の実", ascension_stat: "HP", distributed: true },
        { name: "千織", country: "稲妻", weapon: "片手剣", element: "岩", birth_month: "８月", version: "n.5", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 50, talent_boss: "氷風組曲コッペリア", local_specialty: "血石華", ascension_stat: "会心率", distributed: false },
        { name: "夢見月瑞希", country: "稲妻", weapon: "法器", element: "風", birth_month: "３月", version: "n.4", rarity: ['☆５', '恒常☆５'], body: "中身女性", role: ["オンフィールドアタッカー", "オンフィールドライフキーパー"], energy: 60, talent_boss: "迷える霊覚の修権者", local_specialty: "ウミレイシ", ascension_stat: "元素熟知", distributed: false },
        { name: "ティナリ", country: "スメール", weapon: "弓", element: "草", birth_month: "１２月", version: "n.0", rarity: ['☆５', '恒常☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "マッシュラプトル", local_specialty: "サウマラタ蓮", ascension_stat: "草元素ダメージ", distributed: false },
        { name: "コレイ", country: "スメール", weapon: "弓", element: "草", birth_month: "５月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 60, talent_boss: "マッシュラプトル", local_specialty: "ルッカデヴァータダケ", ascension_stat: "攻撃力", distributed: true },
        { name: "ドリー", country: "スメール", weapon: "両手剣", element: "雷", birth_month: "１２月", version: "n.0", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "迅電樹", local_specialty: "カルパラタ蓮", ascension_stat: "HP", distributed: true },
        { name: "セノ", country: "スメール", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "迅電樹", local_specialty: "聖金虫", ascension_stat: "会心ダメージ", distributed: false },
        { name: "キャンディス", country: "スメール", weapon: "長柄武器", element: "水", birth_month: "５月", version: "n.1", rarity: ['☆４'], body: "長身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "半永久統制マトリックス", local_specialty: "赤念の実", ascension_stat: "HP", distributed: true },
        { name: "ニィロウ", country: "スメール", weapon: "片手剣", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 70, talent_boss: "兆載永劫ドレイク", local_specialty: "パティサラ", ascension_stat: "HP", distributed: false },
        { name: "ナヒーダ", country: "スメール", weapon: "法器", element: "草", birth_month: "１０月", version: "n.2", rarity: ['☆５'], body: "ロリ", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 50, talent_boss: "無相の草", local_specialty: "カルパラタ蓮", ascension_stat: "元素熟知", distributed: false },
        { name: "レイラ", country: "スメール", weapon: "片手剣", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 40, talent_boss: "兆載永劫ドレイク", local_specialty: "サウマラタ蓮", ascension_stat: "HP", distributed: false },
        { name: "放浪者", country: "スメール", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "兆載永劫ドレイク", local_specialty: "ルッカデヴァータダケ", ascension_stat: "会心率", distributed: false },
        { name: "ファルザン", country: "スメール", weapon: "弓", element: "風", birth_month: "８月", version: "n.3", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 80, talent_boss: "半永久統制マトリックス", local_specialty: "赤念の実", ascension_stat: "攻撃力", distributed: true },
        { name: "アルハイゼン", country: "スメール", weapon: "片手剣", element: "草", birth_month: "２月", version: "n.4", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "風食ウェネト", local_specialty: "砂脂蛹", ascension_stat: "草元素ダメージ", distributed: false },
        { name: "ディシア", country: "スメール", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.5", rarity: ['☆５', '恒常☆５'], body: "長身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 70, talent_boss: "半永久統制マトリックス", local_specialty: "砂脂蛹", ascension_stat: "HP", distributed: false },
        { name: "カーヴェ", country: "スメール", weapon: "両手剣", element: "草", birth_month: "７月", version: "n.6", rarity: ['☆４'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "無相の草", local_specialty: "悼霊花", ascension_stat: "元素熟知", distributed: false },
        { name: "セトス", country: "スメール", weapon: "弓", element: "雷", birth_month: "５月", version: "n.7", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "山隠れの猊獣", local_specialty: "サングイト", ascension_stat: "元素熟知", distributed: false },
        { name: "リネ", country: "フォンテーヌ", weapon: "弓", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "鉄甲熔炎帝王", local_specialty: "レインボーローズ", ascension_stat: "会心率", distributed: false },
        { name: "リネット", country: "フォンテーヌ", weapon: "片手剣", element: "風", birth_month: "２月", version: "n.0", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 70, talent_boss: "氷風組曲コッペリア", local_specialty: "ルミドゥースベル", ascension_stat: "風元素ダメージ", distributed: true },
        { name: "フレミネ", country: "フォンテーヌ", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "氷風組曲コペリウス", local_specialty: "ロマリタイムフラワー", ascension_stat: "攻撃力", distributed: true },
        { name: "ヌヴィレット", country: "フォンテーヌ", weapon: "法器", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "千年真珠の海駿", local_specialty: "ルエトワール", ascension_stat: "会心ダメージ", distributed: false },
        { name: "リオセスリ", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "１１月", version: "n.1", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "実験用フィールド生成装置", local_specialty: "探測ユニット・子機", ascension_stat: "会心ダメージ", distributed: false },
        { name: "シャルロット", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドライフキーパー"], energy: 80, talent_boss: "実験用フィールド生成装置", local_specialty: "蒼晶螺", ascension_stat: "攻撃力", distributed: false },
        { name: "フリーナ", country: "フォンテーヌ", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.2", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "水形タルパ", local_specialty: "湖光の鈴蘭", ascension_stat: "会心率", distributed: false },
        { name: "ナヴィア", country: "フォンテーヌ", weapon: "両手剣", element: "岩", birth_month: "８月", version: "n.3", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "氷風組曲コペリウス", local_specialty: "初露の源", ascension_stat: "会心ダメージ", distributed: false },
        { name: "シュヴルーズ", country: "フォンテーヌ", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.3", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "千年真珠の海駿", local_specialty: "ルミドゥースベル", ascension_stat: "HP", distributed: false },
        { name: "クロリンデ", country: "フォンテーヌ", weapon: "片手剣", element: "雷", birth_month: "９月", version: "n.7", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "千年真珠の海駿", local_specialty: "ルエトワール", ascension_stat: "会心率", distributed: false },
        { name: "シグウィン", country: "フォンテーヌ", weapon: "弓", element: "水", birth_month: "３月", version: "n.7", rarity: ['☆５'], body: "ロリ", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "水形タルパ", local_specialty: "ロマリタイムフラワー", ascension_stat: "HP", distributed: false },
        { name: "エミリエ", country: "フォンテーヌ", weapon: "長柄武器", element: "草", birth_month: "９月", version: "n.8", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー"], energy: 50, talent_boss: "魔像レガトゥス", local_specialty: "湖光の鈴蘭", ascension_stat: "会心ダメージ", distributed: false },
        { name: "エスコフィエ", country: "フォンテーヌ", weapon: "長柄武器", element: "氷", birth_month: "６月", version: "n.6", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "秘源機兵・統御デバイス", local_specialty: "蒼晶螺", ascension_stat: "会心率", distributed: false },
        { name: "イアンサ", country: "ナタ", weapon: "長柄武器", element: "雷", birth_month: "８月", version: "n.5", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, talent_boss: "深淵なるミミック・パピラ", local_specialty: "琉鱗石", ascension_stat: "攻撃力", distributed: false },
        { name: "チャスカ", country: "ナタ", weapon: "弓", element: "風", birth_month: "１２月", version: "n.2", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "深淵なるミミック・パピラ", local_specialty: "枯れ紫菖", ascension_stat: "会心率", distributed: false },
        { name: "ムアラニ", country: "ナタ", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "暴君・金焔のクク竜", local_specialty: "波しぶきのエラ", ascension_stat: "会心率", distributed: false },
        { name: "オロルン", country: "ナタ", weapon: "弓", element: "雷", birth_month: "１０月", version: "n.2", rarity: ['☆４'], body: "長身男性", role: ["オフフィールドアタッカー"], energy: 60, talent_boss: "暴君・金焔のクク竜", local_specialty: "蛍光ツノキノコ", ascension_stat: "攻撃力", distributed: false },
        { name: "キィニチ", country: "ナタ", weapon: "両手剣", element: "草", birth_month: "１１月", version: "n.0", rarity: ['☆５'], body: "中身男性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "山の王・貪食のユムカ竜", local_specialty: "ササウリアンサキュレント", ascension_stat: "会心ダメージ", distributed: false },
        { name: "カチーナ", country: "ナタ", weapon: "長柄武器", element: "岩", birth_month: "４月", version: "n.0", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドアタッカー"], energy: 70, talent_boss: "山の王・貪食のユムカ竜", local_specialty: "ケネパベリー", ascension_stat: "岩元素ダメージ", distributed: true },
        { name: "シトラリ", country: "ナタ", weapon: "法器", element: "氷", birth_month: "１１月", version: "n.3", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "迷える霊覚の修権者", local_specialty: "ケネパベリー", ascension_stat: "元素熟知", distributed: false },
        { name: "マーヴィカ", country: "ナタ", weapon: "両手剣", element: "炎", birth_month: "８月", version: "n.3", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー", "オフフィールドアタッカー", "オンフィールドサポーター"], energy: 0, talent_boss: "シロネン", local_specialty: "枯れ紫菖", ascension_stat: "会心ダメージ", distributed: false },
        { name: "ヴァレサ", country: "ナタ", weapon: "法器", element: "雷", birth_month: "１１月", version: "n.5", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 70, talent_boss: "輝ける溶岩の龍像", local_specialty: "岩裂の花", ascension_stat: "会心率", distributed: false },
        { name: "イファ", country: "ナタ", weapon: "法器", element: "風", birth_month: "３月", version: "n.5", rarity: ['☆４'], body: "長身男性", role: ["オンフィールドライフキーパー"], energy: 60, talent_boss: "輝ける溶岩の龍像", local_specialty: "サウリアンサキュレント", ascension_stat: "元素熟知", distributed: false },
        { name: "シロネン", country: "ナタ", weapon: "片手剣", element: "岩", birth_month: "３月", version: "n.1", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, talent_boss: "秘源機兵・機構デバイス", local_specialty: "シャクギク", ascension_stat: "防御力", distributed: false },
        { name: "タルタリヤ", country: "スネージナヤ", weapon: "弓", element: "水", birth_month: "７月", version: "n.1", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "純水精霊", local_specialty: "星螺", ascension_stat: "水元素ダメージ", distributed: false },
        { name: "アルレッキーノ", country: "スネージナヤ", weapon: "長柄武器", element: "炎", birth_month: "８月", version: "n.6", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "魔像レガトゥス", local_specialty: "レインボーローズ", ascension_stat: "会心ダメージ", distributed: false },
        { name: "イネファ", country: "ナドクライ", weapon: "長柄武器", element: "雷", birth_month: "４月", version: "n.8", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 60, talent_boss: "秘源機兵・統御デバイス", local_specialty: "蛍光ツノキノコ", ascension_stat: "会心率", distributed: false },
        { name: "フリンズ", country: "ナドクライ", weapon: "長柄武器", element: "雷", birth_month: "１０月", version: "n.0", rarity: ['☆５'], body: "長身男性", role: ["オンフィールドアタッカー"], energy: 80, talent_boss: "ボコボコダック", local_specialty: "フロストランプ", ascension_stat: "会心ダメージ", distributed: false },
        { name: "アイノ", country: "ナドクライ", weapon: "両手剣", element: "水", birth_month: "９月", version: "n.0", rarity: ['☆４'], body: "ロリ", role: ["オフフィールドサポーター"], energy: 50, talent_boss: "ボコボコダック", local_specialty: "蛍行型ベアリング", ascension_stat: "元素熟知", distributed: true },
        { name: "ラウマ", country: "ナドクライ", weapon: "法器", element: "草", birth_month: "３月", version: "n.0", rarity: ['☆５'], body: "長身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "集光の幻月蝶", local_specialty: "月落銀", ascension_stat: "元素熟知", distributed: false },
        { name: "ネフェル", country: "ナドクライ", weapon: "法器", element: "草", birth_month: "５月", version: "n.1", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "霜夜の空を巡る霊主", local_specialty: "月落銀", ascension_stat: "会心ダメージ", distributed: false },
        { name: "ヤフォダ", country: "ナドクライ", weapon: "弓", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆４'], body: "中身女性", role: ["オフフィールドヒーラー"], energy: 70, talent_boss: "集光の幻月蝶", local_specialty: "携行型ベアリング", ascension_stat: "与える治療効果", distributed: false },
        { name: "コロンビーナ", country: "ナドクライ", weapon: "法器", element: "水", birth_month: "１月", version: "n.4", rarity: ['☆５'], body: "中身女性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "霜夜の空を巡る霊主", local_specialty: "ヴィンテル草", ascension_stat: "会心率", distributed: false },
        { name: "イルーガ", country: "ナドクライ", weapon: "長柄武器", element: "岩", birth_month: "１２月", version: "n.4", rarity: ['☆４'], body: "中身男性", role: ["オフフィールドサポーター"], energy: 60, talent_boss: "重量級陸巡艦「バトルシップ」", local_specialty: "琥珀香", ascension_stat: "元素熟知", distributed: false },
        { name: "旅人", country: "例外", weapon: "片手剣", element: "その他", birth_month: "その他", version: "n.0", rarity: ['☆５'], body: ["中身男性", "中身女性"], role: ["オンフィールドアタッカー", "オフフィールドアタッカー"], energy: [60, 80, 70], talent_boss: "", local_specialty: "風車アスター", ascension_stat: "攻撃力", displayNames: ["空", "蛍", "風旅人", "水旅人", "草旅人", "炎旅人", "雷旅人"], distributed: true},
        { name: "スカーク", country: "例外", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.7", rarity: ['☆５'], body: "長身女性", role: ["オンフィールドアタッカー"], energy: 0, talent_boss: "輝ける溶岩の龍像", local_specialty: "岩裂の花", ascension_stat: "会心ダメージ", distributed: false },
        { name: "ドール", country: "例外", weapon: "片手剣", element: "その他", birth_month: "その他", version: "n.2", rarity: ['☆５'], body: ["中身男性", "中身女性"], role: ["オンフィールドアタッカー"], energy: 60, talent_boss: "", local_specialty: "", ascension_stat: "攻撃力", distributed: false },
        { name: "アーロイ", country: "例外", weapon: "弓", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆５'], body: "中身女性", role: ["オンフィールドアタッカー"], energy: 40, talent_boss: "無相の氷", local_specialty: "晶化骨髄", ascension_stat: "氷元素ダメージ", distributed: true }
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
            { name: "黒缨槍", rarity: 3, type: "長柄武器", ascension_stat: "HP", is_distributed: false },
            { name: "黒岩の突槍", rarity: 4, type: "長柄武器", ascension_stat: "会心ダメージ", is_distributed: false },
            { name: "鉄尖槍", rarity: 2, type: "長柄武器", ascension_stat: "", is_distributed: false },
            { name: "鉾槍", rarity: 3, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "破天の槍", rarity: 5, type: "長柄武器", ascension_stat: "攻撃力", is_distributed: false },
            { name: "星鎌・試作", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "西風長槍", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "草薙の稲光", rarity: 5, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: false },
            { name: "白缨槍", rarity: 3, type: "長柄武器", ascension_stat: "会心率", is_distributed: false },
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
            { name: "「漁獲」", rarity: 4, type: "長柄武器", ascension_stat: "元素チャージ効率", is_distributed: true },
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
            { name: "ポケット魔導書", rarity: 1, type: "法器", ascension_stat: "", is_distributed: false },
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

    const bosses = ["故郷を偲ぶ孤独の狼","ハイジェード","十六倍マンドラゴラ","博士","昏き魘夢の主","重量級陸巡艦「バトルシップ」","シグルド", "ラスコーリニコフ", "カニ皇帝", "集光の幻月蝶", "ボコボコダック", "無相の炎", "無相の水", "無相の風", "無相の雷", "無相の草", "無相の氷", "無相の岩", "純水精霊", "雷音権現", "水形タルパ", "深罪の浸礼者", "霜夜の空を巡る霊主","黄金王獣", "深淵なるミミック・パピラ", "遺跡サーペント", "恒常からくり陣形", "兆載永劫ドレイク", "半永久統制マトリックス", "氷風組曲コペリウス", "氷風組曲コッペリア", "秘源機兵・機構デバイス", "魔偶剣鬼", "実験用フィールド生成装置", "迷える霊覚の修権者", "爆炎樹", "迅電樹", "急凍樹", "エンシェントヴィシャップ・岩", "アビサルヴィシャップ", "マッシュラプトル", "風食ウェネト", "鉄甲熔炎帝王", "千年真珠の海駿", "山隠れの猊獣", "魔像レガトゥス", "暴君・金焔のクク竜", "山の王・貪食のユムカ竜", "輝ける溶岩の龍像", "秘源機兵・統御デバイス", "アンドリアス", "公子", "若陀龍王", "淑女", "禍津御建鳴神命", "正機の神", "アペプ", "吞星の鯨", "召使", "グーシートース", "キング＆クイーン", "ヴィヴィアン", "ニニアン", "イゾルト", "リアム", "ロッキー", "ディアンナラ", "赤璋巡岳府君", "シネアス", "異色三連星", "バラチコ", "コシーホ", "ジャプー", "リライ", "銅の掟", "ピーク", "戦羊・鉄爪", "微末", "最後のテノチズトク人"];
    const weeklyBosses = ["博士", "グーシートース", "キング＆クイーン", "召使", "吞星の鯨", "アペプ", "正機の神", "若陀龍王", "禍津御建鳴神命", "アンドリアス", "淑女", "公子"];
    const elementColors = { "水": "#00c0fe", "炎": "#fe6640", "雷": "#cc85ff", "氷": "#74E4E2", "風": "#36d6a0", "岩": "#F3AC11", "草": "#8dcc06", "その他": "#FFFFFF" };
    const ownership100Characters = ["香菱", "旅人", "ガイア", "バーバラ", "コレイ", "ノエル", "リサ", "アンバー"];
    const alphabetData = {"A": ["アイノ", "荒瀧一斗", "アルベド", "アルレッキーノ", "アルハイゼン", "アンバー", "アーロイ"], "B": ["バーバラ", "白朮", "ベネット", "北斗"], "C": ["キャンディス", "クロリンデ", "コレイ", "シャルロット", "シュヴルーズ", "シトラリ", "セノ", "千織", "チャスカ", "重雲"], "D": ["ドリー", "ディシア", "ディルック", "ディオナ", "ダリア"], "E": ["エミリエ", "エウルア", "エスコフィエ"], "F": ["フリンズ", "ファルザン", "フリーナ", "フレミネ", "フィッシュル"], "G": ["嘉明", "甘雨", "ゴロー"], "H": ["胡桃"], "I": ["イアンサ", "イファ", "イネファ"], "J": ["ジン"], "K": ["神里綾華", "神里綾人", "キィニチ", "綺良々", "久岐忍", "九条裟羅", "クレー", "刻晴", "カチーナ", "カーヴェ"], "L": ["ラウマ", "リサ", "リネ", "リネット", "レイラ", "藍硯"], "M": ["ミカ", "ムアラニ", "モナ", "マーヴィカ"], "N": ["ネフェル","ナヴィア", "ナヒーダ", "ニィロウ", "ヌヴィレット", "ノエル"], "O": ["オロルン"], "Q": ["七七"], "R": ["雷電将軍", "レザー", "ロサリア", "リオセスリ"], "S": ["早柚", "珊瑚宮心海", "鹿野院平蔵", "シグウィン", "申鶴", "スクロース", "セトス", "スカーク"], "T": ["旅人", "ティナリ", "タルタリヤ", "トーマ"], "V": ["ウェンティ", "ヴァレサ"], "W": ["放浪者"], "X": ["行秋", "魈", "香菱", "辛炎", "シロネン", "閑雲"], "Y": ["煙緋", "夜蘭", "雲菫", "八重神子", "宵宮", "ヨォーヨ", "夢見月瑞希"], "Z": ["鍾離"]};
    const initialCharacters = ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"];

    const binds = ["☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "国縛り", "初期キャラのみ", "UI非表示+リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止", "爆発禁止+リロール", "旅人縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆１、聖遺物なし", "武器縛り", "体型縛り", "役割縛り", "スキル禁止", "元素エネルギー縛り", "完凸禁止", "配布武器縛り", "配布キャラ縛り", "ボス素材縛り", "特産品縛り", "クラウン禁止", "突破ステータス縛り(キャラ)", "突破ステータス縛り(武器)"];

    const subRoulettes = {
        "国縛り": [...new Set(characters.map(c => c.country))].sort(),
        "モノ元素縛り": [...new Set(characters.filter(c => c.element !== "その他").map(c => c.element))].sort(),
        "武器種縛り": Object.keys(allWeapons).sort(),
        "誕生月": ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"],
        "各1.1縛り": [...new Set(characters.map(c => c.version))].filter(v => v !== 'その他').sort(),
        "アルファベット縛り": Object.keys(alphabetData).sort(),
        "武器縛り": Object.values(allWeapons).flat().map(w => w.name),
        "体型縛り": ["長身男性", "長身女性", "中身男性", "中身女性", "ロリ"],
        "役割縛り": ["オンフィールドアタッカー", "オンフィールドサポーター", "オンフィールドライフキーパー", "オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"],
        "元素エネルギー縛り": [0, 40, 50, 60, 70, 80, 90],
        "ボス素材縛り": [...new Set(characters.map(c => c.talent_boss).filter(b => b))],
        "特産品縛り": [...new Set(characters.map(c => c.local_specialty).filter(l => l))],
        "突破ステータス縛り(キャラ)": [...new Set(characters.map(c => c.ascension_stat).filter(s => s))],
        "突破ステータス縛り(武器)": [...new Set(Object.values(allWeapons).flat().map(w => w.ascension_stat).filter(s => s))],
        "配布武器縛り": Object.values(allWeapons).flat().filter(w => w.is_distributed).map(w => w.name),
        "配布キャラ縛り": [...characters.filter(c => c.distributed).map(c => c.name), "周年配布☆５で選んだキャラ", "海灯祭で選んだキャラ"]
    };
    
    const playerBindTypes = ["キャラルーレット", "キャラ武器ルーレット", "武器縛り", "アルファベット縛り", "誕生月", "武器種縛り", "体型縛り", "役割縛り", "元素エネルギー縛り", "ボス素材縛り", "特産品縛り", "突破ステータス縛り(キャラ)", "突破ステータス縛り(武器)", "配布キャラ縛り", "配布武器縛り"];
    const bindOrder = ["国縛り", "モノ元素縛り", "恒常☆５縛り", "☆４キャラ武器", "初期キャラのみ", "所持率100％縛り", "旅人縛り", "配布キャラ縛り", "各1.1縛り", "体型縛り", "役割縛り", "元素エネルギー縛り", "ボス素材縛り", "特産品縛り", "突破ステータス縛り(キャラ)", "武器種縛り", "突破ステータス縛り(武器)", "配布武器縛り", "武器縛り", "誕生月", "アルファベット縛り", "キャラルーレット", "キャラ武器ルーレット"];

    let playerCount, bindCount, mode, currentRoulette, currentBindName, currentBindIndex, items, angle = 0, spinning = false, results = {}, currentPlayer = 1, lastResult;
    let rerolledChars, rerolledWeapons, rerolledCommonWeapons, playerNames = [], bindSelectionPhase, bindsToResolve, excludedSubItems = {};
    let prerenderedRoulette = null, spinSpeed = 0, visualItems = [];

    const canvas = document.getElementById('rouletteCanvas');
    const ctx = canvas.getContext('2d');
    const defaultColors = ['#00c0fe', '#36d6a0', '#fe6640', '#8dcc06', '#74E4E2', '#cc85ff', '#F3AC11'];

    function enforceMinMax(input) {
        let value = parseInt(input.value, 10);
        if (isNaN(value)) value = 1;
        if (value > parseInt(input.max)) value = input.max;
        if (value < parseInt(input.min)) value = input.min;
        input.value = value;
    }
    
    document.getElementById('playerCount').addEventListener('input', (e) => { enforceMinMax(e.target); updatePlayerNameInputs(); });
    document.getElementById('bindCount').addEventListener('input', (e) => enforceMinMax(e.target));
    document.getElementById('startAllButton').addEventListener('click', () => startRoulette('all'));
    document.getElementById('startBossButton').addEventListener('click', () => startRoulette('boss'));
    document.getElementById('startBindButton').addEventListener('click', () => startRoulette('bind'));
    document.getElementById('showBindSelectionButton').addEventListener('click', showBindSelection);
    document.getElementById('homeButton').addEventListener('click', backToStart);
    document.getElementById('executeSelectionButton').addEventListener('click', executeBinds);
    document.getElementById('showCustomBindScreenButton').addEventListener('click', showCustomBindScreen);
    document.getElementById('executeCustomBindsButton').addEventListener('click', executeCustomBinds);
    document.getElementById('spinButton').addEventListener('click', spinRoulette);
    document.getElementById('stopButton').addEventListener('click', stopRoulette);
    document.getElementById('nextButton').addEventListener('click', nextStep);
    document.getElementById('notOwnedButton').addEventListener('click', notOwned);
    document.getElementById('backToStartButton').addEventListener('click', backToStart);
    document.getElementById('showAboutButton').addEventListener('click', () => document.getElementById('aboutScreen').classList.remove('hidden'));
    document.getElementById('closeAboutButton').addEventListener('click', () => document.getElementById('aboutScreen').classList.add('hidden'));

    function updatePlayerNameInputs() {
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
    }

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
        rerolledCommonWeapons = [];
        excludedSubItems = {};
        bindSelectionPhase = false; bindsToResolve = [];
    }

    function showBindSelection() {
        initialize(); mode = 'selected'; showScreen('bindSelection');
        const btnBox = document.getElementById('bindButtons'); btnBox.innerHTML = '';
        const selectables = binds.filter(b => !["回復禁止", "UI非表示+リロール", "爆発禁止+リロール", "聖遺物禁止", "☆１、聖遺物なし", "旅人縛り", "誰か一人が倒れたら負け縛り", "無凸縛り", "スキル禁止", "完凸禁止", "クラウン禁止"].includes(b));
        selectables.forEach(bind => {
            const label = document.createElement('label'); label.className = 'checkbox-label';
            const cb = document.createElement('input'); cb.type = 'checkbox'; cb.value = bind;
            label.appendChild(cb); label.appendChild(document.createTextNode(bind)); btnBox.appendChild(label);
        });
    }

    function executeBinds() {
        initialize();
        bindsToResolve = Array.from(document.querySelectorAll('#bindButtons input:checked')).map(cb => {
            if (playerBindTypes.includes(cb.value)) {
                let pBinds = []; for (let i = 1; i <= playerCount; i++) pBinds.push({ name: cb.value, player: i });
                return pBinds;
            }
            return { name: cb.value, player: 0 };
        }).flat();
        if (bindsToResolve.length === 0) return alert("縛りを選択してください");
        bindsToResolve.sort((a, b) => (bindOrder.indexOf(a.name) - bindOrder.indexOf(b.name)));
        mode = 'selected'; currentBindIndex = 0; startNextSelectedBind();
    }
    
    function startNextSelectedBind() {
        if(currentBindIndex >= bindsToResolve.length) { 
            showResults(); 
            return; 
        }
        const info = bindsToResolve[currentBindIndex];
        setupRouletteForBind(info.name, info.player || 1);
    }
    
    function startRoulette(type) {
        initialize(); mode = type; showScreen('rouletteScreen');
        if (type === 'all' || type === 'boss') { currentRoulette = 'boss'; items = bosses; }
        else if (type === 'bind') { bindSelectionPhase = true; currentRoulette = 'bind'; items = getAvailableBinds(); }
        updateDisplayInfo(); prerenderRouletteImage(); drawRoulette();
        document.getElementById('spinButton').disabled = false;
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
                if(wt) subItems = subItems.filter(wName => {
                    const wd = Object.values(allWeapons).flat().find(d => d.name === wName);
                    return wd && wd.type === wt;
                });
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
        } else if (items.length === 0) {
            proceedToNext();
        } else {
            prerenderedRoulette = null; prerenderRouletteImage();
            document.getElementById('spinButton').disabled = false; showScreen('rouletteScreen'); drawRoulette();
        }
    }
    
    function checkCharEligibility(char, filters, playerIdx) {
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
                case "回復禁止": match = !char.role.some(r => r.includes("ライフキーパー")); break;
                case "所持率100％縛り": match = ownership100Characters.includes(char.name); break;
                case "アルファベット縛り": 
                    if (char.name === "旅人") match = (value === "T");
                    else match = alphabetData[value] && alphabetData[value].includes(char.name);
                    break;
                case "恒常☆５縛り": match = char.rarity.includes('恒常☆５'); break;
                case "☆４キャラ武器": match = char.rarity.includes('☆４'); break;
                case "初期キャラのみ": match = initialCharacters.includes(char.name); break;
                case "旅人縛り": match = (char.name === "旅人"); break;
                case "武器縛り": case "配布武器縛り": case "突破ステータス縛り(武器)": case "☆１、聖遺物なし":
                    const pool = allWeapons[char.weapon] || [];
                    match = pool.some(w => {
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
        // 週ボス重複防止
        if (results.boss && weeklyBosses.includes(results.boss)) {
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
        return pool.filter(w => {
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
                if (char) color = (char.name === "旅人" || char.name === "ドール") ? "#FFFFFF" : (elementColors[char.element] || "#FFFFFF");
            } else if (currentBindName === "モノ元素縛り") {
                color = elementColors[item] || color;
            }
            pctx.fillStyle = color; pctx.fill();
            pctx.strokeStyle = "#fff"; pctx.lineWidth = 1; pctx.stroke();
            pctx.save(); pctx.translate(250, 250); pctx.rotate(start + arc/2);
            pctx.fillStyle = (color === "#FFFFFF") ? "#000" : "#fff";
            pctx.font = 'bold 14px Arial'; pctx.textAlign = 'right'; pctx.fillText(item, 220, 0); pctx.restore();
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
    
    function spinRoulette() {
        if (spinning || !items || items.length === 0) return;
        spinning = true; spinSpeed = 0.2 + Math.random() * 0.1;
        document.getElementById('spinButton').disabled = true; document.getElementById('stopButton').disabled = false;
        document.getElementById('nextButton').classList.add('hidden'); document.getElementById('notOwnedButton').classList.add('hidden');
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
        p.innerHTML = `<span class="popup-close">×</span>${text}`; p.style.display = 'block';
        const cb = () => {
            p.style.display = 'none'; document.getElementById('nextButton').classList.remove('hidden');
            const canReroll = (currentRoulette==='character' || currentRoulette==='weapon' || currentRoulette==='sub');
            if(canReroll) document.getElementById('notOwnedButton').classList.remove('hidden');
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
                let full = []; bindsToResolve.forEach(b => {
                    const bName = typeof b === 'object' ? b.name : b;
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
            else { bindSelectionPhase = true; currentRoulette = 'bind'; items = getAvailableBinds(); prerenderRouletteImage(); drawRoulette(); document.getElementById('spinButton').disabled = false; }
            return;
        }
        if (playerBindTypes.includes(currentBindName)) {
            if (currentBindName === 'キャラ武器ルーレット') {
                if (currentRoulette === 'character') {
                    results.players[currentPlayer - 1][currentBindName] = { char: lastResult, weapon: null };
                    currentRoulette = 'weapon'; items = getFilteredWeapons(characters.find(c => c.name === lastResult).weapon, lastResult);
                    setupRouletteForBind('キャラ武器ルーレット', currentPlayer); return;
                } else results.players[currentPlayer - 1][currentBindName].weapon = lastResult;
            } else results.players[currentPlayer - 1][currentBindName] = lastResult;
        } else results.common[currentBindName] = lastResult;
        proceedToNext();
    }
    
    function proceedToNext() { 
        currentBindIndex++; 
        if (currentBindIndex >= bindsToResolve.length) showResults();
        else startNextSelectedBind(); 
    }

    function getAvailableBinds() {
        const selected = [...Object.keys(results.common), ...bindsToResolve.map(b => typeof b === 'object' ? b.name : b)];
        return binds.filter(b => !selected.includes(b)).filter(b => {
            const filters = { ...results.common };
            if (subRoulettes[b]) return subRoulettes[b].some(opt => characters.some(c => checkCharEligibility(c, {...filters, [b]: opt}, 1)));
            return characters.some(c => checkCharEligibility(c, filters, 1));
        });
    }

    function notOwned() {
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
        showScreen('resultScreen'); const resDiv = document.getElementById('results');
        let html = `<h2>ボス：${results.boss || "未選択"}</h2>`;
        if (Object.keys(results.common).length > 0) html += `<h3>共通の縛り：</h3><ul>` + Object.keys(results.common).map(k => `<li>${k}${results.common[k]===true?'':': '+results.common[k]}</li>`).join('') + `</ul>`;
        for (let i = 0; i < playerCount; i++) {
            const pb = results.players[i];
            html += `<div style="border-top:2px solid #7f8c8d; padding:15px 0;"><h3>${playerNames[i]}の結果</h3><ul>`;
            Object.keys(pb).forEach(k => {
                let val = pb[k];
                if (k === 'キャラ武器ルーレット') val = `${pb[k].char} - ${pb[k].weapon || '未選択'}`;
                html += `<li>${k}: ${val}</li>`;
            });
            html += `</ul>`;
            const f = {...results.common, ...pb};
            let chars = (pb['キャラルーレット']||(pb['キャラ武器ルーレット']&&pb['キャラ武器ルーレット'].char)) ? [{name:pb['キャラルーレット']||pb['キャラ武器ルーレット'].char}] : characters.filter(c => checkCharEligibility(c, f, i + 1));
            let weps = []; 
            const types = [...new Set(chars.map(c => characters.find(cd => cd.name === c.name).weapon))];
            types.forEach(t => weps = weps.concat(allWeapons[t].filter(w => {
                if (f["☆４キャラ武器"] && w.rarity>=5) return false;
                if (f["配布武器縛り"] && (typeof f["配布武器縛り"]==='string' ? w.name!==f["配布武器縛り"] : !w.is_distributed)) return false;
                if (f["武器縛り"] && w.name!==f["武器縛り"]) return false;
                if (f["突破ステータス縛り(武器)"] && w.ascension_stat!==f["突破ステータス縛り(武器)"]) return false;
                if (f["☆１、聖遺物なし"] && w.rarity!==1) return false;
                if (pb["キャラ武器ルーレット"] && pb["キャラ武器ルーレット"].weapon && w.name !== pb["キャラ武器ルーレット"].weapon) return false;
                return true;
            }).map(w => w.name)));
            html += `<h4>使用可能武器:</h4><p class="char-list-final">${[...new Set(weps)].join('、')||'なし'}</p>`;
            html += `<h4>対象キャラクター:</h4><p class="char-list-final">${chars.map(c=>c.name).join('、')||'条件不一致'}</p>`;
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
    
    function backToStart() { spinning = false; initialize(); showScreen('startScreen'); }
    function updateDisplayInfo() {
        const d = document.getElementById('currentPlayerNameDisplay');
        if (bindSelectionPhase) d.textContent = '縛りカテゴリーを抽選中...';
        else if (currentRoulette === 'boss') d.textContent = 'ボスを抽選中...';
        else if (playerBindTypes.includes(currentBindName)) d.textContent = `${playerNames[currentPlayer-1]} の ${currentBindName} 抽選`;
        else d.textContent = `全員共通: ${currentBindName} 抽選`;
    }

    function showCustomBindScreen() {
        initialize(); mode = 'custom'; showScreen('customBindScreen');
        const cg = document.getElementById('customBindGrid'), cb = document.getElementById('customBindButtonsCommon'), pc = document.getElementById('customBindsPlayersContainer');
        cg.innerHTML = ''; cb.innerHTML = ''; pc.innerHTML = '';
        ['国縛り', 'モノ元素縛り'].forEach(n => createBindItem(n, 'select', cg));
        ['恒常☆５縛り', '☆４キャラ武器', '初期キャラのみ', '所持率100％縛り', '旅人縛り', 'スキル禁止', '完凸禁止', 'クラウン禁止', '回復禁止'].forEach(n => createBindItem(n, 'check', cb));
        for (let i = 1; i <= playerCount; i++) {
            const d = document.createElement('div'); d.className = 'custom-bind-player-section'; d.innerHTML = `<h3>${playerNames[i-1]}の縛り</h3>`;
            const g = document.createElement('div'); g.className = 'custom-bind-grid';
            ['各1.1縛り', '体型縛り', '役割縛り', '元素エネルギー縛り', 'ボス素材縛り', '特産品縛り', '突破ステータス縛り(キャラ)', '突破ステータス縛り(武器)', '武器種縛り', '誕生月', 'アルファベット縛り'].forEach(n => createBindItem(n, 'select', g, i));
            const b = document.createElement('div'); b.className = 'button-group-checkbox';
            ['武器縛り', 'キャラルーレット', 'キャラ武器ルーレット', '配布キャラ縛り', '配布武器縛り'].forEach(n => createBindItem(n, 'check', b, i));
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
            const r = document.createElement('option'); r.value = 'random'; r.textContent = 'ランダム'; s.appendChild(r);
            (subRoulettes[n] || []).forEach(o => { const op = document.createElement('option'); op.value = o; op.textContent = o; s.appendChild(op); });
            item.appendChild(s); cb.addEventListener('change', e => s.style.display = e.target.checked ? 'block' : 'none');
        }
        c.appendChild(item);
    }
    
    function executeCustomBinds() {
        initialize(); mode = 'custom_selected'; bindsToResolve = [];
        document.querySelectorAll('#customBindScreen input[type="checkbox"]:checked').forEach(c => {
            const n = c.dataset.bindName, p = c.dataset.player ? parseInt(c.dataset.player) : 0, s = c.closest('div').querySelector('select');
            let t = p ? results.players[p-1] : results.common;
            if (s && s.value !== 'random') {
                let val = s.value; if(n === '元素エネルギー縛り') val = parseInt(val);
                t[n] = val;
            } else bindsToResolve.push({ name: n, player: p });
        });
        bindsToResolve.sort((a, b) => (bindOrder.indexOf(a.name) - bindOrder.indexOf(b.name)));
        currentBindIndex = 0; startNextSelectedBind();
    }
    updatePlayerNameInputs();
});
