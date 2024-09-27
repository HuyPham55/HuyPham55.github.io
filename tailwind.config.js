/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: {
          "100": "#e5e7eb", //gray-200
          "200": "#9ca3af", //gray-600
          "300": "#1f2937", //gray-800
        }
      },
      blur: {
        xs: '2px',
      },
      keyframes: {
        ping: {
          '75%, 100%': {transform: 'scale(1.5)', opacity: '0', filter: 'blur(2px)'},
          '0%': {
            opacity: '0.8'
          }
        }
      },
      fontFamily: {
        'serif': ['"Times New Roman"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

