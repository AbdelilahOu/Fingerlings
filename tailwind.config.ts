import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./consts/*`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        display: ["JetBrains Mono"],
      },
    },
  },
   plugins: [
    require('tailwindcss/plugin')(({ addUtilities }) => {
      const newUtilities = {
        '.clip-cut-corners': {
          'clip-path': 'polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }),
  ],
};
