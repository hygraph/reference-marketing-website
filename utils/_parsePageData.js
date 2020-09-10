import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import mdxComponents from '../components/mdx'
import { parseBlocksMdx } from './_parseBlocksMdx'

const parsePageData = async ({ blocks, subtitle, ...page }) => ({
  ...(blocks && {
    blocks: await parseBlocksMdx(blocks),
  }),
  ...(subtitle && {
    subtitle: {
      ...subtitle,
      mdx: await renderToString(he.decode(subtitle), {
        components: mdxComponents,
      }),
    },
  }),
  ...page,
})

export { parsePageData }
