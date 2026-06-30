import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FBF7F0",
        surface: "#FFFFFF",
        ink: "#2B2622",
        muted: "#6B6259",
        accent: "#C75D3C",
        sage: "#7A8B6F",
        amber: "#E0A458",
        hair: "#EFE6D8",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
