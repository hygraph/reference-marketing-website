import cx from 'classnames'

function Heading({ children, className, level = 1 }) {
  if (!children) return null

  switch (level) {
    case 2:
    default:
      return (
        <h2
          className={cx(
            'text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl',
            className
          )}
        >
          {children}
        </h2>
      )
    case 3:
      return (
        <h3
          className={cx(
            'text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10',
            className
          )}
        >
          {children}
        </h3>
      )
    case 4:
      return (
        <h4
          className={cx(
            'text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9',
            className
          )}
        >
          {children}
        </h4>
      )
  }
}

export default Heading
