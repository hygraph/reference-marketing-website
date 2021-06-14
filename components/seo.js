import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import { defaultUrl } from '../next-seo.config'

export default function SEO({
  id,
  image,
  keywords,
  noIndex: noindex = false,
  ...props
}) {
  const router = useRouter()

  const SEO = {
    ...(keywords && { keywords: keywords.toString() }),
    noindex,
    openGraph: {
      ...(image && {
        images: [
          {
            alt: props.title,
            ...image
          }
        ]
      }),
      url: defaultUrl + router.asPath,
      ...props
    },
    ...props
  }

  return <NextSeo {...SEO} />
}
