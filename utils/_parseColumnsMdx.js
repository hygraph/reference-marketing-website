import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

const parseColumnsMdx = async (columns) =>
  await Promise.all(
    columns.map(async (column) => {
      switch (column.__typename) {
        case 'BlogPost':
        case 'Faq':
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
      markdown: content,
      mdx: await renderToString(he.decode(content))
    }
  }),
  ...column
})

export { parseColumnsMdx }
