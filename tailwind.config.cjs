/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        star: "0 0 1px var(--tw-shadow-color)",
      },
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
  },
  plugins: [],
};
