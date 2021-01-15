import hydrate from 'next-mdx-remote/hydrate'
import cx from 'classnames'

import * as Columns from '@/columns'
import { DotsSVG } from '@/svgs'

function Grid({
  children,
  columnComponent,
  columns,
  gridHeadline,
  gridSubtitle,
  gridTag,
  gridTitle,
  layout = 'STACKED',
  theme = 'WHITE',
  width = 1
}) {
  if (!columns || !columns.length) return null

  const themeClass = (theme) => {
    switch (theme) {
      case 'LIGHT':
        return 'bg-gray-50'
      case 'WHITE':
      default:
        return 'bg-white'
    }
  }

  const gridClass = (width) => {
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

  const layoutClass = (layout) => {
    switch (layout) {
      case 'SPLIT':
        return 'lg:grid lg:grid-cols-3 lg:gap-x-8'
      case 'STACK':
      default:
        return null
    }
  }

  const mdxSubtitle = gridSubtitle ? hydrate(gridSubtitle.mdx) : null
  const TagAttribute = gridTag || 'dl'

  const stackLayout = layout === 'STACK'
  const splitLayout = layout === 'SPLIT'

  return (
    <div className={cx('overflow-hidden', themeClass(theme))}>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {splitLayout && (
          <DotsSVG className="absolute hidden top-full left-auto transform translate-x-2/3 -translate-y-3/4 right-full text-gray-200 lg:block" />
        )}
        <div className={cx('relative', layoutClass(layout))}>
          <div
            className={cx({
              'lg:col-span-1': splitLayout,
              'lg:text-center': stackLayout
            })}
          >
            {gridHeadline ? (
              <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
                {gridHeadline}
              </h2>
            ) : null}
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {gridTitle}
            </p>
            {gridSubtitle && (
              <div className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                {mdxSubtitle}
              </div>
            )}
          </div>
          <TagAttribute
            className={cx(
              'mt-10 space-y-10 sm:space-y-0 sm:grid sm:gap-x-8 sm:gap-y-10 lg:col-span-2',
              gridClass(width),
              {
                'lg:mt-0': splitLayout
              }
            )}
          >
            {children
              ? children()
              : columns.map((column) => {
                  const Component =
                    Columns[columnComponent] || Columns[column.__typename]

                  if (!Component) return null

                  return <Component key={column.id} {...column} />
                })}
          </TagAttribute>
        </div>
      </div>
    </div>
  )
}

export default Grid
