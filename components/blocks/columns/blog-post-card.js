import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'
import startCase from 'lodash.startcase'

function BlogPostCard({
  authors,
  category,
  coverImage,
  excerpt,
  formattedPublished,
  published,
  slug,
  title
}) {
  const [primaryAuthor, ...secondaryAuthors] = authors

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={coverImage.url}
          alt={coverImage.title}
          title={coverImage.title}
          width={coverImage.width}
          height={coverImage.height}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {startCase(category.toLowerCase())}
          </p>
          <Link href={`/blog/${slug}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">{title}</p>
              <p className="mt-3 text-base text-gray-500">{excerpt}</p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex -space-x-1 relative z-0 overflow-hidden">
            {authors.map((author, index) => {
              const zIndexClass = (index) => `z-${Number(index * 10)}`

              return (
                <div
                  key={author.id}
                  className={cx(
                    'inline-block h-8 relative w-8 rounded-full ring-2 ring-white',
                    zIndexClass(index)
                  )}
                >
                  <Image
                    className="relative rounded-full"
                    src={author.photo.url}
                    alt={author.name}
                    title={author.name}
                    layout="fill"
                  />
                </div>
              )
            })}
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              {primaryAuthor.name}
              {secondaryAuthors.length ? (
                <span className="ml-1">
                  + {Number(secondaryAuthors.length)} other
                </span>
              ) : null}
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time dateTime={published}>{formattedPublished}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
