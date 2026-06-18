import type { RiceVariety } from "../data/riceVarieties";

type VarietyCardProps = {
  variety: RiceVariety;
  reason: string;
};

export function VarietyCard({ variety, reason }: VarietyCardProps) {
  return (
    <article className="variety-card">
      <div>
        <p className="eyebrow">탐색 후보</p>
        <h3>{variety.name}</h3>
      </div>
      <p>{variety.summary}</p>
      <p className="reason">{reason}</p>
      {variety.midGlutinous ? <p className="tag-note">중간찰 특성이 함께 느껴질 수 있어요.</p> : null}
    </article>
  );
}
