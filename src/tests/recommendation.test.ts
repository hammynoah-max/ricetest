import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { recommendVarieties } from "../lib/recommendation";

describe("recommendVarieties", () => {
  it("returns deterministic non-aromatic candidates for the result type", () => {
    const first = recommendVarieties({ x: 0.7, y: 0.7, typeId: "soft-sticky", aromaInterest: 0 });
    const second = recommendVarieties({ x: 0.7, y: 0.7, typeId: "soft-sticky", aromaInterest: 0 });

    assert.deepEqual(
      first.varieties.map((rice) => rice.id),
      second.varieties.map((rice) => rice.id),
    );
    assert.equal(first.varieties.length >= 2, true);
    assert.equal(
      first.varieties.every((rice) => !rice.aromatic),
      true,
    );
  });

  it("keeps Golden Queen 3 separate and suggests it whenever aroma interest is selected", () => {
    const noInterest = recommendVarieties({ x: 0.3, y: 0.28, typeId: "balanced", aromaInterest: 0 });
    const interested = recommendVarieties({ x: -0.8, y: -0.8, typeId: "firm-separate", aromaInterest: 1 });

    assert.equal(noInterest.aromaticSuggestion, undefined);
    assert.equal(interested.aromaticSuggestion?.id, "goldenqueen3");
    assert.equal(
      interested.varieties.some((rice) => rice.id === "goldenqueen3"),
      false,
    );
  });

  it("can surface all 12 varieties through normal or aroma recommendation paths", () => {
    const scenarios = [
      { x: 0.55, y: 0.56, typeId: "soft-sticky" as const, aromaInterest: 1 as const },
      { x: 0.58, y: -0.46, typeId: "firm-sticky" as const, aromaInterest: 0 as const },
      { x: -0.48, y: 0.42, typeId: "soft-separate" as const, aromaInterest: 0 as const },
      { x: -0.62, y: -0.5, typeId: "firm-separate" as const, aromaInterest: 0 as const },
      { x: 0, y: 0, typeId: "balanced" as const, aromaInterest: 0 as const },
    ];

    const surfaced = new Set<string>();
    for (const scenario of scenarios) {
      const result = recommendVarieties(scenario);
      result.varieties.forEach((rice) => surfaced.add(rice.id));
      if (result.aromaticSuggestion) surfaced.add(result.aromaticSuggestion.id);
    }

    assert.deepEqual([...surfaced].sort(), [
      "alchanmi",
      "chamdeuream",
      "chindeul",
      "goldenqueen3",
      "ilpum",
      "jinsang",
      "koshihikari",
      "odae",
      "saecheongmu",
      "samgwang",
      "sindongjin",
      "yeonghojinmi",
    ]);
  });
});
