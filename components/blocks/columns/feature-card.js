import Image from 'next/image'
import hydrate from 'next-mdx-remote/hydrate'

import Heading from '../../heading'
import mdxComponents from '../../mdx'

function FeatureCard({ content, image, title }) {
  const mdxContent = hydrate(content.mdx, { components: mdxComponents })

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Image
          className="w-full h-48 object-cover"
          src={image.url}
          alt={image.title}
          title={image.title}
          height={image.height}
          width={image.width}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Heading level={4}>{title}</Heading>
          {mdxContent}
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
