import Button from '../button'

function Breakpoint({ buttons, subtitle, title }) {
  if (!(buttons || buttons.length)) return null

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{title}</span>
          <span className="block text-indigo-600">{subtitle}</span>
        </h2>
        <div className="mt-8 flex space-x-3">
          {buttons.map((button) => (
            <div key={button.id} className="inline-flex rounded-md shadow">
              <Button {...button} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Breakpoint
