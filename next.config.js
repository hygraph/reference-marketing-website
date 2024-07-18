const { locales } = require('./lib/_locales')

module.exports = {
  i18n: {
    defaultLocale: locales.find((locale) => locale.default).value,
    locales: locales.map((locale) => locale.value)
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
    ],
    // Deprecate domain after asset migration
    domains: ['media.graphassets.com']
  },

}
