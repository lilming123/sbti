import { QuizFlow } from "@/components/QuizFlow";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "开始 SBTI 人格测试 | 32 道题测出你的抽象人格",
  description: "进入 SBTI 人格测试，32 道趣味题目，选中自动下一题，3 分钟测出你的人格类型。免费在线测试，测完即看十五维落点和详细人格解读。",
  alternates: { canonical: "https://sbti.xiachat.com/test" },
  openGraph: {
    title: "开始 SBTI 人格测试 | 32 道题测出你的抽象人格",
    description: "32 道趣味题目，3 分钟测出你的 SBTI 人格类型，免费在线测试。",
    url: "https://sbti.xiachat.com/test",
  },
};

export default function TestPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-16 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
          一题一题答，最后直接落到你的人格页。
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
          这版测试保留原始 SBTI
          题目与结果映射，但交互改成了更像正式产品的单题推进式流程。你完成后会被直接送到对应人格详情页。
        </p>
      </div>

      <QuizFlow />
    </main>
  );
}
