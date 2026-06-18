type ProgressHeaderProps = {
  current: number;
  total: number;
  onBack: () => void;
};

export function ProgressHeader({ current, total, onBack }: ProgressHeaderProps) {
  return (
    <header className="progress-header">
      <button className="icon-button" type="button" onClick={onBack} aria-label="이전 질문으로 돌아가기">
        ‹
      </button>
      <div className="progress-copy">
        <span>
          {current}/{total}
        </span>
        <div className="progress-track" aria-hidden="true">
          <span style={{ width: `${(current / total) * 100}%` }} />
        </div>
      </div>
    </header>
  );
}
