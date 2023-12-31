import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#101A25",
        secondary: "#363636",
        tertiary: "#313F4F",
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '1000': '1000ms',
      },
      screens: {
        sm: "640px", // Small screens, like smartphones
        md: "768px", // Medium screens, like tablets
        lg: "1024px", // Large screens, like laptops
        xl: "1280px", // Extra large screens, like desktops
        "2xl": "1536px", // Extra extra large screens
        // Add more custom screen sizes as needed
      },
      boxShadow: {
        glow: '0 0 15px rgba(255, 255, 255, 0.6)',
      },
    },

    animation: {
      slideup: "slideup 1s ease-in-out",
      slidedown: "slidedown 1s ease-in-out",
      slideleft: "slideleft 1s ease-in-out",
      slideright: "slideright 1s ease-in-out",
      wave: "wave 1.2s linear infinite",
      slowfade: "slowfade 2.2s ease-in-out",
    },

    keyframes: {
      slideup: {
        from: { opacity: "0", transform: "translateY(25%)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slidedown: {
        from: { opacity: "0", transform: "translateY(-25%)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },
      slideleft: {
        from: { opacity: "0", transform: "translateX(-20px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      slideright: {
        from: { opacity: "0", transform: "translateX(20px)" },
        to: { opacity: "1", transform: "translateX(0)" },
      },
      slowfade: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
    },
    plugins: [],
  },
};

export default config;
