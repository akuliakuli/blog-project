"use client"
import { FillStatus } from '@/prisma/generated/client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function WithdrawClient({user}: any) {
    const router = useRouter();
    return (
      <div>
        <button onClick={() => {router.push('/dashboard')}}>Back</button>
        <h2 className='text-center text-2xl'>{user.firstname}</h2>
        {user?.WithdrawRequests?.map((item: any, i: any) => (
          <>
              <div className='flex mt-2 justify-center p-2'>
                  <h2 className='mr-2 border-r-4 border-black pr-2'>Amount: {item.amount}$</h2>
                  <h2 className={`
                      ${item.status == FillStatus.Declined && 'bg-red-300'}
                      ${item.status == FillStatus.Accepted && 'bg-green-300'}
                  `}>{item.status}</h2>
              </div>
          </>
        )).reverse()}
      </div>
    )
}
