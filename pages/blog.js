import { BlogPostCard } from '../components/blocks/columns'
import { graphcmsClient } from '../lib/_client'
import { blogPageQuery } from '../lib/_queries'

function BlogPage({ featuredPosts, page: { subtitle, title }, posts }) {
  return (
    <main>
      <header className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            {title}
          </h2>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {subtitle.markdown}
          </p>
        </div>
      </header>
      <div className="max-w-xl mx-auto px-4 py-8 sm:py-12 lg:py-20 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="grid gap-14 grid-cols-1 mb-14">
          {featuredPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} isFeatured />
          ))}
        </div>
        <div className="grid gap-14 grid-cols-1 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const { featuredPosts, page, posts } = await graphcmsClient.request(
    blogPageQuery
  )

  return {
    props: {
      featuredPosts,
      page,
      posts,
    },
  }
}

export default BlogPage
