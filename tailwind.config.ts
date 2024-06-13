import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "noise-pattern": "url('/noise-effect.png')",
        "primary-gradient": "linear-gradient(180deg, #192C19 0%, #0D0E0E 100%)",
        "gradient-center":
          "linear-gradient(360deg, #0D0E0E 0%, #0D0E0E 20%, #192C19 60%, #192C19 85%, #0D0E0E 100%)",
        "noise-effect-friends": "url('/noise-effect-friends.png')",
        "noise-effect-onboarding": "url('/noise-effect-onboarding.png')",
        "noise-pattern-friends": "url('/noise-pattern-friends.png')",
        "shadow-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
      },
      colors: {
        white: "#FFFFFF",
        buttonText: "#0D0E0E",
        green: {
          100: "#4EEB55",
          50: "#82B184",
        },
        gray: {
          300: "#6E6E6E",
          200: "#262926",
          100: "#929492",
          50: "#3A3E3A",
        },
      },
    },
  },
  plugins: [],
};

export default config;
