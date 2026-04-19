import { RLTI_CHARACTERS } from "./rlti-characters";
import { LUCKY_D_FALLBACK_DESC } from "./types";

export type TypeNameEntry = { name: string; intro: string; desc: string };

function displayNameForLocale(cn: string, locale: "zh" | "en" | "ja" | "ko"): string {
  if (locale === "zh") return cn;
  const m = cn.match(/\(([^)]+)\)\s*$/);
  return m ? m[1].trim() : cn;
}

const LUCKY_D_ZH: TypeNameEntry = {
  name: "詹姆斯之狗 (The Dog)",
  intro: "活了这么久，我总结出一点：活着不如当条狗。",
  desc: LUCKY_D_FALLBACK_DESC,
};

const LUCKY_D_EN: TypeNameEntry = {
  name: "James's Dog (The Dog)",
  intro: "I've lived long enough to learn: sometimes it's better to be the dog.",
  desc: `【Hidden / fallback: the real winner】Your profile was too chaotic to map cleanly—so the system triggered the "ultimate biological safety net." You're the Vanderboom-outlasting dog who's been wagging his tail for centuries.

In a world of alchemy, memory cubes, and grudges, you're the odd one out: you didn't scheme, you just drank something in a lab once and accidentally got eternal life.

Your trait is radical chill. While others brawl over a black cube, you're on the balcony in the sun; when the family manor teeters, you're thinking about dinner. You proved the overlooked cosmic truth: if you refuse to solve the puzzle, the puzzle can't hurt you. Good dog—you're the one laughing last.`,
};

/** 供各语言 Dictionary 复用；非中文 locale 用英文名（括号内）作展示名，正文仍为中文稿。 */
export function rustTypeNames(locale: "zh" | "en" | "ja" | "ko"): Record<string, TypeNameEntry> {
  const isZh = locale === "zh";
  const out: Record<string, TypeNameEntry> = {};
  for (const c of RLTI_CHARACTERS) {
    out[c.code] = {
      name: displayNameForLocale(c.cn, locale),
      intro: c.intro,
      desc: c.desc,
    };
  }
  out["LUCKY-D"] = isZh ? LUCKY_D_ZH : LUCKY_D_EN;
  return out;
}
