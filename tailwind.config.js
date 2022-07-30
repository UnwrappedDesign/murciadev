/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        desktopGradient: "url('./images/path/to/image')",
      },
      boxShadow: {
        DEFAULT: "0px 4px 4px 0px #c4c4c440, 0px 9px 9px 0px #c4c4c440, 0px 18px 18px 0px #c4c4c440;",
      },
      colors: {
        blue: {
          "50": "#EBEFFF",
      "100": "#D6DFFF",
      "200": "#ADBFFF",
      "300": "#809BFF",
      "400": "#577BFF",
      "500": "#2D5CFF",
      "600": "#0034F0",
      "700": "#0027B3",
      "800": "#001B7A",
      "900": "#000D3D"
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
      fontFamily: {
        sans: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};