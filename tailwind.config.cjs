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
      primary: "#0A1128",
      secondary: "#034078",
      text: "#fefcfb",
      info: "#1282a2",
      danger: "#001f54",
    },
  },
  plugins: [],
};
