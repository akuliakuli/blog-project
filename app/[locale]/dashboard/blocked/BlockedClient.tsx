'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

export default function BlockedClient({blockedUsers}: any) {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const unBlockUser = (id: any) => {
    setLoading(true)
    axios.post('/api/users/unblock',{userId: id}).then(() => {
        toast.success(":)")
        router.refresh();
    }).catch((error) => {
        toast.error(":(")
    })
  }
  if(!blockedUsers){
    return <div className='text-center w-full h-screen justify-center flex items-center text-8xl'>Empty</div>
  }
  return (
    <div>
      {blockedUsers?.map((user: any) => {
        return (
          <>
            {user.firstname}

            <button className='ml-5 p-2 border' disabled={isLoading} onClick={() => {
                unBlockUser(user.id)
            }}>Unblock</button>
          </>
        )
      })}
    </div>
  )
}
