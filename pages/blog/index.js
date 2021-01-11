import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import { blogPageQuery } from '../../lib/_queries'
import { BlogPostCard } from '../../components/blocks/columns'
import { getLayout as getPageLayout } from '../../components/layout-page'
import { graphcmsClient } from '../../lib/_client'
import { parsePageData } from '../../utils/_parsePageData'

function BlogPage({ page, posts }) {
  return (
    <main>
      <div className="max-w-xl mx-auto px-4 py-8 sm:py-12 lg:py-20 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="grid gap-14 grid-cols-1 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps({ locale }) {
  const { page, posts } = await graphcmsClient.request(blogPageQuery, {
    locale
  })

  const parsePostsMdx = (posts) =>
    Promise.all(
      posts.map(async ({ content, ...post }) => ({
        content: {
          ...content,
          mdx: await renderToString(he.decode(content))
        },
        formattedPublished: new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }).format(new Date(post.published)),
        ...post
      }))
    )

  return {
    props: {
      page: await parsePageData(page),
      posts: await parsePostsMdx(posts)
    },
    revalidate: 3
  }
}

BlogPage.getLayout = getPageLayout

export default BlogPage
