import { serviceCopy } from "../data/copy";

export function AccuracyNotice() {
  return (
    <aside className="accuracy-notice">
      <span aria-hidden="true">i</span>
      <p>{serviceCopy.noticeShort}</p>
    </aside>
  );
}
