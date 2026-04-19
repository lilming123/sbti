import type { Dictionary } from "@/lib/i18n";
import { rustTypeNames } from "@/lib/rlti-type-names";

const ko: Dictionary = {
  nav: {
    types: "유형 도감",
    rankings: "랭킹",
    about: "테스트 소개",
    startTest: "테스트 시작",
    privacy: "개인정보처리방침",
    terms: "이용약관",
    testCollection: "테스트 모음",
  },
  privacy: { title: "개인정보처리방침" },
  terms: { title: "이용약관" },
  footer: {
    brand: "RLTI",
    brandDesc: "장난 같지만 진지하게 만든 성격 테스트. 15차원 x 27가지 유형으로 당신이 대체 뭔지 파헤칩니다.",
    tipTitle: "면책 조항",
    tipText: "본 테스트는 오락 목적이며, 심리학적 진단이 아닙니다. 정서적 어려움이 있으시면 전문가와 상담하세요.",
    home: "홈",
  },
  home: {
    badge: "좀 엉뚱한 성격 테스트",
    h1: "너 대체 뭐야?",
    desc: "30문항, 2분, 15차원, 27가지 유형. RLTI는 MBTI가 아니지만, MBTI보다 당신을 더 잘 알아요.",
    startTest: "테스트 시작",
    browse27: "27가지 유형 둘러보기",
    learnMore: "자세히 알아보기",
    stat1Label: "30",
    stat1Sub: "개 엄선된 문항",
    stat2Label: "15",
    stat2Sub: "개 평가 차원",
    stat3Label: "27",
    stat3Sub: "가지 성격 유형",
    modelsTitle: "5개 모델, 15개 차원",
    modelsDesc: "\"자아\" \"감정\" \"태도\" \"행동\" \"사교\" 5가지 모델에서 15개 하위 차원을 추출. 각 차원 3단계(고/중/저). 조합하면 27가지 성격 유형이 탄생해요. 과학적이진 않지만, 리얼해요.",
    faqTitle: "자주 묻는 질문",
    faqDesc: "이 테스트에 대해 궁금한 것들.",
    viewAllTypes: "27가지 유형 전체 보기",
    viewAbout: "테스트 원리 알아보기",
    viewRankings: "랭킹 보기",
    rankingsTitle: "유형 랭킹",
    rankingsDesc: "다들 어떤 결과가 나왔는지 보세요.",
    viewFullRankings: "전체 랭킹 보기",
    totalSubs: "누적 테스트 횟수",
  },
  test: {
    h1: "RLTI 성격 테스트",
    desc: "솔직하게 답하세요. 너무 생각하지 말고.",
    progress: "번째 문항",
    prev: "이전",
    next: "다음",
    computing: "당신의 성격 유형을 계산 중...",
  },
  types: {
    h1: "27가지 유형 도감",
    desc: "모든 유형은 거울이에요. 당신의 거울을 찾아보세요.",
    viewDetail: "자세히 보기",
    startTest: "테스트 하기",
  },
  rankings: {
    h1: "유형 랭킹",
    desc: "어떤 유형이 가장 많을까? 당신은 다수파? 소수파?",
    totalSubs: "누적 테스트",
    rankedTypes: "랭킹 등재 유형",
    types: "종",
    lastUpdate: "최근 업데이트",
    fullRanking: "전체 랭킹",
    noDataTitle: "데이터 없음",
    noDataDesc: "아직 아무도 테스트를 완료하지 않았어요. 첫 번째가 되어보세요!",
    startTest: "테스트 시작",
    viewAll: "전체 유형 보기",
    times: "회",
  },
  about: {
    h1: "RLTI 소개",
    desc: "진지하게 만들었지만 좀 엉뚱한 성격 테스트.",
    questionsLabel: "문항 수",
    questionsVal: "30문항 + 히든 2문항",
    resultsLabel: "성격 유형",
    resultsVal: "27종 (히든 2종 포함)",
    dimsLabel: "평가 차원",
    dimsVal: "15차원 x 3단계",
    modelsTitle: "5개 모델",
    modelsDesc: "자기 인식부터 사교 스타일까지, 당신 성격의 모든 면을 커버합니다.",
    ctaTitle: "준비됐나요?",
    ctaDesc: "30문항, 2분. 당신이 대체 뭔지 알아보세요.",
    ctaButton: "테스트 시작",
  },
  result: {
    sketch: "유형 스케치",
    codeLabel: "유형 코드",
    dimsTitle: "15차원 분석",
    dimsDesc: "각 차원에서의 당신의 결과입니다.",
    specialTitle: "특수 유형",
    specialDesc: "히든 루트가 발동됐어요. 아래 차원 분석은 참고용입니다.",
    retest: "다시 테스트",
    viewRankings: "랭킹",
    viewAll: "전체 유형",
    otherTypes: "다른 유형",
    high: "고",
    mid: "중",
    low: "저",
  },
  faq: [
    {
      q: "RLTI랑 MBTI랑 무슨 관계예요?",
      a: "아무 관계도 없어요. RLTI는 우리가 만든 독자적인 체계예요. 이름이 MBTI랑 비슷한 건... 우연이에요(아님). 15차원에 27가지 유형이라 MBTI의 16유형보다 거의 두 배 많아요.",
    },
    {
      q: "이 테스트 정확해요?",
      a: "\"정확하다\"를 어떻게 정의하느냐에 따라 달라요. 정식 심리학 검사는 아니지만 모든 문항을 꼼꼼히 다듬었어요. 많은 분들이 \"말도 안 되는데 찐이다\"라고 해요. 안 맞는다고 느끼셨다면, 아직 자기 자신을 충분히 모르는 걸 수도.",
    },
    {
      q: "왜 문항이 이렇게 황당해요?",
      a: "정상적인 질문으로는 정상적인 답밖에 못 얻거든요. 일부러 과장된 상황으로 당신의 '이상적 자아'를 우회해서 가장 진짜 반응을 끌어내요. 황당할수록 오히려 더 정확해요.",
    },
    {
      q: "다시 테스트할 수 있나요?",
      a: "물론이죠. 다만 일부러 '더 좋아 보이는' 선택지를 고르지 마세요. 매번 결과는 랭킹에 기록돼요.",
    },
  ],
  modelGroups: [
    { title: "자아 모델", code: "S1 · S2 · S3", desc: "자기 평가가 안정적인지, 자기 자신을 아는지, 마음속에 정말 중요한 게 있는지." },
    { title: "감정 모델", code: "E1 · E2 · E3", desc: "연애에서 불안한 편인지 안심하는 편인지, 얼마나 빠져드는지, 독립적 공간이 필요한지." },
    { title: "태도 모델", code: "A1 · A2 · A3", desc: "세상, 규칙, 인생의 의미를 어떻게 보는지. 신중하고 질서적인지 유연하고 충동적인지." },
    { title: "행동 동력 모델", code: "Ac1 · Ac2 · Ac3", desc: "공격형인지 회피형인지, 결단력이 있는지, 계획을 실행할 수 있는지." },
    { title: "사교 모델", code: "So1 · So2 · So3", desc: "먼저 다가가는지, 경계선이 강한지, 상대에 따라 자신을 바꾸는지." },
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
  typeNames: rustTypeNames("ko"),

  dimensionNames: {
    S1: { name: "S1 자존감·자신감", model: "자아 모델" },
    S2: { name: "S2 자기 명확도", model: "자아 모델" },
    S3: { name: "S3 핵심 가치", model: "자아 모델" },
    E1: { name: "E1 애착 안정감", model: "감정 모델" },
    E2: { name: "E2 감정 투입도", model: "감정 모델" },
    E3: { name: "E3 경계와 의존", model: "감정 모델" },
    A1: { name: "A1 세계관 성향", model: "태도 모델" },
    A2: { name: "A2 규칙과 유연성", model: "태도 모델" },
    A3: { name: "A3 인생 의미감", model: "태도 모델" },
    Ac1: { name: "Ac1 동기 방향", model: "행동 동력 모델" },
    Ac2: { name: "Ac2 의사결정 스타일", model: "행동 동력 모델" },
    Ac3: { name: "Ac3 실행 모드", model: "행동 동력 모델" },
    So1: { name: "So1 사교 적극성", model: "사교 모델" },
    So2: { name: "So2 대인 경계감", model: "사교 모델" },
    So3: { name: "So3 표현과 진정성", model: "사교 모델" },
  },
  dimensionExplanations: {
    S1: {
      L: "자기한테 남보다 더 가혹해. 칭찬받으면 먼저 진위부터 확인하고 싶어해.",
      M: "자신감이 날씨 따라 출렁여. 순풍이면 날고, 역풍이면 일단 움츠려.",
      H: "자기 자신에 대해 대충 파악하고 있어. 지나가는 사람 한마디에 흔들리진 않아.",
    },
    S2: {
      L: "내면 채널에 노이즈가 많아. '나는 누구'에서 자주 무한 루프.",
      M: "평소에는 자기 자신을 인식하는데, 가끔 감정에 의해 번호가 바뀌어.",
      H: "자기 성격, 욕망, 한계선을 대체로 파악하고 있어.",
    },
    S3: {
      L: "편안함과 안전이 더 중요해. 인생에 매일 스프린트 모드 걸 필요 없어.",
      M: "열심히 하고 싶기도 하고, 누워있고 싶기도 하고. 가치 순위가 내부 회의 중.",
      H: "목표나 성장, 중요한 신념에 쉽게 이끌려 앞으로 나아가.",
    },
    E1: {
      L: "연애에서 경보기가 예민해. 읽씹만으로 최종회까지 뇌내 재생 가능.",
      M: "반은 신뢰, 반은 탐색. 연애에서 마음속으로 항상 줄다리기.",
      H: "관계 자체를 믿는 편. 작은 바람에 흔들리지 않아.",
    },
    E2: {
      L: "감정 투입은 절제 쪽. 마음의 문이 안 열린 게 아니라 보안이 빡빡한 거야.",
      M: "투입은 하지만 안전장치는 남겨둬. 올인까지는 안 가.",
      H: "한번 인정하면 진지해지기 쉬워. 감정과 에너지를 듬뿍 줘.",
    },
    E3: {
      L: "잘 달라붙고 달라붙기도 쉬워. 관계 속 온도감이 중요해.",
      M: "친밀함도, 독립도 조금씩. 조절 가능한 의존 타입.",
      H: "공간감이 중요해. 아무리 사랑해도 나만의 자리는 남겨둬야 해.",
    },
    A1: {
      L: "세상을 방어 필터 장착하고 봐. 먼저 의심하고, 그다음 다가가.",
      M: "순진하지도, 완전한 음모론자도 아냐. 관망이 본능.",
      H: "인간성과 선의를 믿고 싶은 편. 급하게 세상에 사형 선고 안 내려.",
    },
    A2: {
      L: "규칙은 피할 수 있으면 피해. 편안함과 자유가 우선.",
      M: "지킬 때 지키고, 융통성 부릴 때는 고집 안 부려.",
      H: "질서감이 강한 편. 절차대로 할 수 있으면 즉흥을 안 좋아해.",
    },
    A3: {
      L: "의미감이 낮은 편. 많은 일이 그냥 요식 행위처럼 느껴져.",
      M: "가끔 목표가 있고, 가끔 대충 살고 싶고. 인생관은 반 켜진 상태.",
      H: "방향감을 가지고 움직여. 자기가 어디로 가야 하는지 대충 알아.",
    },
    Ac1: {
      L: "일단 사고 안 나는 걸 먼저 생각해. 위험 회피 시스템이 야심보다 먼저 작동.",
      M: "이기고 싶을 때도 있고, 그냥 귀찮은 걸 피하고 싶을 때도 있고. 동기가 혼합형.",
      H: "성과, 성장, 추진감에 쉽게 불이 붙어.",
    },
    Ac2: {
      L: "결정 전에 빙빙 돌기 쉬워. 뇌내 회의가 대개 시간 초과.",
      M: "생각은 하지만 프리즈까지는 안 가. 보통 수준의 망설임.",
      H: "판단이 빨라. 결정하면 돌아서서 우유부단하게 굴지 않아.",
    },
    Ac3: {
      L: "실행력과 데드라인은 깊은 인연. 늦을수록 각성하는 타입.",
      M: "할 수 있지만 컨디션 따라. 안정적일 때도 불안정할 때도.",
      H: "추진 욕구가 강한 편. 일이 마무리 안 되면 마음에 가시가 박힌 느낌.",
    },
    So1: {
      L: "사교는 슬로스타트. 먼저 다가가려면 에너지 충전이 필요해.",
      M: "오는 사람은 받고, 안 오면 억지로 안 다가가. 사교 탄력성 보통.",
      H: "먼저 분위기를 여는 편. 사람들 속에서 나서는 걸 별로 안 무서워해.",
    },
    So2: {
      L: "관계에서 가까워지고 싶고 융합하고 싶은 편. 친해지면 쉽게 내부 서클에 넣어.",
      M: "가까워지고 싶으면서도 틈은 남기고 싶어. 경계선은 상대에 따라 조절.",
      H: "경계감이 강한 편. 너무 가까워지면 본능적으로 반보 뒤로 물러나.",
    },
    So3: {
      L: "표현이 직접적인 편. 마음에 있는 건 기본적으로 돌려 말 안 해.",
      M: "분위기 봐가며 말해. 진심과 체면을 조금씩 섞어.",
      H: "장면에 따라 자기를 전환하는 데 익숙해. 진정성은 레이어별로 공개.",
    },
  },
  tests: {
    h1: "재미있는 성격 테스트 모음",
    desc: "엄선된 재미있는 성격 테스트로 몰랐던 나를 발견해 보세요",
  },
};

export default ko;
