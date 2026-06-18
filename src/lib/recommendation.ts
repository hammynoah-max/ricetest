import type { RiceVariety } from "../data/riceVarieties";
import { riceVarieties } from "../data/riceVarieties";
import { resultTypes, type ResultTypeId } from "../data/resultTypes";

export type RecommendationInput = {
  x: number;
  y: number;
  typeId: ResultTypeId;
  aromaInterest: -1 | 0 | 1;
};

export type RecommendationResult = {
  varieties: RiceVariety[];
  aromaticSuggestion?: RiceVariety;
};

const SECONDARY_DISTANCE_LIMIT = 0.72;

export function distance(user: { x: number; y: number }, rice: { x: number; y: number }) {
  return Math.sqrt(Math.pow(user.x - rice.x, 2) + Math.pow(user.y - rice.y, 2));
}

export function recommendVarieties(input: RecommendationInput, varieties = riceVarieties): RecommendationResult {
  const resultType = resultTypes[input.typeId];
  const normalVarieties = varieties.filter((rice) => !rice.aromatic);
  const byId = new Map(normalVarieties.map((rice) => [rice.id, rice]));

  const primary = resultType.primaryVarietyIds
    .map((id) => byId.get(id))
    .filter(isRice)
    .map((rice) => ({ rice, distance: distance(input, rice) }));

  const secondary = resultType.secondaryVarietyIds
    .map((id) => byId.get(id))
    .filter(isRice)
    .map((rice) => ({ rice, distance: distance(input, rice) }))
    .filter((candidate) => candidate.distance <= SECONDARY_DISTANCE_LIMIT);

  const candidates = [...primary, ...secondary].sort((a, b) => a.distance - b.distance);

  const selected: RiceVariety[] = [];
  for (const { rice } of candidates) {
    if (!selected.some((item) => item.id === rice.id)) selected.push(rice);
    if (selected.length === 3) break;
  }

  const aromatic = varieties.find((rice) => rice.aromatic);
  const aromaticSuggestion = input.aromaInterest === 1 ? aromatic : undefined;

  return {
    varieties: selected.slice(0, selected.length >= 2 ? 3 : selected.length),
    aromaticSuggestion,
  };
}

function isRice(value: RiceVariety | undefined): value is RiceVariety {
  return Boolean(value);
}
