'use client'
import axios from 'axios';
import { signOut } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

enum Steps {
    send,
    check,
    update
}

export default function ForgotIdClient({forgotId, email, currentUser}: any) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [steps, setSteps] = useState(Steps.send);

    const { register, handleSubmit,reset, watch, formState: { errors } } = useForm({
      defaultValues: {
          code: '',
          password: '',
          confirm_password: ''
      }
    });

    const onSend = (data: any) => {
      setLoading(true);
      axios.post('/api/users/forgot/send', {
        email: email
      }).then(() => {
          setLoading(false)
          toast.success("Code is send on your email")
          setSteps(Steps.check)
          reset();
          router.refresh();
      }).catch((error) => {
          setLoading(false)
          toast.error('Something went wrong')
      })
    }

    const onSubmit = (data: any) => {
        setLoading(true)
        axios.post('/api/users/forgot/check', {
            id: forgotId,
            code: data.code,
        }).then(() => {
            setLoading(false)
            setSteps(Steps.update)
            reset();
            toast.success(":)")
        }).catch((error) => {
            setLoading(false)
            toast.error('Code is not correct')
        })
      }

      const onUpdate = (data: any) => {
        setLoading(true)
        axios.post('/api/users/forgot/update', {
            id: forgotId,
            newPassword: data.password
        }).then(() => {
            setLoading(false)
            toast.success(":)")
            if(currentUser){
              signOut()
            }
            router.push('/auth/login')
        }).catch((error) => {
            setLoading(false)
            toast.error('Old Password is incorrect')
        })
    }

    if(steps === Steps.send){
        return (
          <div className='h-screen w-full flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-bold'>Send code !</h2>
          <div className='w-full md:w-[700px] h-[250px] bg-blue-300 rounded-xl p-3'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className='w-full text-xl rounded-md p-2' type='text' {...register('code', {required: true})}/>
              <input disabled={loading} type='submit' className='self-center mt-[2%] bg-[#EFA00B] text-xl rounded-md p-2' placeholder='submit'/>
            </form>
  
            <button onClick={handleSubmit(onSend)} className='self-center mt-[2%] bg-[#EFA00B] text-xl rounded-md p-2'>Send Code Again</button>
        </div>
      </div>
         
        )
      }

  if(steps === Steps.check){
    return (
      <div className='h-screen w-full flex flex-col justify-center items-center'>
        <h2 className='text-2xl font-bold'>Send code !</h2>
        <div className='w-full md:w-[700px] h-[250px] bg-blue-300 rounded-xl p-3'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className='w-full text-xl rounded-md p-2' type='text' {...register('code', {required: true})}/>
            <input disabled={loading} type='submit' className='self-center mt-[2%] bg-[#EFA00B] text-xl rounded-md p-2' placeholder='submit'/>
          </form>

          <button onClick={onSend} className='self-center mt-[2%] bg-[#EFA00B] text-xl rounded-md p-2'>Send Code Again</button>
      </div>
    </div>
    )
  }

  if(steps === Steps.update){
    return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-bold'>Please write your new password !</h2>
         <div className='w-full md:w-[700px] h-[250px] bg-blue-300 rounded-xl p-3 '>
           <form onSubmit={handleSubmit(onUpdate)} className='flex flex-col gap-4'>
             <input className='w-full text-xl rounded-md p-2' type='password' placeholder='new password' {...register('password', {required: true})}/>
             <input className='w-full text-xl rounded-md p-2' type='password' placeholder='new password' {...register('confirm_password', {
               required: true,
               validate: (val: string) => {
                 if(watch('password') != val){
                   return "Your Password do not match"
                 }
               }
             })}/>

             <input disabled={loading} type='submit' className='self-center mt-[2%] bg-[#EFA00B] text-xl rounded-md p-2' placeholder='submit'/>
           </form>
         </div>
        </div>
      )
  }

  return null;
}
