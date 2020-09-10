import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import he from 'he'

import { blogPostQuery } from '../../lib/_queries'
import { getLayout as getContentLayout } from '../../components/layout-content'
import { graphcmsClient } from '../../lib/_client'
import Heading from '../../components/heading'
import mdxComponents from '../../components/mdx'

function BlogPost({ nextPost, post, previousPost }) {
  const mdxContent = hydrate(post.content.mdx, { components: mdxComponents })

  return (
    <article className="relative max-w-xl mx-auto px-4 py-8 sm:py-12 lg:py-20 sm:px-6 lg:px-8 lg:max-w-screen-xl">
      <header className="pt-6 lg:pb-10">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={post.published}>{post.formattedPublished}</time>
              </dd>
            </div>
          </dl>
          <div>
            <Heading>{post.title}</Heading>
          </div>
        </div>
      </header>
      <div
        className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:gap-x-6 pb-16 lg:pb-20"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <dl className="pt-6 pb-10 lg:pt-11 lg:border-b lg:border-gray-200">
          <dt className="sr-only">Author</dt>
          <dd>
            <ul className="flex justify-center lg:block space-x-8 sm:space-x-12 lg:space-x-0 lg:space-y-8">
              {post.authors.map((author) => (
                <li key={author.id} className="flex items-center space-x-2">
                  <img
                    src={author.photo.url}
                    className="w-10 h-10 rounded-full"
                  />
                  <dl className="flex-1 text-sm font-medium leading-5">
                    <dt className="sr-only">Name</dt>
                    <dd className="text-gray-900">{author.name}</dd>
                  </dl>
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <div className="divide-y divide-gray-200 lg:pb-0 lg:col-span-3 lg:row-span-2">
          {post.coverImage && (
            <img
              className="object-cover mx-auto rounded-lg shadow-md"
              src={post.coverImage.url}
              alt={post.coverImage.title}
              title={post.coverImage.title}
            />
          )}
          <div className="prose max-w-none pt-10 pb-8">{mdxContent}</div>
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 lg:col-start-1 lg:row-start-2">
          {(nextPost || previousPost) && (
            <div className="space-y-8 py-8">
              {nextPost && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Next Post
                  </h2>
                  <div className="text-purple-500 hover:text-purple-600">
                    <Link href={`/blog/${nextPost.slug}`}>
                      <a>{nextPost.title}</a>
                    </Link>
                  </div>
                </div>
              )}
              {previousPost && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Previous Post
                  </h2>
                  <div className="text-purple-500 hover:text-purple-600">
                    <Link href={`/blog/${previousPost.slug}`}>
                      <a>{previousPost.title}</a>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link href="/blog">
              <a className="text-purple-500 hover:text-purple-600">
                &larr; Back to the blog
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}

export async function getStaticProps({ params }) {
  const {
    allPosts,
    navigation: { navigation },
    post: { content, ...post },
  } = await graphcmsClient.request(blogPostQuery, {
    slug: params.slug,
  })

  const postIndex = allPosts.findIndex(({ id }) => id === post.id)

  const nextPost = allPosts[postIndex + 1] || null
  const previousPost = allPosts[postIndex - 1] || null

  return {
    props: {
      navigation,
      nextPost,
      post: {
        content: {
          ...content,
          mdx: await renderToString(he.decode(content), {
            components: mdxComponents,
          }),
        },
        formattedPublished: new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(post.published)),
        ...post,
      },
      previousPost,
    },
  }
}

export async function getStaticPaths() {
  const { posts } = await graphcmsClient.request(`{
     posts: blogPosts {
       slug
     }
   }`)

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  }
}

BlogPost.getLayout = getContentLayout

export default BlogPost
