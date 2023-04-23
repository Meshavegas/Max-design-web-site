/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#ffffff",
      orange: "#ec008c",
      "dark-grey": "#473C33",
      "light-grey": "#473C33",
      light: "#005BAA",
      "light-100": "#F7F7F7",
      brown: "#473C33",
      red: "#850000",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
