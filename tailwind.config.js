module.exports = {
  important: true,
  theme: {
    container: {
      center: true,
    },
    screens: {
      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        bgWhite: '#F9F9F9',
        softGrey: '#F1F3F5',
        bgDark: '#252525',
        darkGrey: '#363636',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'slide' },
          '50%': { transform: 'slide' },
        }
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'active']
  }
}