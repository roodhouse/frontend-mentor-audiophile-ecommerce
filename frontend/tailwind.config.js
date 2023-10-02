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
      almostBlack: '#101010',
      maskBlack: '#191919',
      charcoal: '#4c4c4c',
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