const { locales } = require('./lib/_locales')

module.exports = {
  i18n: {
    defaultLocale: locales.find((locale) => locale.default).value,
    locales: locales.map((locale) => locale.value)
  },
  images: {
    domains: ['media.graphassets.com']
  }
}
