/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/components/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        expandInput: {
          from: { width: '0px' },
          to: { width: '160px' }
        },
        hideInput: {
          from: { width: '160px' },
          to: { width: '0px' }
        }
      },
      animation: {
        expandInput: 'expandInput .55s ease-in-out',
        hideInput: 'hideInput .55s ease-in-out forwards'
      }
    }
  },
  plugins: []
};
