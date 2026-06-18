import type { ResultTypeId } from "../data/resultTypes";
import type { ScoreResult } from "./scoring";

export const BALANCE_THRESHOLD = 0.22;

export type ResultDecision = {
  typeId: ResultTypeId;
  subtitle?: string;
  axisNotes: string[];
};

export function decideResult(score: Pick<ScoreResult, "x" | "y" | "glossPreference" | "neutralByAxis">): ResultDecision {
  const axisNotes = buildAxisNotes(score);

  if (Math.abs(score.x) <= BALANCE_THRESHOLD && Math.abs(score.y) <= BALANCE_THRESHOLD) {
    return {
      typeId: "balanced",
      subtitle: getBalancedSubtitle(score),
      axisNotes,
    };
  }

  if (score.x > 0 && score.y > 0) return { typeId: "soft-sticky", axisNotes };
  if (score.x > 0 && score.y < 0) return { typeId: "firm-sticky", axisNotes };
  if (score.x < 0 && score.y > 0) return { typeId: "soft-separate", axisNotes };
  return { typeId: "firm-separate", axisNotes };
}

function getBalancedSubtitle(score: Pick<ScoreResult, "x" | "y" | "glossPreference">) {
  const candidates = [
    { label: "찰기 한 스푼", value: score.x },
    { label: "밥알 또렷함 한 스푼", value: -score.x },
    { label: "부드러움 한 스푼", value: score.y },
    { label: "씹는 맛 한 스푼", value: -score.y },
  ].filter((item) => item.value > 0.05);

  if (score.glossPreference === 1) candidates.push({ label: "윤기 선호형", value: 0.2 });
  candidates.sort((a, b) => b.value - a.value);

  return candidates[0]?.label ?? "자연스러운 균형형";
}

function buildAxisNotes(score: Pick<ScoreResult, "neutralByAxis">) {
  const notes: string[] = [];
  if (score.neutralByAxis.stickiness >= 2) {
    notes.push("찰기 쪽 선택은 한 방향으로 아주 강하게 몰리지는 않았어요.");
  }
  if (score.neutralByAxis.softness >= 3) {
    notes.push("부드러움과 씹는 맛은 상황에 따라 다르게 느낄 수 있는 편이에요.");
  }
  return notes;
}
