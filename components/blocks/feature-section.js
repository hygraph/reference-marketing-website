import hydrate from 'next-mdx-remote/hydrate'
import cx from 'classnames'

import * as Columns from '@/columns'
import { DotsSVG } from '@/svgs'

function FeatureSection({
  columnComponent,
  columns,
  gridSubtitle,
  gridTag,
  gridTitle,
  theme = 'WHITE'
}) {
  const themeClass = (theme) => {
    switch (theme) {
      case 'LIGHT':
        return 'bg-gray-50'
      case 'WHITE':
      default:
        return 'bg-white'
    }
  }

  const mdxSubtitle = gridSubtitle ? hydrate(gridSubtitle.mdx) : null
  const TagAttribute = gridTag || 'dl'

  return (
    <div className={cx('overflow-hidden', themeClass(theme))}>
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <DotsSVG className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 text-gray-200" />
        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {gridTitle}
            </h2>
            {gridSubtitle && (
              <div className="mt-4 prose prose-xl">{mdxSubtitle}</div>
            )}
          </div>
          <TagAttribute className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {columns.map((column) => {
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

export default FeatureSection
