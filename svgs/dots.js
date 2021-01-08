function Dots({ ...props }) {
  return (
    <svg
      width="404"
      height="404"
      fill="none"
      viewBox="0 0 404 404"
      role="img"
      aria-labelledby="svg-dots"
      {...props}
    >
      <title id="svg-dots">Dots</title>
      <defs>
        <pattern
          id="ad119f34-7694-4c31-947f-5c9d249b21f3"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="4" height="4" fill="currentColor" />
        </pattern>
      </defs>
      <rect
        width="404"
        height="404"
        fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
      />
    </svg>
  )
}

export default Dots
