import hydrate from 'next-mdx-remote/hydrate'
import cx from 'classnames'

import * as Columns from '@/columns'

function Grid({
  children,
  columnComponent,
  columns,
  gridSubtitle,
  gridTitle,
  theme = 'WHITE',
  width = 1
}) {
  if (!columns || !columns.length) return null

  const gridThemeClass = (theme) => {
    switch (theme) {
      case 'LIGHT':
        return 'bg-gray-50'
      case 'WHITE':
      default:
        return 'bg-white'
    }
  }

  const colWidthClass = (width) => {
    switch (width) {
      case 4:
        return 'grid-cols-1 lg:grid-cols-4'
      case 3:
        return 'grid-cols-1 lg:grid-cols-3'
      case 2:
        return 'grid-cols-1 lg:grid-cols-2'
      case 1:
      default:
        return 'grid-cols-1'
    }
  }

  const mdxSubtitle = gridSubtitle ? hydrate(gridSubtitle.mdx) : null

  return (
    <div className={gridThemeClass(theme)}>
      <div className="relative max-w-xl mx-auto px-4 py-8 sm:py-12 lg:py-20 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="relative mb-8 lg:mb-16 text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {gridTitle}
          </h2>
          {mdxSubtitle ? (
            <div className="mt-3 max-w-2xl mx-auto prose prose-xl sm:mt-4">
              {mdxSubtitle}
            </div>
          ) : null}
        </div>
        <div className={cx('grid gap-14', colWidthClass(width))}>
          {children
            ? children()
            : columns.map((column, index) => {
                const Component =
                  Columns[columnComponent] || Columns[column.__typename]

                if (!Component) return null

                return <Component key={index} {...column} />
              })}
        </div>
      </div>
    </div>
  )
}

export default Grid
