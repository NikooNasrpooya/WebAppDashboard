import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  theme: {
    extend: {
      colors: {
        ink: "#0f1221",
        slate12: "#0F172A",
        slate11: "#1E293B",
        slate10: "#334155",
        slate9: "#475569",
        slate8: "#64748B",
        slate7: "#94A3B8",
        slate6: "#CBD5E1",
        slate5: "#E2E8F0",
        slate4: "#EDF2F7",
        purpleBar: "#7C5CFF",
        orangeBar: "#F59E0B",
        greenBar: "#22C55E",
        tagGreen: "#E8F9EF",
        tagGreenText: "#1A7F46",
        tagLow: "#FFF4E5",
        tagLowText: "#B76A00",
        tagHigh: "#FFE7EA",
        tagHighText: "#B8153B",
      },
      boxShadow: {
        card: "0 6px 20px rgba(2,6,23,0.08)",
      },
      borderRadius: {
        xl2: "14px",
      },
    },
  },
  plugins: [],
} satisfies Config;

