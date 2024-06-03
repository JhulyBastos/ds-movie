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
        "brand-color": "#141314",
        "dark-10": "#000000",
        "dark-20": "#0e0e0e",
        "dark-30": "#f6f608",
        "dark-40": "#ffbb3a",
        "dark-50": "#f2f2ef",
        "dark-60": "#ece35f",
      },
    },
  },
  plugins: [],
};
export default config;
