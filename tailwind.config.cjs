/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Epilogue', sans-serif",
        'inter': "'Inter', sans-serif"
      },
      colors: {
        'do-blue-dark': 'rgb(8, 27, 75);',
        'do-blue-medium': 'rgb(0, 44, 155);',
        'do-blue-light': 'rgb(0, 105, 255);',
        'do-gray-light': 'rgba(200, 223, 255, 0.5);',
        'do-cyan-light': 'rgb(123, 222, 255)'
      },
      height: {
        '78': '18.8rem',
        '128':'31.4rem',
        '136':'48.4rem',
        '142':'59.8rem',
      },
      width: {
        '128': '35rem',
        'total': '100%'
      },
      margin: {
        '128':'35.4rem',
        '135':'38.8rem',
      }
      ,
      zIndex: {
        'back': '-50',
      }
    },
  },
  plugins: [],
}
