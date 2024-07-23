const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#303949',
      },
      screens: {
        xs: '480px',
      },
      willChange: {
        filter: 'filter',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
