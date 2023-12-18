'use client'
import { FillStatus } from '@/prisma/generated/client'
import { signOut } from 'next-auth/react'
import React, { useState } from 'react'
import BalanceFillRequest from './components/BalanceFillRequest'
import { redirect, useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import Link from 'next/link'
import BalanceWithdrawRequest from './components/BalanceWithdrawRequest'

export default function DashboardAdmin({currentUser, allUsersRequest, allUsersHistory}: any) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const blockAccount = (id: any) => {
    setIsLoading(true)
    axios.post('/api/users/block', {
      userId: id,
    }).then(() => {
      setIsLoading(true)
      router.refresh();
      toast.success(':)')
    }).catch((error) => {
      toast.error(':(')
      setIsLoading(true)
    })
  }
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-[5%] p-3 bg-[#212227]'>
        <h2 className='text-white text-2xl'>Username: {currentUser.username} </h2>
        <h2 className='text-white text-2xl'>Role: {currentUser.role}</h2>

      <Link href={'dashboard/blocked'} className='text-white text-3xl hover:underline'>Заблокированные</Link>
      <button className='border self-start p-2 bg-blue-700 text-white rounded-md' onClick={() => signOut()}>Выйти</button>

      </div>
    




        <div className='h-screen flex flex-col justify-between'>
          {/* Fill */}
          <div className='h-full w-[90%] self-center'>
            <h2 className='text-center text-2xl mb-5'>ЗАПРОСЫ НА ПОПОЛНЕНИЕ БАЛАНСА</h2>
              <div className='grid grid-cols-2 gap-4'>
                {allUsersRequest?.map((user: any) => (
                    <>
                      <div className='flex flex-col border bg-[#407899] p-1 rounded-md'>
                          <button disabled={isLoading} onClick={() => {
                            blockAccount(user.id)
                          }} className='mb-[2%] rounded-full p-2 text-white bg-[#DE6449] w-[50%] self-center'>Заблокировать</button>
                          <h2 className='text-center text-[#FFFFF2] '>Пользователь {user?.firstname}</h2>
                          <h2 className="text-end font-bold">Вся сумма: {user.FillRequests?.reduce((accumulator: any, object: any) => accumulator + object.amount, 0)}$</h2>
                          
                          <div className='max-h-[200px] overflow-y-scroll'>
                            {user.FillRequests?.map((item: any, i: any) => (
                              <>
                                <div className='mt-5'>
                                  <BalanceFillRequest key={i} item={item}/>
                                </div>
                              </>
                            )).reverse()}
                          </div>
                      </div>
                    </>
                  ))}
              </div>
          </div>

                              {/* Withdraw */}
          <div className='h-full w-[90%] self-center'>
            <h2 className='text-center text-2xl mb-5'>ЗАПРОСЫ НА ВЫНОС ДЕНЕГ</h2>
              <div className='grid grid-cols-2 gap-4'>
                {allUsersRequest?.map((user: any) => (
                    <>
                      <div className='flex flex-col border bg-[#407899] p-1 rounded-md'>
                          <button disabled={isLoading} onClick={() => {
                            blockAccount(user.id)
                          }} className='mb-[2%] rounded-full p-2 text-white bg-[#DE6449] w-[50%] self-center'>Заблокировать</button>
                          <h2 className='text-center  text-[#FFFFF2]'>Пользователь {user?.firstname}</h2>
                          <h2 className="text-end font-bold">вся сумма: {user.WithdrawRequests?.reduce((accumulator: any, object: any) => accumulator + object.amount, 0)}$</h2>
                          
                          <div className='max-h-[200px] overflow-y-scroll'>
                            {user.WithdrawRequests?.map((item: any, i: any) => (
                              <>
                                <div className='mt-5'>
                                  <BalanceWithdrawRequest key={i} item={item}/>
                                </div>
                              </>
                            )).reverse()}
                          </div>
                      </div>
                    </>
                  ))}
              </div>
          </div>
        </div>


        <div className='h-screen mt-24 flex flex-col justify-between items-center w-full'>
            <div className='w-[90%] h-full'>
                <div className='h-full'>
                  <h2 className='text-center text-2xl mb-5'>История пополнения баланса</h2>
                    <div className='grid grid-cols-2 gap-4'>
                      {allUsersHistory?.map((user: any) => (
                          <>
                          <div className='flex flex-col border'>
                              <h2 className='text-center'>{user?.firstname}</h2>
                              <h2 className="text-center text-2xl font-bold">Current</h2>
                              <div className='max-h-[200px] overflow-y-scroll'>
                                {user.FillRequests?.map((item: any, index: any) => {
                                  const length = user.FillRequests.length - 1;

                                  if(index <= length - 5){
                                    return;
                                  }

                                  return (
                                    <>
                                      <div className='flex mt-2 justify-center p-2'>
                                          <h2 className='mr-2 border-r-4 border-black pr-2'>Amount: {item.amount}$</h2>
                                          <h2 className={`
                                            ${item.status == FillStatus.Waiting && 'bg-yellow-300'}
                                            ${item.status == FillStatus.Declined && 'bg-red-300'}
                                            ${item.status == FillStatus.Accepted && 'bg-green-300'}
                                          `}>{item.status}</h2>
                                      </div>
                                    </>
                                  )
                                }).reverse()}
                              </div>
                              <button onClick={() => {

                                router.push(`/history/fill/${user.id}`)
                              }} className='text-center bg-blue-200 border-t-2'>More</button>
                          </div>
                          </>
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-[90%] h-full'>
                <div className='h-full'>
                  <h2 className='text-center text-2xl mb-5'>История выноса баланса</h2>
                    <div className='grid grid-cols-2 gap-4'>
                      {allUsersHistory?.map((user: any) => (
                          <>
                          <div className='flex flex-col border'>
                              <h2 className='text-center'>{user?.firstname}</h2>
                              <h2 className="text-center text-2xl font-bold">Current</h2>
                              <div className='max-h-[200px] overflow-y-scroll'>
                                {user.WithdrawRequests?.map((item: any, index: any) => {
                                  const length = user.WithdrawRequests.length - 1;

                                  if(index <= length - 5){
                                    return;
                                  }

                                  return (
                                    <>
                                      <div className='flex mt-2 justify-center p-2'>
                                          <h2 className='mr-2 border-r-4 border-black pr-2'>Amount: {item.amount}$</h2>
                                          <h2 className={`
                                            ${item.status == FillStatus.Waiting && 'bg-yellow-300'}
                                            ${item.status == FillStatus.Declined && 'bg-red-300'}
                                            ${item.status == FillStatus.Accepted && 'bg-green-300'}
                                          `}>{item.status}</h2>
                                      </div>
                                    </>
                                  )
                                }).reverse()}
                              </div>
                              <button onClick={() => {

                                router.push(`/history/withdraw/${user.id}`)
                              }} className='text-center bg-blue-200 border-t-2'>More</button>
                          </div>
                          </>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
