import { hygraphClient } from '@/lib/_client'
import { pageQuery, blogPostQuery } from '@/lib/_queries'

export default async function handler(req, res) {
  if (
    req.query.secret !== process.env.GRAPHCMS_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const client = hygraphClient(true)

  const [rootSlug, nestedSlug] = req.query.slug.split('/')

  const data = await client.request(nestedSlug ? blogPostQuery : pageQuery, {
    slug: nestedSlug ? blogPostQuery : rootSlug,
    ...(rootSlug && { locale: 'en' })
  })

  if (!data) {
    return res
      .status(401)
      .json({ message: 'Slug not found - cannot enter preview mode' })
  }

  res.setPreviewData({})

  res.writeHead(307, {
    Location: nestedSlug
      ? `/${req.query.slug}`
      : rootSlug === 'home'
      ? '/'
      : `/${rootSlug}`
  })

  res.end()
}
