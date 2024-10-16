/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        customLightBlue: "#B0FAFF",
        customBlack: "#0F373C",
        backgroundBlack: "#00161D",
        customBorderColor: "#0E8B9A",
        buttonBackground: "#CDFCFF",
        footerBackground: "#010F14",
      },
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        "inner-light-blue": "inset 0 0 20px rgba(139, 249, 232, 0.7)",
      },
    },
  },
  plugins: [],
};
