import hydrate from 'next-mdx-remote/hydrate'
import cx from 'classnames'

import Button from './button'
import Heading from './heading'
import mdxComponents from './mdx'
import Navigation from './navigation'

function Hero({ buttons, image, navigation, page }) {
  const mdxSubtitle = page.subtitle
    ? hydrate(page.subtitle.mdx, { components: mdxComponents })
    : null

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          {navigation?.pages && navigation.pages.length && (
            <Navigation {...navigation} />
          )}

          <div className="pt-10 mx-auto max-w-screen-xl px-4 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <Heading
                level={2}
                className={cx({ 'mb-3 md:mb-5': mdxSubtitle })}
              >
                {page.title}
              </Heading>
              {mdxSubtitle && mdxSubtitle}
              {buttons && (
                <div className="md:flex flex-wrap md:space-x-4 space-y-2 md:space-y-0 mt-5 md:mt-8">
                  {buttons.map((button, index) => (
                    <div key={index}>
                      <Button {...button} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={image.url}
          alt={image.title}
          title={image.title}
        />
      </div>
    </div>
  )
}

export default Hero
