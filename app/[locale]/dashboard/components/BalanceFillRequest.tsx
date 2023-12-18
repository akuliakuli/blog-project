import { FillStatus } from '@/prisma/generated/client';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function BalanceFillRequest({item}: any) {
    const router = useRouter();
    const [clicked, setClicked] = useState(false);
    const declineRequest = (id: any) => {
        axios.post(`/api/balance/fillrequest/${id}`, {status: FillStatus.Declined}).then(() => {
          toast.success(':)')
          router.refresh();
        }).catch((error) => {
          toast.error(":(")
          setClicked(false)
        })
      }
      
      const acceptRequest = (id: any) => {
        axios.post(`/api/balance/fillrequest/${id}`, {status: FillStatus.Accepted}).then(() => {
          toast.success(':)')
          router.refresh();
        }).catch((error) => {
          toast.error(":(")
          setClicked(false)
        })
      }
  return (
        <div className='flex p-2 justify-center py-2 border-t-2'>
            {/* <h2 className='mr-2'>{item.user.firstname}</h2> */}
            {/* <h2 className='mr-2 border-r-4 border-black pr-2'>{item.user.lastname}</h2> */}
            <h2 className='mr-2 border-r-4 border-black pr-2'>Amount: {item.amount}$</h2>
            {/* <h2 className='mr-2 border-r-4 border-black pr-2'>Number: {item.user.phone}</h2> */}
            {!clicked ? (
                <>
                    <button onClick={() => {
                        acceptRequest(item.id)
                        setClicked(true)
                    }} className='mr-2 border px-2 bg-green-200'>Accept</button>
                    <button onClick={() => {
                        declineRequest(item.id)
                        setClicked(true)
                    }} className='mr-2 border px-2 bg-red-200'>Decline</button>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
  )
}
