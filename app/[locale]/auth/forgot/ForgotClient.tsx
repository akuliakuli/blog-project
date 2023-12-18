'use client'
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function ForgotClient() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        email: '',
    }
  });

  const onSubmit = (data: any) => {
    setLoading(true)
    axios.post('/api/users/forgot/checkemail', {
        email: data.email
    }).then((success) => {
        console.log(success.data.id)
        setLoading(false)
        toast.success(":)")
        router.push(`forgot/${success.data.id}`)
    }).catch((error) => {
        setLoading(false)
        toast.error('Email is blocked or it is not registered')
    })
  }

  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
    <h2 className='text-2xl font-bold'>Please write your email !</h2>
      <div className='w-full md:w-[700px] h-[250px] bg-blue-300 rounded-xl p-3 '>
        <form onSubmit={handleSubmit(onSubmit)}>
               <input placeholder='email' className='w-full text-xl rounded-md p-2' type='email' {...register('email', {required: true})}></input>
               <input disabled={loading} type='submit' className='self-center mt-[2%] bg-[#EFA00B] text-xl rounded-md p-2' placeholder='Send'/>
        </form>
      </div>
  </div>
    // <div className='h-screen w-full flex justify-center items-center'>
    //     <div className='w-full md:w-[700px] h-[200px] bg-blue-300'>
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //             <input placeholder='email' className='w-full bg-red-300' type='email' {...register('email', {required: true})}></input>
    //             <input disabled={loading} type='submit' placeholder='Send'/>
    //         </form>
    //     </div>
    // </div>
  )
}
