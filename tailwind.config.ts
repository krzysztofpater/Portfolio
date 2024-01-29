import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        autofit: "repeat(auto-fit, minmax(350px, 1fr))",
      },
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-15px)",
          },
          to: {
            opacity: "1",
            transform: "translateyY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 0.4s ease-in-out var(--slidein-delay, 0) forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
