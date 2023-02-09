/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
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
        slideIn: {
          "0%": { transform: "translateY(-40%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        slideInLeft: {
          "0%, 33%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        slideInRight: {
          "0%, 33%": { transform: "translateX(100%)", opacity: 0 },
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
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        foldToRight: {
          "0%": {
            width: "100%",
            transform: "translateX(-50%)",
            borderColor: "#007ea7",
          },
          "60%": {
            width: "100%",
            transform: "translateX(50%)",
            borderColor: "#007ea7",
          },
          "100%": { width: "100%", transform: "translateX(50%)" },
        },
        foldToLeft: {
          "0%": {
            width: "100%",
            transform: "translateX(-50%)",
            borderColor: "#007ea7",
          },
          "60%": {
            width: "100%",
            transform: "translateX(-150%)",
            borderColor: "#007ea7",
          },
          "100%": { width: "100%", transform: "translateX(-150%)" },
        },
        unfoldFromRight: {
          "0%": {
            width: "100%",
            transform: "translateX(50%)",
            borderColor: "#007ea7",
          },
          "100%": {
            width: "100%",
            transform: "translateX(-50%)",
            borderColor: "#007ea7",
          },
        },
        unfoldFromLeft: {
          "0%": {
            width: "100%",
            transform: "translateX(-150%)",
            borderColor: "#007ea7",
          },
          "100%": {
            width: "100%",
            transform: "translateX(-50%)",
            borderColor: "#007ea7",
          },
        },
        shake: {
          "0%": {
            transform: "translateX(0)",
          },
          "12.5%": {
            transform: "translateX(2.5%)",
          },
          "37.5%": {
            transform: "translateX(-2.5%)",
          },
          "62.5%": {
            transform: "translateX(2.5%)",
          },
          "87.5%": {
            transform: "translateX(-2.5%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        weatherPeek: {
          "0%": {
            right: "-50vw",
          },
          "15%, 85%": {
            right: "-10vw",
          },
          "100%": {
            right: "-50vw",
          },
        },
        topLeftClick: {
          "0%, 10%, 70%, 100%": {
            opacity: "0",
            background: "radial-gradient(circle at 10% 40px, #fafefb 10px, #000000 20px)",
          },
          "30%, 35%, 45%, 50%": {
            opacity: "0.4",
            background: "radial-gradient(circle at 10% 40px, #fafefb 10px, #000000 20px)",
          },
          "40%": {
            background: "radial-gradient(circle at 10% 40px, #fafefb 16px, #000000 20px)",
          },
        },
      },
    },
  },
  plugins: [],
};
