/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        "color-1" : "#50C5B6",
        "color-1-hover" : "#2dad9d",
        "color-4-dark" : "#030b1f",
        "color-2" : "white",
        "color-3" : "black",
        "color-4" : "#0F172A"
      },
      transitionProperty : {
        "rotate" : "rotate",
        "left" : "left"
      }
    },
  },
  plugins: [],
}

