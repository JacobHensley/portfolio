/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#dce2f1",
        background: "#05070c",
        primary: "#93a3d4",
        secondary: "#522d70",
        accent: "#ac55bb",
      },
    },
  },
  plugins: [],
};