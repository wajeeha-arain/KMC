// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        beVietnam: ["var(--font-beVietnamPro)"],
      },
    },
  },
  plugins: [],
};

export default config;
