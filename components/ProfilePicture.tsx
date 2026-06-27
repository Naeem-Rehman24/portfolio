'use client'

import Image from 'next/image'

interface ProfilePictureProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  isEditable?: boolean // viewers cannot edit
  className?: string
  defaultImage?: string // NEW: allow separate images
}

export default function ProfilePicture({
  size = 'large',
  isEditable = false,
  className = '',
  defaultImage = '/hero-profile.png', // fallback image for the main profile photo
}: ProfilePictureProps) {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40 md:w-48 md:h-48',
    xlarge: 'w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72',
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`${sizeClasses[size]} mx-auto rounded-full bg-gradient-to-br from-brand via-brand/70 to-brand/40 p-1 shadow-professional`}>
        <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden relative">
          <Image
            src={defaultImage} // use the prop image
            alt="Profile"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </div>
    </div>
  )
}
