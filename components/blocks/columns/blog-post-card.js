import Link from 'next/link'
import cx from 'classnames'

function BlogPostCard({
  authors,
  coverImage,
  excerpt,
  isFeatured = false,
  published,
  slug,
  title,
}) {
  return (
    <div
      className={cx('flex flex-col rounded-lg shadow-lg overflow-hidden', {
        'lg:flex-row': isFeatured,
      })}
    >
      <div
        className={cx({ 'flex-shrink-0': !isFeatured, 'lg:w-4/6': isFeatured })}
      >
        <img
          className={cx('w-full object-cover', { 'h-48': !isFeatured })}
          src={coverImage.url}
          alt={coverImage.title}
          title={coverImage.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={`/blog/${slug}`}>
            <a className="block">
              <h3
                className={cx(
                  'mt-2 text-xl leading-7 font-semibold text-gray-900',
                  {
                    'lg:text-3xl lg:leading-9': isFeatured,
                  }
                )}
              >
                {title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {excerpt}
              </p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <ul className="flex">
            {authors.map((author) => (
              <li key={author.id} className="-ml-2 first:ml-0">
                <img
                  className="h-10 w-10 rounded-full shadow-solid text-white"
                  src={author.photo.url}
                  alt={author.name}
                  title={author.name}
                />
              </li>
            ))}
          </ul>
          <div className="flex text-sm leading-5 ml-3 text-gray-500">
            <time dateTime={published}>{published}</time>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
