import React from 'react'

const ProfileCard = () => {
  return (
    <div className='flex flex-col items-center cursor-pointer transition-transform hover:scale-105'>
      <img
        src='src/assets/profile1.png'
        alt='profile'
        className='w-24 h-24 rounded-lg shadow-md'
      />
      <p className='mt-2 text-white text-sm font-semibold'>Profile</p>
    </div>
  )
}

export default ProfileCard