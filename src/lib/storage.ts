import type { Answers } from "./scoring";

const STORAGE_KEY = "rice-taste-lab:v1";

export type StoredProgress = {
  screen: "landing" | "intro" | "question" | "result";
  currentIndex: number;
  answers: Answers;
  savedAt: number;
};

export function loadProgress(): StoredProgress | undefined {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as StoredProgress;
    if (!parsed.savedAt || Date.now() - parsed.savedAt > 1000 * 60 * 60 * 24) return undefined;
    return parsed;
  } catch {
    return undefined;
  }
}

export function saveProgress(progress: Omit<StoredProgress, "savedAt">) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...progress, savedAt: Date.now() }));
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
