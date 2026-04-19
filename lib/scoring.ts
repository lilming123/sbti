import { DIMENSION_CODES, type DimensionCode, type Level } from "./dimensions";
import { questions, type Question } from "./questions";
import { normalTypes, typeByCode, type PersonalityType } from "./types";

export interface ComputedResult {
  rawScores: Record<DimensionCode, number>;
  levels: Record<DimensionCode, Level>;
  finalType: PersonalityType;
  bestNormal: RankedType;
  ranked: RankedType[];
  special: boolean;
  secondaryType?: PersonalityType;
  similarity: number;
  exact: number;
  modeKicker: string;
  badge: string;
  sub: string;
}

interface RankedType extends PersonalityType {
  distance: number;
  exact: number;
  similarity: number;
}

function levelToNum(l: Level): number {
  return { L: 1, M: 2, H: 3 }[l];
}

function parsePattern(pattern: string): Level[] {
  return pattern.split("-").flatMap((seg) => seg.split("")) as Level[];
}

export function computeResult(answers: Record<string, number>): ComputedResult {
  // Step 1: Sum raw scores per dimension
  const rawScores = {} as Record<DimensionCode, number>;
  for (const dim of DIMENSION_CODES) {
    rawScores[dim] = 0;
  }
  for (const q of questions) {
    rawScores[q.dim] += Number(answers[q.id] ?? 0);
  }

  // Step 2: Convert to levels
  const levels = {} as Record<DimensionCode, Level>;
  for (const [dim, score] of Object.entries(rawScores)) {
    levels[dim as DimensionCode] = score <= 3 ? "L" : score === 4 ? "M" : "H";
  }

  // Step 3: Compare with all normal type patterns
  const userPattern = DIMENSION_CODES.map((d) => levelToNum(levels[d]));

  const ranked: RankedType[] = normalTypes
    .filter((t) => t.pattern)
    .map((t) => {
      const typePattern = parsePattern(t.pattern).map(levelToNum);
      let distance = 0;
      let exact = 0;
      for (let i = 0; i < typePattern.length; i++) {
        const diff = Math.abs(userPattern[i] - typePattern[i]);
        distance += diff;
        if (diff === 0) exact++;
      }
      const similarity = Math.max(0, Math.round((1 - distance / 30) * 100));
      return { ...t, distance, exact, similarity };
    })
    .sort((a, b) => {
      if (a.distance !== b.distance) return a.distance - b.distance;
      if (b.exact !== a.exact) return b.exact - a.exact;
      return b.similarity - a.similarity;
    });

  const bestNormal = ranked[0];
  let finalType = typeByCode[bestNormal.code]!;
  let special = false;
  let secondaryType: PersonalityType | undefined;

  // Step 4: Special overrides
  if (bestNormal.similarity < 60) {
    finalType = typeByCode["LUCKY-D"]!;
    special = true;
  }

  const { modeKicker, badge, sub } = getSnapshotNarrative(
    finalType.code,
    bestNormal.similarity,
    bestNormal.exact
  );

  return {
    rawScores,
    levels,
    finalType,
    bestNormal,
    ranked,
    special,
    secondaryType,
    similarity: bestNormal.similarity,
    exact: bestNormal.exact,
    modeKicker,
    badge,
    sub,
  };
}

function getSnapshotNarrative(
  typeCode: string,
  similarity: number,
  exact: number
): { modeKicker: string; badge: string; sub: string } {
  if (typeCode === "LUCKY-D") {
    return {
      modeKicker: "终极生物保底",
      badge: `标准人格库最高匹配仅 ${similarity}%`,
      sub: "人格数据过于混沌，已触发詹姆斯之狗兜底机制。",
    };
  }
  return {
    modeKicker: "你的主类型",
    badge: `匹配度 ${similarity}% · 精准命中 ${exact}/15 维`,
    sub: "维度命中度较高，当前结果可视为你的第一人格画像。",
  };
}

export function createSubmissionId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

const SNAPSHOT_KEY = "rlti:result-snapshot:v1";

export function writeResultSnapshot(data: object): void {
  window.localStorage.setItem(SNAPSHOT_KEY, JSON.stringify(data));
}

export function readResultSnapshot(): ComputedResult | null {
  try {
    const raw = window.localStorage.getItem(SNAPSHOT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearResultSnapshot(): void {
  window.localStorage.removeItem(SNAPSHOT_KEY);
}
