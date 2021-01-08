module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      margin: ['first']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
