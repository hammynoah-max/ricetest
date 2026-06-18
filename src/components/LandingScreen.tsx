import { serviceCopy } from "../data/copy";

type LandingScreenProps = {
  hasProgress: boolean;
  onStart: () => void;
  onResume: () => void;
};

export function LandingScreen({ hasProgress, onStart, onResume }: LandingScreenProps) {
  return (
    <section className="screen landing-screen">
      <div className="hero-visual" aria-hidden="true">
        <img className="landing-hero-image" src="/images/illustrations/landing-hero.webp" alt="" />
      </div>
      <div className="landing-copy">
        <p className="eyebrow">{serviceCopy.serviceName}</p>
        <h1>{serviceCopy.landingTitle}</h1>
        <p className="lead">{serviceCopy.landingLead}</p>
        <p>{serviceCopy.landingDescription}</p>
        <p className="meta">{serviceCopy.landingMeta}</p>
      </div>
      <div className="button-stack">
        <button className="primary-button" type="button" onClick={onStart}>
          {serviceCopy.startCta}
        </button>
        {hasProgress ? (
          <button className="secondary-button" type="button" onClick={onResume}>
            이어서 하기
          </button>
        ) : null}
      </div>
      <p className="fine-print">실제 식감은 재배·보관·도정·취반 조건에 따라 달라질 수 있어요.</p>
    </section>
  );
}
