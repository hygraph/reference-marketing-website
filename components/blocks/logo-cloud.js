import Image from 'next/image'

function LogoCloud({ companies, logoCloudTitle }) {
  if (!(logoCloudTitle || companies || companies.length)) return null

  return (
    <div className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">{logoCloudTitle}</h2>
        <div className="flow-root mt-8 lg:mt-10">
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            {companies.map((company) => (
              <div
                key={company.id}
                className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4"
              >
                <div className="relative w-44">
                  <Image
                    src={company.logo.url}
                    height={company.logo.height}
                    width={company.logo.width}
                    layout="responsive"
                    alt={company.logo.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
