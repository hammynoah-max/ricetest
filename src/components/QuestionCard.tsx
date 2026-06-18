import type { AnswerValue, Question } from "../data/questions";

type QuestionCardProps = {
  question: Question;
  selected?: AnswerValue;
  onAnswer: (value: AnswerValue) => void;
};

export function QuestionCard({ question, selected, onAnswer }: QuestionCardProps) {
  return (
    <section className="question-card" aria-labelledby={`${question.id}-title`}>
      <p className="eyebrow">{categoryLabel(question.category)}</p>
      <h1 id={`${question.id}-title`}>{question.prompt}</h1>
      {question.helper ? <p className="helper-text">{question.helper}</p> : null}
      <div className="choice-grid" role="radiogroup" aria-label={question.prompt}>
        <ChoiceButton
          label="A"
          text={question.optionA}
          value={-1}
          selected={selected === -1}
          visualKind={question.visualKind}
          onAnswer={onAnswer}
        />
        <ChoiceButton
          label="B"
          text={question.optionB}
          value={1}
          selected={selected === 1}
          visualKind={question.visualKind}
          onAnswer={onAnswer}
        />
      </div>
      <button
        className={`neutral-button ${selected === 0 ? "is-selected" : ""}`}
        type="button"
        role="radio"
        aria-checked={selected === 0}
        onClick={() => onAnswer(0)}
      >
        {question.neutralLabel}
      </button>
    </section>
  );
}

type ChoiceButtonProps = {
  label: "A" | "B";
  text: string;
  value: AnswerValue;
  selected: boolean;
  visualKind?: Question["visualKind"];
  onAnswer: (value: AnswerValue) => void;
};

function ChoiceButton({ label, text, value, selected, visualKind, onAnswer }: ChoiceButtonProps) {
  return (
    <button
      className={`choice-button ${selected ? "is-selected" : ""}`}
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={() => onAnswer(value)}
    >
      {visualKind ? <QuestionVisual kind={visualKind} side={label} /> : null}
      <span className="choice-label">{label}</span>
      <span>{text}</span>
    </button>
  );
}

function QuestionVisual({ kind, side }: { kind: NonNullable<Question["visualKind"]>; side: "A" | "B" }) {
  return (
    <div className={`question-visual ${kind} side-${side}`} aria-hidden="true">
      {Array.from({ length: 12 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function categoryLabel(category: Question["category"]) {
  const labels = {
    appearance: "외관 비교",
    stickiness: "찰기 비교",
    texture: "식감 비교",
    bonus: "번외 질문",
  };
  return labels[category];
}
