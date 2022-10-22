/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      lightgray: "#d6e2f0",
      grayblue: "#7b879d",
      darkblue: "#1f3251",
      blue: "#3e52a3",
    },
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
};
