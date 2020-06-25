import MarkdownRenderer from '../../markdown-renderer'
import Heading from '../../heading'

function Feature({ content, image, title }) {
  return (
    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className="lg:col-start-2">
        <Heading level={4}>{title}</Heading>
        <p className="mt-3 text-lg leading-7 text-gray-500">
          <MarkdownRenderer content={content.markdown} />
        </p>
      </div>
      <div className="mt-10 -mx-4 lg:mx-0 relative lg:mt-0 lg:col-start-1">
        <img
          className="relative mx-auto lg:rounded-lg lg:shadow-md lg:w-5/6"
          src={image.url}
          alt={image.title}
          title={image.title}
        />
      </div>
    </div>
  )
}

export default Feature
