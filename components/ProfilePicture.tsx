'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCamera, FaTimes } from 'react-icons/fa'
import { HiCode } from 'react-icons/hi'

interface ProfilePictureProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  showUpload?: boolean // Deprecated - use isEditable instead
  isEditable?: boolean // Only owner can edit, viewers cannot
  className?: string
}

export default function ProfilePicture({ 
  size = 'large', 
  showUpload = false, // Deprecated
  isEditable = false, // Default to view-only for security
  className = '' 
}: ProfilePictureProps) {
  // Use isEditable if provided, otherwise fall back to showUpload for backward compatibility
  const canEdit = isEditable || showUpload
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-40 h-40 md:w-48 md:h-48',
    xlarge: 'w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72',
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImageSrc(reader.result as string)
          // Store in localStorage for persistence
          localStorage.setItem('profilePicture', reader.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        alert('Please upload an image file')
      }
    }
  }

  const handleRemoveImage = () => {
    setImageSrc(null)
    localStorage.removeItem('profilePicture')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Load from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem('profilePicture')
    if (savedImage) {
      setImageSrc(savedImage)
    }
  }, [])

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className={`${sizeClasses[size]} mx-auto rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 p-1 shadow-professional relative`}
      >
        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden relative">
          {imageSrc ? (
            <>
              <Image
                src={imageSrc}
                alt="Profile"
                fill
                className="object-cover rounded-full"
                priority
                unoptimized
              />
              {canEdit && isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center gap-2"
                >
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
                    aria-label="Change photo"
                  >
                    <FaCamera />
                  </button>
                  <button
                    onClick={handleRemoveImage}
                    className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors"
                    aria-label="Remove photo"
                  >
                    <FaTimes />
                  </button>
                </motion.div>
              )}
            </>
          ) : (
            <>
              <div className="absolute inset-0 flex items-center justify-center">
                <HiCode className={`text-white opacity-80 ${
                  size === 'xlarge' ? 'text-5xl md:text-7xl lg:text-8xl' :
                  size === 'large' ? 'text-4xl md:text-6xl' :
                  size === 'medium' ? 'text-3xl md:text-4xl' :
                  'text-2xl'
                }`} />
              </div>
              {canEdit && isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center"
                >
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="p-3 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors"
                    aria-label="Upload photo"
                  >
                    <FaCamera className="text-xl" />
                  </button>
                </motion.div>
              )}
            </>
          )}
        </div>
      </motion.div>
      
      {canEdit && (
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
          aria-label="Upload profile picture"
        />
      )}
    </div>
  )
}
