/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "black-24-1/2": "0 0 24px rgba(0,0,0,0.5)",
        "black-24-1/3": "0 0 24px rgba(0,0,0,0.33)",
      },
      colors: {
        theme: {
          0: "#fefcfb",
          1: "#00a8e8",
          2: "#007ea7",
          3: "#003459",
          4: "#00171f",
        },
        code: {
          modules: "#c586c0",
          variables: "#9cdcfe",
          parentheses: "#ffd700",
          strings: "#ce9178",
          components: "#4ec9b0",
          jsxTags: "#808080",
          background: "#1e1e1e",
          methods: "#dcdcaa",
        },
        nightsky: "#0b1026",
      },
      keyframes: {
        slideIn1: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideIn2: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "50%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        slideIn3: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "66%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        blink: {
          "0%": { opacity: 0 },
          "20%": { opacity: 0 },
          "30%": { opacity: 1 },
          "70%": { opacity: 1 },
          "80%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
      },
      transitionTimingFunction: {
        "slide-in-2": "cubic-bezier(0.75,0,0.5,0.7)",
        "slide-in-3": "cubic-bezier(1,0,0.5,0.7)",
      },
    },
  },
  plugins: [],
};
