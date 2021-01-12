import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

const parsePostData = async ({ content, published, ...post }) => ({
  ...(content && {
    content: {
      markdown: content,
      mdx: await renderToString(he.decode(content))
    }
  }),
  ...(published && {
    formattedPublished: new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(published))
  }),
  ...post
})

export { parsePostData }
