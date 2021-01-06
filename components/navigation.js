import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'
import cx from 'classnames'

import { LogoSVG, MarkSVG } from '../svgs'
import { MenuIcon, XIcon } from './icons'

function Navigation({ pages }) {
  const container = React.useRef(null)
  const router = useRouter()
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        if (!mobileNavOpen) return

        setMobileNavOpen(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return () => window.removeEventListener('click', handleOutsideClick)
  }, [mobileNavOpen, container])

  React.useEffect(() => {
    const handleEscape = (event) => {
      if (!mobileNavOpen) return

      if (event.key === 'Escape') {
        setMobileNavOpen(false)
      }
    }

    document.addEventListener('keyup', handleEscape)

    return () => document.removeEventListener('keyup', handleEscape)
  }, [mobileNavOpen])

  React.useEffect(() => {
    const handleRouteChange = () => setMobileNavOpen(false)

    router.events.on('routeChangeStart', handleRouteChange)

    return () => router.events.off('routeChangeStart', handleRouteChange)
  }, [])

  return (
    <div ref={container} className="relative bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only">GraphCMS</span>
                <LogoSVG className="h-10 text-indigo-600 w-auto" />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileNavOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {pages && pages.length ? (
            <nav className="hidden md:flex space-x-10">
              {pages.map((page) => {
                const isActive = router.asPath.startsWith(`/${page.slug}`)

                return (
                  <Link key={page.id} href={`/${page.slug}`}>
                    <a
                      className={cx(
                        'text-base font-medium text-gray-500 hover:text-gray-900',
                        {
                          'text-indigo-600': isActive
                        }
                      )}
                    >
                      {page.navigationLabel ||
                        page.slug.charAt(0).toUpperCase() + page.slug.slice(1)}
                    </a>
                  </Link>
                )
              })}
            </nav>
          ) : null}
        </div>
      </div>
      <Transition
        show={mobileNavOpen}
        enter="transition ease-out duration-75"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/">
                  <a>
                    <span className="sr-only">GraphCMS</span>
                    <MarkSVG className="h-8 text-indigo-600 w-auto" />
                  </a>
                </Link>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {pages.map((page) => {
                  const isActive = router.asPath.startsWith(`/${page.slug}`)

                  return (
                    <Link key={page.id} href={`/${page.slug}`}>
                      <a
                        className={cx(
                          '-m-3 p-3 flex items-center rounded-md hover:bg-gray-50',
                          {
                            'text-indigo-600': isActive
                          }
                        )}
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {page.navigationLabel ||
                            page.slug.charAt(0).toUpperCase() +
                              page.slug.slice(1)}
                        </span>
                      </a>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Navigation
