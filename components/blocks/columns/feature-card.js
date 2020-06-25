import Heading from '../../heading'
import MarkdownRenderer from '../../markdown-renderer'

function FeatureCard({ content, image, title }) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="w-full h-48 object-cover"
          src={image.url}
          alt={image.title}
          title={image.title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Heading level={4}>{title}</Heading>
          <MarkdownRenderer content={content.markdown} />
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
