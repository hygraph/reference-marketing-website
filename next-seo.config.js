const description = `Learn how to build modern marketing websites, with localization and SEO, using Hygraph, NextJS, Chakra UI, and Vercel.`
const title = `Build Modern Marketing Websites with a Headless CMS`
const url = `https://marketing-websites.withheadlesscms.com`

const seo = {
  title,
  titleTemplate: '%s | Hygraph',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@Hygraphcom',
    site: '@Hygraphcom'
  }
}

export { seo as defaultSEO, url as defaultUrl }
