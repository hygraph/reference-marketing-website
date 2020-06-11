import Link from 'next/link'
import cx from 'classnames'

function Button({ href, label, style = 'SOLID', theme = 'BLUE' }) {
  const styleVal = (style) => {
    switch (style) {
      case 'OUTLINE':
      case 'SOLID':
        return style
      default:
        return 'SOLID'
    }
  }

  const themeVal = (theme) => {
    switch (theme) {
      case 'BLUE':
        return theme
      default:
        return 'BLUE'
    }
  }

  const buttonClass = {
    SOLID: {
      BLUE: 'border-transparent bg-blue-600 text-white',
    },
    OUTLINE: {
      BLUE: 'border-blue-600 text-blue-600',
    },
  }

  if (!href || !label) return null

  return (
    <Link href={href || '/'}>
      <a
        className={cx(
          'border w-full flex items-center justify-center px-8 py-3 text-base leading-6 font-medium rounded-md focus:outline-none focus:shadow-outline md:py-4 md:text-lg md:px-10',
          buttonClass[styleVal(style)][themeVal(theme)]
        )}
      >
        {label}
      </a>
    </Link>
  )
}

export default Button
