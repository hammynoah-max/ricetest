import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { calculateScore } from "../lib/scoring";

describe("calculateScore", () => {
  it("calculates normalized sticky and soft coordinates", () => {
    const score = calculateScore({
      q1: 1,
      q2: 1,
      q3: 1,
      q4: 1,
      q5: 1,
      q6: 1,
      q7: 1,
      q8: 1,
      q9: 1,
    });

    assert.equal(score.rawX, 5.5);
    assert.equal(score.rawY, 6.5);
    assert.equal(score.x, 1);
    assert.equal(score.y, 1);
  });

  it("does not let Q3 or Q9 change the base coordinates", () => {
    const withBonus = calculateScore({ q3: 1, q9: 1 });
    const withoutBonus = calculateScore({});

    assert.equal(withBonus.x, withoutBonus.x);
    assert.equal(withBonus.y, withoutBonus.y);
    assert.equal(withBonus.glossPreference, 1);
    assert.equal(withBonus.aromaInterest, 1);
  });

  it("marks confidence soft when neutral answers are frequent", () => {
    const score = calculateScore({ q1: 0, q2: 0, q3: 0, q4: 0 });
    assert.equal(score.confidence, "soft");
  });
});
