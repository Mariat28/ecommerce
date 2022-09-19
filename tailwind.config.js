/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '7/8' : '90%'
      },
      animation: {
        fade: 'fadeOut 2s  ease-in-out',
      },
      keyframes: {
        fadeOut:{
          '0%' :{opacity: '50%'},
          '100%' :{opacity: '100%'},
        }
      }
    },
  },
  plugins: [
  ],
}
