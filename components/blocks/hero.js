import Button from '../button'

function Hero({ buttons, image, subtitle, title }) {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {buttons && buttons.length && (
        <div>
          {buttons.map((button) => (
            <Button key={button.id} {...button} />
          ))}
        </div>
      )}
    </header>
  )
}

export default Hero
