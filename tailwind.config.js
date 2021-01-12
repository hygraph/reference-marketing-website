module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.500')
          }
        }
      })
    }
  },
  variants: {
    extend: {
      margin: ['first']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
