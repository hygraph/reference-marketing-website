const { locales } = require('./lib/_locales')

module.exports = {
  i18n: {
    defaultLocale: locales.find((locale) => locale.default).value,
    locales: locales.map((locale) => locale.value)
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
    ],
  },
  // Build optimizations to handle rate limiting
  experimental: {
    // Reduce concurrent requests during build
    workerThreads: false,
    cpus: 1
  },
  // Increase build timeout to handle rate limiting delays
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  }
}
