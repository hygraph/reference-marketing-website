import cx from 'classnames'

import * as Columns from './columns'

function Grid({
  columns,
  component,
  gridSubtitle,
  gridTitle,
  theme = 'WHITE',
  width = 1,
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
      case 3:
        return 'grid-cols-1 lg:grid-cols-3'
      case 2:
        return 'grid-cols-1 lg:grid-cols-2'
      case 1:
      default:
        return 'grid-cols-1'
    }
  }

  return (
    <div
      className={cx(
        'relative max-w-xl mx-auto px-4 py-8 sm:py-12 lg:py-20 sm:px-6 lg:px-8 lg:max-w-screen-xl',
        gridThemeClass(theme)
      )}
    >
      <div className="relative mb-8 lg:mb-16">
        <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          {gridTitle}
        </h3>
        {gridSubtitle && (
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
            {gridSubtitle.markdown}
          </p>
        )}
      </div>
      <div className={cx('grid gap-14', colWidthClass(width))}>
        {columns.map((column, index) => {
          const Component = Columns[component] || Columns[column.__typename]

          if (!Component) return null

          return <Component key={index} {...column} />
        })}
      </div>
    </div>
  )
}

export default Grid
