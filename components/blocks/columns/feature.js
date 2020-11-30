import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'

import Heading from '../../heading'
import mdxComponents from '../../mdx'

function Feature({ content, image, title }) {
  const mdxContent = hydrate(content.mdx, { components: mdxComponents })

  return (
    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className="lg:col-start-2">
        <Heading level={4}>{title}</Heading>
        {mdxContent}
      </div>
      <div className="mt-10 -mx-4 lg:mx-0 relative lg:mt-0 lg:col-start-1">
        <Image
          className="relative mx-auto lg:rounded-lg lg:shadow-md lg:w-5/6"
          src={image.url}
          alt={image.title}
          title={image.title}
          height={image.height}
          width={image.width}
        />
      </div>
    </div>
  )
}

export default Feature
