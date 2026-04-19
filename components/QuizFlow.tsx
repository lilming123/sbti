"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/lib/questions";
import { computeResult, createSubmissionId, writeResultSnapshot } from "@/lib/scoring";
import { dimensionMeta } from "@/lib/dimensions";
import { useDictionary } from "./DictionaryProvider";

type Phase = "quiz" | "computing";

export function QuizFlow() {
  const router = useRouter();
  const { t } = useDictionary();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [phase, setPhase] = useState<Phase>("quiz");

  const currentQuestion = questions[currentIndex];
  const questionId = currentQuestion.id;
  const selectedValue = answers[questionId] as number | undefined;

  const displayNumber = currentIndex + 1;
  const totalDisplay = questions.length;

  const dimInfo = dimensionMeta[currentQuestion.dim];

  function selectOption(value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    setTimeout(() => {
      goNext();
    }, 300);
  }

  function goNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      finishQuiz();
    }
  }

  function handleNext() {
    if (selectedValue === undefined) return;
    goNext();
  }

  function handlePrev() {
    if (phase === "quiz" && currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  }

  function finishQuiz() {
    setPhase("computing");
    const result = computeResult(answers);
    const submissionId = createSubmissionId();
    writeResultSnapshot({
      ...result,
      finalTypeCode: result.finalType.code,
      submissionId,
    });
    router.push(`/result/${result.finalType.slug}`);
  }

  if (phase === "computing") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-24">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 dark:border-emerald-800 border-t-emerald-700 dark:border-t-emerald-400" />
        <p className="text-sm text-slate-500 dark:text-slate-400">{t("quiz.computing")}</p>
      </div>
    );
  }

  const canGoBack = currentIndex > 0;

  return (
    <div className="rounded-[36px] border border-black/5 dark:border-white/10 bg-white/90 dark:bg-dark-card px-8 py-10 shadow-[0_28px_80px_rgba(15,23,42,0.08)] dark:shadow-none">
      <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
        {t("quiz.progress", { current: displayNumber, total: totalDisplay })}
      </p>

      {/* {dimInfo && (() => {
        const dimCode = dimInfo.code;
        const modelKey = dimCode.startsWith("S") ? "model.self"
          : dimCode.startsWith("E") ? "model.emotion"
          : dimCode.startsWith("A") && !dimCode.startsWith("Ac") ? "model.attitude"
          : dimCode.startsWith("Ac") ? "model.action"
          : "model.social";
        return (
          <p className="mt-2 text-xs font-medium text-emerald-700/70 dark:text-emerald-400/70">
            {t(modelKey)} &middot; {t(`dim.${dimCode}`)}
          </p>
        );
      })()} */}

      <h2 className="mt-5 text-xl leading-relaxed text-slate-950 dark:text-white sm:text-2xl">
        {t(`q.${questionId}.text`)}
      </h2>

      <div className="mt-8 flex flex-col gap-3">
        {currentQuestion.options.map((opt, idx) => {
          const isSelected = selectedValue === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => selectOption(opt.value)}
              className={`w-full rounded-[20px] border px-5 py-4 text-left text-sm leading-relaxed transition sm:text-base ${
                isSelected
                  ? "border-emerald-900 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-slate-900 dark:text-slate-100"
                  : "border-black/5 dark:border-white/10 bg-white/85 dark:bg-dark-card text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-500"
              }`}
            >
              {t(`q.${questionId}.opt${idx + 1}`)}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canGoBack}
          className="rounded-full border border-black/5 dark:border-white/10 bg-white dark:bg-dark-card px-5 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 transition hover:bg-slate-50 dark:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          {t("quiz.prev")}
        </button>

        <button
          type="button"
          onClick={handleNext}
          disabled={selectedValue === undefined}
          className="rounded-full bg-emerald-900 dark:bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-800 dark:hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          {t("quiz.next")}
        </button>
      </div>
    </div>
  );
}
