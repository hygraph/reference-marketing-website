function Feature({ content, image, title }) {
  return (
    <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
      <div className="lg:col-start-2">
        <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
          {title}
        </h4>
        <p className="mt-3 text-lg leading-7 text-gray-500">
          {content.markdown}
        </p>
      </div>
      <div className="mt-10 -mx-4 lg:mx-0 relative lg:mt-0 lg:col-start-1">
        <img
          className="relative mx-auto lg:rounded-lg lg:shadow-md lg:w-5/6"
          src={image.url}
          alt={image.title}
          title={image.title}
        />
      </div>
    </div>
  )
}

export default Feature
