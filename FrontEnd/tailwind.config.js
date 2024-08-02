/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      yusei: ['Yusei Magic', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },},
    animation: {
      scroll: 'scroll 15s linear infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },     
    backgroundImage:{
      'fav-color': 'radial-gradient(circle, #5d6d7e, #bfc9ca)',
      'f-color':'linear-gradient(45deg,#212f3d,#5d6d7e)'
    }              
  },
  plugins: [],
}

