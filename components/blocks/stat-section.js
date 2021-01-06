import hydrate from 'next-mdx-remote/hydrate'
import cx from 'classnames'

function StatSection({ columns, gridSubtitle, gridTitle, ...props }) {
  if (!(columns || columns.length)) return null

  const mdxSubtitle = gridSubtitle ? hydrate(gridSubtitle.mdx) : null

  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      {gridTitle || gridSubtitle ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {gridTitle ? (
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {gridTitle}
              </h2>
            ) : null}
            {mdxSubtitle ? (
              <div className="mt-3 text-xl text-gray-500 sm:mt-4">
                {mdxSubtitle}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                {columns.map((column, index) => {
                  const firstColumn = index === 0
                  const lastColumn = index === columns.length - 1

                  return (
                    <div
                      key={column.id}
                      className={cx(
                        'flex flex-col border-b border-gray-100 p-6 text-center sm:border-0',
                        {
                          'border-b sm:border-r': firstColumn,
                          'border-t sm:border-l': lastColumn,
                          'border-t border-b sm:border-l sm:border-r': !(
                            firstColumn || lastColumn
                          )
                        }
                      )}
                    >
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        {column.label}
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        {column.value}
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatSection
