/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      main: "hsl(var(--color-bg-main) / <alpha-value>)",
      toggle: "hsl(var(--color-bg-toggle) / <alpha-value>)",
      screen: "hsl(var(--color-bg-screen) / <alpha-value>)",
      primary: "hsl(var(--color-primary-key) / <alpha-value>)",
      "primary-shd": "hsl(var(--color-primary-key-shd) / <alpha-value>)",
      secondary: "hsl(var(--color-secondary-key) / <alpha-value>)",
      "secondary-shd": "hsl(var(--color-secondary-key-shd) / <alpha-value>)",
      tertiary: "hsl(var(--color-tertiary-key) / <alpha-value>)",
      "tertiary-shd": "hsl(var(--color-tertiary-key-shd) / <alpha-value>)",
      "1": "hsl(var(--color-text-primary) / <alpha-value>)",
      "2": "hsl(var(--color-text-secondary) / <alpha-value>)",
      white: "hsl(var(--color-text-white) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
