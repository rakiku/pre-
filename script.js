document.addEventListener('DOMContentLoaded', function() {


    const characters = [
        // モンド
        { name: "ジン", country: "モンド", weapon: "片手剣", element: "風", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'], body_type: "長身女性", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "与える治療効果", boss_material: "無相の風", local_specialty: "蒲公英の種", is_distributed: false },
        { name: "アンバー", country: "モンド", weapon: "弓", element: "炎", birth_month: "８月", version: "n.0", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドアタッカー"], energy: 40, ascension_stat: "攻撃力", boss_material: "爆炎樹", local_specialty: "イグサ", is_distributed: true },
        { name: "リサ", country: "モンド", weapon: "法器", element: "雷", birth_month: "６月", version: "n.0", rarity: ['☆４'], body_type: "長身女性", role: ["オフフィールドアタッカー"], energy: 80, ascension_stat: "元素熟知", boss_material: "無相の雷", local_specialty: "ヴァルベリー", is_distributed: true },
        { name: "ガイア", country: "モンド", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body_type: "長身男性", role: ["オフフィールドアタッカー"], energy: 60, ascension_stat: "元素チャージ効率", boss_material: "急凍樹", local_specialty: "ドドリアン", is_distributed: true },
        { name: "バーバラ", country: "モンド", weapon: "法器", element: "水", birth_month: "７月", version: "n.0", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "HP", boss_material: "純水精霊", local_specialty: "慕風のマッシュルーム", is_distributed: true },
        { name: "ディルック", country: "モンド", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.0", rarity: ['☆５', '恒常☆５'], body_type: "長身男性", role: ["オンフィールドアタッカー"], energy: 40, ascension_stat: "会心率", boss_material: "爆炎樹", local_specialty: "イグサ", is_distributed: false },
        { name: "レザー", country: "モンド", weapon: "両手剣", element: "雷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body_type: "中身男性", role: ["オンフィールドアタッカー"], energy: 80, ascension_stat: "物理ダメージ", boss_material: "無相の雷", local_specialty: "ググプラム", is_distributed: false },
        { name: "ウェンティ", country: "モンド", weapon: "弓", element: "風", birth_month: "６月", version: "n.0", rarity: ['☆５'], body_type: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 60, ascension_stat: "元素チャージ効率", boss_material: "無相の風", local_specialty: "セシリアの花", is_distributed: false },
        { name: "クレー", country: "モンド", weapon: "法器", element: "炎", birth_month: "７月", version: "n.0", rarity: ['☆５'], body_type: "ロリ", role: ["オンフィールドアタッカー"], energy: 60, ascension_stat: "炎元素ダメージ", boss_material: "爆炎樹", local_specialty: "慕風のマッシュルーム", is_distributed: false },
        { name: "ベネット", country: "モンド", weapon: "片手剣", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆４'], body_type: "中身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, ascension_stat: "元素チャージ効率", boss_material: "爆炎樹", local_specialty: "風車アスター", is_distributed: true },
        { name: "ノエル", country: "モンド", weapon: "両手剣", element: "岩", birth_month: "３月", version: "n.0", rarity: ['☆４'], body_type: "中身女性", role: ["オンフィールドアタッカー", "オンフィールドライフキーパー"], energy: 60, ascension_stat: "防御力", boss_material: "無相の岩", local_specialty: "ヴァルベリー", is_distributed: false },
        { name: "フィッシュル", country: "モンド", weapon: "弓", element: "雷", birth_month: "５月", version: "n.0", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドアタッカー"], energy: 60, ascension_stat: "攻撃力", boss_material: "無相の雷", local_specialty: "イグサ", is_distributed: true },
        { name: "スクロース", country: "モンド", weapon: "法器", element: "風", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドサポーター"], energy: 80, ascension_stat: "風元素ダメージ", boss_material: "無相の風", local_specialty: "風車アスター", is_distributed: false },
        { name: "モナ", country: "モンド", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５', '恒常☆５'], body_type: "中身女性", role: ["オフフィールドサポーター"], energy: 60, ascension_stat: "元素チャージ効率", boss_material: "純水精霊", local_specialty: "慕風のマッシュルーム", is_distributed: false },
        { name: "ディオナ", country: "モンド", weapon: "弓", element: "氷", birth_month: "１月", version: "n.1", rarity: ['☆４'], body_type: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "氷元素ダメージ", boss_material: "急凍樹", local_specialty: "ドドリアン", is_distributed: true },
        { name: "アルベド", country: "モンド", weapon: "片手剣", element: "岩", birth_month: "９月", version: "n.2", rarity: ['☆５'], body_type: "中身男性", role: ["オフフィールドアタッカー"], energy: 40, ascension_stat: "岩元素ダメージ", boss_material: "無相の岩", local_specialty: "セシリアの花", is_distributed: false },
        { name: "ロサリア", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "１月", version: "n.4", rarity: ['☆４'], body_type: "長身女性", role: ["オフフィールドアタッカー"], energy: 60, ascension_stat: "攻撃力", boss_material: "急凍樹", local_specialty: "ヴァルベリー", is_distributed: false },
        { name: "エウルア", country: "モンド", weapon: "両手剣", element: "氷", birth_month: "１０月", version: "n.5", rarity: ['☆５'], body_type: "長身女性", role: ["オンフィールドタッカー"], energy: 80, ascension_stat: "会心ダメージ", boss_material: "無相の氷", local_specialty: "蒲公英の種", is_distributed: false },
        { name: "ミカ", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "８月", version: "n.5", rarity: ['☆４'], body_type: "中身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, ascension_stat: "HP", boss_material: "風食ウェネト", local_specialty: "ググプラム", is_distributed: false },
        { name: "ダリア", country: "モンド", weapon: "片手剣", element: "水", birth_month: "５月", version: "n.7", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 80, ascension_stat: "HP", boss_material: "秘源機兵・統御デバイス", local_specialty: "", is_distributed: false },
        // 璃月
        { name: "魈", country: "璃月", weapon: "長柄武器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'], body_type: "中身男性", role: ["オンフィールドアタッカー"], energy: 70, ascension_stat: "会心率", boss_material: "エンシェントヴィシャップ・岩", local_specialty: "清心", is_distributed: false },
        { name: "北斗", country: "璃月", weapon: "両手剣", element: "雷", birth_month: "２月", version: "n.0", rarity: ['☆４'], body_type: "長身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 80, ascension_stat: "雷元素ダメージ", boss_material: "無相の雷", local_specialty: "夜泊石", is_distributed: true },
        { name: "凝光", country: "璃月", weapon: "法器", element: "岩", birth_month: "８月", version: "n.0", rarity: ['☆４'], body_type: "長身女性", role: ["オンフィールドアタッカー"], energy: 40, ascension_stat: "岩元素ダメージ", boss_material: "無相の岩", local_specialty: "瑠璃袋", is_distributed: false },
        { name: "香菱", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "１１月", version: "n.0", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドアタッカー"], energy: 80, ascension_stat: "元素熟知", boss_material: "爆炎樹", local_specialty: "絶雲の唐辛子", is_distributed: true },
        { name: "行秋", country: "璃月", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.0", rarity: ['☆４'], body_type: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 80, ascension_stat: "攻撃力", boss_material: "純水精霊", local_specialty: "霓裳花", is_distributed: true },
        { name: "重雲", country: "璃月", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body_type: "中身男性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 40, ascension_stat: "攻撃力", boss_material: "急凍樹", local_specialty: "石珀", is_distributed: false },
        { name: "七七", country: "璃月", weapon: "片手剣", element: "氷", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'], body_type: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "与える治療効果", boss_material: "急凍樹", local_specialty: "瑠璃袋", is_distributed: false },
        { name: "刻晴", country: "璃月", weapon: "片手剣", element: "雷", birth_month: "１１月", version: "n.0", rarity: ['☆５', '恒常☆５'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 40, ascension_stat: "会心ダメージ", boss_material: "無相の雷", local_specialty: "石珀", is_distributed: false },
        { name: "鍾離", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body_type: "長身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 40, ascension_stat: "岩元素ダメージ", boss_material: "無相の岩", local_specialty: "石珀", is_distributed: false },
        { name: "辛炎", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１０月", version: "n.1", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドライフキーパー"], energy: 60, ascension_stat: "攻撃力", boss_material: "爆炎樹", local_specialty: "瑠璃袋", is_distributed: true },
        { name: "甘雨", country: "璃月", weapon: "弓", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆５'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心ダメージ", boss_material: "急凍樹", local_specialty: "清心", is_distributed: false },
        { name: "胡桃", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "７月", version: "n.3", rarity: ['☆５'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心ダメージ", boss_material: "エンシェントヴィシャップ・岩", local_specialty: "霓裳花", is_distributed: false },
        { name: "煙緋", country: "璃月", weapon: "法器", element: "炎", birth_month: "７月", version: "n.5", rarity: ['☆４'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 80, ascension_stat: "炎元素ダメージ", boss_material: "エンシェントヴィシャップ・岩", local_specialty: "夜泊石", is_distributed: false },
        { name: "申鶴", country: "璃月", weapon: "長柄武器", element: "氷", birth_month: "３月", version: "n.4", rarity: ['☆５'], body_type: "長身女性", role: ["オフフィールドサポーター"], energy: 80, ascension_stat: "攻撃力", boss_material: "アビサルヴィシャップ", local_specialty: "清心", is_distributed: false },
        { name: "雲菫", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "５月", version: "n.4", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドサポーター"], energy: 60, ascension_stat: "元素チャージ効率", boss_material: "黄金王獣", local_specialty: "瑠璃百合", is_distributed: false },
        { name: "夜蘭", country: "璃月", weapon: "弓", element: "水", birth_month: "４月", version: "n.7", rarity: ['☆５'], body_type: "長身女性", role: ["オフフィールドアタッカー"], energy: 70, ascension_stat: "会心率", boss_material: "遺跡サーペント", local_specialty: "星螺", is_distributed: false },
        { name: "ヨォーヨ", country: "璃月", weapon: "長柄武器", element: "草", birth_month: "３月", version: "n.4", rarity: ['☆４'], body_type: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "HP", boss_material: "無相の草", local_specialty: "絶雲の唐辛子", is_distributed: false },
        { name: "白朮", country: "璃月", weapon: "法器", element: "草", birth_month: "４月", version: "n.6", rarity: ['☆５'], body_type: "長身男性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 80, ascension_stat: "HP", boss_material: "深罪の浸礼者", local_specialty: "瑠璃袋", is_distributed: false },
        { name: "閑雲", country: "璃月", weapon: "法器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'], body_type: "長身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, ascension_stat: "攻撃力", boss_material: "山隠れの猊獣", local_specialty: "清水玉", is_distributed: false },
        { name: "嘉明", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１２月", version: "n.4", rarity: ['☆４'], body_type: "中身男性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "攻撃力", boss_material: "鉄甲熔炎帝王", local_specialty: "星螺", is_distributed: false },
        { name: "藍硯", country: "璃月", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆４'], body_type: "中身女性", role: ["オンフィールドタッカー", "オンフィールドライフキーパー"], energy: 80, ascension_stat: "攻撃力", boss_material: "秘源機兵・機構デバイス", local_specialty: "清水玉", is_distributed: false },
        // 稲妻
        { name: "神里綾華", country: "稲妻", weapon: "片手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆５'], body_type: "中身女性", role: ["オンフィールドアタッカー"], energy: 80, ascension_stat: "会心ダメージ", boss_material: "恒常からくり陣形", local_specialty: "緋櫻毬", is_distributed: false },
        { name: "神里綾人", country: "稲妻", weapon: "片手剣", element: "水", birth_month: "３月", version: "n.6", rarity: ['☆５'], body_type: "長身男性", role: ["オンフィールドタッカー"], energy: 80, ascension_stat: "会心ダメージ", boss_material: "無相の水", local_specialty: "緋櫻毬", is_distributed: false },
        { name: "楓原万葉", country: "稲妻", weapon: "片手剣", element: "風", birth_month: "１０月", version: "n.6", rarity: ['☆５'], body_type: "中身男性", role: ["オフフィールドサポーター"], energy: 60, ascension_stat: "元素熟知", boss_material: "魔偶剣鬼", local_specialty: "ウミレイシ", is_distributed: false },
        { name: "宵宮", country: "稲妻", weapon: "弓", element: "炎", birth_month: "６月", version: "n.0", rarity: ['☆５'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心率", boss_material: "無相の炎", local_specialty: "鳴草", is_distributed: false },
        { name: "早柚", country: "稲妻", weapon: "両手剣", element: "風", birth_month: "１０月", version: "n.0", rarity: ['☆４'], body_type: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "元素熟知", boss_material: "魔偶剣鬼", local_specialty: "晶化骨髄", is_distributed: false },
        { name: "雷電将軍", country: "稲妻", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'], body_type: "長身女性", role: ["オンフィールドアタッカー", "オンフィールドサポーター"], energy: 90, ascension_stat: "元素チャージ効率", boss_material: "雷音権現", local_specialty: "天雲草の実", is_distributed: false },
        { name: "九条裟羅", country: "稲妻", weapon: "弓", element: "雷", birth_month: "７月", version: "n.1", rarity: ['☆４'], body_type: "長身女性", role: ["オフフィールドサポーター"], energy: 80, ascension_stat: "攻撃力", boss_material: "雷音権現", local_specialty: "血石華", is_distributed: false },
        { name: "珊瑚宮心海", country: "稲妻", weapon: "法器", element: "水", birth_month: "２月", version: "n.1", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, ascension_stat: "水元素ダメージ", boss_material: "無相の水", local_specialty: "珊瑚真珠", is_distributed: false },
        { name: "トーマ", country: "稲妻", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.2", rarity: ['☆４'], body_type: "長身男性", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "攻撃力", boss_material: "無相の炎", local_specialty: "ユウトウタケ", is_distributed: false },
        { name: "荒瀧一斗", country: "稲妻", weapon: "両手剣", element: "岩", birth_month: "６月", version: "n.3", rarity: ['☆５'], body_type: "長身男性", role: ["オンフィールドタッカー"], energy: 70, ascension_stat: "会心率", boss_material: "黄金王獣", local_specialty: "オニカブトムシ", is_distributed: false },
        { name: "ゴロー", country: "稲妻", weapon: "弓", element: "岩", birth_month: "５月", version: "n.3", rarity: ['☆４'], body_type: "中身男性", role: ["オフフィールドサポーター"], energy: 80, ascension_stat: "岩元素ダメージ", boss_material: "恒常からくり陣形", local_specialty: "珊瑚真珠", is_distributed: true },
        { name: "八重神子", country: "稲妻", weapon: "法器", element: "雷", birth_month: "６月", version: "n.5", rarity: ['☆５'], body_type: "長身女性", role: ["オフフィールドアタッカー"], energy: 90, ascension_stat: "会心率", boss_material: "アビサルヴィシャップ", local_specialty: "ウミレイシ", is_distributed: false },
        { name: "久岐忍", country: "稲妻", weapon: "片手剣", element: "雷", birth_month: "７月", version: "n.7", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドライフキーパー"], energy: 60, ascension_stat: "HP", boss_material: "遺跡サーペント", local_specialty: "鳴草", is_distributed: false },
        { name: "鹿野院平蔵", country: "稲妻", weapon: "法器", element: "風", birth_month: "７月", version: "n.8", rarity: ['☆４'], body_type: "中身男性", role: ["オンフィールドアタッカー"], energy: 40, ascension_stat: "風元素ダメージ", boss_material: "遺跡サーペント", local_specialty: "オニカブトムシ", is_distributed: false },
        { name: "綺良々", country: "稲妻", weapon: "片手剣", element: "草", birth_month: "１月", version: "n.7", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 60, ascension_stat: "HP", boss_material: "深罪の浸礼者", local_specialty: "天雲草の実", is_distributed: true },
        { name: "千織", country: "稲妻", weapon: "片手剣", element: "岩", birth_month: "８月", version: "n.5", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドアタッカー"], energy: 50, ascension_stat: "会心率", boss_material: "氷風組曲コッペリア", local_specialty: "血石華", is_distributed: false },
        { name: "夢見月瑞希", country: "稲妻", weapon: "法器", element: "風", birth_month: "３月", version: "n.4", rarity: ['☆５', '恒常☆５'], body_type: "中身女性", role: ["オンフィールドアタッカー", "オンフィールドライフキーパー"], energy: 80, ascension_stat: "元素熟知", boss_material: "迷える霊覚の修権者", local_specialty: "ウミレイシ", is_distributed: false },
        // スメール
        { name: "ティナリ", country: "スメール", weapon: "弓", element: "草", birth_month: "１２月", version: "n.0", rarity: ['☆５', '恒常☆５'], body_type: "中身男性", role: ["オンフィールドタッカー"], energy: 40, ascension_stat: "草元素ダメージ", boss_material: "マッシュラプトル", local_specialty: "サウマラタ蓮", is_distributed: false },
        { name: "コレイ", country: "スメール", weapon: "弓", element: "草", birth_month: "５月", version: "n.0", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドアタッカー"], energy: 60, ascension_stat: "攻撃力", boss_material: "マッシュラプトル", local_specialty: "ルッカデヴァータダケ", is_distributed: true },
        { name: "ドリー", country: "スメール", weapon: "両手剣", element: "雷", birth_month: "１２月", version: "n.0", rarity: ['☆４'], body_type: "ロリ", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "HP", boss_material: "迅電樹", local_specialty: "カルパラタ蓮", is_distributed: true },
        { name: "セノ", country: "スメール", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'], body_type: "中身男性", role: ["オンフィールドタッカー"], energy: 80, ascension_stat: "会心ダメージ", boss_material: "迅電樹", local_specialty: "聖金虫", is_distributed: false },
        { name: "キャンディス", country: "スメール", weapon: "長柄武器", element: "水", birth_month: "５月", version: "n.1", rarity: ['☆４'], body_type: "長身女性", role: ["オフフィールドサポーター"], energy: 60, ascension_stat: "HP", boss_material: "半永久統制マトリックス", local_specialty: "赤念の実", is_distributed: true },
        { name: "ニィロウ", country: "スメール", weapon: "片手剣", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 70, ascension_stat: "HP", boss_material: "兆載永劫ドレイク", local_specialty: "パティサラ", is_distributed: false },
        { name: "ナヒーダ", country: "スメール", weapon: "法器", element: "草", birth_month: "１０月", version: "n.2", rarity: ['☆５'], body_type: "ロリ", role: ["オフフィールドアタッカー", "オフフィールドサポーター"], energy: 50, ascension_stat: "元素熟知", boss_material: "兆載永劫ドレイク", local_specialty: "カルパラタ蓮", is_distributed: false },
        { name: "レイラ", country: "スメール", weapon: "片手剣", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドライフキーパー"], energy: 40, ascension_stat: "HP", boss_material: "兆載永劫ドレイク", local_specialty: "サウマラタ蓮", is_distributed: false },
        { name: "放浪者", country: "スメール", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆５'], body_type: "中身男性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心率", boss_material: "半永久統制マトリックス", local_specialty: "ルッカデヴァータダケ", is_distributed: false },
        { name: "ファルザン", country: "スメール", weapon: "弓", element: "風", birth_month: "８月", version: "n.3", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドサポーター"], energy: 80, ascension_stat: "攻撃力", boss_material: "半永久統制マトリックス", local_specialty: "赤念の実", is_distributed: true },
        { name: "アルハイゼン", country: "スメール", weapon: "片手剣", element: "草", birth_month: "２月", version: "n.4", rarity: ['☆５'], body_type: "長身男性", role: ["オンフィールドタッカー"], energy: 70, ascension_stat: "草元素ダメージ", boss_material: "風食ウェネト", local_specialty: "砂脂蛹", is_distributed: false },
        { name: "ディシア", country: "スメール", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.5", rarity: ['☆５', '恒常☆５'], body_type: "長身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 70, ascension_stat: "HP", boss_material: "半永久統制マトリックス", local_specialty: "砂脂蛹", is_distributed: false },
        { name: "カーヴェ", country: "スメール", weapon: "両手剣", element: "草", birth_month: "７月", version: "n.6", rarity: ['☆４'], body_type: "長身男性", role: ["オンフィールドタッカー"], energy: 80, ascension_stat: "元素熟知", boss_material: "無相の草", local_specialty: "悼霊花", is_distributed: false },
        { name: "セトス", country: "スメール", weapon: "弓", element: "雷", birth_month: "５月", version: "n.7", rarity: ['☆４'], body_type: "中身男性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "元素熟知", boss_material: "山隠れの猊獣", local_specialty: "サングイト", is_distributed: false },
        // フォンテーヌ
        { name: "リネ", country: "フォンテーヌ", weapon: "弓", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆５'], body_type: "中身男性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心率", boss_material: "鉄甲熔炎帝王", local_specialty: "レインボーローズ", is_distributed: false },
        { name: "リネット", country: "フォンテーヌ", weapon: "片手剣", element: "風", birth_month: "２月", version: "n.0", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドアタッカー"], energy: 70, ascension_stat: "風元素ダメージ", boss_material: "氷風組曲コッペリア", local_specialty: "ルミドゥースベル", is_distributed: true },
        { name: "フレミネ", country: "フォンテーヌ", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'], body_type: "中身男性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "攻撃力", boss_material: "氷風組曲コペリウス", local_specialty: "ロマリタイムフラワー", is_distributed: true },
        { name: "ヌヴィレット", country: "フォンテーヌ", weapon: "法器", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'], body_type: "長身男性", role: ["オンフィールドタッカー"], energy: 70, ascension_stat: "会心ダメージ", boss_material: "千年真珠の海駿", local_specialty: "ルエトワール", is_distributed: false },
        { name: "リオセスリ", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "１１月", version: "n.1", rarity: ['☆５'], body_type: "長身男性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心ダメージ", boss_material: "実験用フィールド生成装置", local_specialty: "探測ユニット・子機", is_distributed: false },
        { name: "シャルロット", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドライフキーパー"], energy: 80, ascension_stat: "攻撃力", boss_material: "実験用フィールド生成装置", local_specialty: "蒼晶螺", is_distributed: false },
        { name: "フリーナ", country: "フォンテーヌ", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.2", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, ascension_stat: "会心率", boss_material: "水形タルパ", local_specialty: "湖光の鈴蘭", is_distributed: false },
        { name: "ナヴィア", country: "フォンテーヌ", weapon: "両手剣", element: "岩", birth_month: "８月", version: "n.3", rarity: ['☆５'], body_type: "長身女性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心ダメージ", boss_material: "氷風組曲コペリウス", local_specialty: "初露の源", is_distributed: false },
        { name: "シュヴルーズ", country: "フォンテーヌ", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.3", rarity: ['☆４'], body_type: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, ascension_stat: "HP", boss_material: "千年真珠の海駿", local_specialty: "ルミドゥースベル", is_distributed: false },
        { name: "クロリンデ", country: "フォンテーヌ", weapon: "片手剣", element: "雷", birth_month: "９月", version: "n.7", rarity: ['☆５'], body_type: "長身女性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心率", boss_material: "千年真珠の海駿", local_specialty: "ルエトワール", is_distributed: false },
        { name: "シグウィン", country: "フォンテーヌ", weapon: "弓", element: "水", birth_month: "３月", version: "n.7", rarity: ['☆５'], body_type: "ロリ", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, ascension_stat: "HP", boss_material: "水形タルパ", local_specialty: "ロマリタイムフラワー", is_distributed: false },
        { name: "エミリエ", country: "フォンテーヌ", weapon: "長柄武器", element: "草", birth_month: "９月", version: "n.8", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドアタッカー"], energy: 50, ascension_stat: "会心ダメージ", boss_material: "魔像レガトゥス", local_specialty: "湖光の鈴蘭", is_distributed: false },
        { name: "エスコフィエ", country: "フォンテーヌ", weapon: "長柄武器", element: "氷", birth_month: "６月", version: "n.6", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 80, ascension_stat: "会心率", boss_material: "秘源機兵・統御デバイス", local_specialty: "蒼晶螺", is_distributed: false },
        // ナタ
        { name: "イアンサ", country: "ナタ", weapon: "長柄武器", element: "雷", birth_month: "８月", version: "n.5", rarity: ['☆４'], body_type: "ロリ", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 60, ascension_stat: "攻撃力", boss_material: "深淵なるミミック・パピラ", local_specialty: "琉鱗石", is_distributed: false },
        { name: "チャスカ", country: "ナタ", weapon: "弓", element: "風", birth_month: "１２月", version: "n.2", rarity: ['☆５'], body_type: "長身女性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心率", boss_material: "深淵なるミミック・パピラ", local_specialty: "枯れ紫菖", is_distributed: false },
        { name: "ムアラニ", country: "ナタ", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心率", boss_material: "暴君・金焔のクク竜", local_specialty: "波しぶきのエラ", is_distributed: false },
        { name: "オロルン", country: "ナタ", weapon: "弓", element: "雷", birth_month: "１０月", version: "n.2", rarity: ['☆４'], body_type: "長身男性", role: ["オフフィールドアタッカー"], energy: 80, ascension_stat: "攻撃力", boss_material: "暴君・金焔のクク竜", local_specialty: "蛍光ツノキノコ", is_distributed: false },
        { name: "キィニチ", country: "ナタ", weapon: "両手剣", element: "草", birth_month: "１１月", version: "n.0", rarity: ['☆５'], body_type: "中身男性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心ダメージ", boss_material: "山の王・貪食のユムカ竜", local_specialty: "サウリアンサキュレント", is_distributed: false },
        { name: "カチーナ", country: "ナタ", weapon: "長柄武器", element: "岩", birth_month: "４月", version: "n.0", rarity: ['☆４'], body_type: "ロリ", role: ["オフフィールドアタッカー"], energy: 60, ascension_stat: "岩元素ダメージ", boss_material: "山の王・貪食のユムカ竜", local_specialty: "ケネパベリー", is_distributed: true },
        { name: "シトラリ", country: "ナタ", weapon: "法器", element: "氷", birth_month: "１月", version: "n.3", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 70, ascension_stat: "元素熟知", boss_material: "迷える霊覚の修権者", local_specialty: "ケネパベリー", is_distributed: false },
        { name: "マーヴィカ", country: "ナタ", weapon: "両手剣", element: "炎", birth_month: "８月", version: "n.3", rarity: ['☆５'], body_type: "長身女性", role: ["オンフィールドタッカー", "オフフィールドアタッカー", "オンフィールドサポーター"], energy: 0, ascension_stat: "会心ダメージ", boss_material: "秘源機兵・機構デバイス", local_specialty: "枯れ紫菖", is_distributed: false },
        { name: "ヴァレサ", country: "ナタ", weapon: "法器", element: "雷", birth_month: "１１月", version: "n.5", rarity: ['☆５'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 30, ascension_stat: "会心率", boss_material: "輝ける溶岩の龍像", local_specialty: "岩裂の花", is_distributed: false },
        { name: "イファ", country: "ナタ", weapon: "法器", element: "風", birth_month: "３月", version: "n.5", rarity: ['☆４'], body_type: "中身女性", role: ["オンフィールドライフキーパー"], energy: 80, ascension_stat: "元素熟知", boss_material: "輝ける溶岩の龍像", local_specialty: "サウリアンサキュレント", is_distributed: false },
        { name: "シロネン", country: "ナタ", weapon: "片手剣", element: "岩", birth_month: "３月", version: "n.1", rarity: ['☆５'], body_type: "長身女性", role: ["オフフィールドサポーター", "オフフィールドライフキーパー"], energy: 80, ascension_stat: "防御力", boss_material: "秘源機兵・機構デバイス", local_specialty: "シャクギク", is_distributed: false },
        // スネージナヤ
        { name: "タルタリヤ", country: "スネージナヤ", weapon: "弓", element: "水", birth_month: "７月", version: "n.1", rarity: ['☆５'], body_type: "長身男性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "水元素ダメージ", boss_material: "純水精霊", local_specialty: "星螺", is_distributed: false },
        { name: "アルレッキーノ", country: "スネージナヤ", weapon: "長柄武器", element: "炎", birth_month: "８月", version: "n.6", rarity: ['☆５'], body_type: "長身女性", role: ["オンフィールドタッカー"], energy: 60, ascension_stat: "会心ダメージ", boss_material: "魔像レガトゥス", local_specialty: "レインボーローズ", is_distributed: false },
        // ナドクライ
        { name: "イネファ", country: "ナドクライ", weapon: "長柄武器", element: "雷", birth_month: "４月", version: "n.8", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドアタッカー", "オフフィールドライフキーパー"], energy: 80, ascension_stat: "会心率", boss_material: "秘源機兵・統御デバイス", local_specialty: "蛍光ツノキノコ", is_distributed: false },
        { name: "フリンズ", country: "ナドクライ", weapon: "長柄武器", element: "雷", birth_month: "１０月", version: "n.0", rarity: ['☆５'], body_type: "長身男性", role: ["オンフィールドタッカー"], energy: 30, ascension_stat: "会心ダメージ", boss_material: "ボコボコダック", local_specialty: "フロストランプ", is_distributed: false },
        { name: "アイノ", country: "ナドクライ", weapon: "両手剣", element: "水", birth_month: "９月", version: "n.0", rarity: ['☆４'], body_type: "ロリ", role: ["オフフィールドサポーター"], energy: 50, ascension_stat: "元素熟知", boss_material: "ボコボコダック", local_specialty: "蛍行型ベアリング", is_distributed: true },
        { name: "ラウマ", country: "ナドクライ", weapon: "法器", element: "草", birth_month: "３月", version: "n.0", rarity: ['☆５'], body_type: "中身女性", role: ["オフフィールドサポーター"], energy: 60, ascension_stat: "元素熟知", boss_material: "集光の幻月蝶", local_specialty: "月落銀", is_distributed: false },
        // 例外
        { name: "旅人", country: "例外", weapon: "片手剣", element: "その他", birth_month: "その他", version: "n.0", rarity: ['☆５'], body_type: "中身男性", role: ["オンフィールドタッカー", "オフフィールドアタッカー"], energy: 60, ascension_stat: "攻撃力", boss_material: "", local_specialty: "風車アスター", is_distributed: false, aliases: ["空", "蛍", "風旅人", "水旅人", "草旅人", "炎旅人", "雷旅人"] },
        { name: "スカーク", country: "例外", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.7", rarity: ['☆５'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 0, ascension_stat: "会心ダメージ", boss_material: "深淵なるミミック・パピラ", local_specialty: "岩裂の花", is_distributed: false },
        { name: "アーロイ", country: "例外", weapon: "弓", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆５'], body_type: "中身女性", role: ["オンフィールドタッカー"], energy: 40, ascension_stat: "氷元素ダメージ", boss_material: "無相の氷", local_specialty: "晶化骨髄", is_distributed: true }
    ];

    const allWeapons = {
        "長柄武器": [
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
        { name: "アンドリアス", is_weekly: true }, { name: "公子", is_weekly: true }, { name: "若陀龍王", is_weekly: true }, { name: "淑女", is_weekly: true }, 
        { name: "禍津御建鳴神命", is_weekly: true }, { name: "正機の神", is_weekly: true }, { name: "アペプ", is_weekly: true }, { name: "吞星の鯨", is_weekly: true }, 
        { name: "召使", is_weekly: true }, { name: "グーシートース", is_weekly: true }, { name: "キング＆クイーン", is_weekly: true },
        { name: "シグルド", is_weekly: false }, { name: "ラスコーリニコフ", is_weekly: false }, { name: "カニ皇帝", is_weekly: false }, { name: "集光の幻月蝶", is_weekly: false }, { name: "ボコボコダック", is_weekly: false }, 
        { name: "無相の炎", is_weekly: false }, { name: "無相の水", is_weekly: false }, { name: "無相の風", is_weekly: false }, { name: "無相の雷", is_weekly: false }, { name: "無相の草", is_weekly: false }, { name: "無相の氷", is_weekly: false }, { name: "無相の岩", is_weekly: false }, 
        { name: "純水精霊", is_weekly: false }, { name: "雷音権現", is_weekly: false }, { name: "水形タルパ", is_weekly: false }, { name: "深罪の浸礼者", is_weekly: false }, { name: "黄金王獣", is_weekly: false }, { name: "深淵なるミミック・パピラ", is_weekly: false }, 
        { name: "遺跡サーペント", is_weekly: false }, { name: "恒常からくり陣形", is_weekly: false }, { name: "兆載永劫ドレイク", is_weekly: false }, { name: "半永久統制マトリックス", is_weekly: false }, 
        { name: "氷風組曲コペリウス", is_weekly: false }, { name: "氷風組曲コッペリア", is_weekly: false }, { name: "秘源機兵・機構デバイス", is_weekly: false }, { name: "魔偶剣鬼", is_weekly: false }, 
        { name: "実験用フィールド生成装置", is_weekly: false }, { name: "迷える霊覚の修権者", is_weekly: false }, { name: "爆炎樹", is_weekly: false }, { name: "迅電樹", is_weekly: false }, { name: "急凍樹", is_weekly: false }, 
        { name: "エンシェントヴィシャップ・岩", is_weekly: false }, { name: "アビサルヴィシャップ", is_weekly: false }, { name: "マッシュラプトル", is_weekly: false }, { name: "風食ウェネト", is_weekly: false }, 
        { name: "鉄甲熔炎帝王", is_weekly: false }, { name: "千年真珠の海駿", is_weekly: false }, { name: "山隠れの猊獣", is_weekly: false }, { name: "魔像レガトゥス", is_weekly: false }, 
        { name: "暴君・金焔のクク竜", is_weekly: false }, { name: "山の王・貪食のユムカ竜", is_weekly: false }, { name: "輝ける溶岩の龍像", is_weekly: false }, { name: "秘源機兵・統御デバイス", is_weekly: false },
        { name: "ヴィヴィアン", is_weekly: false }, { name: "ニニアン", is_weekly: false }, { name: "イゾルト", is_weekly: false }, { name: "リアム", is_weekly: false }, { name: "ロッキー", is_weekly: false }, { name: "ディアンナラ", is_weekly: false }, 
        { name: "赤璋巡岳府君", is_weekly: false }, { name: "シネアス", is_weekly: false }, { name: "異色三連星", is_weekly: false }, { name: "バラチコ", is_weekly: false }, { name: "コシーホ", is_weekly: false }, { name: "ジャプー", is_weekly: false }, 
        { name: "リライ", is_weekly: false }, { name: "銅の掟", is_weekly: false }, { name: "ピーク", is_weekly: false }, { name: "戦羊・鉄爪", is_weekly: false }, { name: "微末", is_weekly: false }, { name: "最後のテノチズトク人", is_weekly: false }
    ];
    const binds = [
        "国縛り", "モノ元素縛り", "武器種縛り", "誕生月", "各1.1縛り", "アルファベット縛り", 
        "体型縛り", "役割縛り", "元素エネルギー縛り", "ボス素材縛り", "特産品縛り", 
        "突破ステータス縛り(キャラ)", "突破ステータス縛り(武器)", "配布キャラ縛り", "配布武器縛り",
        "スキル禁止", "完凸禁止", "クラウン禁止",
        "☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "初期キャラのみ", 
        "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "キャラ武器ルーレット", 
        "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り", "☆１、聖遺物なし", "武器縛り"
    ];
    const initialCharacters = ["旅人", "リサ", "アンバー", "ガイア", "ノエル", "バーバラ", "レザー", "香菱", "北斗", "ベネット", "行秋", "凝光", "フィッシュル", "重雲", "スクロース", "ジン", "ディルック", "七七", "モナ", "刻晴", "ウェンティ", "クレー"];
    const ownership100Characters = ["香菱", "旅人", "ガイア", "バーバラ", "コレイ", "ノエル", "リサ", "アンバー"];
    const alphabetData = {"A": ["アイノ", "荒瀧一斗", "アルベド", "アルレッキーノ", "アルハイゼン", "アンバー", "アーロイ"], "B": ["バーバラ", "白朮", "ベネット", "北斗"], "C": ["キャンディス", "クロリンデ", "コレイ", "シャルロット", "シュヴルーズ", "シトラリ", "セノ", "千織", "チャスカ", "重雲"], "D": ["ドリー", "ディシア", "ディルック", "ディオナ", "ダリア"], "E": ["エミリエ", "エウルア", "エスコフィエ"], "F": ["フリンズ", "ファルザン", "フリーナ", "フレミネ", "フィッシュル"], "G": ["嘉明", "甘雨", "ゴロー"], "H": ["胡桃"], "I": ["イアンサ", "イファ", "イネファ"], "J": ["ジン"], "K": ["神里綾華", "神里綾人", "キィニチ", "綺良々", "久岐忍", "九条裟羅", "クレー", "刻晴", "カチーナ", "カーヴェ"], "L": ["ラウマ", "リサ", "リネ", "リネット", "レイラ", "藍硯"], "M": ["ミカ", "ムアラニ", "モナ", "マーヴィカ"], "N": ["ナヴィア", "ナヒーダ", "ニィロウ", "ヌヴィレット", "ノエル"], "O": ["オロルン"], "Q": ["七七"], "R": ["雷電将軍", "レザー", "ロサリア", "リオセスリ"], "S": ["早柚", "珊瑚宮心海", "鹿野院平蔵", "シグウィン", "申鶴", "スクロース", "セトス", "スカーク"], "T": ["旅人", "ティナリ", "タルタリヤ", "トーマ"], "V": ["ウェンティ", "ヴァレサ"], "W": ["放浪者"], "X": ["行秋", "魈", "香菱", "辛炎", "シロネン", "閑雲"], "Y": ["煙緋", "夜蘭", "雲菫", "八重神子", "宵宮", "ヨォーヨ", "夢見月瑞希"], "Z": ["鍾離"]};

    const countryOrder = ["モンド", "璃月", "稲妻", "スメール", "フォンテーヌ", "ナタ", "スネージナヤ", "ナドクライ", "例外"];
    const monthOrder = ["１月", "２月", "３月", "４月", "５月", "６月", "７月", "８月", "９月", "１０月", "１１月", "１２月"];

    const subRoulettes = {
        "国縛り": [...new Set(characters.map(c => c.country))].sort((a, b) => countryOrder.indexOf(a) - countryOrder.indexOf(b)),
        "モノ元素縛り": [...new Set(characters.filter(c => c.element !== "その他").map(c => c.element))].sort(),
        "武器種縛り": [...new Set(characters.map(c => c.weapon))].sort(),
        "誕生月": [...new Set(characters.filter(c => c.birth_month !== "その他").map(c => c.birth_month))].sort((a,b) => monthOrder.indexOf(a) - monthOrder.indexOf(b)),
        "各1.1縛り": [...new Set(characters.map(c => c.version))].filter(v => v !== 'その他').sort(),
        "アルファベット縛り": Object.keys(alphabetData).sort(),
        "武器縛り": Object.values(allWeapons).flat().map(w => w.name),

        "体型縛り": ["長身男性", "長身女性", "中身男性", "中身女性", "ロリ"],
        "役割縛り": ["オンフィールドアタッカー", "オンフィールドサポーター", "オンフィールドライフキーパー", "オフフィールドアタッカー", "オフフィールドサポーター", "オフフィールドライフキーパー"],
        "元素エネルギー縛り": ["0", "30", "40", "50", "60", "70", "80", "90"],
        "ボス素材縛り": ["無相の炎", "無相の水", "無相の風", "無相の雷", "無相の草", "無相の氷", "無相の岩", "純水精霊", "雷音権現", "水形タルパ", "深罪の浸礼者", "黄金王獣", "深淵なるミミック・パピラ", "遺跡サーペント", "恒常からくり陣形", "兆載永劫ドレイク", "半永久統制マトリックス", "氷風組曲コペリウス", "氷風組曲コッペリア", "秘源機兵・機構デバイス", "魔偶剣鬼", "実験用フィールド生成装置", "迷える霊覚の修権者", "爆炎樹", "迅電樹", "急凍樹", "エンシェントヴィシャップ・岩", "アビサルヴィシャップ", "マッシュラプトル", "風食ウェネト", "鉄甲熔炎帝王", "千年真珠の海駿", "山隠れの猊獣", "魔像レガトゥス", "暴君・金焔のクク竜", "山の王・貪食のユムカ竜", "輝ける溶岩の龍像", "秘源機兵・統御デバイス", "ボコボコダック", "集光の幻月蝶"],
        "特産品縛り": ["ドドリアン", "ググプラム", "ヴァルベリー", "セシリアの花", "風車アスター", "慕風のマッシュルーム", "イグサ", "蒲公英の種", "絶雲の唐辛子", "夜泊石", "霓裳花", "瑠璃百合", "清心", "瑠璃袋", "石珀", "星螺", "清水玉", "ウミレイシ", "鳴草", "緋櫻毬", "血石華", "オニカブトムシ", "晶化骨髄", "珊瑚真珠", "天雲草の実", "ユウトウタケ", "サウマラタ蓮", "ルッカデヴァータダケ", "カルパラタ蓮", "パティサラ", "赤念の実", "聖金虫", "砂脂蛹", "悼霊花", "サングイト", "蒼晶螺", "ロマリタイムフラワー", "ルミドゥースベル", "レインボーローズ", "ルエトワール", "探測ユニット・子機", "湖光の鈴蘭", "初露の源", "波しぶきのエラ", "シャクギク", "ケネパベリー", "サウリアンサキュレント", "枯れ紫菖", "蛍光ツノキノコ", "岩裂の花", "琉鱗石", "フロストランプ", "月落銀", "蛍行型ベアリング"],
        "突破ステータス縛り(キャラ)": ["会心ダメージ", "元素熟知", "元素チャージ効率", "会心率", "与える治療効果", "HP", "攻撃力", "防御力", "炎元素ダメージ", "水元素ダメージ", "雷元素ダメージ", "氷元素ダメージ", "風元素ダメージ", "岩元素ダメージ", "草元素ダメージ", "物理ダメージ"],
        "突破ステータス縛り(武器)": ["会心ダメージ", "元素熟知", "元素チャージ効率", "会心率", "物理ダメージ", "HP", "攻撃力", "防御力"]
    };
    
    const playerBindTypes = ["キャラルーレット", "キャラ武器ルーレット", "武器縛り", "アルファベット縛り", "誕生月", "武器種縛り", "体型縛り", "役割縛り", "元素エネルギー縛り", "ボス素材縛り", "特産品縛り", "突破ステータス縛り(キャラ)", "配布キャラ縛り"];
    
    const bindOrder = [
        // 優先度 1: キャラクター候補を大きく絞り込む縛り
        "国縛り", "モノ元素縛り", "各1.1縛り", "体型縛り", "役割縛り", "元素エネルギー縛り", "ボス素材縛り", "特産品縛り", "突破ステータス縛り(キャラ)",

        // 優先度 2: キャラクターの性質に関する縛り
        "恒常☆５縛り", "☆４キャラ武器", "初期キャラのみ", "所持率100％縛り", "配布キャラ縛り", "旅人縛り",

        // 優先度 3: 最終的な武器を決定または絞り込む縛り
        "武器種縛り", 
        "武器縛り",
        "突破ステータス縛り(武器)",
        "配布武器縛り",

        // 優先度 4: 個人に適用される絞り込み縛り (既に上で定義済み)
        "誕生月", "アルファベット縛り", 

        // 優先度 5: 最終的なキャラクターを決定する縛り
        "キャラルーレット", "キャラ武器ルーレット",

        // 優先度 6: プレイルール
        "スキル禁止", "元素エネルギー禁止", "完凸禁止", "クラウン禁止"
    ];


    let playerCount, bindCount, mode, currentRoulette, currentBindName, currentBindIndex, items, angle = 0, spinning = false, selectedBinds = [], results = {}, currentPlayer = 1, lastResult;
    let rerolledChars, rerolledWeapons;
    let prerenderedRoulette = null;
    let spinSpeed = 0;
    let rerolledCommonWeapons;
    let playerNames = [];
    let bindSelectionPhase, bindsToResolve;

    const canvas = document.getElementById('rouletteCanvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#00c0fe', '#36d6a0', '#fe6640', '#8dcc06', '#74E4E2', '#cc85ff', '#F3AC11'];

    function enforceMinMax(input) {
        let value = parseInt(input.value, 10);
        const min = parseInt(input.min, 10);
        const max = parseInt(input.max, 10);
        if (isNaN(value)) value = min;
        if (value > max) input.value = max;
        if (value < min) input.value = min;
    }
    
    const playerCountInput = document.getElementById('playerCount');
    const bindCountInput = document.getElementById('bindCount');
    playerCountInput.addEventListener('input', () => {
        enforceMinMax(playerCountInput);
        updatePlayerNameInputs();
    });
    bindCountInput.addEventListener('input', () => enforceMinMax(bindCountInput));


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
    
    document.getElementById('showAboutButton').addEventListener('click', () => {
        document.getElementById('aboutScreen').classList.remove('hidden');
    });
    document.getElementById('closeAboutButton').addEventListener('click', () => {
        document.getElementById('aboutScreen').classList.add('hidden');
    });
    document.getElementById('aboutScreen').addEventListener('click', (event) => {
        if (event.target === document.getElementById('aboutScreen')) {
            document.getElementById('aboutScreen').classList.add('hidden');
        }
    });
    document.getElementById('closePopupButton').addEventListener('click', () => {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('nextButton').classList.remove('hidden');
        if(currentRoulette === 'character' || currentRoulette === 'weapon' || (currentRoulette === 'sub' && currentBindName === '武器縛り')) {
            document.getElementById('notOwnedButton').classList.remove('hidden');
        }
    });


    function updatePlayerNameInputs() {
        const container = document.getElementById('playerNameInputsContainer');
        const currentCount = parseInt(playerCountInput.value) || 1;
        
        const existingNames = Array.from(container.querySelectorAll('.playerNameInput')).map(input => input.value);
        container.innerHTML = ''; 

        for (let i = 0; i < currentCount; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `playerName${i + 1}`;
            input.className = 'playerNameInput';
            input.placeholder = `プレイヤー${i + 1}の名前`;
            if(existingNames[i]) {
                input.value = existingNames[i];
            }
            container.appendChild(input);
        }
    }

    function updateCurrentPlayerDisplay() {
        const nameDisplay = document.getElementById('currentPlayerNameDisplay');
        if (bindSelectionPhase) {
            nameDisplay.textContent = '縛りの種類を選択中...';
        } else if (playerBindTypes.includes(currentBindName) && playerNames[currentPlayer - 1]) {
            nameDisplay.textContent = `${playerNames[currentPlayer - 1]} のルーレット`;
        } else {
            nameDisplay.textContent = ''; 
        }
    }

    function showScreen(screenId) {
        ['startScreen', 'bindSelection', 'rouletteScreen', 'resultScreen', 'customBindScreen'].forEach(id => {
            document.getElementById(id).classList.add('hidden');
        });
        document.getElementById(screenId).classList.remove('hidden');
    }
    
    function initialize() {
        playerCount = parseInt(playerCountInput.value) || 1;
        bindCount = parseInt(bindCountInput.value) || 1;
        
        playerNames = [];
        for (let i = 0; i < playerCount; i++) {
            const nameInput = document.getElementById(`playerName${i + 1}`);
            playerNames.push(nameInput.value || `プレイヤー${i + 1}`);
        }

        results = { boss: null, common: {}, players: Array(playerCount).fill(0).map(() => ({})) };
        currentPlayer = 1;
        currentBindIndex = 0;
        lastResult = null;
        rerolledChars = Array(playerCount + 1).fill(0).map(() => []);
        rerolledWeapons = Array(playerCount + 1).fill(0).map(() => ({}));
        rerolledCommonWeapons = [];
        bindSelectionPhase = false;
        bindsToResolve = [];
    }

    function showBindSelection() {
        initialize();
        mode = 'selected';
        showScreen('bindSelection');
        const bindButtons = document.getElementById('bindButtons');
        bindButtons.innerHTML = '';
        
        const selectableBinds = binds.filter(b => {
             const nonRouletteBinds = ["回復禁止", "UI非表示＋リロール", "爆発禁止＋リロール", "聖遺物禁止", "☆１、聖遺物なし", "旅人縛り", "誰か一人が倒れたら負け縛り", "無凸縛り", "スキル禁止", "完凸禁止", "クラウン禁止"];
             return !nonRouletteBinds.includes(b);
        });
        
        selectableBinds.forEach(bind => {
            const label = document.createElement('label');
            label.className = 'checkbox-label';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = bind;
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(bind));
            bindButtons.appendChild(label);
        });
    }

    function executeBinds() {
        bindsToResolve = Array.from(document.querySelectorAll('#bindButtons input:checked')).map(cb => {
            const bindName = cb.value;
            if (playerBindTypes.includes(bindName)) {
                const binds = [];
                for (let i = 1; i <= playerCount; i++) {
                    binds.push({ name: bindName, player: i });
                }
                return binds;
            }
            return { name: bindName, player: 0 };
        }).flat();

        if (bindsToResolve.length === 0) {
            alert("縛りを1つ以上選択してください。");
            return;
        }
        
        bindsToResolve.sort((a, b) => {
            const indexA = bindOrder.indexOf(a.name) !== -1 ? bindOrder.indexOf(a.name) : Infinity;
            const indexB = bindOrder.indexOf(b.name) !== -1 ? bindOrder.indexOf(b.name) : Infinity;
            return indexA - indexB;
        });
        
        mode = 'selected';
        currentBindIndex = 0;
        startNextSelectedBind();
    }
    
    function startNextSelectedBind() {
        if(currentBindIndex >= bindsToResolve.length) {
            showResults();
            return;
        }
        const bindInfo = bindsToResolve[currentBindIndex];
        setupRouletteForBind(bindInfo.name, bindInfo.player || 1);
    }
    
    function startRoulette(type) {
        initialize();
        mode = type;
        showScreen('rouletteScreen');
        if (type === 'all' || type === 'boss') {
            currentRoulette = 'boss';
            items = bosses.map(b => b.name);
        } else if (type === 'bind') {
            bindSelectionPhase = true;
            currentRoulette = 'bind';
            items = getAvailableBinds();
        }
        updateCurrentPlayerDisplay();
        document.getElementById('spinButton').disabled = false;
        prerenderRouletteImage();
        drawRoulette();
    }
    
    function setupRouletteForBind(bindName, player = 1) {
        currentBindName = bindName;
        currentPlayer = player;

        const currentFilters = {...results.common, ...results.players[currentPlayer - 1]};

        if (subRoulettes[bindName]) {
            currentRoulette = 'sub';
            let subItems = subRoulettes[bindName];

            if (bindName === "武器縛り") {
                const weaponTypeFilter = currentFilters["武器種縛り"];
                if(weaponTypeFilter) {
                    subItems = allWeapons[weaponTypeFilter].map(w => w.name);
                }
                if(currentFilters["☆４キャラ武器"]) {
                    subItems = subItems.filter(w => !star5Weapons.includes(w));
                }
            } else if (bindName === "突破ステータス縛り(武器)") {
                // This is a weapon filter, it shouldn't filter characters, so we don't filter subItems
            } else {
                 subItems = subItems.filter(option => {
                    const tempWithOption = {...currentFilters};
                    tempWithOption[bindName] = option;
                    return characters.some(char => checkCharEligibility(char, tempWithOption));
                 });
            }
            items = subItems.slice().sort(() => Math.random() - 0.5);

        } else if (bindName === 'キャラルーレット' || bindName === 'キャラ武器ルーレット') {
            currentRoulette = 'character';
            
            if (bindName === 'キャラ武器ルーレット' && hasPlayerBind('キャラルーレット', player)) {
                const charName = results.players[player - 1]['キャラルーレット'];
                const charData = characters.find(c => c.name === charName);
                currentRoulette = 'weapon';
                items = getFilteredWeapons(charData.weapon, charName).map(w => w.name);
            } else {
                 items = getFilteredCharacters(null, player).map(c => c.name).sort(() => Math.random() - 0.5);
            }
        } else {
            results.common[bindName] = true;
            proceedToNext();
            return;
        }

        updateCurrentPlayerDisplay();
        
        if (items.length <= 6 && items.length > 1) {
            const multiplier = Math.ceil(20 / items.length);
            let tempItems = [];
            for(let i = 0; i < multiplier; i++) {
                tempItems.push(...items);
            }
            items = tempItems;
        }

        prerenderRouletteImage();

        if (items.length <= 1 && currentRoulette !== 'boss' && currentRoulette !== 'bind') {
            if(items.length === 0) {
                alert(`選択可能な${bindName}の候補がありません。\n条件を見直してください。`);
                backToStart();
                return;
            }
            lastResult = items.length > 0 ? items[0] : '該当なし';
            processResult();
            showPopup(`${bindName}: ${lastResult} に確定しました`);
        } else {
            document.getElementById('spinButton').disabled = false;
            showScreen('rouletteScreen');
            drawRoulette();
        }
    }
    
    function checkCharEligibility(char, filters) {
        for (const bindName in filters) {
            const value = filters[bindName];
            if (!value) continue;
            let match = false;
            switch(bindName) {
                case "国縛り": if (char.country === value) match = true; break;
                case "モノ元素縛り": if (char.element === value) match = true; break;
                case "武器種縛り": if (char.weapon === value) match = true; break;
                case "誕生月": if (char.birth_month === value) match = true; break;
                case "各1.1縛り": if (char.version === value) match = true; break;
                case "体型縛り": if (char.body_type === value) match = true; break;
                case "役割縛り": if (char.name !== "旅人" && char.role.includes(value)) match = true; break;
                case "元素エネルギー縛り": if (char.energy == value) match = true; break;
                case "ボス素材縛り": if (char.boss_material === value) match = true; break;
                case "特産品縛り": if (char.local_specialty === value) match = true; break;
                case "突破ステータス縛り(キャラ)": if (char.ascension_stat === value) match = true; break;
                case "配布キャラ縛り": if (char.is_distributed) match = true; break;
                case "アルファベット縛り": 
                    if (alphabetData[value] && (alphabetData[value].includes(char.name) || (char.aliases && char.aliases.some(alias => alphabetData[value].includes(alias))))) {
                        match = true;
                    }
                    break;
                case "武器縛り": {
                    const weaponData = Object.values(allWeapons).flat().find(w => w.name === value);
                    if (weaponData && char.weapon === weaponData.type) match = true;
                    break;
                }
                case "恒常☆５縛り": if (char.rarity.includes('恒常☆５')) match = true; break;
                case "☆４キャラ武器": if (char.rarity.includes('☆４')) match = true; break;
                case "初期キャラのみ": if (initialCharacters.includes(char.name)) match = true; break;
                case "旅人縛り": if (char.name === "旅人") match = true; break;
                case "所持率100％縛り": if (ownership100Characters.includes(char.name)) match = true; break;
                default: match = true; break;
            }
            if (!match) return false;
        }
        return true;
    }
    
    function getFilteredCharacters(customFilters = null, player = currentPlayer) {
        const filters = customFilters ? customFilters : {...results.common, ...results.players[player - 1]};
        const rerolled = rerolledChars[player];
        
        let filtered = characters.filter(c => !rerolled.includes(c.name));
        
        if (results.boss && bosses.find(b => b.name === results.boss && b.is_weekly)) {
             const allSelectedChars = results.players.map(p => p['キャラルーレット'] || (p['キャラ武器ルーレット'] ? p['キャラ武器ルーレット'].char : null)).filter(Boolean);
             filtered = filtered.filter(c => !allSelectedChars.includes(c.name));
        }

        return filtered.filter(c => checkCharEligibility(c, filters));
    }

    function getFilteredWeapons(weaponType, charName) {
        let weaponList = allWeapons[weaponType];
        if (results.common["☆４キャラ武器"]) {
            weaponList = weaponList.filter(w => !star5Weapons.includes(w.name));
        }
        if (results.common["配布武器縛り"]) {
            weaponList = weaponList.filter(w => w.is_distributed);
        }
        if (results.common["突破ステータス縛り(武器)"]) {
            weaponList = weaponList.filter(w => w.ascension_stat === results.common["突破ステータス縛り(武器)"]);
        }
        const currentPlayerRerolledWeapons = rerolledWeapons[currentPlayer][charName] || [];
        weaponList = weaponList.filter(w => !currentPlayerRerolledWeapons.includes(w.name));
        return weaponList;
    }
    
    function prerenderRouletteImage() {
        if (!items || items.length === 0) {
            prerenderedRoulette = null;
            return;
        }
        prerenderedRoulette = document.createElement('canvas');
        prerenderedRoulette.width = canvas.width;
        prerenderedRoulette.height = canvas.height;
        const pctx = prerenderedRoulette.getContext('2d');
        
        const radius = canvas.width / 2 - 20;
        const arc = 2 * Math.PI / items.length;
        for (let i = 0; i < items.length; i++) {
            const startAngle = i * arc;
            pctx.beginPath();
            pctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, startAngle + arc);
            pctx.lineTo(canvas.width / 2, canvas.height / 2);
            const gradient = pctx.createLinearGradient(canvas.width / 2 + Math.cos(startAngle) * radius, canvas.height / 2 + Math.sin(startAngle) * radius, canvas.width / 2 + Math.cos(startAngle + arc) * radius, canvas.height / 2 + Math.sin(startAngle + arc) * radius);
            gradient.addColorStop(0, colors[i % colors.length]);
            gradient.addColorStop(1, colors[(i + 1) % colors.length]);
            pctx.fillStyle = gradient;
            pctx.fill();
            pctx.save();
            pctx.translate(canvas.width / 2, canvas.height / 2);
            pctx.rotate(startAngle + arc / 2);
            pctx.fillStyle = '#fff';
            pctx.font = '14px Arial';
            pctx.textAlign = 'right';
            pctx.textBaseline = 'middle';
            pctx.fillText(items[i], radius - 10, 0);
            pctx.restore();
        }
    }

    function drawRoulette() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (!prerenderedRoulette) {
            ctx.fillStyle = '#fff';
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('対象アイテムがありません', canvas.width / 2, canvas.height / 2);
             if (items && items.length === 0 && (mode === 'bind' || mode === 'selected' || mode === 'custom_selected')) {
                alert(`選択可能な候補がありません。\n条件を見直してください。`);
                backToStart();
            }
            return;
        }
        
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(angle);
        ctx.drawImage(prerenderedRoulette, -canvas.width / 2, -canvas.height / 2);
        ctx.restore();
        
        const arrowBaseX = canvas.width / 2 + (canvas.width / 2 - 20);
        ctx.beginPath();
        ctx.moveTo(arrowBaseX, canvas.height / 2 - 10);
        ctx.lineTo(arrowBaseX, canvas.height / 2 + 10);
        ctx.lineTo(arrowBaseX - 25, canvas.height / 2);
        ctx.closePath();
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
    };
    
    function spinRoulette() {
        if (spinning || !items || items.length === 0) return;
        spinning = true;
        spinSpeed = 0.2 + Math.random() * 0.1;
        document.getElementById('spinButton').disabled = true;
        document.getElementById('stopButton').disabled = false;
        document.getElementById('notOwnedButton').classList.add('hidden');
        document.getElementById('nextButton').classList.add('hidden');
        animate();
    };
    function animate() {
        if (!spinning) return;
        angle += spinSpeed;
        drawRoulette();
        if (spinSpeed > 0.001) { requestAnimationFrame(animate); }
    };
    function stopRoulette() {
        if (!spinning || spinSpeed === 0) return;
        const stopInterval = setInterval(() => {
            spinSpeed *= 0.96;
            angle += spinSpeed;
            if (Math.abs(spinSpeed) < 0.001) {
                spinSpeed = 0;
                spinning = false;
                clearInterval(stopInterval);
                const arc = 2 * Math.PI / items.length;
                const finalAngle = angle % (2 * Math.PI);
                let index = Math.floor(((2 * Math.PI - finalAngle) % (2 * Math.PI)) / arc);
                lastResult = items[index];
                showPopup(lastResult);
            } else {
                drawRoulette();
            }
        }, 20);
        document.getElementById('stopButton').disabled = true;
    };
    
    function showPopup(text) {
        const popup = document.getElementById('popup');
        document.getElementById('popupText').textContent = text;
        popup.style.display = 'block';
        
        const nextButton = document.getElementById('nextButton');
        const notOwnedButton = document.getElementById('notOwnedButton');
        
        document.getElementById('nextButton').classList.remove('hidden');
        if(currentRoulette === 'character' || currentRoulette === 'weapon' || (currentRoulette === 'sub' && currentBindName === '武器縛り')) {
            notOwnedButton.classList.remove('hidden');
        }
    };
    
    function nextStep() {
        document.getElementById('popup').style.display = 'none';
        processResult();
        document.getElementById('nextButton').classList.add('hidden');
        document.getElementById('notOwnedButton').classList.add('hidden');
    }

    function processResult() {
        if (lastResult === '該当なし') {
            proceedToNext();
            return;
        }

        if (bindSelectionPhase) {
            bindsToResolve.push(lastResult);
            if (lastResult.includes("リロール")) {
                bindCount++;
            }

            if (bindsToResolve.length < bindCount) {
                items = getAvailableBinds();
                prerenderRouletteImage();
                drawRoulette();
                document.getElementById('spinButton').disabled = false;
            } else {
                bindSelectionPhase = false;
                
                let fullBindsToResolve = [];
                bindsToResolve.forEach(bindName => {
                    if (playerBindTypes.includes(bindName)) {
                        for (let i = 1; i <= playerCount; i++) {
                            fullBindsToResolve.push({ name: bindName, player: i });
                        }
                    } else {
                        fullBindsToResolve.push({ name: bindName, player: 0 });
                    }
                });

                fullBindsToResolve.sort((a, b) => {
                    const indexA = bindOrder.indexOf(a.name) !== -1 ? bindOrder.indexOf(a.name) : Infinity;
                    const indexB = bindOrder.indexOf(b.name) !== -1 ? bindOrder.indexOf(b.name) : Infinity;
                    return indexA - indexB;
                });
                bindsToResolve = fullBindsToResolve;
                currentBindIndex = 0;
                startNextSelectedBind();
            }
            return;
        }

        if (currentRoulette === 'boss') {
            results.boss = lastResult;
            if (mode === 'boss') { 
                showResults(); 
                return;
            } else if (mode === 'all') {
                bindSelectionPhase = true;
                currentRoulette = 'bind';
                items = getAvailableBinds();
                updateCurrentPlayerDisplay();
                prerenderRouletteImage();
                drawRoulette();
                document.getElementById('spinButton').disabled = false;
                return;
            }
        }
        
        const isPlayerSpecific = playerBindTypes.includes(currentBindName);

        if (isPlayerSpecific) {
            if (currentBindName === 'キャラ武器ルーレット') {
                if (currentRoulette === 'character') {
                    results.players[currentPlayer - 1][currentBindName] = { char: lastResult, weapon: null };
                    currentRoulette = 'weapon';
                    const charData = characters.find(c => c.name === lastResult);
                    items = getFilteredWeapons(charData.weapon, lastResult).map(w => w.name);
                    updateCurrentPlayerDisplay();
                    prerenderRouletteImage();
                    drawRoulette();
                    document.getElementById('spinButton').disabled = false;
                    return;
                } else if (currentRoulette === 'weapon') {
                    results.players[currentPlayer - 1][currentBindName].weapon = lastResult;
                }
            } else {
                results.players[currentPlayer - 1][currentBindName] = lastResult;
            }
        } else {
            results.common[currentBindName] = lastResult;
        }
        
        proceedToNext();
    }
    
    function hasPlayerBind(bindName, player = currentPlayer) {
        if (!results.players[player - 1]) return false;
        return !!results.players[player - 1][bindName];
    }
    
    function proceedToNext() {
        if (mode === 'selected' || mode === 'custom_selected' || (mode === 'all' && !bindSelectionPhase) || (mode === 'bind' && !bindSelectionPhase)) {
            currentBindIndex++;
            startNextSelectedBind();
        } else {
            showResults();
        }
    }

    function getAvailableBinds() {
        let available = [...binds];
        const allSelectedBinds = [...Object.keys(results.common), ...bindsToResolve, ...Object.keys(results.players.flat().reduce((acc, obj) => ({...acc, ...obj}), {}))];
        
        available = available.filter(b => !allSelectedBinds.includes(b));
        
        return available.filter(bind => {
            const tempFilters = { ...results.common };
            if (subRoulettes[bind]) {
                 return subRoulettes[bind].some(option => {
                     const tempSubFilters = {...tempFilters, [bind]: option};
                     return characters.some(char => checkCharEligibility(char, tempSubFilters));
                 });
            }
            return getFilteredCharacters({ ...tempFilters }).length > 0;
        }).slice().sort(() => Math.random() - 0.5);
    }
    
    function notOwned() {
        document.getElementById('popup').style.display = 'none';
        if(currentRoulette === 'character') {
            rerolledChars[currentPlayer].push(lastResult);
            items = getFilteredCharacters(null, currentPlayer).map(c => c.name).sort(() => Math.random() - 0.5);
        } else if (currentRoulette === 'weapon') {
            const charName = results.players[currentPlayer - 1]['キャラ武器ルーレット'].char;
            if (!rerolledWeapons[currentPlayer][charName]) rerolledWeapons[currentPlayer][charName] = [];
            rerolledWeapons[currentPlayer][charName].push(lastResult);
            const weaponType = characters.find(c => c.name === charName).weapon;
            items = getFilteredWeapons(weaponType, charName).map(w => w.name);
        } else if (currentRoulette === 'sub' && currentBindName === '武器縛り') {
            rerolledCommonWeapons.push(lastResult);
            
            let filteredWeapons = subRoulettes['武器縛り'];
            let filters = playerBindTypes.includes(currentBindName) ? {...results.common, ...results.players[currentPlayer - 1]} : results.common;
            
            const weaponTypeFilter = filters["武器種縛り"];
            if(weaponTypeFilter) {
                filteredWeapons = allWeapons[weaponTypeFilter].map(w => w.name);
            }
            if(filters["☆４キャラ武器"]) {
                filteredWeapons = filteredWeapons.filter(w => !star5Weapons.includes(w));
            }

            items = filteredWeapons.filter(w => !rerolledCommonWeapons.includes(w)).slice().sort(() => Math.random() - 0.5);
        }
        
        if (items.length === 0) {
            alert("候補がいなくなりました！");
            proceedToNext();
            return;
        }
        document.getElementById('notOwnedButton').classList.add('hidden');
        document.getElementById('nextButton').classList.add('hidden');
        document.getElementById('spinButton').disabled = false;
        prerenderRouletteImage();
        drawRoulette();
    }

    function showResults() {
        showScreen('resultScreen');
        const resultsDiv = document.getElementById('results');
        let html = `<h2>ボス：${results.boss || "未選択"}</h2>`;
        
        const commonKeys = Object.keys(results.common);
        if (commonKeys.length > 0) {
            html += `<h3>共通の縛り：</h3><ul>`;
            commonKeys.forEach(key => {
                let resultText = key;
                const resultValue = results.common[key];
                if (resultValue !== true) resultText += `：${resultValue}`;
                html += `<li>${resultText}</li>`;
            });
            html += `</ul>`;
        }

        for (let i = 0; i < playerCount; i++) {
            const playerBinds = results.players[i];
            const playerBindKeys = Object.keys(playerBinds);
            if (playerBindKeys.length > 0) {
                html += `<h3>${playerNames[i]}の縛り：<button class="reroll-player-button" data-player-index="${i}">このプレイヤーを再抽選</button></h3><ul>`;
                playerBindKeys.forEach(bindName => {
                    const resultDetail = playerBinds[bindName];
                    let detailHtml = '';
                    if (bindName === "キャラ武器ルーレット") {
                        const char = resultDetail.char || "未選択";
                        let weapon = resultDetail.weapon || playerBinds['武器縛り'] || "未選択";
                        if (results.common['☆１、聖遺物なし']) weapon = "☆１武器";
                        detailHtml = `${char} - ${weapon}`;
                    } else {
                        detailHtml = resultDetail || "未選択";
                    }
                    html += `<li>${bindName}：${detailHtml}</li>`;
                });
                html += `</ul>`;
            }

            let finalChars;
            const playerHasCharRoulette = hasPlayerBind('キャラルーレット', i + 1);
            const playerHasCharWeaponRoulette = hasPlayerBind('キャラ武器ルーレット', i + 1);

            if (playerHasCharRoulette || playerHasCharWeaponRoulette) {
                const charName = playerBinds['キャラルーレット'] || (playerBinds['キャラ武器ルーレット'] ? playerBinds['キャラ武器ルーレット'].char : null);
                finalChars = charName ? [{ name: charName }] : [];
            } else {
                finalChars = getFilteredCharacters(null, i + 1);
            }
            
            html += `<h3>${playerNames[i]}の対象キャラクター (${finalChars.length}人)：</h3>`;
            if(finalChars.length > 0){
                html += `<p class="char-list-final">${finalChars.map(c => c.name).join('、')}</p>`;
            } else {
                html += `<p>条件を満たすキャラクターはいません</p>`;
            }
        }

        resultsDiv.innerHTML = html;

        document.querySelectorAll('.reroll-player-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const playerIndex = parseInt(e.target.dataset.playerIndex);
                rerollPlayer(playerIndex);
            });
        });
    }

    function rerollPlayer(playerIndex) {
        const playerBindsToReroll = Object.keys(results.players[playerIndex]);
        results.players[playerIndex] = {};
        
        const rerollBinds = playerBindsToReroll.map(name => ({name, player: playerIndex + 1}));
        
        bindsToResolve = rerollBinds.sort((a, b) => {
            const indexA = bindOrder.indexOf(a.name) !== -1 ? bindOrder.indexOf(a.name) : Infinity;
            const indexB = bindOrder.indexOf(b.name) !== -1 ? bindOrder.indexOf(b.name) : Infinity;
            return indexA - indexB;
        });

        currentBindIndex = 0;
        mode = 'custom_selected'; // Set a mode to handle this flow
        startNextCustomBind();
    }
    
    function backToStart() {
        spinning = false;
        initialize();
        showScreen('startScreen');
    }
    
    function showCustomBindScreen() {
        initialize();
        mode = 'custom';
        showScreen('customBindScreen');
        const charGridContainer = document.getElementById('customBindsCharGrid');
        const charButtonsContainer = document.getElementById('customBindsCharButtons');
        const weaponGridContainer = document.getElementById('customBindsWeaponGrid');
        const weaponButtonsContainer = document.getElementById('customBindsWeaponButtons');
        const ruleButtonsContainer = document.getElementById('customBindsRuleButtons');
        
        [charGridContainer, charButtonsContainer, weaponGridContainer, weaponButtonsContainer, ruleButtonsContainer].forEach(c => c.innerHTML = '');
        
        const playersContainer = document.getElementById('customBindsPlayersContainer');
        playersContainer.innerHTML = '';

        const charSelectBinds = ['国縛り', 'モノ元素縛り', '各1.1縛り', '体型縛り', '役割縛り', '元素エネルギー縛り', 'ボス素材縛り', '特産品縛り', '突破ステータス縛り(キャラ)'];
        const charCheckBinds = ['恒常☆５縛り', '初期キャラのみ', '所持率100％縛り', '旅人縛り', '配布キャラ縛り', 'キャラルーレット', 'キャラ武器ルーレット'];
        const weaponSelectBinds = ['武器種縛り', '突破ステータス縛り(武器)'];
        const weaponCheckBinds = ['☆４キャラ武器', '配布武器縛り', '武器縛り'];
        const ruleCheckBinds = ['回復禁止', 'スキル禁止', '完凸禁止', 'クラウン禁止', 'UI非表示＋リロール', '誰か一人が倒れたら負け縛り', '無凸縛り', '聖遺物禁止', '爆発禁止＋リロール', '☆１、聖遺物なし'];

        charSelectBinds.forEach(name => createBindItem(name, 'select', charGridContainer));
        charCheckBinds.forEach(name => createBindItem(name, 'check', charButtonsContainer));
        weaponSelectBinds.forEach(name => createBindItem(name, 'select', weaponGridContainer));
        weaponCheckBinds.forEach(name => createBindItem(name, 'check', weaponButtonsContainer));
        ruleCheckBinds.forEach(name => createBindItem(name, 'check', ruleButtonsContainer));

        for (let i = 1; i <= playerCount; i++) {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'custom-binds-section';
            playerDiv.innerHTML = `<h3>${playerNames[i-1]}の縛り</h3>`;
            
            const playerGrid = document.createElement('div');
            playerGrid.className = 'custom-bind-grid';
            ['武器種縛り', '誕生月', 'アルファベット縛り'].forEach(name => createBindItem(name, 'select', playerGrid, i));
            
            const playerButtons = document.createElement('div');
            playerButtons.className = 'button-group-checkbox';
            ['武器縛り', 'キャラルーレット', 'キャラ武器ルーレット'].forEach(name => createBindItem(name, 'check', playerButtons, i));
            
            playerDiv.appendChild(playerGrid);
            playerDiv.appendChild(playerButtons);
            playersContainer.appendChild(playerDiv);
        }
    }

    function createBindItem(name, type, container, playerIndex = 0) {
        const itemDiv = document.createElement('div');
        itemDiv.className = type === 'check' ? 'checkbox-label' : 'custom-bind-item';
        
        const label = document.createElement('label');
        label.className = 'checkbox-label-main';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.dataset.bindName = name;
        if(playerIndex > 0) checkbox.dataset.player = playerIndex;
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${name}`));
        itemDiv.appendChild(label);

        if (type === 'select') {
            const select = document.createElement('select');
            select.dataset.detailFor = name;
            if(playerIndex > 0) select.dataset.player = playerIndex;
            select.style.display = 'none'; 
            
            const randomOption = document.createElement('option');
            randomOption.value = 'random';
            randomOption.textContent = 'ランダム';
            select.appendChild(randomOption);

            subRoulettes[name].forEach(opt => {
                const option = document.createElement('option');
                option.value = opt;
                option.textContent = opt;
                select.appendChild(option);
            });
            itemDiv.appendChild(select);
            
            checkbox.addEventListener('change', (e) => {
                select.style.display = e.target.checked ? 'inline-block' : 'none';
            });
        }
        container.appendChild(itemDiv);
    }
    
    function executeCustomBinds() {
        initialize(); 
        mode = 'custom_selected';
        bindsToResolve = [];
        results.players = Array(playerCount).fill(0).map(() => ({}));
        
        const bindItems = document.querySelectorAll('#customBindScreen input[type="checkbox"]');

        bindItems.forEach(checkbox => {
            if (checkbox.checked) {
                const bindName = checkbox.dataset.bindName;
                const player = checkbox.dataset.player;
                const select = checkbox.closest('.custom-bind-item, .checkbox-label').querySelector('select');
                
                let target = player ? results.players[player - 1] : results.common;
                let needsRoulette = subRoulettes[bindName] || bindName === 'キャラルーレット' || bindName === 'キャラ武器ルーレット';

                if (select) { 
                    const selectedValue = select.value;
                    if (selectedValue === 'random') {
                        if (playerBindTypes.includes(bindName) && player) {
                             bindsToResolve.push({ name: bindName, player: parseInt(player) });
                        } else {
                            bindsToResolve.push({ name: bindName, player: 0 });
                        }
                    } else {
                        target[bindName] = selectedValue;
                    }
                } else {
                     if (needsRoulette) {
                        if (playerBindTypes.includes(bindName) && player) {
                            bindsToResolve.push({ name: bindName, player: parseInt(player) });
                        } else {
                            bindsToResolve.push({ name: bindName, player: 0 });
                        }
                     } else {
                        target[bindName] = true;
                     }
                }
            }
        });

        if (results.common['恒常☆５縛り'] && results.common['☆４キャラ武器']) {
             alert('「恒常☆５縛り」と「☆４キャラ武器」は同時に選択できません。');
             return;
        }

        bindsToResolve.sort((a, b) => {
            const indexA = bindOrder.indexOf(a.name) !== -1 ? bindOrder.indexOf(a.name) : Infinity;
            const indexB = bindOrder.indexOf(b.name) !== -1 ? bindOrder.indexOf(b.name) : Infinity;
            return indexA - indexB;
        });
        
        currentBindIndex = 0;
        startNextCustomBind();
    }

    function startNextCustomBind() {
        if (currentBindIndex >= bindsToResolve.length) {
            showResults();
            return;
        }
        const bindInfo = bindsToResolve[currentBindIndex];
        setupRouletteForBind(bindInfo.name, bindInfo.player || 1);
    }

    updatePlayerNameInputs();
});
