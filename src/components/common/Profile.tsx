import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Profile: React.FC = () => {
  const { data: session } = useSession()

  return (
    <main className='flex justify-center items-center '>
      {session?.user?.name ?? 'loading...'}
      {session?.user?.image && (
        <Image 
        className='rounded-full m-2'
          src={session.user.image} 
          alt='profile_pic' 
          width={35} 
          height={35}
        />
      )} 
      {/* {session?.user?.email ?? 'loading...'} */}
    </main>
  )
}

export default Profile
