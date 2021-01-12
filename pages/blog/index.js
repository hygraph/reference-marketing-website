import { blogPageQuery } from '@/lib/_queries'
import { BlogPostCard } from '@/columns'
import { getPageLayout } from '@/layout'
import { graphcmsClient } from '@/lib/_client'
import { parsePageData } from '@/utils/_parsePageData'
import { parsePostData } from '@/utils/_parsePostData'

function BlogPage({ posts }) {
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

  return {
    props: {
      page: await parsePageData(page),
      posts: await Promise.all(posts.map((post) => parsePostData(post)))
    },
    revalidate: 3
  }
}

BlogPage.getLayout = getPageLayout

export default BlogPage
