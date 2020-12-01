import Link from 'next/link'
import { useRouter } from 'next/router'

import { locales } from '../lib/_locales'
import Select from './select'

function Footer({ pages }) {
  const router = useRouter()

  const activeLocale = locales.find((locale) => locale.value === router.locale)

  const setLocale = (locale) =>
    router.push(router.asPath, router.asPath, { locale: locale.value })

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex items-center justify-center p-12">
          <div className="w-full max-w-xs mx-auto">
            <Select
              label="Select language"
              onChange={setLocale}
              options={locales}
              value={activeLocale}
            />
          </div>
        </div>
        {pages.length ? (
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            {pages.map((page) => {
              const linkLabel =
                page.slug.charAt(0).toUpperCase() + page.slug.slice(1)

              return (
                <div key={page.id} className="px-5 py-2">
                  <Link href={`/${page.slug}`}>
                    <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                      {linkLabel}
                    </a>
                  </Link>
                </div>
              )
            })}
          </nav>
        ) : null}
        <div className="mt-8 flex justify-center">
          <a
            href="https://linkedin.com/company/graphcms"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="m20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z" />
            </svg>
          </a>
          <a
            href="https://slack.graphcms.com"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Slack</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="m5.042 15.165a2.528 2.528 0 0 1 -2.52 2.523 2.528 2.528 0 0 1 -2.522-2.523 2.527 2.527 0 0 1 2.522-2.52h2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313a2.528 2.528 0 0 1 -2.521 2.522 2.528 2.528 0 0 1 -2.521-2.522zm2.521-10.123a2.528 2.528 0 0 1 -2.521-2.52 2.528 2.528 0 0 1 2.521-2.522 2.528 2.528 0 0 1 2.521 2.522v2.52zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1 -2.521 2.521h-6.312a2.528 2.528 0 0 1 -2.522-2.521 2.528 2.528 0 0 1 2.522-2.521zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1 -2.522 2.521h-2.522zm-1.268 0a2.528 2.528 0 0 1 -2.523 2.521 2.527 2.527 0 0 1 -2.52-2.521v-6.312a2.527 2.527 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.523 2.522zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522 2.528 2.528 0 0 1 -2.523 2.522 2.527 2.527 0 0 1 -2.52-2.522v-2.522zm0-1.268a2.527 2.527 0 0 1 -2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313a2.527 2.527 0 0 1 2.522 2.52 2.528 2.528 0 0 1 -2.522 2.523z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/GraphCMS"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="m23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548z" />
            </svg>
          </a>
          <a
            href="https://github.com/GraphCMS/reference-nextjs-marketing"
            className="ml-6 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="m12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57 4.801-1.574 8.236-6.074 8.236-11.369 0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
        <div className="mt-8">
          <p className="text-center text-base leading-6 text-gray-400">
            &copy; 2020 GraphCMS, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
