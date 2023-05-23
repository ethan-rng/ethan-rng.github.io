/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f0f0f",
        secondary: "#1E1E1E",
        tertiary: "#F3F4F6",

        "black-100": "#100d25",
        "black-200": "#1E1E1E",
        "gray-100": "#AAAAAA",
        "white-100": "#f3f3f3",
        "orange-100": "#FFA500",
      },
      transitionDuration: { 
        "600": "600ms",
      },

      width: {
        "128": "45rem",
      },
      height: {
        "128": "52rem",
      },

      animation: {
        "navbar": "navbar 600ms ease-in-out 600ms", 
      },
    
    },
  },
  plugins: [],
}

