function BlogPostCard({ authors, coverImage, excerpt, published, title }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={coverImage.url}
          alt={coverImage.title}
          title={coverImage.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <a href="#" className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">{excerpt}</p>
          </a>
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
