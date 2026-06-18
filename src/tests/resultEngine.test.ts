import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { decideResult } from "../lib/resultEngine";

describe("decideResult", () => {
  const neutralByAxis = { stickiness: 0, softness: 0 };

  it("detects the balanced type inside the threshold", () => {
    assert.equal(decideResult({ x: 0.1, y: -0.1, glossPreference: 0, neutralByAxis }).typeId, "balanced");
  });

  it("detects the four directional result types", () => {
    assert.equal(decideResult({ x: 0.5, y: 0.5, glossPreference: 0, neutralByAxis }).typeId, "soft-sticky");
    assert.equal(decideResult({ x: 0.5, y: -0.5, glossPreference: 0, neutralByAxis }).typeId, "firm-sticky");
    assert.equal(decideResult({ x: -0.5, y: 0.5, glossPreference: 0, neutralByAxis }).typeId, "soft-separate");
    assert.equal(decideResult({ x: -0.5, y: -0.5, glossPreference: 0, neutralByAxis }).typeId, "firm-separate");
  });
});
