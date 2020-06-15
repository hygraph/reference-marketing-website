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
      case 'WHITE':
        return theme
      default:
        return 'BLUE'
    }
  }

  const buttonClass = {
    SOLID: {
      BLUE: 'border-transparent bg-blue-600 text-white',
      WHITE: 'border-transparent bg-white text-gray-900',
    },
    OUTLINE: {
      BLUE: 'border-blue-600 text-blue-600',
    },
  }

  const linkClass = cx(
    'border w-full flex items-center justify-center font-medium focus:outline-none focus:shadow-outline',
    buttonClass[styleVal(style)][themeVal(theme)]
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
    <Link href={href || '/'}>
      <a className={linkClass}>{label}</a>
    </Link>
  )
}

export default Button
