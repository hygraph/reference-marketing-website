import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import mdxComponents from '../components/mdx'

const parseColumnsMdx = async (columns) =>
  await Promise.all(
    columns.map(async (column) => {
      switch (column.__typename) {
        case 'BlogPost':
        case 'Feature':
          return parseContentMdx(column)
        default:
          return column
      }
    })
  )

const parseContentMdx = async ({ content, ...column }) => ({
  ...(content && {
    content: {
      ...content,
      mdx: await renderToString(he.decode(content), {
        components: mdxComponents,
      }),
    },
  }),
  ...column,
})

export { parseColumnsMdx }
