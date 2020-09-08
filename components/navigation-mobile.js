import Link from 'next/link'
import { useRouter } from 'next/router'
import cx from 'classnames'

const NavigationLink = ({ slug }) => {
  const router = useRouter()

  const isActive = router.asPath.startsWith(`/${slug}`)
  const isStaticPage = ['blog', 'home'].includes(slug)
  const linkLabel = slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <Link
      href={isStaticPage ? `/${slug}` : `/[slug]`}
      as={isStaticPage ? null : `/${slug}`}
    >
      <a
        className={cx(
          'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out',
          {
            'text-blue-600': isActive,
          }
        )}
        role="menuitem"
      >
        {linkLabel}
      </a>
    </Link>
  )
}

function NavigationMobile({ closeNav, pages }) {
  return (
    <div className="rounded-lg shadow-md">
      <div
        className="rounded-lg bg-white shadow-xs overflow-hidden"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="main-menu"
      >
        <div className="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt=""
            />
          </div>
          <div className="-mr-2">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Close menu"
              onClick={closeNav}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {pages.map((page, index) => {
            return <NavigationLink key={index} {...page} />
          })}
        </div>
      </div>
    </div>
  )
}

export default NavigationMobile
