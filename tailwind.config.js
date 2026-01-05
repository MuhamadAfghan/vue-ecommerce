/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        integral: ['Integral CF', 'Archivo Black', 'sans-serif'],
      },
      colors: {
        // Add any specific colors from the design if needed later
      },
    },
  },
  plugins: [],
}
