import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RLTI 人格测试",
    short_name: "RLTI",
    description:
      "RLTI 锈湖主题人格测试。30 道情境题测出你的人格类型，27 种结果 + 15 维度落点分析。免费、无需注册。",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ed",
    theme_color: "#f7f4ed",
    lang: "zh-CN",
    categories: ["entertainment", "lifestyle"],
    icons: [
      {
        src: "/images/types/jakob.png",
        sizes: "732x704",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
