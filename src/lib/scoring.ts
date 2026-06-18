import { questions, type AnswerValue } from "../data/questions";

export type Answers = Partial<Record<string, AnswerValue>>;

export type ScoreResult = {
  rawX: number;
  rawY: number;
  x: number;
  y: number;
  neutralCount: number;
  neutralByAxis: {
    stickiness: number;
    softness: number;
  };
  glossPreference: AnswerValue;
  aromaInterest: AnswerValue;
  confidence: "normal" | "soft";
};

const X_MAX = 5.5;
const Y_MAX = 6.5;

export function calculateScore(answers: Answers): ScoreResult {
  let rawX = 0;
  let rawY = 0;
  let neutralCount = 0;
  let neutralStickiness = 0;
  let neutralSoftness = 0;
  let glossPreference: AnswerValue = 0;
  let aromaInterest: AnswerValue = 0;

  for (const question of questions) {
    const answer = answers[question.id] ?? 0;
    if (answer === 0) {
      neutralCount += 1;
      if (question.axis === "stickiness") neutralStickiness += 1;
      if (question.axis === "softness") neutralSoftness += 1;
    }

    if (question.axis === "stickiness") rawX += answer * question.weight;
    if (question.axis === "softness") rawY += answer * question.weight;
    if (question.axis === "gloss") glossPreference = answer;
    if (question.axis === "aromaInterest") aromaInterest = answer;
  }

  return {
    rawX,
    rawY,
    x: clamp(rawX / X_MAX),
    y: clamp(rawY / Y_MAX),
    neutralCount,
    neutralByAxis: {
      stickiness: neutralStickiness,
      softness: neutralSoftness,
    },
    glossPreference,
    aromaInterest,
    confidence: neutralCount >= 4 ? "soft" : "normal",
  };
}

function clamp(value: number) {
  return Math.max(-1, Math.min(1, value));
}
