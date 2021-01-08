import Link from 'next/link'
import { useRouter } from 'next/router'

import { locales } from '../lib/_locales'

function Footer({ primaryLinks, secondaryLinks }) {
  const router = useRouter()

  const activeLocale = locales.find((locale) => locale.value === router.locale)

  const setLocale = (event) =>
    router.push(router.asPath, router.asPath, { locale: event.target.value })

  return (
    <footer className="bg-gray-800" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            {primaryLinks.length ? (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Primary
                </h3>
                <ul className="mt-4 space-y-4">
                  {primaryLinks.map((link) => (
                    <li key={link.id}>
                      <Link href={`/${link.slug}`}>
                        <a className="text-base text-gray-300 hover:text-white">
                          {link.navigationLabel ||
                            link.slug.charAt(0).toUpperCase() +
                              link.slug.slice(1)}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {secondaryLinks.length ? (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Secondary
                </h3>
                <ul className="mt-4 space-y-4">
                  {secondaryLinks.map((link) => (
                    <li key={link.id}>
                      <Link href={`/${link.slug}`}>
                        <a className="text-base text-gray-300 hover:text-white">
                          {link.navigationLabel ||
                            link.slug.charAt(0).toUpperCase() +
                              link.slug.slice(1)}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Language
            </h3>
            <form className="mt-4 sm:max-w-xs">
              <fieldset className="w-full">
                <label for="language" className="sr-only">
                  Language
                </label>
                <div className="relative">
                  <select
                    id="language"
                    name="language"
                    className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md py-2 pl-3 pr-10 text-base text-white focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    value={activeLocale.value}
                    onChange={setLocale}
                  >
                    {locales.map((locale) => (
                      <option key={locale.value} value={locale.value}>
                        {locale.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <svg
                      className="h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="https://linkedin.com/company/graphcms"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="m20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564zm15.106-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z" />
              </svg>
            </a>
            <a
              href="https://slack.graphcms.com"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Slack</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="m5.042 15.165a2.528 2.528 0 0 1 -2.52 2.523 2.528 2.528 0 0 1 -2.522-2.523 2.527 2.527 0 0 1 2.522-2.52h2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313a2.528 2.528 0 0 1 -2.521 2.522 2.528 2.528 0 0 1 -2.521-2.522zm2.521-10.123a2.528 2.528 0 0 1 -2.521-2.52 2.528 2.528 0 0 1 2.521-2.522 2.528 2.528 0 0 1 2.521 2.522v2.52zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1 -2.521 2.521h-6.312a2.528 2.528 0 0 1 -2.522-2.521 2.528 2.528 0 0 1 2.522-2.521zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521 2.528 2.528 0 0 1 2.522 2.521 2.528 2.528 0 0 1 -2.522 2.521h-2.522zm-1.268 0a2.528 2.528 0 0 1 -2.523 2.521 2.527 2.527 0 0 1 -2.52-2.521v-6.312a2.527 2.527 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.523 2.522zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522 2.528 2.528 0 0 1 -2.523 2.522 2.527 2.527 0 0 1 -2.52-2.522v-2.522zm0-1.268a2.527 2.527 0 0 1 -2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313a2.527 2.527 0 0 1 2.522 2.52 2.528 2.528 0 0 1 -2.522 2.523z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/GraphCMS"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://github.com/GraphCMS/reference-nextjs-marketing"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} GraphCMS, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
