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

  it("keeps Golden Queen 3 separate and only suggests it when aroma interest and distance match", () => {
    const noInterest = recommendVarieties({ x: 0.3, y: 0.28, typeId: "balanced", aromaInterest: 0 });
    const interested = recommendVarieties({ x: 0.3, y: 0.28, typeId: "balanced", aromaInterest: 1 });

    assert.equal(noInterest.aromaticSuggestion, undefined);
    assert.equal(interested.aromaticSuggestion?.id, "goldenqueen3");
    assert.equal(
      interested.varieties.some((rice) => rice.id === "goldenqueen3"),
      false,
    );
  });
});
