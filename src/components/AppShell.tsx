import type { ReactNode } from "react";
import { serviceCopy } from "../data/copy";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="app-shell" aria-label={serviceCopy.serviceName}>
      <div className="brand-bar">
        <span className="brand-mark" aria-hidden="true">
          米
        </span>
        <span>{serviceCopy.serviceName}</span>
      </div>
      {children}
    </main>
  );
}
