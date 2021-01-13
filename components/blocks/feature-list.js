import hydrate from 'next-mdx-remote/hydrate'

import * as Columns from '@/columns'

function FeatureList({
  columnComponent,
  columns,
  gridHeadline,
  gridSubtitle,
  gridTitle
}) {
  if (!(gridTitle || columns || columns.length)) return null

  const mdxSubtitle = gridSubtitle ? hydrate(gridSubtitle.mdx) : null

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          {gridHeadline ? (
            <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
              {gridHeadline}
            </h2>
          ) : null}
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            {gridTitle}
          </p>
          {mdxSubtitle && (
            <div className="mt-4 prose prose-lg">{mdxSubtitle}</div>
          )}
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {columns.map((column) => {
              const Component =
                Columns[columnComponent] || Columns[column.__typename]

              if (!Component) return null

              return <Component key={column.id} {...column} />
            })}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FeatureList
