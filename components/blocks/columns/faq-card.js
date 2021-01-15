import * as React from 'react'
import hydrate from 'next-mdx-remote/hydrate'

function FAQCard({ content, title }) {
  const mdxContent = hydrate(content.mdx)

  return (
    <div>
      <dt className="text-lg leading-6 font-medium text-gray-900">{title}</dt>
      <dd className="mt-2 prose">{mdxContent}</dd>
    </div>
  )
}

export default FAQCard
