import type { DimensionCode } from "./dimensions";

export interface QuestionOption {
  label: string;
  value: number;
}

export interface Question {
  id: string;
  dim: DimensionCode;
  text: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  // —— S1（自我：自尊自信）——
  { id: "q1", dim: "S1", text: "当你盯着镜子，发现镜中的倒影逐渐腐烂化为一团黑影时，你会：", options: [{ label: "感到惊恐，认为那才是我丑陋的本质", value: 1 }, { label: "保持平静，将其视为一种视觉幻象", value: 2 }, { label: "直视它，坚信我能掌控这种变化", value: 3 }] },
  { id: "q2", dim: "S1", text: "在一场古怪的晚宴上，如果你被安排坐在最角落的破旧木椅上：", options: [{ label: "感到局促，觉得自己确实不配坐在高位", value: 1 }, { label: "安于现状，在哪里坐着都并无区别", value: 2 }, { label: "寻找机会，直到我坐上长桌首位的皮椅", value: 3 }] },

  // —— S2（自我：自我清晰度）——
  { id: "q3", dim: "S2", text: "如果要把你的记忆提取成彩色方块，你认为目前最清晰的方块是：", options: [{ label: "黑色的，满载着连我也看不清的痛苦", value: 1 }, { label: "白色的，如实记录着平凡生活的每一幕", value: 2 }, { label: "蓝色的，让我能瞬间洞察命运的关键点", value: 3 }] },
  { id: "q4", dim: "S2", text: "当一个戴着鸟面具的人递给你一面镜子并询问“你是谁”时：", options: [{ label: "感到迷茫，我早已分不清真实的自我", value: 1 }, { label: "报出我的姓名，那是我唯一的标识", value: 2 }, { label: "精准地描述我的性格特征与存在意义", value: 3 }] },

  // —— S3（自我：核心价值）——
  { id: "q5", dim: "S3", text: "面对墙上一棵正在缓慢生长、等待挂上果实的家族树：", options: [{ label: "任其枯荣，我只是树上一片无足轻重的叶子", value: 1 }, { label: "遵循既定规律，等待它开花结果", value: 2 }, { label: "寻找特殊的养料，确保它长成我想要的模样", value: 3 }] },
  { id: "q6", dim: "S3", text: "当你捡到一个可以扭转局部时空的金色齿轮时：", options: [{ label: "因害怕代价而将其深埋，维持现状", value: 1 }, { label: "将其作为收藏品，在必要时才拿出来", value: 2 }, { label: "立即安装进复杂的机关，开启新的可能", value: 3 }] },

  // —— E1（情感：依恋安全感）——
  { id: "q7", dim: "E1", text: "如果你身边最亲近的人突然化作一缕轻烟凭空消失：", options: [{ label: "感到世界崩塌，再也没有人可以依靠", value: 1 }, { label: "感到悲伤，但明白离别是生命的常态", value: 2 }, { label: "坚信这只是暂时的，我们终会在别处重逢", value: 3 }] },
  { id: "q8", dim: "E1", text: "身处一个封闭且窗外景物不断变幻的房间里：", options: [{ label: "怀疑墙后藏着监视者，时刻感到不安", value: 1 }, { label: "略感怪异，但只要有屋顶避雨就能接受", value: 2 }, { label: "很快理清了这里的运行逻辑，感到很踏实", value: 3 }] },

  // —— E2（情感：情感投入度）——
  { id: "q9", dim: "E2", text: "为了触发通关机关，你必须剪开一只发出哭声的机械布偶：", options: [{ label: "毫无波澜，它不过是零件的堆砌物", value: 1 }, { label: "略有迟疑，然后迅速执行任务", value: 2 }, { label: "感到难过，仿佛亲手伤害了一个生命", value: 3 }] },
  { id: "q10", dim: "E2", text: "阅读一封由于年代久远而泛黄的求救信件时：", options: [{ label: "只扫视其中的数字，用来解开密码箱", value: 1 }, { label: "通读一遍，对信中人的遭遇表示同情", value: 2 }, { label: "情绪深受触动，试图感应写信人的痛苦", value: 3 }] },

  // —— E3（情感：边界与依赖）——
  { id: "q11", dim: "E3", text: "如果你能变成湖中生存的一种形态，你希望是：", options: [{ label: "成群游动的幼鱼，永远不与同伴分离", value: 1 }, { label: "依附在岩石上的水草，随波摇曳", value: 2 }, { label: "独处深渊的黑色人影，无人可以打扰", value: 3 }] },
  { id: "q12", dim: "E3", text: "当一个自称老友的人递来一杯药水，要求与你共同饮下：", options: [{ label: "只要能与他同行，后果我并不在意", value: 1 }, { label: "礼貌接受，但会等他先喝下第一口", value: 2 }, { label: "婉言拒绝，我必须保持绝对的清醒", value: 3 }] },

  // —— A1（态度：世界观倾向）——
  { id: "q13", dim: "A1", text: "你在湖畔发现了一个坏掉的电话，里面传出不明的尖叫：", options: [{ label: "这是世界充满恶意的证明，必须警惕", value: 1 }, { label: "这只是陈旧信号干扰产生的噪音", value: 2 }, { label: "这声音背后隐藏着某种需要救赎的信息", value: 3 }] },
  { id: "q14", dim: "A1", text: "关于“长生不老药”可能带来的永恒生命与诅咒：", options: [{ label: "那是贪婪者的骗局，结局必然是毁灭", value: 1 }, { label: "那是一种自然的等价交换，无善无恶", value: 2 }, { label: "那是对意志的试炼，通过者将获得升华", value: 3 }] },

  // —— A2（态度：规则与灵活度）——
  { id: "q15", dim: "A2", text: "面对墙上奇怪的、没有标注点击顺序的符号迷宫：", options: [{ label: "随性乱点，直到某个瞬间门锁开启", value: 1 }, { label: "观察片刻，尝试归纳出大致的规律", value: 2 }, { label: "必须找到藏在暗处的说明图纸再行动", value: 3 }] },
  { id: "q16", dim: "A2", text: "在调配颜色以填满画布上的空缺时，你的态度是：", options: [{ label: "只要颜色接近就行，不必在意细节", value: 1 }, { label: "尽可能还原，即便略有出入也能接受", value: 2 }, { label: "分毫不差，必须符合原画的逻辑顺序", value: 3 }] },

  // —— A3（态度：人生意义感）——
  { id: "q17", dim: "A3", text: "当你辛苦解开所有谜题，却发现自己回到了最初的起点：", options: [{ label: "感到彻底的虚无，努力完全没有意义", value: 1 }, { label: "接受这种循环，它是生活本身的一部分", value: 2 }, { label: "在循环中我磨炼了意志，这便是收获", value: 3 }] },
  { id: "q18", dim: "A3", text: "你刚降生在名为根源的家族中，面对三种生存的选择，你会喝下：", options: [{ label: "温润的奶水", value: 1 }, { label: "清冷的雨水", value: 2 }, { label: "辛辣的红酒", value: 3 }] },

  // —— Ac1（行动驱力：动机导向）——
  { id: "q19", dim: "Ac1", text: "地牢深处有一扇散发蓝光的门，但也伴随着锁链的响声：", options: [{ label: "守在原地，安全比好奇心更重要", value: 1 }, { label: "寻找防身武器，做好万全准备再靠近", value: 2 }, { label: "直接冲向那扇门，机遇总伴随着危险", value: 3 }] },
  { id: "q20", dim: "Ac1", text: "如果有一种力量能让你瞬间强大，但必须舍弃部分人性：", options: [{ label: "坚决拒绝，我更看重此时的稳定状态", value: 1 }, { label: "犹豫观望，看是否有更温和的方式", value: 2 }, { label: "欣然接受，进化本身就是残酷的博弈", value: 3 }] },

  // —— Ac2（行动驱力：决策风格）——
  { id: "q21", dim: "Ac2", text: "如果你需要从桌上的三把钥匙里选出一把，且没有任何线索：", options: [{ label: "陷入长久的纠结，担心选错后会被惩罚", value: 1 }, { label: "挨个儿插进锁孔，总有一个是对的", value: 2 }, { label: "闭上眼睛，凭瞬间的直觉拿起其中一把", value: 3 }] },
  { id: "q22", dim: "Ac2", text: "当墙上的沙漏即将流尽，提示你必须按下某个按钮时：", options: [{ label: "在大脑中反复推演后果，直到时间耗尽", value: 1 }, { label: "等待沙子剩最后几粒时，被迫按下", value: 2 }, { label: "在倒计时开始时便果断做出选择", value: 3 }] },

  // —— Ac3（行动驱力：执行模式）——
  { id: "q23", dim: "Ac3", text: "需要在时钟指到午夜前集齐三枚图章，你的状态通常是：", options: [{ label: "被房间里的报纸吸引，最后手忙脚乱", value: 1 }, { label: "虽然过程紧凑，但能刚好在钟响前完成", value: 2 }, { label: "早已规划好路线，悠闲地等待时间到达", value: 3 }] },
  { id: "q24", dim: "Ac3", text: "面对桌上一堆散乱的、需要精准咬合的齿轮零件：", options: [{ label: "盯着它们发愁，总觉得无从下手", value: 1 }, { label: "拿起一个装一个，靠耐力慢慢拼凑", value: 2 }, { label: "瞬间看穿结构逻辑，迅速完成复原", value: 3 }] },

  // —— So1（社交：社交主动性）——
  { id: "q25", dim: "So1", text: "如果房间里坐着一个戴着猫头鹰面具且不发一言的人：", options: [{ label: "贴着墙根走，尽量不与他产生交集", value: 1 }, { label: "坐在对面的椅子上，等他先向我示意", value: 2 }, { label: "主动走上前，询问离开此地的关键线索", value: 3 }] },
  { id: "q26", dim: "So1", text: "在剧院的观众席上，你会选择什么样的位置坐下？", options: [{ label: "最后一排的阴影里，希望没人看到我", value: 1 }, { label: "中间靠后的位置，保持适度的参与感", value: 2 }, { label: "第一排正中央，方便随时与表演者互动", value: 3 }] },

  // —— So2（社交：人际边界感）——
  { id: "q27", dim: "So2", text: "如果有人试图通过窥视孔观察你正在整理的日记：", options: [{ label: "无所谓，我愿意与任何人分享我的秘密", value: 1 }, { label: "把日记本侧过来，只让他看到一小部分", value: 2 }, { label: "立刻合上本子，那是禁止踏入的私人领域", value: 3 }] },
  { id: "q28", dim: "So2", text: "在这个充满谜题的旅馆里，出现了一个可以组队的陌生人：", options: [{ label: "太好了，我希望他能主导接下来的行动", value: 1 }, { label: "可以合作，但必须明确各自的负责区域", value: 2 }, { label: "拒绝，他只会干扰我的节奏和思考空间", value: 3 }] },

  // —— So3（社交：表达与真实度）——
  { id: "q29", dim: "So3", text: "当一个戴着鹿头面具的人询问你此时内心真实的恐惧时：", options: [{ label: "毫无保留地倾诉我所有的弱点与不安", value: 1 }, { label: "简短地回答，只谈论那些显而易见的事", value: 2 }, { label: "根据他的语气，编造一个最得体的回答", value: 3 }] },
  { id: "q30", dim: "So3", text: "在面对陌生人时，你通常会选择哪种方式展现自己？", options: [{ label: "透明的，我展现出的样子就是我本人的样子", value: 1 }, { label: "温和但疏离，带有一层客气的保护色", value: 2 }, { label: "多变的，根据对方的反应切换不同的面具", value: 3 }] },
];

export const TOTAL_DISPLAY_QUESTIONS = questions.length;
