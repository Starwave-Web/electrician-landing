import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/background-images/hero-bg.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-grey": "#4F4F4F",
        "secondary-grey": "#f2f2f2",
        "primary-red": "#E15252",
        "primary-yellow": "#F2C94C",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "custom-curve": "50% 100%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
