import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import { parseBlocksMdx } from '@/utils/_parseBlocksMdx'

const parsePageData = async ({ blocks, subtitle, ...page }) => ({
  ...(blocks && {
    blocks: await parseBlocksMdx(blocks)
  }),
  ...(subtitle && {
    subtitle: {
      markdown: subtitle,
      mdx: await renderToString(he.decode(subtitle))
    }
  }),
  ...page
})

export { parsePageData }
