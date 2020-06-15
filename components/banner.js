import cx from 'classnames'

import Button from './button'

function Banner({ content, href, theme = 'INFO' }) {
  const themeClass = (theme) => {
    switch (theme) {
      case 'WARNING':
        return 'bg-orange-600 text-orange-600'
      case 'INFO':
      default:
        return 'bg-blue-600 text-blue-600'
    }
  }

  if (!content || !href) return null

  return (
    <div className={cx(themeClass(theme))}>
      <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center">
            <p className="font-medium text-white">{content}</p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <div className="rounded-md shadow-sm">
              <Button
                href={href}
                label="Learn more"
                size="SMALL"
                theme="WHITE"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
