/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': { 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '768px', 'max': '1024px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1730px' },

      'mac': { 'min': '1025px', 'max': '1730px' },
      // // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl': {'min': '1280px', 'max': '1535px'},
      // // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        custom: ['Revelstoke', 'Heaven']
      },
      animation: {
        'infinite-scroll-right': 'infinite-scroll-right 25s linear infinite',
        'infinite-scroll-left': 'infinite-scroll-left 25s linear infinite',

      },
      keyframes: {
        'infinite-scroll-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-left': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0%)' },
        }
      },
      plugins: [],
    }
  },
  darkMode: 'selector',
  plugins: [
    require('tailwindcss-animated')
  ],
  animate : 'selector',
}