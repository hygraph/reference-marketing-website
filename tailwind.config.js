module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {
    margin: ['responsive', 'first'],
  },
  plugins: [require('@tailwindcss/ui')],
}
