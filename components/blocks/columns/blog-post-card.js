import Link from 'next/link'
import Image from 'next/image'
import cx from 'classnames'

import Heading from '../../heading'

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
        <Image
          className={cx('w-full object-cover', { 'h-48': !isFeatured })}
          src={coverImage.url}
          alt={coverImage.title}
          title={coverImage.title}
          width={coverImage.width}
          height={coverImage.height}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={`/blog/${slug}`}>
            <a className="block">
              <Heading level={isFeatured ? 3 : 4}>{title}</Heading>
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
                <div className="h-10 relative w-10">
                  <Image
                    className="rounded-full shadow-solid text-white"
                    src={author.photo.url}
                    alt={author.name}
                    title={author.name}
                    layout="fill"
                  />
                </div>
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
