import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SBTI 人格测试",
    short_name: "SBTI",
    description:
      "SBTI 人格测试在线测试。32 道题测出你的 SBTI 人格类型，27 种结果 + 15 维度落点分析。免费、无需注册。",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ed",
    theme_color: "#f7f4ed",
    lang: "zh-CN",
    categories: ["entertainment", "lifestyle"],
    icons: [
      {
        src: "/images/types/ctrl.png",
        sizes: "732x704",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
