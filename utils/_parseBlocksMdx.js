import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import mdxComponents from '../components/mdx'
import { parseColumnsMdx } from './_parseColumnsMdx'

const parseBlocksMdx = async (blocks) =>
  await Promise.all(
    blocks.map(async (block) => {
      switch (block.__typename) {
        case 'Grid':
          return parseGridMdx(block)
        case 'Hero':
        default:
          return block
      }
    })
  )

const parseGridMdx = async ({ columns, gridSubtitle, ...block }) => ({
  ...(gridSubtitle && {
    gridSubtitle: {
      ...gridSubtitle,
      mdx: await renderToString(he.decode(gridSubtitle), {
        components: mdxComponents
      })
    }
  }),
  ...block,
  ...(columns &&
    columns.length && {
      columns: await parseColumnsMdx(columns)
    })
})

export { parseBlocksMdx }
