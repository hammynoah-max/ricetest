import { useEffect, useMemo, useState } from "react";
import { AppShell } from "./components/AppShell";
import { IntroScreen } from "./components/IntroScreen";
import { LandingScreen } from "./components/LandingScreen";
import { ProgressHeader } from "./components/ProgressHeader";
import { QuestionCard } from "./components/QuestionCard";
import { ResultScreen } from "./components/ResultScreen";
import { questions, type AnswerValue } from "./data/questions";
import { recommendVarieties } from "./lib/recommendation";
import { decideResult } from "./lib/resultEngine";
import { calculateScore, type Answers } from "./lib/scoring";
import { clearProgress, loadProgress, saveProgress } from "./lib/storage";

type Screen = "landing" | "intro" | "question" | "result";

export function App() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    setHasProgress(Boolean(loadProgress()));
  }, []);

  useEffect(() => {
    if (screen !== "landing") {
      saveProgress({ screen, currentIndex, answers });
    }
  }, [answers, currentIndex, screen]);

  const score = useMemo(() => calculateScore(answers), [answers]);
  const decision = useMemo(() => decideResult(score), [score]);
  const recommendation = useMemo(
    () =>
      recommendVarieties({
        x: score.x,
        y: score.y,
        typeId: decision.typeId,
        aromaInterest: score.aromaInterest,
      }),
    [decision.typeId, score.aromaInterest, score.x, score.y],
  );

  const currentQuestion = questions[currentIndex];

  function startFresh() {
    clearProgress();
    setAnswers({});
    setCurrentIndex(0);
    setScreen("intro");
    setHasProgress(false);
  }

  function resume() {
    const progress = loadProgress();
    if (!progress) {
      setHasProgress(false);
      setScreen("intro");
      return;
    }
    setAnswers(progress.answers);
    setCurrentIndex(Math.min(progress.currentIndex, questions.length - 1));
    setScreen(progress.screen === "landing" ? "intro" : progress.screen);
  }

  function answerQuestion(value: AnswerValue) {
    const nextAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(nextAnswers);
    window.setTimeout(() => {
      if (currentIndex >= questions.length - 1) {
        setScreen("result");
      } else {
        setCurrentIndex((index) => index + 1);
      }
    }, 260);
  }

  function goBack() {
    if (currentIndex === 0) {
      setScreen("intro");
      return;
    }
    setCurrentIndex((index) => index - 1);
  }

  return (
    <AppShell>
      {screen === "landing" ? <LandingScreen hasProgress={hasProgress} onStart={startFresh} onResume={resume} /> : null}
      {screen === "intro" ? <IntroScreen onContinue={() => setScreen("question")} /> : null}
      {screen === "question" ? (
        <div className="screen question-screen">
          <ProgressHeader current={currentIndex + 1} total={questions.length} onBack={goBack} />
          <QuestionCard question={currentQuestion} selected={answers[currentQuestion.id]} onAnswer={answerQuestion} />
        </div>
      ) : null}
      {screen === "result" ? (
        <ResultScreen
          score={score}
          decision={decision}
          answers={answers}
          questions={questions}
          varieties={recommendation.varieties}
          aromaticSuggestion={recommendation.aromaticSuggestion}
          onRestart={startFresh}
        />
      ) : null}
    </AppShell>
  );
}
