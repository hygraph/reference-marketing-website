import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '@tailwindui/react'

import LogoSVG from '../svg/logo.svg'
import NavigationLink from './navigation-link'
import NavigationMobile from './navigation-mobile'

function Navigation({ pages }) {
  const container = useRef(null)
  const router = useRouter()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        if (!mobileNavOpen) return

        setMobileNavOpen(false)
      }
    }

    window.addEventListener('click', handleOutsideClick)

    return () => window.removeEventListener('click', handleOutsideClick)
  }, [mobileNavOpen, container])

  useEffect(() => {
    const handleEscape = (event) => {
      if (!mobileNavOpen) return

      if (event.key === 'Escape') {
        setMobileNavOpen(false)
      }
    }

    document.addEventListener('keyup', handleEscape)

    return () => document.removeEventListener('keyup', handleEscape)
  }, [mobileNavOpen])

  useEffect(() => {
    router.events.on('routeChangeStart', () => setMobileNavOpen(false))

    return () =>
      router.events.off('routeChangeStart', () => setMobileNavOpen(false))
  }, [])

  return (
    <div ref={container}>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a aria-label="Home">
                  <LogoSVG className="h-10 w-auto" />
                </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  id="main-menu"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  onClick={() => setMobileNavOpen(true)}
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {pages && pages.length ? (
            <div className="hidden md:block md:ml-10 md:pr-4 space-x-8">
              {pages.map((page, index) => {
                return <NavigationLink key={index} {...page} />
              })}
            </div>
          ) : null}
        </nav>
      </div>
      <Transition
        show={mobileNavOpen}
        enter="transition ease-out duration-75"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-150"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-10 md:hidden"
      >
        <NavigationMobile
          closeNav={() => setMobileNavOpen(false)}
          pages={pages}
        />
      </Transition>
    </div>
  )
}

export default Navigation
