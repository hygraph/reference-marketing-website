import * as React from 'react'
import hydrate from 'next-mdx-remote/hydrate'

import { getSiteLayout } from '@/layout'
import Hero from '@/components/hero'
import * as Marketing from '@/marketing'
import Navigation from '@/components/navigation'

const PageLayout = ({ children, page }) => {
  const pageBanner = page?.marketing?.find(
    (block) => block.__typename === 'Banner'
  )

  const pageNewsletter = page?.marketing?.find(
    (block) => block.__typename === 'Newsletter'
  )

  const mdxSubtitle = page?.subtitle ? hydrate(page.subtitle.mdx) : null

  return (
    <React.Fragment>
      {pageBanner ? <Marketing.Banner {...pageBanner} /> : null}
      {page?.hero ? (
        <Hero {...page.hero} navigation={page.navigation} page={page} />
      ) : (
        <React.Fragment>
          <Navigation {...page?.navigation} />
          <div className="mx-auto pt-24 px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:flex-col sm:align-center">
              <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                {page?.title}
              </h1>
              {mdxSubtitle && (
                <div className="mt-5 mx-auto prose prose-xl sm:text-center">
                  {mdxSubtitle}
                </div>
              )}
            </div>
          </div>
        </React.Fragment>
      )}
      <div>
        {children}
        {pageNewsletter ? (
          <Marketing.NewsletterSignup {...pageNewsletter} />
        ) : null}
      </div>
    </React.Fragment>
  )
}

export const getLayout = (page) =>
  getSiteLayout(<PageLayout {...page.props}>{page}</PageLayout>)

export default PageLayout
