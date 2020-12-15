import hydrate from 'next-mdx-remote/hydrate'

function FAQSection({ columns, gridSubtitle, gridTitle }) {
  if (!(gridTitle || columns || columns.length)) return null

  const mdxSubtitle = gridSubtitle ? hydrate(gridSubtitle.mdx) : null

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {gridTitle}
            </h2>
            {mdxSubtitle && <div className="mt-4 prose-lg">{mdxSubtitle}</div>}
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl className="space-y-12">
              {columns.map((column) => {
                const mdxContent = hydrate(column.content.mdx)

                return (
                  <div key={column.id}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {column.title}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      {mdxContent}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection
