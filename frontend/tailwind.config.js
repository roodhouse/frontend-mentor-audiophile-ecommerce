/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Manrope', // Adds a new `font-display` class
      }
    },
    colors: {
      black: '#000000',
      almostBlack: '#FBAF85',
      white: '#ffffff',
      offWhite: '#F1F1F1',
      almostWhite: '#FAFAFA',
      transparent: 'transparent',
      deepOrange: '#D87D4A',
      lightOrange: '#FBAF85',
    }
  },
  plugins: [],
}