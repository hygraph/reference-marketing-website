import { serialize } from 'next-mdx-remote/serialize'
import he from 'he'

const parseColumnsMdx = async (columns) =>
  await Promise.all(
    columns.map(async ({ content, ...column }) => ({
      ...(content && {
        content: {
          markdown: content,
          mdx: await serialize(he.decode(content))
        }
      }),
      ...column
    }))
  )

export { parseColumnsMdx }
