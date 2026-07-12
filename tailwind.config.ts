import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1C1C1C",
        surface: "#252525",
        surface2: "#2E2E2E",
        primary: "#DD4B24",
        gold: "#F2A93B",
        fg: "#FAFAFA",
        muted: "#8A8A86",
        border: "#3A3A3A",
      },
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
