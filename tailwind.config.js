module.exports = {
  important: true,
  theme: {
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
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}