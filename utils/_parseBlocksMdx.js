import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import { parseColumnsMdx } from '@/utils/_parseColumnsMdx'

const parseBlocksMdx = async (blocks) =>
  await Promise.all(
    blocks.map(async (block) => {
      switch (block.__typename) {
        case 'Grid':
        case 'Testimonial':
          return parseGridMdx(block)
        default:
          return block
      }
    })
  )

const parseGridMdx = async ({ columns, content, gridSubtitle, ...block }) => ({
  ...(gridSubtitle && {
    gridSubtitle: {
      markdown: gridSubtitle,
      mdx: await renderToString(he.decode(gridSubtitle))
    }
  }),
  ...(content && {
    content: {
      markdown: content,
      mdx: await renderToString(he.decode(content))
    }
  }),
  ...block,
  ...(columns &&
    columns.length && {
      columns: await parseColumnsMdx(columns)
    })
})

export { parseBlocksMdx }
