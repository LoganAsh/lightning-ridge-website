import type { Config } from "tailwindcss";
import containerQueries from "@tailwindcss/container-queries";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ridge: { DEFAULT: "#2E6FE6", dark: "#1F55BC", light: "#8DB4FF" },
        basin: "#0E1621",
        shale: "#1F2D3F",
        dusk: "#132036",
        steel: "#A6A6A6",
        snow: "#F3F5F8",
        mist: "#C9D3E0",
        rock: "#4A5566",
        line: "#E3E7ED",
        // shadcn-style tokens used by components in components/ui, mapped to the site palette
        background: "#FFFFFF",
        foreground: "#0E1621",
        muted: { DEFAULT: "#E3E7ED", foreground: "#4A5566" },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "Arial Narrow", "sans-serif"],
        sans: ["Barlow", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: { site: "80rem" },
    },
  },
  plugins: [containerQueries],
};
export default config;
