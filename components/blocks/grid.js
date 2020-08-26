import hydrate from 'next-mdx-remote/hydrate'
import cx from 'classnames'

import * as Columns from './columns'
import Heading from '../heading'
import mdxComponents from '../mdx'

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

  const mdxSubtitle = gridSubtitle
    ? hydrate(gridSubtitle.mdx, { components: mdxComponents })
    : null

  return (
    <div className={gridThemeClass(theme)}>
      <div className="relative max-w-xl mx-auto px-4 py-8 sm:py-12 lg:py-20 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <div className="relative mb-8 lg:mb-16 text-center">
          <Heading
            level={3}
            className={cx({
              'mb-4': gridSubtitle,
            })}
          >
            {gridTitle}
          </Heading>
          {mdxSubtitle && mdxSubtitle}
        </div>
        <div className={cx('grid gap-14', colWidthClass(width))}>
          {columns.map((column, index) => {
            const Component = Columns[component] || Columns[column.__typename]

            if (!Component) return null

            return <Component key={index} {...column} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Grid
