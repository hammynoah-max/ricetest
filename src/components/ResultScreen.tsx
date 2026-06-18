import { resultTypes } from "../data/resultTypes";
import type { RiceVariety } from "../data/riceVarieties";
import type { Question } from "../data/questions";
import type { ResultDecision } from "../lib/resultEngine";
import type { ScoreResult, Answers } from "../lib/scoring";
import { AccuracyNotice } from "./AccuracyNotice";
import { VarietyCard } from "./VarietyCard";

type ResultScreenProps = {
  score: ScoreResult;
  decision: ResultDecision;
  answers: Answers;
  varieties: RiceVariety[];
  aromaticSuggestion?: RiceVariety;
  questions: Question[];
  onRestart: () => void;
};

export function ResultScreen({
  score,
  decision,
  answers,
  varieties,
  aromaticSuggestion,
  questions,
  onRestart,
}: ResultScreenProps) {
  const resultType = resultTypes[decision.typeId];
  const reasons = getReasons(answers, questions);

  return (
    <section className="screen result-screen">
      <div className={`result-icon ${decision.typeId}`} aria-hidden="true">
        <span />
      </div>
      <p className="eyebrow">{resultType.area}</p>
      <h1>{resultType.name}</h1>
      {decision.subtitle ? <p className="result-subtitle">{decision.subtitle}</p> : null}
      <p className="lead">{resultType.headline}</p>
      <p>{resultType.detail}</p>
      {score.confidence === "soft" ? (
        <p className="soft-confidence">비슷하다는 답이 많아 결과 표현을 조금 부드럽게 읽어주세요.</p>
      ) : null}
      <div className="reason-panel">
        <h2>선택 근거</h2>
        {reasons.map((reason) => (
          <p key={reason}>{reason}</p>
        ))}
        {decision.axisNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
      <section className="variety-section">
        <h2>비교해보기 좋은 품종</h2>
        <p className="section-note">품종은 정답이나 순위가 아니라 취향을 탐색하기 위한 후보예요.</p>
        <div className="variety-list">
          {varieties.map((variety) => (
            <VarietyCard key={variety.id} variety={variety} reason={makeReason(variety, resultType.name)} />
          ))}
        </div>
        {aromaticSuggestion ? (
          <article className="aroma-card">
            <p className="eyebrow">향미 특별 제안</p>
            <h3>{aromaticSuggestion.name}</h3>
            <p>특별한 밥 향에도 관심을 보였으니, 고소하거나 팝콘을 떠올리게 하는 향의 차이도 경험해보세요.</p>
            <p className="fine-print">{aromaticSuggestion.caution}</p>
          </article>
        ) : null}
      </section>
      <AccuracyNotice />
      <button className="secondary-button" type="button" onClick={onRestart}>
        다시하기
      </button>
    </section>
  );
}

function getReasons(answers: Answers, questions: Question[]) {
  return questions
    .filter((question) => question.id !== "q3" && question.id !== "q9" && answers[question.id] !== undefined && answers[question.id] !== 0)
    .slice(0, 2)
    .map((question) => {
      const answer = answers[question.id];
      const text = answer === -1 ? question.optionA : question.optionB;
      return `${question.order}번에서 “${text}” 쪽을 골랐어요.`;
    });
}

function makeReason(variety: RiceVariety, resultName: string) {
  return `${resultName}의 감각과 비교해보기 좋은 ${variety.summary}입니다.`;
}
