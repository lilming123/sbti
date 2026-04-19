import type { Dictionary } from "@/lib/i18n";
import { rustTypeNames } from "@/lib/rlti-type-names";

const ja: Dictionary = {
  nav: {
    types: "タイプ図鑑",
    rankings: "ランキング",
    about: "テストについて",
    startTest: "テスト開始",
    privacy: "プライバシーポリシー",
    terms: "利用規約",
    testCollection: "テスト集",
  },
  privacy: { title: "プライバシーポリシー" },
  terms: { title: "利用規約" },
  footer: {
    brand: "RLTI",
    brandDesc: "ふざけてるようで本気で作った性格診断。15次元 x 27タイプで、あなたが一体何者なのか暴きます。",
    tipTitle: "免責事項",
    tipText: "本テストはエンタメ目的であり、心理学的な診断ではありません。お悩みの方は専門家にご相談ください。",
    home: "ホーム",
  },
  home: {
    badge: "ちょっとふざけた性格診断",
    h1: "お前、一体何者？",
    desc: "30問、2分、15次元、27タイプ。RLTIはMBTIじゃないけど、MBTIよりあなたを分かってる。",
    startTest: "テスト開始",
    browse27: "27タイプを見る",
    learnMore: "もっと詳しく",
    stat1Label: "30",
    stat1Sub: "問の厳選クエスチョン",
    stat2Label: "15",
    stat2Sub: "の評価次元",
    stat3Label: "27",
    stat3Sub: "種のタイプ結果",
    modelsTitle: "5つのモデル、15の次元",
    modelsDesc: "「自己」「感情」「態度」「行動」「社交」の5モデルから15のサブ次元を抽出。各次元3段階（高/中/低）。組み合わせで27タイプが誕生。科学的じゃないけど、リアル。",
    faqTitle: "よくある質問",
    faqDesc: "このテストについて知りたいこと。",
    viewAllTypes: "全27タイプを見る",
    viewAbout: "テストの仕組み",
    viewRankings: "ランキングを見る",
    rankingsTitle: "タイプランキング",
    rankingsDesc: "みんなの診断結果を見てみよう。",
    viewFullRankings: "ランキング全体を見る",
    totalSubs: "累計テスト回数",
  },
  test: {
    h1: "RLTI 性格診断",
    desc: "素直に答えて。考えすぎないで。",
    progress: "問目",
    prev: "前の問題",
    next: "次の問題",
    computing: "あなたのタイプを計算中...",
  },
  types: {
    h1: "27タイプ図鑑",
    desc: "どのタイプもあなたの鏡。自分のタイプを見つけよう。",
    viewDetail: "詳細を見る",
    startTest: "テストする",
  },
  rankings: {
    h1: "タイプランキング",
    desc: "どのタイプが一番多い？あなたは多数派？少数派？",
    totalSubs: "累計テスト",
    rankedTypes: "ランクインタイプ",
    types: "種",
    lastUpdate: "最終更新",
    fullRanking: "全ランキング",
    noDataTitle: "データなし",
    noDataDesc: "まだ誰もテストしていません。一番乗りしよう！",
    startTest: "テスト開始",
    viewAll: "全タイプを見る",
    times: "回",
  },
  about: {
    h1: "RLTIについて",
    desc: "本気で作ったけどふざけてる性格診断。",
    questionsLabel: "問題数",
    questionsVal: "30問 + 隠し2問",
    resultsLabel: "タイプ結果",
    resultsVal: "27種（隠し2タイプ含む）",
    dimsLabel: "評価次元",
    dimsVal: "15次元 x 3段階",
    modelsTitle: "5つのモデル",
    modelsDesc: "自己認識から社交スタイルまで、あなたの性格のあらゆる面をカバー。",
    ctaTitle: "準備はいい？",
    ctaDesc: "30問、2分。あなたが一体何者なのか見てみよう。",
    ctaButton: "テスト開始",
  },
  result: {
    sketch: "タイプスケッチ",
    codeLabel: "タイプコード",
    dimsTitle: "15次元分析",
    dimsDesc: "各次元におけるあなたのスコアです。",
    specialTitle: "特殊タイプ",
    specialDesc: "隠しルートが発動しました。以下の次元分析は参考程度にどうぞ。",
    retest: "もう一度テスト",
    viewRankings: "ランキング",
    viewAll: "全タイプ",
    otherTypes: "他のタイプ",
    high: "高",
    mid: "中",
    low: "低",
  },
  faq: [
    {
      q: "RLTIとMBTIは関係あるの？",
      a: "全く関係ありません。RLTIは独自の体系です。名前がMBTIに似てるのは気のせいです（ではない）。15次元と27タイプで、MBTIの16タイプよりほぼ倍あります。",
    },
    {
      q: "このテストって当たるの？",
      a: "「当たる」の定義次第。正式な心理学テストではないけど、各問題は丁寧に作り込んでます。「バカバカしいけどリアル」って声が多いです。当たらないと思ったなら、まだ自分のことを分かってないだけかも。",
    },
    {
      q: "なんでこんなにぶっ飛んだ問題があるの？",
      a: "まともな質問からはまともな答えしか出ないから。わざとぶっ飛んだシチュエーションで「理想の自分」を回避して、本当のあなたの反応を引き出します。ぶっ飛んでるほど、実は正確。",
    },
    {
      q: "もう一度テストできる？",
      a: "もちろん。ただし「より良い」選択肢を狙って選ぶのはやめてね。テスト結果は毎回ランキングに記録されます。",
    },
  ],
  modelGroups: [
    { title: "自己モデル", code: "S1 · S2 · S3", desc: "自分への評価が安定しているか、自分を理解しているか、心の中に本当に大事なものがあるか。" },
    { title: "感情モデル", code: "E1 · E2 · E3", desc: "恋愛で不安になりやすいか安心できるか、どこまで入り込むか、独立した空間が必要か。" },
    { title: "態度モデル", code: "A1 · A2 · A3", desc: "世界・ルール・人生の意味をどう見るか。慎重で秩序的か、柔軟で衝動的か。" },
    { title: "行動ドライブモデル", code: "Ac1 · Ac2 · Ac3", desc: "攻めか守りか、決断力はあるか、計画を実行できるか。" },
    { title: "社交モデル", code: "So1 · So2 · So3", desc: "自分から近づけるか、境界線は強いか、相手によって自分を変えるか。" },
  ],
  questions: [
    {
      text: "You stare into a mirror and your reflection slowly rots into a black mass. You:",
      options: ["Panic—that hideous thing must be my true self.", "Stay calm; treat it as a visual illusion.", "Hold its gaze; I can control this change."],
    },
    {
      text: "At a strange banquet you are seated on the shabbiest chair in the farthest corner.",
      options: ["Feel awkward—I really do not belong at the head table.", "Accept it; a seat is a seat.", "Look for a chance to end up in the leather chair at the head."],
    },
    {
      text: "If your memories were cubes of color, the clearest one right now would be:",
      options: ["Black—packed with pain I cannot even see clearly.", "White—faithfully recording every ordinary day.", "Blue—letting me instantly spot the turning points of fate."],
    },
    {
      text: "Someone in a bird mask hands you a mirror and asks, \"Who are you?\"",
      options: ["Feel lost—I no longer know which self is real.", "Give my name; it is the only label I trust.", "Describe my traits and sense of purpose precisely."],
    },
    {
      text: "A family tree on the wall is slowly growing, waiting for fruit.",
      options: ["Let it live or die—I am only an insignificant leaf.", "Follow the rhythm and wait for fruit.", "Seek special nourishment so it grows the way I intend."],
    },
    {
      text: "You find a golden gear that can twist a pocket of time and space.",
      options: ["Bury it from fear of the cost; keep things as they are.", "Keep it as a relic; use it only if I must.", "Install it in a complex machine at once and open a new path."],
    },
    {
      text: "The person closest to you suddenly turns to thin smoke and vanishes.",
      options: ["Feel the world collapse—there is no one left to rely on.", "Grieve, but accept that parting is part of life.", "Believe it is temporary; we will meet again somewhere."],
    },
    {
      text: "You are in a sealed room and the view outside the window keeps shifting.",
      options: ["Suspect watchers behind the walls; I never feel safe.", "Find it odd, but a roof is enough.", "Soon grasp how the place works and feel grounded."],
    },
    {
      text: "To open a lock you must cut open a mechanical doll that is whimpering.",
      options: ["Feel nothing—it is only parts.", "Hesitate briefly, then finish the task.", "Feel sad, as if I hurt a living thing."],
    },
    {
      text: "You read a yellowed letter of distress from long ago.",
      options: ["Skim for numbers to open a box.", "Read it through and pity the writer.", "Feel shaken and try to sense their pain."],
    },
    {
      text: "If you could be one form of life in the lake, you would be:",
      options: ["A school of fry—never apart from the shoal.", "Weed on a rock, swaying with the waves.", "A black figure alone in the deep—no one may disturb me."],
    },
    {
      text: "An \"old friend\" offers a potion and asks you to drink with them.",
      options: ["As long as we walk together, I do not care about the cost.", "Accept politely, but let them sip first.", "Decline—I must stay absolutely clear-headed."],
    },
    {
      text: "By the lake you find a broken telephone with a scream inside.",
      options: ["Proof the world is hostile; stay alert.", "Just noise from bad wiring.", "A cry that hides something worth saving."],
    },
    {
      text: "About an elixir of endless life—and the curse that may follow:",
      options: ["A trap for the greedy; it ends in ruin.", "A neutral trade; neither good nor evil.", "A trial of will; those who pass are elevated."],
    },
    {
      text: "A wall maze of strange symbols with no marked order.",
      options: ["Tap at random until a lock clicks.", "Watch, then guess a rough rule.", "Find the hidden diagram before I touch anything."],
    },
    {
      text: "When mixing paint to fill gaps on a canvas, you:",
      options: ["Close enough is fine.", "Match as well as I can; small errors are ok.", "Demand exact hues and the original logic."],
    },
    {
      text: "After solving everything you are back at the starting room.",
      options: ["Total void—effort meant nothing.", "Accept the loop as life itself.", "The loop tempered me; that is the gain."],
    },
    {
      text: "You are just born into a family called the Root. Three ways to survive—what will you drink?",
      options: ["Warm milk.", "Cool rain.", "Spicy red wine."],
    },
    {
      text: "Deep in a dungeon a blue door glows, and chains rattle nearby.",
      options: ["Stay put—safety beats curiosity.", "Arm myself, then approach carefully.", "Rush in—risk rides with reward."],
    },
    {
      text: "Power that makes you mighty at once—but costs part of your humanity.",
      options: ["Refuse—I value stability now.", "Hesitate; look for a gentler path.", "Take it—evolution is brutal."],
    },
    {
      text: "Three keys on a table, no clues which opens the lock.",
      options: ["Freeze in fear of punishment for choosing wrong.", "Try each key in the lock.", "Close my eyes and grab one by instinct."],
    },
    {
      text: "An hourglass on the wall is almost empty; you must press a button.",
      options: ["Simulate outcomes until time runs out.", "Wait until the last grains, then press.", "Press decisively as soon as the countdown starts."],
    },
    {
      text: "Collect three stamps before the clock strikes midnight. You usually:",
      options: ["Get distracted by newspapers and panic at the end.", "Cut it close but finish on the chime.", "Plan the route early and wait calmly."],
    },
    {
      text: "A pile of loose gears that must mesh perfectly.",
      options: ["Stare, unable to start.", "Fit one by one with patience.", "See the structure at once and rebuild it fast."],
    },
    {
      text: "A silent figure in an owl mask sits in the room.",
      options: ["Slip along the wall; avoid contact.", "Sit opposite and wait for a sign.", "Step forward and ask how to leave."],
    },
    {
      text: "In a theater, where do you sit?",
      options: ["Last row in shadow—I hope no one sees me.", "Middle-back—moderately involved.", "Front center—ready to engage the show."],
    },
    {
      text: "Someone peers through a slot while you sort a diary.",
      options: ["Fine—I will share my secrets with anyone.", "Angle the book so they only see a slice.", "Shut it at once—that is private ground."],
    },
    {
      text: "In this puzzle hotel a stranger offers to team up.",
      options: ["Great—I want them to lead.", "Yes, if roles are clear.", "No—they would break my pace and focus."],
    },
    {
      text: "A deer-masked host asks what you truly fear right now.",
      options: ["Pour out every weakness.", "Answer briefly with obvious facts.", "Craft the most tactful lie I can."],
    },
    {
      text: "With strangers you usually present yourself as:",
      options: ["Transparent—what you see is what I am.", "Warm but distant—polite armor.", "Variable—I switch masks to match them."],
    },
  ],
  typeNames: rustTypeNames("ja"),

  dimensionNames: {
    S1: { name: "S1 自尊・自信", model: "自己モデル" },
    S2: { name: "S2 自己明確度", model: "自己モデル" },
    S3: { name: "S3 コアバリュー", model: "自己モデル" },
    E1: { name: "E1 愛着の安心感", model: "感情モデル" },
    E2: { name: "E2 感情投入度", model: "感情モデル" },
    E3: { name: "E3 境界と依存", model: "感情モデル" },
    A1: { name: "A1 世界観傾向", model: "態度モデル" },
    A2: { name: "A2 ルールと柔軟性", model: "態度モデル" },
    A3: { name: "A3 人生の意味感", model: "態度モデル" },
    Ac1: { name: "Ac1 動機の方向性", model: "行動ドライブモデル" },
    Ac2: { name: "Ac2 意思決定スタイル", model: "行動ドライブモデル" },
    Ac3: { name: "Ac3 実行モード", model: "行動ドライブモデル" },
    So1: { name: "So1 社交の積極性", model: "社交モデル" },
    So2: { name: "So2 対人境界線", model: "社交モデル" },
    So3: { name: "So3 表現と本音度", model: "社交モデル" },
  },
  dimensionExplanations: {
    S1: {
      L: "自分に一番厳しいのは自分。褒められても先に真偽を確認したくなる。",
      M: "自信は天気次第。追い風なら飛べるけど、向かい風だとまず縮む。",
      H: "自分のことは大体分かってる。通りすがりの一言で崩れたりしない。",
    },
    S2: {
      L: "心のチャンネルはノイズ多め。「自分って誰？」でよくループする。",
      M: "普段は自分を認識できてるけど、たまに感情で番号が変わる。",
      H: "自分の性格・欲望・底線をだいたい把握してる。",
    },
    S3: {
      L: "快適さと安全重視。人生をスプリントモードにする必要はない。",
      M: "上を目指したいけどゴロゴロもしたい。価値の優先順位は社内会議中。",
      H: "目標や成長、大事な信念に簡単に突き動かされる。",
    },
    E1: {
      L: "恋愛の警報器は高感度。既読スルーで最終回まで脳内再生。",
      M: "半分信頼、半分探り。恋愛では心の中で常に綱引き。",
      H: "関係そのものを信じる方。ちょっとした風で怯えない。",
    },
    E2: {
      L: "感情投入は控えめ。心のドアは閉じてるんじゃなくてセキュリティが厳しい。",
      M: "投入はするけど保険も残す。オールインまではしない。",
      H: "一度認めたら本気になりやすい。感情もエネルギーもたっぷり注ぐ。",
    },
    E3: {
      L: "くっつきやすいしくっつかれやすい。関係の温度感が大事。",
      M: "親密さも独立も少しずつ。調節可能な依存タイプ。",
      H: "空間感が大事。どんなに好きでも自分だけの場所は必要。",
    },
    A1: {
      L: "世界を見る目に防御フィルター標準装備。まず疑って、それから近づく。",
      M: "純粋でもなく陰謀論者でもない。様子見が本能。",
      H: "人間性や善意を信じたい方。すぐに世界に死刑判決は出さない。",
    },
    A2: {
      L: "ルールは回避できるなら回避。快適さと自由が優先。",
      M: "守る時は守り、融通を利かせる時はこだわらない。",
      H: "秩序感が強め。手順通りにできるならアドリブは避けたい。",
    },
    A3: {
      L: "意味感は低め。多くのことが流れ作業に感じやすい。",
      M: "時々目標があり、時々サボりたい。人生観は半起動状態。",
      H: "方向性を持って動ける。自分がどっちに行くかだいたい分かってる。",
    },
    Ac1: {
      L: "まず事故らないことを考える。リスク回避システムが野心より先に起動。",
      M: "勝ちたい時もあれば面倒を避けたい時もある。動機はミックス。",
      H: "成果・成長・前進感に火がつきやすい。",
    },
    Ac2: {
      L: "決断前にグルグル回りがち。脳内会議はだいたい時間オーバー。",
      M: "考えるけどフリーズはしない。普通の迷い。",
      H: "判断が速い。決めたら振り返ってウダウダしない。",
    },
    Ac3: {
      L: "実行力と締め切りは深い絆。ギリギリほど覚醒する。",
      M: "できるけどコンディション次第。安定と不安定の間。",
      H: "推進欲が強め。物事が片付くまで心にトゲが刺さってる感じ。",
    },
    So1: {
      L: "社交はスロースタート。自分から行くにはエネルギー充電が必要。",
      M: "来る者は拒まず、来ない時は無理しない。社交弾力は普通。",
      H: "自分から場を開ける方。人混みで目立つのを怖がらない。",
    },
    So2: {
      L: "関係では近づきたい・融合したい派。仲良くなると内側に入れやすい。",
      M: "近づきたいけど隙間も欲しい。境界線は相手次第で調節。",
      H: "境界線強め。近づきすぎると本能的に半歩引く。",
    },
    So3: {
      L: "表現はストレート。思ったことは基本回りくどくしない。",
      M: "空気を読んで話す。本音と建前をちょっとずつ。",
      H: "場面に応じた自分の切り替えが上手い。本音はレイヤー分け。",
    },
  },
  tests: {
    h1: "おもしろ性格テスト集",
    desc: "厳選された楽しい性格テスト、あなたの知らない一面を発見しよう",
  },
};

export default ja;
