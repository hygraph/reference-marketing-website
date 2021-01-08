import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  ChevronDownIcon,
  GithubIcon,
  LinkedInIcon,
  SlackIcon,
  TwitterIcon
} from './icons'
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
                    <ChevronDownIcon
                      className="h-4 w-4 text-white"
                      aria-hidden="true"
                    />
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
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href="https://slack.graphcms.com"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Slack</span>
              <SlackIcon className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/GraphCMS"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Twitter</span>
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/GraphCMS/reference-nextjs-marketing"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">GitHub</span>
              <GithubIcon className="h-6 w-6" />
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
