import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'

import Button from '@/components/button'
import Navigation from '@/components/navigation'

function Hero({ buttons, image, navigation, page }) {
  const mdxSubtitle = page.subtitle ? hydrate(page.subtitle.mdx) : null

  return (
    <div className="relative bg-gray-50">
      <Navigation {...navigation} />
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              {page.title}
            </h1>
            {mdxSubtitle && (
              <div className="mt-3 max-w-md mx-auto prose prose-lg sm:prose-xl md:mt-5 md:max-w-3xl">
                {mdxSubtitle}
              </div>
            )}
            {buttons && (
              <div className="mt-10 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex sm:justify-center lg:justify-start">
                {buttons.map((button, index) => (
                  <Button key={index} {...button} />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src={image.url}
            alt={image.title}
            title={image.title}
            layout="fill"
            priority={true}
          />
        </div>
      </main>
    </div>
  )
}

export default Hero
