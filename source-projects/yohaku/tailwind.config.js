/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-canvas)",
        surface: "var(--color-surface)",
        "surface-muted": "var(--color-surface-muted)",
        ink: "var(--color-ink)",
        "ink-muted": "var(--color-ink-muted)",
        moss: "var(--color-moss)",
        gold: "var(--color-gold)",
        line: "var(--color-border)",
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', "serif"],
        sans: ['"Noto Sans JP"', "sans-serif"],
        display: ['"Cormorant Garamond"', "serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        japanese: "0.08em",
      },
    },
  },
  plugins: [],
};
