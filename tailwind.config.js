/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["GangwonEduPowerExtraBoldA"],
      },
      colors: {
        black: "#444",
        primary: "#F87171",
      },
    },
  },
  plugins: [],
};
