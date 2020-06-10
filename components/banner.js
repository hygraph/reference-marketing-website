import Link from 'next/link'
import cx from 'classnames'

function Banner({ content, href, theme = 'INFO' }) {
  const themeClass = (theme) => {
    switch (theme) {
      case 'WARNING':
        return 'bg-orange-600 text-orange-600'
      case 'INFO':
      default:
        return 'bg-indigo-600 text-indigo-600'
    }
  }

  if (!content || !href) return null

  return (
    <div className={cx(themeClass(theme))}>
      <div className="max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 flex items-center">
            <p className="font-medium text-white truncate">{content}</p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <div className="rounded-md shadow-sm">
              <Link href={href}>
                <a className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md bg-white focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                  Learn more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
