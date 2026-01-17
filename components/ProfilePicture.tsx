'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
  defaultImage = '/profile.png', // fallback image
}: ProfilePictureProps) {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40 md:w-48 md:h-48',
    xlarge: 'w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72',
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className={`${sizeClasses[size]} mx-auto rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-1 shadow-professional`}
      >
        <div className="w-full h-full rounded-full bg-slate-800 overflow-hidden relative">
          <Image
            src={defaultImage} // use the prop image
            alt="Profile"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
      </motion.div>
    </div>
  )
}
