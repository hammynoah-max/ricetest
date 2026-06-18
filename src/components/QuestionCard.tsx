import type { AnswerValue, Question } from "../data/questions";

type QuestionCardProps = {
  question: Question;
  total: number;
  selected?: AnswerValue;
  disabled?: boolean;
  onAnswer: (value: AnswerValue) => void;
};

export function QuestionCard({ question, total, selected, disabled = false, onAnswer }: QuestionCardProps) {
  return (
    <section className="question-card" aria-labelledby={`${question.id}-title`} aria-live="polite">
      <div className="question-kicker">
        <span className={`question-number ${question.category}`}>Q{question.order}</span>
        <span>
          {categoryLabel(question.category)}
          <small>
            {question.order}/{total}
          </small>
        </span>
      </div>
      {question.illustration ? (
        <img className="question-illustration" src={question.illustration} alt={question.illustrationAlt ?? ""} />
      ) : null}
      <h1 id={`${question.id}-title`}>{question.prompt}</h1>
      {question.helper ? <p className="helper-text">{question.helper}</p> : null}
      <div className="choice-grid" role="radiogroup" aria-label={question.prompt}>
        <ChoiceButton
          label="A"
          text={question.optionA}
          value={-1}
          selected={selected === -1}
          disabled={disabled}
          visualKind={question.visualKind}
          imageSrc={question.imageA}
          imageAlt={question.imageAltA ?? question.optionA}
          onAnswer={onAnswer}
        />
        <ChoiceButton
          label="B"
          text={question.optionB}
          value={1}
          selected={selected === 1}
          disabled={disabled}
          visualKind={question.visualKind}
          imageSrc={question.imageB}
          imageAlt={question.imageAltB ?? question.optionB}
          onAnswer={onAnswer}
        />
      </div>
      <button
        className={`neutral-button ${selected === 0 ? "is-selected" : ""}`}
        type="button"
        role="radio"
        aria-checked={selected === 0}
        disabled={disabled}
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
  disabled: boolean;
  visualKind?: Question["visualKind"];
  imageSrc?: string;
  imageAlt: string;
  onAnswer: (value: AnswerValue) => void;
};

function ChoiceButton({ label, text, value, selected, disabled, visualKind, imageSrc, imageAlt, onAnswer }: ChoiceButtonProps) {
  return (
    <button
      className={`choice-button ${selected ? "is-selected" : ""}`}
      type="button"
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={() => onAnswer(value)}
    >
      {imageSrc ? (
        <img
          className="question-photo"
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
      ) : visualKind ? (
        <QuestionVisual kind={visualKind} side={label} />
      ) : null}
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
