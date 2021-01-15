import Image from 'next/image'

function PersonCard({ name, photo, role }) {
  return (
    <li>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <div className="w-16 h-16 relative rounded-full lg:w-20 lg:h-20">
          <Image
            className="rounded-full"
            src={photo.url}
            alt={name}
            title={name}
            layout="fill"
          />
        </div>
        <div className="font-medium text-lg leading-6 space-y-1">
          <h3>{name}</h3>
          <p className="text-indigo-600">{role}</p>
        </div>
      </div>
    </li>
  )
}

export default PersonCard
