import Image from 'next/image'

import { AvatarIcon } from '@/components/icons'

function PersonCard({ name, photo, role }) {
  return (
    <li>
      <div className="flex items-center space-x-4 lg:space-x-6">
        <div className="bg-gray-100 w-16 h-16 overflow-hidden relative rounded-full lg:w-20 lg:h-20">
          {photo ? (
            <Image
              className="rounded-full"
              src={photo.url}
              alt={name}
              title={name}
              layout="fill"
            />
          ) : (
            <AvatarIcon className="h-full w-full text-gray-300" />
          )}
        </div>
        <div className="font-medium text-lg leading-6 space-y-1">
          <h3>{name}</h3>
          {role ? <p className="text-indigo-600">{role}</p> : null}
        </div>
      </div>
    </li>
  )
}

export default PersonCard
