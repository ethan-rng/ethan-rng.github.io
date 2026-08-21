import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft near-black canvas — dark without the harshness of true black.
        // `raised` is for the rare surface that needs to sit above it.
        bg: "#121212",
        raised: "#1c1c1c",
        // Type scale: bright for headings, fg for prose, muted for
        // everything secondary (dates, tags, nav in its resting state).
        // Named `fg` rather than `base` so it can't collide with the
        // built-in `text-base` font size.
        // Contrast against #121212: fg 14.9:1, muted 6.7:1, faint 4.9:1.
        // `faint` is the floor — it lands on small text (labels, tags,
        // dates), so it has to clear WCAG AA's 4.5:1. Don't darken it, and
        // re-check it if you ever lighten `bg` further.
        bright: "#ededed",
        fg: "#e5e5e5",
        muted: "#9b9b9b",
        faint: "#828282",
        // Hairlines only — never filled boxes. Lifted a little from the
        // divider grey so the dashed sidebar rule still reads on `bg`.
        line: "#2e2e2e",
        // The single accent. Hover and active states only; nothing is
        // accent-colored at rest.
        //
        // Meta's brand blue (#0064E0) is only 3.48:1 on this background and
        // Facebook blue (#1877F2) is 4.42:1 — both fail WCAG AA for text. So
        // the interactive accent is a lightened Meta blue at 5.59:1, and the
        // true brand blue is kept for `accentDeep`, which is only ever used
        // for the ambient glow where nothing has to be legible.
        accent: "#3b8aff",
        accentDeep: "#0064e0",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.8125rem", { lineHeight: "1.7" }],
        base: ["0.9375rem", { lineHeight: "1.8" }],
        lg: ["1.0625rem", { lineHeight: "1.7" }],
      },
      maxWidth: {
        prose: "38rem",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
  },
  plugins: [],
};

export default config;
