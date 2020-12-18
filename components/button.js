import Link from 'next/link'
import cx from 'classnames'

function Button({ href, label, theme = 'BLUE' }) {
  const themeVal = (theme) => {
    switch (theme) {
      case 'WHITE':
        return 'border-transparent bg-white text-indigo-600 hover:bg-gray-50'
      case 'BLUE':
      default:
        return 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
    }
  }

  const linkClass = cx(
    'w-full flex items-center justify-center px-8 py-3 border text-base font-medium rounded-md md:py-4 md:text-lg md:px-10',
    themeVal(theme)
  )

  if (!href || !label) return null

  if (href.includes('http')) {
    return (
      <div className="rounded-md shadow">
        <a
          className={linkClass}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {label}
        </a>
      </div>
    )
  }

  return (
    <div className="rounded-md shadow">
      <Link href={href}>
        <a className={linkClass}>{label}</a>
      </Link>
    </div>
  )
}

export default Button
