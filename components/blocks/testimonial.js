import * as React from 'react'
import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'

import { DotsSVG } from '../svgs'
import { SlashIcon } from '../icons'

function Testimonial({ content, person }) {
  if (!person) return null

  const mdxContent = hydrate(content.mdx)

  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DotsSVG className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2 text-gray-200" />
        <div className="relative">
          <div className="h-8 relative">
            <Image
              src={person.company.logo.url}
              alt={person.company.logo.title}
              layout="fill"
            />
          </div>
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              {mdxContent}
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <div className="mx-auto h-10 relative w-10">
                    <Image
                      className="rounded-full"
                      src={person.photo.url}
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    {person.name}
                  </div>
                  {person.role ? (
                    <React.Fragment>
                      <SlashIcon className="hidden md:block mx-1 h-5 w-5 text-indigo-600" />
                      <div className="text-base font-medium text-gray-500">
                        {person.role}, {person.company.name}
                      </div>
                    </React.Fragment>
                  ) : null}
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
