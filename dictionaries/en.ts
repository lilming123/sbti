import type { Dictionary } from "@/lib/i18n";
import { rustTypeNames } from "@/lib/rlti-type-names";

const en: Dictionary = {
  nav: {
    types: "Types",
    rankings: "Rankings",
    about: "About",
    startTest: "Start Test",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    testCollection: "Test Collection",
  },
  privacy: { title: "Privacy Policy" },
  terms: { title: "Terms of Service" },

  footer: {
    brand: "RLTI",
    brandDesc: "Rust Lake Type Indicator — surreal vignettes, same 27-type engine.",
    tipTitle: "Disclaimer",
    tipText: "This test is for entertainment only. It is not a clinical or psychological assessment. If you actually believe a 30-question quiz on the internet defines you as a person, that itself might be a personality trait.",
    home: "Home",
  },

  home: {
    badge: "Rust Lake Type Indicator",
    h1: "Take the RLTI test — Rust Lake mood, 27 chaotic types.",
    desc: "30 puzzle-hotel vignettes. 15 dimensions. 27 personality types. Same scoring skeleton, new atmosphere.",
    startTest: "Start Test",
    browse27: "Browse 27 Types",
    learnMore: "Learn more \u2192",
    stat1Label: "15-D Model",
    stat1Sub: "5 trait clusters",
    stat2Label: "27 Results",
    stat2Sub: "25 standard + 2 special",
    stat3Label: "30 Questions",
    stat3Sub: "No post-quiz branch",
    modelsTitle: "Five Trait Clusters",
    modelsDesc: "Self-image, emotional wiring, worldview, action style, and social behavior \u2014 five clusters, fifteen dimensions, zero chill.",
    faqTitle: "FAQ",
    faqDesc: "Questions people actually ask (and some they probably shouldn\u2019t).",
    viewAllTypes: "View All Types",
    viewAbout: "About",
    viewRankings: "View Rankings",
    rankingsTitle: "Submit your result to the leaderboard after testing.",
    rankingsDesc: "See how you stack up against everyone else. Spoiler: you\u2019re probably not as unique as you think.",
    viewFullRankings: "View Full Rankings",
    totalSubs: "Total Submissions",
  },

  test: {
    h1: "One question at a time \u2014 land on your personality page.",
    desc: "Answer honestly. Or don\u2019t. We\u2019ll figure you out either way.",
    progress: "Q",
    prev: "Previous",
    next: "Next",
    computing: "Computing your personality result...",
  },

  types: {
    h1: "All 27 RLTI Personality Types",
    desc: "25 standard types + 2 secret special types. One of them is you. Sorry in advance.",
    viewDetail: "View details \u2192",
    startTest: "Start Test",
  },

  rankings: {
    h1: "RLTI Leaderboard",
    desc: "Real-time rankings of every personality type. Find your tribe \u2014 or realize you\u2019re alone.",
    totalSubs: "Total Submissions",
    rankedTypes: "Types Ranked",
    types: "types",
    lastUpdate: "Last Updated",
    fullRanking: "Full Rankings",
    noDataTitle: "No data yet",
    noDataDesc: "Nobody has submitted a result yet. Be the brave first one.",
    startTest: "Start Test",
    viewAll: "View All Types",
    times: "times",
  },

  about: {
    h1: "About RLTI",
    desc: "Rust Lake Type Indicator — surreal prompts over everyday jokes, still a 15-dimension, 27-type framework underneath.",
    questionsLabel: "Questions",
    questionsVal: "30",
    resultsLabel: "Results",
    resultsVal: "27 types",
    dimsLabel: "Dimensions",
    dimsVal: "15-D",
    modelsTitle: "Five Trait Clusters",
    modelsDesc: "Self, Emotion, Attitude, Action, and Social \u2014 five clusters that dissect your personality like a frog in biology class, except the frog is you.",
    ctaTitle: "The easiest way is to just start",
    ctaDesc: "Stop overthinking. 30 questions, a few minutes, and you\u2019ll finally have a four-letter code to blame your behavior on.",
    ctaButton: "Start Test",
  },

  result: {
    sketch: "Personality Sketch",
    codeLabel: "Type Code",
    dimsTitle: "15-Dimension Profile",
    dimsDesc: "Your scores across all fifteen dimensions. High, Mid, or Low \u2014 no judgment (okay, maybe a little).",
    specialTitle: "Special Type",
    specialDesc: "You unlocked a hidden type. The standard model couldn\u2019t contain you.",
    retest: "Retake Test",
    viewRankings: "View Rankings",
    viewAll: "View All Types",
    otherTypes: "Other Types",
    high: "High",
    mid: "Mid",
    low: "Low",
  },

  faq: [
    {
      q: "Is RLTI a real psychological assessment?",
      a: "No. It\u2019s an entertainment personality test. It borrows loosely from established models but is designed for laughs, not lab coats. Please do not cite this on your r\u00e9sum\u00e9.",
    },
    {
      q: "How are the 27 types determined?",
      a: "Your answers map onto 15 dimensions across 5 trait clusters. Each dimension scores High, Mid, or Low. The resulting pattern is matched against 25 predefined type profiles (plus 2 secret special types). The best match wins.",
    },
    {
      q: "What if I don\u2019t like my result?",
      a: "You can retake the test. Or you can accept the uncomfortable truth that a silly internet quiz just read you like an open book. Your call.",
    },
    {
      q: "Are there bonus questions after the 30 main ones?",
      a: "No. The test ends after the last dimension question and goes straight to your result.",
    },
  ],

  modelGroups: [
    {
      title: "Self Model",
      code: "S1 \u00b7 S2 \u00b7 S3",
      desc: "How stable is your self-image, how well do you actually know yourself, and is there anything you genuinely care about deep down?",
    },
    {
      title: "Emotion Model",
      code: "E1 \u00b7 E2 \u00b7 E3",
      desc: "Are you anxious or secure in relationships, how deep do you dive in, and do you need your own space or do you cling like cling wrap?",
    },
    {
      title: "Attitude Model",
      code: "A1 \u00b7 A2 \u00b7 A3",
      desc: "How do you see the world, rules, and the meaning of life \u2014 cautious rule-follower or chaotic free spirit?",
    },
    {
      title: "Action Drive Model",
      code: "Ac1 \u00b7 Ac2 \u00b7 Ac3",
      desc: "Are you driven to win or just trying not to lose? Decisive or paralyzed? Do your plans actually happen?",
    },
    {
      title: "Social Model",
      code: "So1 \u00b7 So2 \u00b7 So3",
      desc: "Do you approach people or wait to be approached, how thick are your boundaries, and how real are you across different relationships?",
    },
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
  typeNames: rustTypeNames("en"),

  dimensionNames: {
    S1:  { name: "S1 Self-Esteem",       model: "Self Model" },
    S2:  { name: "S2 Self-Clarity",      model: "Self Model" },
    S3:  { name: "S3 Core Values",       model: "Self Model" },
    E1:  { name: "E1 Attachment Security", model: "Emotion Model" },
    E2:  { name: "E2 Emotional Investment", model: "Emotion Model" },
    E3:  { name: "E3 Boundaries & Dependence", model: "Emotion Model" },
    A1:  { name: "A1 Worldview Lens",    model: "Attitude Model" },
    A2:  { name: "A2 Rules & Flexibility", model: "Attitude Model" },
    A3:  { name: "A3 Sense of Meaning",  model: "Attitude Model" },
    Ac1: { name: "Ac1 Motivation Style", model: "Action Drive Model" },
    Ac2: { name: "Ac2 Decision Style",   model: "Action Drive Model" },
    Ac3: { name: "Ac3 Execution Mode",   model: "Action Drive Model" },
    So1: { name: "So1 Social Initiative", model: "Social Model" },
    So2: { name: "So2 Interpersonal Boundaries", model: "Social Model" },
    So3: { name: "So3 Authenticity & Persona", model: "Social Model" },
  },

  dimensionExplanations: {
    S1: {
      L: "You roast yourself harder than anyone else could. Compliments get a full background check before entry.",
      M: "Confidence fluctuates with the weather \u2014 tailwind and you soar, headwind and you shrink.",
      H: "You've got a decent read on yourself. Random strangers can't shatter your vibe with one sentence.",
    },
    S2: {
      L: "Internal broadcast: mostly static. Frequently buffering on 'who am I.'",
      M: "You mostly recognize yourself, but emotions occasionally hijack your identity.",
      H: "You know your temper, your desires, and your lines pretty well.",
    },
    S3: {
      L: "Comfort and safety come first. No need to run life on sprint mode 24/7.",
      M: "Want to hustle AND want to chill. Your inner values committee is always in session.",
      H: "Easily propelled forward by goals, growth, or some core belief that matters.",
    },
    E1: {
      L: "Relationship alarm system: ultra-sensitive. A 'seen' with no reply triggers a full season finale in your head.",
      M: "Half trust, half suspicion \u2014 emotionally tug-of-warring most of the time.",
      H: "Willing to trust the relationship itself. A little breeze won't send you running.",
    },
    E2: {
      L: "Emotionally guarded. The door isn't shut, it just has strict security clearance.",
      M: "You'll invest, but always keep something in reserve. Never go all-in.",
      H: "Once you're in, you're IN. Energy and emotions flow freely.",
    },
    E3: {
      L: "Tends to cling and be clung to. Emotional temperature in relationships really matters.",
      M: "Wants closeness and independence in equal measure. Adjustable-dependency type.",
      H: "Space is sacred. No matter how deep the love, you keep a plot of land that's just yours.",
    },
    A1: {
      L: "Views the world through a defense filter. Suspicion first, approach second.",
      M: "Not naive, not full conspiracy-theorist. Watching and waiting is your default.",
      H: "Leans toward believing in human goodness. Doesn't rush to sentence the world to death.",
    },
    A2: {
      L: "Rules are speed bumps you'd rather drive around. Comfort and freedom rank first.",
      M: "Follows rules when it matters, bends them when it doesn't. Pragmatic.",
      H: "Strong sense of order. If there's a proper process, you'd rather not improvise.",
    },
    A3: {
      L: "Sense of meaning: running low. A lot of things feel like going through the motions.",
      M: "Occasionally has goals, occasionally wants to give up. Life philosophy: half-booted.",
      H: "Acts with direction. Has a general idea of which way to go.",
    },
    Ac1: {
      L: "Risk-avoidance system boots up before ambition does. First priority: don't crash.",
      M: "Sometimes wants to win, sometimes just wants zero hassle. Mixed-motivation cocktail.",
      H: "Easily ignited by results, growth, and the feeling of forward momentum.",
    },
    Ac2: {
      L: "Spins a few extra laps before deciding. Internal meetings frequently run overtime.",
      M: "Thinks about it, but doesn't think until system crash. Standard-issue hesitation.",
      H: "Decides fast, moves on. Doesn't look back to second-guess.",
    },
    Ac3: {
      L: "Execution and deadlines share a deep bond. The closer the end, the stronger the awakening.",
      M: "Can execute, but it depends on the mood. Sometimes steady, sometimes meh.",
      H: "Strong drive to push things forward. Unfinished tasks feel like a splinter in the brain.",
    },
    So1: {
      L: "Social engine: slow to warm up. Making the first move requires charging up for a while.",
      M: "If someone comes, you'll chat. If no one does, you won't force it. Average social elasticity.",
      H: "More willing to break the ice. Not afraid to stand out in a crowd.",
    },
    So2: {
      L: "Prefers closeness and merging. Once familiar, people get pulled into the inner circle fast.",
      M: "Wants closeness but also wants gaps. Boundary thickness depends on the person.",
      H: "Strong boundaries. Get too close and the instinct is to take half a step back.",
    },
    So3: {
      L: "Says it straight. Not much interest in sugarcoating what's on the mind.",
      M: "Reads the room before speaking. Keeps a balance between real and polite.",
      H: "Smooth at switching personas for different contexts. Authenticity is released in layers.",
    },
  },
  tests: {
    h1: "Fun Personality Tests",
    desc: "A curated collection of fun personality tests — discover sides of yourself you never knew",
  },
};

export default en;
