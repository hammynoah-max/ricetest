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
      {question.referenceImage ? (
        <img className="question-reference" src={question.referenceImage} alt={question.referenceImageAlt ?? ""} />
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
          onAnswer={onAnswer}
        />
        <ChoiceButton
          label="B"
          text={question.optionB}
          value={1}
          selected={selected === 1}
          disabled={disabled}
          onAnswer={onAnswer}
        />
        <ChoiceButton
          label="C"
          text={question.neutralLabel}
          description={question.neutralDescription}
          value={0}
          selected={selected === 0}
          disabled={disabled}
          onAnswer={onAnswer}
        />
      </div>
    </section>
  );
}

type ChoiceButtonProps = {
  label: "A" | "B" | "C";
  text: string;
  description?: string;
  value: AnswerValue;
  selected: boolean;
  disabled: boolean;
  onAnswer: (value: AnswerValue) => void;
};

function ChoiceButton({ label, text, description, value, selected, disabled, onAnswer }: ChoiceButtonProps) {
  return (
    <button
      className={`choice-button ${value === 0 ? "neutral-choice" : ""} ${selected ? "is-selected" : ""}`}
      type="button"
      role="radio"
      aria-checked={selected}
      disabled={disabled}
      onClick={() => onAnswer(value)}
    >
      <span className="choice-label">{label}</span>
      <span>
        <span className="choice-text">{text}</span>
        {description ? <span className="choice-description">{description}</span> : null}
      </span>
    </button>
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
