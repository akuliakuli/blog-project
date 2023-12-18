"use client"
import { signOut } from 'next-auth/react'
import React from 'react'
import useBalanceFillModal from '@/app/[locale]/hooks/useBalanceFillModal'
import { FillStatus } from '@/prisma/generated/client'

import { FaArrowTrendUp } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import useWithdrawBalanceModal from '../hooks/useWithdrawBalanceModal'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'


interface AccountUserProps {
    currentUser: any
}
export default function AccountClient({
    currentUser
}: AccountUserProps) {
  const useFillBalanceModal = useBalanceFillModal();
  const withdrawBalanceModal = useWithdrawBalanceModal();
  const router = useRouter();
  const t = useTranslations("Account");
  return (
    <div className='flex min-h-screen h-screen flex-col bg-[#FBFFFE]'>
        <div className='flex flex-col justify-center self-center bg-[#0E1C36] w-full h-[100%]'>
        <button className='text-black w-[200px] my-5 bg-[#AFCBFF] text-white rounded-full px-4 py-2 ml-[2%] ' onClick={() => {
        router.push(`/auth/forgot/${currentUser.id}`)
      }}>{t("updatePwd")}</button>       
        <div className='flex flex-row w-[90%] self-center mb-[3%]'>
          
          <div className='flex flex-col self-center w-[80%] justify-center mt-[5%]'>
            
              <p className="text-white text-2xl font-bold">Firstname: {currentUser?.firstname}</p> 
              <p className="text-white text-2xl font-bold">Lastname: {currentUser?.lastname}</p> 
              <p className="text-white text-2xl font-bold">email: {currentUser?.email}</p> 
              <p className="text-white text-2xl font-bold">phone: {currentUser?.phone}</p> 
              <p className="text-white text-2xl font-bold">username: {currentUser?.username}</p> 
        </div>
         <img alt='' src={'/images/placeholder.svg'} className='h-[150px] w-[150px] object-cover self-center' />
         </div>
       
      </div>
      
      <div className='flex flex-col gap-2 px-4 py-2 w-[90%] self-center'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-2xl'>{t("balance")}</h1>
          <div className='flex gap-2 items-center'>
            <h1 className='font-bold text-xl'>{currentUser?.balance}$</h1>
            <FaArrowTrendUp size={20}/>
          </div>
          

        </div>
        <button onClick={() => {
          useFillBalanceModal.onOpen();
          }} className='flex gap-2 items-center'>
            <h2 className='self-start'>{t("fillBalance")}</h2>
            <GiReceiveMoney size={20} />

        </button>
        <button onClick={() => {
          withdrawBalanceModal.onOpen();
          }} className='flex gap-2 items-center'>
            <h2 className='self-start'>{t("withdraw")}</h2>
            <GiReceiveMoney size={20} />

        </button>
      </div>
      <h1 className='self-center font-bold text-2xl'>{t("historyofFill")}</h1>
      <div className='rounded-md border-2 border-white shadow p-3 '>
          <div className='flex flex-col'>
              {currentUser?.FillRequests?.map((item: any, index: any) => {
                const length = currentUser.FillRequests.length - 1;

                if(index <= length - 5){
                  return;
                }
                
                return (
                  <>
                  <div className='flex shadow border border-2 border-black p-3'>
                    <h2 className='mr-5 text-md '>{item.amount}$</h2> <h2 className={`
                      ${item.status == FillStatus.Waiting && 'bg-yellow-300'}
                      ${item.status == FillStatus.Declined && 'bg-red-300'}
                      ${item.status == FillStatus.Accepted && 'bg-green-300'}
                      p-3 text-md text-center rounded-full`}>{item.status}</h2> <br></br>
                  </div>
                </>
                )
            }).reverse()}
              <Link href={`/history/fill/${currentUser.id}`} className='p-2 rounded-md bg-[#AFCBFF] text-white text-md w-min mt-[2%]'>More</Link>
          </div>
      </div>

      <h1 className='self-center font-bold text-2xl'>{t("historyOfWithdrawal")}</h1>
      <div className='rounded-md border-2 border-white shadow p-3 '>
          <div className='flex flex-col'>
              {currentUser?.WithdrawRequests?.map((item: any, index: any) => {
              const length = currentUser.WithdrawRequests.length - 1;

              if(index <= length - 5){
                return;
              }

              return (
                <>
                  <div className='flex shadow border border-2 border-black p-3'>
                    <h2 className='mr-5 text-md'>{item.amount}$</h2> <h2 className={`
                      ${item.status == FillStatus.Waiting && 'bg-yellow-300'}
                      ${item.status == FillStatus.Declined && 'bg-red-300'}
                      ${item.status == FillStatus.Accepted && 'bg-green-300'}
                      p-3 text-md text-center rounded-full`}>{item.status}</h2> <br></br>
                  </div>
                </>)
              }).reverse()}
              <Link href={`/history/withdraw/${currentUser.id}`} className='p-2 rounded-md bg-[#AFCBFF] text-white text-md w-min mt-[2%]'>More</Link>
          </div>
      </div>
  
  


    </div>
  )
}
