import Markdown from 'markdown-to-jsx'
import Heading from './heading'

function MarkdownRenderer({ content }) {
  return (
    <Markdown
      children={content}
      options={{
        forceBlock: true,
        overrides: {
          a: (
            <a className="font-medium text-blue-500 underline hover:no-underline" />
          ),
          h1: {
            component: Heading,
            props: {
              level: 1,
            },
          },
          h2: {
            component: Heading,
            props: {
              level: 2,
            },
          },
          h3: {
            component: Heading,
            props: {
              level: 3,
            },
          },
          p: <p className="leading-relaxed mb-2 md:text-lg" />,
          li: <li className="leading-relaxed mb-2 md:text-lg" />,
          ul: <ul className="list-disc list-inside my-4" />,
        },
      }}
    />
  )
}

export default MarkdownRenderer
