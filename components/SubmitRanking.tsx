"use client";

import { useEffect, useState } from "react";
import { readResultSnapshot } from "@/lib/scoring";

type Status = "idle" | "submitting" | "done" | "error" | "already";

export function SubmitRanking({ typeCode }: { typeCode: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [snapshot, setSnapshot] = useState<ReturnType<typeof readResultSnapshot> & { submissionId?: string; finalTypeCode?: string } | null>(null);

  useEffect(() => {
    const raw = readResultSnapshot() as ReturnType<typeof readResultSnapshot> & { submissionId?: string; finalTypeCode?: string } | null;
    if (raw && raw.finalTypeCode === typeCode && raw.submissionId) {
      setSnapshot(raw);
    }
  }, [typeCode]);

  if (!snapshot) return null;

  async function handleSubmit() {
    if (!snapshot) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/rankings/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          typeCode: snapshot.finalTypeCode,
          submissionId: snapshot.submissionId,
          rawScores: snapshot.rawScores,
          levels: snapshot.levels,
          similarity: snapshot.similarity,
        }),
      });
      if (res.status === 409) {
        setStatus("already");
      } else if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700">
        已提交至排行榜
      </div>
    );
  }

  if (status === "already") {
    return (
      <div className="rounded-full border border-amber-200 bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-700">
        本次结果已提交过
      </div>
    );
  }

  return (
    <button
      onClick={handleSubmit}
      disabled={status === "submitting"}
      className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50"
    >
      {status === "submitting" ? "提交中..." : "提交至排行榜"}
    </button>
  );
}
