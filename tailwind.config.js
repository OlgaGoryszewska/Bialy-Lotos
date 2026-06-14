/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {},
      colors: {
        primary: '#D5D5D9',
        black: '#3C3B3F',
        brown: '#CB845C',
        gold: '#B5983F',
        lime: '#FFF761',
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        bochan: ['Bochan', 'sans-serif'],
        bochanstyled: ['BochanAlternative', 'sans-serif'],
        dmserif: ['DM Serif Display', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          'text-shadow': '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-lg': {
          'text-shadow': '3px 3px 6px rgba(0, 0, 0, 0.7)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
