// このファイルは前回の回答からバグを修正した最終版です。
document.addEventListener('DOMContentLoaded', function() {


    const characters = [
        // モンド
        { name: "ジン", country: "モンド", weapon: "片手剣", element: "風", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "アンバー", country: "モンド", weapon: "弓", element: "炎", birth_month: "８月", version: "n.0", rarity: ['☆４'] },
        { name: "リサ", country: "モンド", weapon: "法器", element: "雷", birth_month: "６月", version: "n.0", rarity: ['☆４'] },
        { name: "ガイア", country: "モンド", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.0", rarity: ['☆４'] },
        { name: "バーバラ", country: "モンド", weapon: "法器", element: "水", birth_month: "７月", version: "n.0", rarity: ['☆４'] },
        { name: "ディルック", country: "モンド", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "レザー", country: "モンド", weapon: "両手剣", element: "雷", birth_month: "９月", version: "n.0", rarity: ['☆４'] },
        { name: "ウェンティ", country: "モンド", weapon: "弓", element: "風", birth_month: "６月", version: "n.0", rarity: ['☆５'] },
        { name: "クレー", country: "モンド", weapon: "法器", element: "炎", birth_month: "７月", version: "n.0", rarity: ['☆５'] },
        { name: "ベネット", country: "モンド", weapon: "片手剣", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆４'] },
        { name: "ノエル", country: "モンド", weapon: "両手剣", element: "岩", birth_month: "３月", version: "n.0", rarity: ['☆４'] },
        { name: "フィッシュル", country: "モンド", weapon: "弓", element: "雷", birth_month: "５月", version: "n.0", rarity: ['☆４'] },
        { name: "スクロース", country: "モンド", weapon: "法器", element: "風", birth_month: "１１月", version: "n.0", rarity: ['☆４'] },
        { name: "モナ", country: "モンド", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "ディオナ", country: "モンド", weapon: "弓", element: "氷", birth_month: "１月", version: "n.1", rarity: ['☆４'] },
        { name: "アルベド", country: "モンド", weapon: "片手剣", element: "岩", birth_month: "９月", version: "n.2", rarity: ['☆５'] },
        { name: "ロサリア", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "１月", version: "n.4", rarity: ['☆４'] },
        { name: "エウルア", country: "モンド", weapon: "両手剣", element: "氷", birth_month: "１０月", version: "n.5", rarity: ['☆５'] },
        { name: "ミカ", country: "モンド", weapon: "長柄武器", element: "氷", birth_month: "８月", version: "n.5", rarity: ['☆４'] },
        { name: "ダリア", country: "モンド", weapon: "片手剣", element: "水", birth_month: "５月", version: "n.7", rarity: ['☆４'] },
        // 璃月
        { name: "魈", country: "璃月", weapon: "長柄武器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'] },
        { name: "北斗", country: "璃月", weapon: "両手剣", element: "雷", birth_month: "２月", version: "n.0", rarity: ['☆４'] },
        { name: "凝光", country: "璃月", weapon: "法器", element: "岩", birth_month: "８月", version: "n.0", rarity: ['☆４'] },
        { name: "香菱", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "１１月", version: "n.0", rarity: ['☆４'] },
        { name: "行秋", country: "璃月", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.0", rarity: ['☆４'] },
        { name: "重雲", country: "璃月", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'] },
        { name: "七七", country: "璃月", weapon: "片手剣", element: "氷", birth_month: "３月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "刻晴", country: "璃月", weapon: "片手剣", element: "雷", birth_month: "１１月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "鍾離", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "１２月", version: "n.1", rarity: ['☆５'] },
        { name: "辛炎", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１０月", version: "n.1", rarity: ['☆４'] },
        { name: "甘雨", country: "璃月", weapon: "弓", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆５'] },
        { name: "胡桃", country: "璃月", weapon: "長柄武器", element: "炎", birth_month: "７月", version: "n.3", rarity: ['☆５'] },
        { name: "煙緋", country: "璃月", weapon: "法器", element: "炎", birth_month: "７月", version: "n.5", rarity: ['☆４'] },
        { name: "申鶴", country: "璃月", weapon: "長柄武器", element: "氷", birth_month: "３月", version: "n.4", rarity: ['☆５'] },
        { name: "雲菫", country: "璃月", weapon: "長柄武器", element: "岩", birth_month: "５月", version: "n.4", rarity: ['☆４'] },
        { name: "夜蘭", country: "璃月", weapon: "弓", element: "水", birth_month: "４月", version: "n.7", rarity: ['☆５'] },
        { name: "ヨォーヨ", country: "璃月", weapon: "長柄武器", element: "草", birth_month: "３月", version: "n.4", rarity: ['☆４'] },
        { name: "白朮", country: "璃月", weapon: "法器", element: "草", birth_month: "４月", version: "n.6", rarity: ['☆５'] },
        { name: "閑雲", country: "璃月", weapon: "法器", element: "風", birth_month: "４月", version: "n.4", rarity: ['☆５'] },
        { name: "嘉明", country: "璃月", weapon: "両手剣", element: "炎", birth_month: "１２月", version: "n.4", rarity: ['☆４'] },
        { name: "藍硯", country: "璃月", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆４'] },
        // 稲妻
        { name: "神里綾華", country: "稲妻", weapon: "片手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆５'] },
        { name: "神里綾人", country: "稲妻", weapon: "片手剣", element: "水", birth_month: "３月", version: "n.6", rarity: ['☆５'] },
        { name: "楓原万葉", country: "稲妻", weapon: "片手剣", element: "風", birth_month: "１０月", version: "n.6", rarity: ['☆５'] },
        { name: "宵宮", country: "稲妻", weapon: "弓", element: "炎", birth_month: "６月", version: "n.0", rarity: ['☆５'] },
        { name: "早柚", country: "稲妻", weapon: "両手剣", element: "風", birth_month: "１０月", version: "n.0", rarity: ['☆４'] },
        { name: "雷電将軍", country: "稲妻", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'] },
        { name: "九条裟羅", country: "稲妻", weapon: "弓", element: "雷", birth_month: "７月", version: "n.1", rarity: ['☆４'] },
        { name: "珊瑚宮心海", country: "稲妻", weapon: "法器", element: "水", birth_month: "２月", version: "n.1", rarity: ['☆５'] },
        { name: "トーマ", country: "稲妻", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.2", rarity: ['☆４'] },
        { name: "荒瀧一斗", country: "稲妻", weapon: "両手剣", element: "岩", birth_month: "６月", version: "n.3", rarity: ['☆５'] },
        { name: "ゴロー", country: "稲妻", weapon: "弓", element: "岩", birth_month: "５月", version: "n.3", rarity: ['☆４'] },
        { name: "八重神子", country: "稲妻", weapon: "法器", element: "雷", birth_month: "６月", version: "n.5", rarity: ['☆５'] },
        { name: "久岐忍", country: "稲妻", weapon: "片手剣", element: "雷", birth_month: "７月", version: "n.7", rarity: ['☆４'] },
        { name: "鹿野院平蔵", country: "稲妻", weapon: "法器", element: "風", birth_month: "７月", version: "n.8", rarity: ['☆４'] },
        { name: "綺良々", country: "稲妻", weapon: "片手剣", element: "草", birth_month: "１月", version: "n.7", rarity: ['☆４'] },
        { name: "千織", country: "稲妻", weapon: "片手剣", element: "岩", birth_month: "８月", version: "n.5", rarity: ['☆５'] },
        { name: "夢見月瑞希", country: "稲妻", weapon: "法器", element: "風", birth_month: "３月", version: "n.4", rarity: ['☆５', '恒常☆５'] },
        // スメール
        { name: "ティナリ", country: "スメール", weapon: "弓", element: "草", birth_month: "１２月", version: "n.0", rarity: ['☆５', '恒常☆５'] },
        { name: "コレイ", country: "スメール", weapon: "弓", element: "草", birth_month: "５月", version: "n.0", rarity: ['☆４'] },
        { name: "ドリー", country: "スメール", weapon: "両手剣", element: "雷", birth_month: "１２月", version: "n.0", rarity: ['☆４'] },
        { name: "セノ", country: "スメール", weapon: "長柄武器", element: "雷", birth_month: "６月", version: "n.1", rarity: ['☆５'] },
        { name: "キャンディス", country: "スメール", weapon: "長柄武器", element: "水", birth_month: "５月", version: "n.1", rarity: ['☆４'] },
        { name: "ニィロウ", country: "スメール", weapon: "片手剣", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'] },
        { name: "ナヒーダ", country: "スメール", weapon: "法器", element: "草", birth_month: "１０月", version: "n.2", rarity: ['☆５'] },
        { name: "レイラ", country: "スメール", weapon: "片手剣", element: "氷", birth_month: "１２月", version: "n.2", rarity: ['☆４'] },
        { name: "放浪者", country: "スメール", weapon: "法器", element: "風", birth_month: "１月", version: "n.3", rarity: ['☆５'] },
        { name: "ファルザン", country: "スメール", weapon: "弓", element: "風", birth_month: "８月", version: "n.3", rarity: ['☆４'] },
        { name: "アルハイゼン", country: "スメール", weapon: "片手剣", element: "草", birth_month: "２月", version: "n.4", rarity: ['☆５'] },
        { name: "ディシア", country: "スメール", weapon: "両手剣", element: "炎", birth_month: "４月", version: "n.5", rarity: ['☆５', '恒常☆５'] },
        { name: "カーヴェ", country: "スメール", weapon: "両手剣", element: "草", birth_month: "７月", version: "n.6", rarity: ['☆４'] },
        { name: "セトス", country: "スメール", weapon: "弓", element: "雷", birth_month: "５月", version: "n.7", rarity: ['☆４'] },
        // フォンテーヌ
        { name: "リネ", country: "フォンテーヌ", weapon: "弓", element: "炎", birth_month: "２月", version: "n.0", rarity: ['☆５'] },
        { name: "リネット", country: "フォンテーヌ", weapon: "片手剣", element: "風", birth_month: "２月", version: "n.0", rarity: ['☆４'] },
        { name: "フレミネ", country: "フォンテーヌ", weapon: "両手剣", element: "氷", birth_month: "９月", version: "n.0", rarity: ['☆４'] },
        { name: "ヌヴィレット", country: "フォンテーヌ", weapon: "法器", element: "水", birth_month: "１２月", version: "n.1", rarity: ['☆５'] },
        { name: "リオセスリ", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "１１月", version: "n.1", rarity: ['☆５'] },
        { name: "シャルロット", country: "フォンテーヌ", weapon: "法器", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆４'] },
        { name: "フリーナ", country: "フォンテーヌ", weapon: "片手剣", element: "水", birth_month: "１０月", version: "n.2", rarity: ['☆５'] },
        { name: "ナヴィア", country: "フォンテーヌ", weapon: "両手剣", element: "岩", birth_month: "８月", version: "n.3", rarity: ['☆５'] },
        { name: "シュヴルーズ", country: "フォンテーヌ", weapon: "長柄武器", element: "炎", birth_month: "１月", version: "n.3", rarity: ['☆４'] },
        { name: "クロリンデ", country: "フォンテーヌ", weapon: "片手剣", element: "雷", birth_month: "９月", version: "n.7", rarity: ['☆５'] },
        { name: "シグウィン", country: "フォンテーヌ", weapon: "弓", element: "水", birth_month: "３月", version: "n.7", rarity: ['☆５'] },
        { name: "エミリエ", country: "フォンテーヌ", weapon: "長柄武器", element: "草", birth_month: "９月", version: "n.8", rarity: ['☆５'] },
        { name: "エスコフィエ", country: "フォンテーヌ", weapon: "長柄武器", element: "氷", birth_month: "６月", version: "n.6", rarity: ['☆５'] },
        // ナタ
        { name: "イアンサ", country: "ナタ", weapon: "長柄武器", element: "雷", birth_month: "８月", version: "n.5", rarity: ['☆４'] },
        { name: "チャスカ", country: "ナタ", weapon: "弓", element: "風", birth_month: "１２月", version: "n.2", rarity: ['☆５'] },
        { name: "ムアラニ", country: "ナタ", weapon: "法器", element: "水", birth_month: "８月", version: "n.0", rarity: ['☆５'] },
        { name: "オロルン", country: "ナタ", weapon: "弓", element: "雷", birth_month: "１０月", version: "n.2", rarity: ['☆４'] },
        { name: "キィニチ", country: "ナタ", weapon: "両手剣", element: "草", birth_month: "１１月", version: "n.0", rarity: ['☆５'] },
        { name: "カチーナ", country: "ナタ", weapon: "長柄武器", element: "岩", birth_month: "４月", version: "n.0", rarity: ['☆４'] },
        { name: "シトラリ", country: "ナタ", weapon: "法器", element: "氷", birth_month: "１月", version: "n.3", rarity: ['☆５'] },
        { name: "マーヴィカ", country: "ナタ", weapon: "両手剣", element: "炎", birth_month: "８月", version: "n.3", rarity: ['☆５'] },
        { name: "ヴァレサ", country: "ナタ", weapon: "法器", element: "雷", birth_month: "１１月", version: "n.5", rarity: ['☆５'] },
        { name: "イファ", country: "ナタ", weapon: "法器", element: "風", birth_month: "３月", version: "n.5", rarity: ['☆４'] },
        { name: "シロネン", country: "ナタ", weapon: "片手剣", element: "岩", birth_month: "３月", version: "n.1", rarity: ['☆５'] },
        // スネージナヤ
        { name: "タルタリヤ", country: "スネージナヤ", weapon: "弓", element: "水", birth_month: "７月", version: "n.1", rarity: ['☆５'] },
        { name: "アルレッキーノ", country: "スネージナヤ", weapon: "長柄武器", element: "炎", birth_month: "８月", version: "n.6", rarity: ['☆５'] },
        // ナドクライ
        { name: "イネファ", country: "ナドクライ", weapon: "長柄武器", element: "雷", birth_month: "４月", version: "n.8", rarity: ['☆５'] },
        { name: "フリンズ", country: "ナドクライ", weapon: "長柄武器", element: "雷", birth_month: "１０月", version: "n.0", rarity: ['☆５'] },
        { name: "アイノ", country: "ナドクライ", weapon: "両手剣", element: "水", birth_month: "９月", version: "n.0", rarity: ['☆４'] },
        { name: "ラウマ", country: "ナドクライ", weapon: "法器", element: "草", birth_month: "３月", version: "n.0", rarity: ['☆５'] },
        // 例外
        { name: "旅人", country: "例外", weapon: "片手剣", element: "その他", birth_month: "その他", version: "n.0", rarity: ['☆５'] },
        { name: "スカーク", country: "例外", weapon: "片手剣", element: "氷", birth_month: "１１月", version: "n.7", rarity: ['☆５'] },
        { name: "アーロイ", country: "例外", weapon: "弓", element: "氷", birth_month: "４月", version: "n.2", rarity: ['☆５'] }
    ];

    const star5Weapons = ["血染めの荒れ地","夜を紡ぐ天鏡","千烈の日輪", "ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "星鷲の紅き羽", "岩峰を巡る歌", "サーフィンタイム", "山の王の長牙", "ルミドゥースの挽歌", "赦罪", "白雨心弦", "赤月のシルエット", "有楽御簾切", "鶴鳴の余韻", "裁断", "静水流転の輝き", "凛流の監視者", "久遠流転の大典", "始まりの大魔術", "碧落の瓏", "葦海の標", "翠光の裁葉", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "聖顕の鍵", "赤砂の杖", "狩人の道", "若水", "飛来の鳴弦", "風鷹剣", "霧切の廻光", "アモスの弓", "赤角石塵滅砕", "破天の槍", "草薙の稲光", "蒼古なる自由への誓い", "終焉を嘆く詩", "神楽の真意", "盤岩結緑", "狼の末路", "波乱月白経津", "松韻の響く頃", "無工の剣", "斬山の刃", "護摩の杖", "息災", "天空の脊", "浮世の錠", "天空の翼", "天空の巻", "天空の刃", "天空の傲", "四風原典", "和璞鳶", "冬極の白星", "不滅の月華", "砕け散る光輪"];
    const allWeapons = {"長柄武器": ["血染めの荒れ地","金堀りのシャベル","香りのシンフォニスト", "砕け散る光輪", "玉響停の御噺", "鎮山の釘", "虹の行方", "ルミドゥースの挽歌", "赤月のシルエット", "砂中の賢者達の問答", "プロスペクタードリル", "フィヨルドの歌", "正義の報酬", "赤砂の杖", "風信の矛", "ムーンピアサー", "ドラゴンスピア", "黒缨槍", "黒岩の突槍", "鉄尖槍", "鉾槍", "破天の槍", "星鎌・試作", "西風長槍", "草薙の稲光", "白缨槍", "流月の針", "新米の長槍", "斬波のひれ長", "護摩の杖", "息災", "旧貴族猟槍", "天空の脊", "喜多院十文字槍", "和璞鳶", "千岩長槍", "「漁獲」", "匣中滅龍", "死闘の槍"], "法器": ["夜を紡ぐ天鏡","天光のリュート","烏髄の孤灯","ヴィヴィッド・ハート", "寝正月の初晴", "祭星者の眺め", "波乗りの旋回", "ヤシュチェの環", "蒼紋の角杯", "サーフィンタイム", "鶴鳴の余韻", "凛流の監視者", "久遠流転の大典", "果てなき紺碧の唄", "古祠の瓏", "純水流華", "碧落の瓏", "トゥライトゥーラの記憶", "千夜に浮かぶ夢", "彷徨える星", "満悦の実", "黒岩の緋玉", "魔導緒論", "金珀・試作", "誓いの明瞳", "龍殺しの英傑譚", "西風秘典", "翡玉法珠", "祭礼の断片", "神楽の真意", "白辰の輪", "特級の宝玉", "流浪楽章", "ダークアレイの酒と詩", "昭心", "冬忍びの実", "異世界旅行記", "浮世の錠", "旧貴族秘法録", "生徒ノート", "天空の巻", "四風原典", "ドドコの物語", "ポケット魔導書", "匣中日月", "不滅の月華", "万国諸海の図譜"], "弓": ["羅網の針", "冷寂の音", "星鷲の紅き羽","星鷲の紅き羽", "花飾りの羽", "チェーンブレイカー", "築雲", "白雨心弦", "レンジゲージ", "烈日の後嗣", "静寂の唄", "始まりの大魔術", "トキの嘴", "王の近侍", "竭沢", "狩人の道", "落霞", "若水", "黒岩の戦弓", "鴉羽の弓", "飛来の鳴弦", "風花の頌歌", "アモスの弓", "リングボウ", "澹月・試作", "西風猟弓", "青翠の狩猟弓", "絶弦", "終焉を嘆く詩", "祭礼の弓", "シャープシューターの誓い", "破魔の弓", "狩猟弓", "曚雲の月", "ダークアレイの狩人", "プレデター", "弾弓", "弓蔵", "幽夜のワルツ", "旧貴族長弓", "天空の翼", "リカーブボウ", "歴戦の狩猟弓", "冬極の白星", "文使い"], "両手剣": ["万能の鍵", "千烈の日輪", "実りの鉤鉈", "アースシェイカー", "山の王の長牙", "「スーパーアルティメット覇王魔剣」", "裁断", "携帯型チェンソー", "話死合い棒", "タイダル・シャドー", "葦海の標", "鉄彩の花", "マカイラの水色", "森林のレガリア", "黒岩の斬刀", "飛天大御剣", "雪葬の星銀", "雨裁", "鉄影段平", "鐘の剣", "赤角石塵滅砕", "古華・試作", "訓練用大剣", "西風大剣", "銜玉の海皇", "螭龍の剣", "祭礼の大剣", "白鉄の大剣", "白影の剣", "狼の末路", "龍血を浴びた剣", "桂木斬長正", "松韻の響く頃", "無工の剣", "惡王丸", "旧貴族大剣", "天空の傲", "千岩古剣", "知恵の溶炎", "傭兵の重剣", "理屈責め"], "片手剣": ["月紡ぎの曙光", "静謐の笛", "厄水の災い", "岩峰を巡る歌", "ストロングボーン", "エズピツァルの笛", "赦罪", "有楽御簾切", "水仙十字の剣", "静水流転の輝き", "船渠剣", "狼牙", "サーンドルの渡し守", "海淵のフィナーレ", "翠光の裁葉", "東花坊時雨", "サイフォスの月明かり", "聖顕の鍵", "原木刀", "籠鶴瓶一心", "黒岩の長剣", "黒剣", "黎明の神剣", "飛天御剣", "風鷹剣", "霧切の廻光", "降臨の剣", "銀の剣", "鉄蜂の刺し", "シナバースピンドル", "斬岩・試作", "西風剣", "蒼古なる自由への誓い", "腐食の剣", "笛の剣", "祭礼の剣", "盤岩結緑", "波乱月白経津", "暗鉄剣", "ダークアレイの閃光", "無鋒の剣", "旅道の剣", "斬山の刃", "旧貴族長剣", "天空の刃", "天目影打", "チ虎魚の刀", "匣中龍吟", "冷刃", "蒼耀"]};
    const bosses = ["シグルド", "ラスコーリニコフ", "カニ皇帝", "集光の幻月蝶", "ボコボコダック", "無相の炎", "無相の水", "無相の風", "無相の雷", "無相の草", "無相の氷", "無相の岩", "純水精霊", "雷音権現", "水形タルパ", "深罪の浸礼者", "黄金王獣", "深淵なるミミック・パピラ", "遺跡サーペント", "恒常からくり陣形", "兆載永劫ドレイク", "半永久統制マトリックス", "氷風組曲コペリウス", "氷風組曲コッペリア", "秘源機兵・機構デバイス", "魔偶剣鬼", "実験用フィールド生成装置", "迷える霊覚の修権者", "爆炎樹", "迅電樹", "急凍樹", "エンシェントヴィシャップ・岩", "アビサルヴィシャップ", "マッシュラプトル", "風食ウェネト", "鉄甲熔炎帝王", "千年真珠の海駿", "山隠れの猊獣", "魔像レガトゥス", "暴君・金焔のクク竜", "山の王・貪食のユムカ竜", "輝ける溶岩の龍像", "秘源機兵・統御デバイス", "アンドリアス", "公子", "若陀龍王", "淑女", "禍津御建鳴神命", "正機の神", "アペプ", "吞星の鯨", "召使", "グーシートース", "キング＆クイーン", "ヴィヴィアン", "ニニアン", "イゾルト", "リアム", "ロッキー", "ディアンナラ", "赤璋巡岳府君", "シネアス", "異色三連星", "バラチコ", "コシーホ", "ジャプー", "リライ", "銅の掟", "ピーク", "戦羊・鉄爪", "微末", "最後のテノチズトク人"];
    const binds = ["☆４キャラ武器", "回復禁止", "恒常☆５縛り", "所持率100％縛り", "国縛り", "初期キャラのみ", "UI非表示＋リロール", "誰か一人が倒れたら負け縛り", "無凸縛り", "キャラルーレット", "武器種縛り", "キャラ武器ルーレット", "聖遺物禁止", "爆発禁止＋リロール", "旅人縛り", "モノ元素縛り", "各1.1縛り", "誕生月", "アルファベット縛り", "☆１、聖遺物なし", "武器縛り"];
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
        "武器縛り": Object.values(allWeapons).flat()
    };
    
    const playerBindTypes = ["キャラルーレット", "キャラ武器ルーレット", "武器縛り", "アルファベット縛り", "誕生月", "武器種縛り"];

    const bindOrder = [
        "国縛り", "モノ元素縛り", "各1.1縛り",
        "恒常☆５縛り", "☆４キャラ武器", "初期キャラのみ", "所持率100％縛り", "旅人縛り",
        "武器種縛り", 
        "武器縛り",
        "誕生月", "アルファベット縛り",
        "キャラルーレット", "キャラ武器ルーレット"
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
    
    // ▼▼▼ 説明モーダルのイベントリスナーをここに集約 ▼▼▼
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
        updatePlayerNameInputs();
    }

    function showBindSelection() {
        initialize();
        mode = 'selected';
        showScreen('bindSelection');
        const bindButtons = document.getElementById('bindButtons');
        bindButtons.innerHTML = '';
        
        const selectableBinds = binds.filter(b => {
             const nonRouletteBinds = ["回復禁止", "UI非表示＋リロール", "爆発禁止＋リロール", "聖遺物禁止", "☆１、聖遺物なし", "旅人縛り", "誰か一人が倒れたら負け縛り", "無凸縛り"];
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
            items = bosses.slice().sort(() => Math.random() - 0.5);
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
                    subItems = allWeapons[weaponTypeFilter] || [];
                }
                if(currentFilters["☆４キャラ武器"]) {
                    subItems = subItems.filter(w => !star5Weapons.includes(w));
                }
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
                items = getFilteredWeapons(charData.weapon, charName);
            } else {
                 items = getFilteredCharacters(null, player).map(c => c.name).sort(() => Math.random() - 0.5);
            }
        } else {
            results.common[bindName] = true;
            proceedToNext();
            return;
        }

        updateCurrentPlayerDisplay();
        prerenderRouletteImage();

        if (items.length <= 1 && currentRoulette !== 'boss' && currentRoulette !== 'bind') {
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
                case "アルファベット縛り": if (alphabetData[value].includes(char.name)) match = true; break;
                case "武器縛り": {
                    const weaponType = Object.keys(allWeapons).find(type => allWeapons[type].includes(value));
                    if (char.weapon === weaponType) match = true;
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
        return filtered.filter(c => checkCharEligibility(c, filters));
    }

    function getFilteredWeapons(weaponType, charName) {
        let filtered = allWeapons[weaponType];
        if (results.common["☆４キャラ武器"]) {
            filtered = filtered.filter(w => !star5Weapons.includes(w));
        }
        const currentPlayerRerolledWeapons = rerolledWeapons[currentPlayer][charName] || [];
        filtered = filtered.filter(w => !currentPlayerRerolledWeapons.includes(w));
        return filtered.slice().sort(() => Math.random() - 0.5);
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
             if (items && items.length === 0 && (mode === 'bind' || mode === 'selected')) {
                 setTimeout(() => { proceedToNext(); }, 100);
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
        const popupText = document.getElementById('popupText');
        const closeButton = document.getElementById('closePopupButton');

        popupText.textContent = text;
        popup.classList.remove('hidden');

        // ポップアップを閉じる関数
        const closePopup = () => {
            popup.classList.add('hidden');
            document.getElementById('nextButton').classList.remove('hidden');
            if(currentRoulette === 'character' || currentRoulette === 'weapon' || (currentRoulette === 'sub' && currentBindName === '武器縛り')) {
                document.getElementById('notOwnedButton').classList.remove('hidden');
            }
            // イベントリスナーを毎回削除して重複を防ぐ
            closeButton.removeEventListener('click', closePopup);
        };

        // 閉じるボタンにクリックイベントを設定
        closeButton.addEventListener('click', closePopup);
    };
    
    function nextStep() {
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
                    items = getFilteredWeapons(charData.weapon, lastResult);
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
        if(currentRoulette === 'character') {
            rerolledChars[currentPlayer].push(lastResult);
            items = getFilteredCharacters(null, currentPlayer).map(c => c.name).sort(() => Math.random() - 0.5);
        } else if (currentRoulette === 'weapon') {
            const charName = results.players[currentPlayer - 1]['キャラ武器ルーレット'].char;
            if (!rerolledWeapons[currentPlayer][charName]) rerolledWeapons[currentPlayer][charName] = [];
            rerolledWeapons[currentPlayer][charName].push(lastResult);
            const weaponType = characters.find(c => c.name === charName).weapon;
            items = getFilteredWeapons(weaponType, charName);
        } else if (currentRoulette === 'sub' && currentBindName === '武器縛り') {
            rerolledCommonWeapons.push(lastResult);
            
            let filteredWeapons = subRoulettes['武器縛り'];
            let filters = playerBindTypes.includes(currentBindName) ? {...results.common, ...results.players[currentPlayer - 1]} : results.common;
            
            const weaponTypeFilter = filters["武器種縛り"];
            if(weaponTypeFilter) {
                filteredWeapons = allWeapons[weaponTypeFilter] || [];
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
                html += `<h3>${playerNames[i]}の縛り：</h3><ul>`;
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
        const commonGridContainer = document.getElementById('customBindGrid');
        const commonButtonsContainer = document.getElementById('customBindButtonsCommon');
        const playersContainer = document.getElementById('customBindsPlayersContainer');

        commonGridContainer.innerHTML = '';
        commonButtonsContainer.innerHTML = '';
        playersContainer.innerHTML = '';

        const commonSelectBinds = ['国縛り', 'モノ元素縛り', '武器種縛り', "各1.1縛り"];
        const commonCheckBinds = ['恒常☆５縛り', '☆４キャラ武器', '所持率100％縛り', '初期キャラのみ', '旅人縛り'];
        const playerSelectBinds = ['武器種縛り', '誕生月', 'アルファベット縛り'];
        const playerCheckBinds = ['武器縛り', 'キャラルーレット', 'キャラ武器ルーレット'];

        commonSelectBinds.forEach(name => createBindItem(name, 'select', commonGridContainer));
        commonCheckBinds.forEach(name => createBindItem(name, 'check', commonButtonsContainer));

        for (let i = 1; i <= playerCount; i++) {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'custom-bind-player-section';
            playerDiv.innerHTML = `<h3>${playerNames[i-1]}の縛り</h3>`;
            
            const playerGrid = document.createElement('div');
            playerGrid.className = 'custom-bind-grid';
            playerSelectBinds.forEach(name => createBindItem(name, 'select', playerGrid, i));
            
            const playerButtons = document.createElement('div');
            playerButtons.className = 'button-group-checkbox';
            playerCheckBinds.forEach(name => createBindItem(name, 'check', playerButtons, i));
            
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
                        bindsToResolve.push({ name: bindName, player: player ? parseInt(player) : 0 });
                    } else {
                        target[bindName] = selectedValue;
                    }
                } else {
                     if (needsRoulette) {
                        bindsToResolve.push({ name: bindName, player: player ? parseInt(player) : 0 });
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
