/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths based on your project structure
  theme: {
    extend: {
      colors: {
        primary: "#232536",
        yellowAccent: "#FFD050",
        purpleAccent: "#592EA9",
        grayLight: "#C4C4C4",
        grayMedium: "#6D6E76",
        whitePrimary: "#F4F4F4",
        whiteLight: "#F4F0F8",
        whiteAlt: "#FBF6EA",
      },
      fontFamily: {
        heading: ['"Sen"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
