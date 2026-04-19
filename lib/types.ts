import { RLTI_CHARACTERS } from "./rlti-characters";

export interface PersonalityType {
  code: string;
  cn: string;
  intro: string;
  desc: string;
  slug: string;
  pattern: string;
  image: string;
  special?: boolean;
}

/** sbti_rankings 表行类型 */
export interface SbtiRankingRow {
  id: number;
  submission_id: string;
  type_code: string;
  raw_scores: Record<string, number>;
  levels: Record<string, string>;
  similarity: number;
  created_at: string;
}

/** 排行榜聚合数据（按 type_code 分组统计） */
export interface RankingEntry {
  code: string;
  count: number;
}

const imageExt: Record<string, string> = {};

function img(slug: string): string {
  const ext = imageExt[slug] || "png";
  return `/images/types/${slug}.${ext}`;
}

/** 兜底詹姆斯之狗长文；图鉴共 27 型 = 26 可匹配 + 本项 */
export const LUCKY_D_FALLBACK_DESC = `【隐藏/兜底人格：最终赢家】
由于您的人格数据极其混沌且不可预测，恭喜您，触发了本系统的“终极生物保底机制”——您就是那条熬死了范德布姆全家、跨越数百年依然在摇尾巴的詹姆斯之狗。

在这个全员疯批、人均八百个复仇计划的锈湖世界里，您是唯一的清流。您不参与炼金，不提取记忆，不搞巫毒诅咒，您只是在路过实验室时顺便喝了一口灵药，然后就莫名其妙地获得了永生。

您的人格特质是“极致的松弛感”。当别人在为了一个黑方块打得头破血流时，您正在阳台晒太阳；当家族大厦将倾时，您只是在考虑下一顿饭。您证明了一个被所有人忽视的宇宙级真理：在这个充满谜题和诅咒的世界里，只要你不去解谜，谜题就伤害不到你。作为一条好狗，您才是那个看戏到最后、笑得最灿烂的终极胜出者。`;

export const personalityTypes: PersonalityType[] = [
  ...RLTI_CHARACTERS.map((c) => ({
    code: c.code,
    cn: c.cn,
    slug: c.slug,
    intro: c.intro,
    pattern: c.pattern,
    desc: c.desc,
    image: img(c.slug),
  })),
  {
    code: "LUCKY-D",
    cn: "詹姆斯之狗 (The Dog)",
    slug: "the-dog",
    intro: "活了这么久，我总结出一点：活着不如当条狗。",
    pattern: "",
    image: img("the-dog"),
    special: true,
    desc: LUCKY_D_FALLBACK_DESC,
  },
];

export const typeBySlug = Object.fromEntries(personalityTypes.map((t) => [t.slug, t]));
export const typeByCode = Object.fromEntries(personalityTypes.map((t) => [t.code, t]));
export const normalTypes = personalityTypes.filter((t) => !t.special && t.pattern);
