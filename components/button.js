import Link from 'next/link'
import cx from 'classnames'

function Button({
  href,
  label,
  size = 'REGULAR',
  style = 'SOLID',
  theme = 'BLUE'
}) {
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
      case 'WHITE':
        return theme
      default:
        return 'BLUE'
    }
  }

  const buttonClass = {
    SOLID: {
      BLUE: 'border-transparent bg-blue-600 text-white',
      WHITE: 'border-transparent bg-white text-gray-900'
    },
    OUTLINE: {
      BLUE: 'border-blue-600 text-blue-600'
    }
  }

  const sizeClass = (size) => {
    switch (size) {
      case 'SMALL':
        return 'px-4 py-2 rounded text-sm md:text-base'
      default:
      case 'REGULAR':
        return 'leading-6 px-8 py-3 rounded-md text-base md:py-4 md:text-lg md:px-10'
    }
  }

  const linkClass = cx(
    'border w-full flex items-center justify-center font-medium focus:outline-none focus:shadow-outline',
    buttonClass[styleVal(style)][themeVal(theme)],
    sizeClass(size)
  )

  if (!href || !label) return null

  if (href.includes('http')) {
    return (
      <a
        className={linkClass}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    )
  }

  return (
    <Link href={href}>
      <a className={linkClass}>{label}</a>
    </Link>
  )
}

export default Button
