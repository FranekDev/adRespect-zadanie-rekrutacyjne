/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/components/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      keyframes: {
        expandInput: {
          from: { width: '0px', 'margin-right': '-45px' },
          to: { width: '160px' }
        },
        hideInput: {
          from: { width: '160px', opacity: '1' },
          to: { width: '0px', opacity: '0', 'margin-right': '-45px' }
        },
        rotateLeft: {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(-360deg)' }
        },
        rotateRight: {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(360deg)' }
        },
        showMobileMenu: {
          from: { width: '0vw', height: '0px', 'margin-top': '0px' },
          to: { width: '85vw', height: '322px', 'margin-top': '450px' }
        },
        hideMobileMenu: {
          from: { width: '85vw', height: '322px', 'margin-top': '450px' },
          to: {
            width: '0vw',
            height: '0px',
            'margin-top': '0px',
            'box-shadow': 'none'
          }
        },
        opacity: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        decreaseOpacity: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        }
      },
      animation: {
        expandInput: 'expandInput .3s ease-in-out forwards',
        hideInput: 'hideInput .3s ease-in-out forwards',
        rotateLeft: 'rotateLeft .3s ease-in-out forwards',
        rotateRight: 'rotateRight .3s ease-in-out forwards',
        showMobileMenu: 'showMobileMenu .2s ease-in-out forwards',
        hideMobileMenu: 'hideMobileMenu .2s ease-in-out forwards',
        opacity: 'opacity .2s ease-in-out forwards',
        decreaseOpacity: 'decreaseOpacity .2s ease-in-out forwards'
      }
    }
  },
  plugins: []
};
