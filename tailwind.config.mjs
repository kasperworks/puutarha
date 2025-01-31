/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        monolith: "0 15px 80px -20px #D8D24D",
      },
      colors: {
        black: "#0E1111",
        white: "#FBFBFB",
        grey: "#8CA3AD",
        background: "#252B35",
        codeblock: "#2E3541",
        darkgreen: "#235353",
        green: "#93c763",
        accent: "#FFF96B",
        accenthover: "#EDE759",
        accentshadow: "#D8D24D",
        brightgreen: "#78FF93",
        purple: "#8745EA",
        darkpurple: "#5D4384",
        lightgrey: "#EBEEF1",
        brightred: "#d5102e",
        obelisk: "#232A33",
      },
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        josefin: ["Josefin Sans", ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        DEFAULT:
          "2px 6px 6px rgba(0, 0, 0, 0.1), 0px -5px 35px rgba(255, 255, 255, 0.12)",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
