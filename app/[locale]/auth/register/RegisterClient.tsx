'use client'
import { sendEmail } from '@/app/[locale]/libs/mailer';
import axios from 'axios';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function RegisterClient() {

  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { 
    register, 
    handleSubmit,
    control,
    watch,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
        defaultValues: {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: ""
        },
  });

  
  const onSubmit:SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)
    await axios.post('/api/users/register', data).then(() => {
      toast.success("Succesfuly registered")
      router.refresh();
      router.push(`/en/auth/verifyemail/${data.email}`);
    }).catch((error) => {
      toast.error(":(")
      setLoading(false)
    })

  }
  return (
    // <div className='flex flex-col md:flex-row justify-center h-full md:h-screen w-full '>
    // <div className='w-full md:w-[50%] flex flex-col bg-white justify-center items-center' style={{
    // backgroundImage: `url('/images/background.png')`, backgroundPosition:"center",backgroundSize:"cover"
    // }}>
    //     <div className='backdrop-blur-md w-[60%] h-[500px] rounded-md flex flex-col justify-center p-3 gap-5'>
    //         <h3 className='text-2xl text-white '>Register now and become a part</h3>
    //         <p className='text-gray-400'>Why choose us? Because were not just an investment company; were your partners in wealth-building. Whether youre a seasoned investor or just starting, our comprehensive approach ensures that your money works hard for you. <br/> Join <mark className='bg-[#7A28CB] text-white uppercase'>ubsinvesting</mark> today and embark on a journey towards a brighter, more financially secure tomorrow. Your dreams deserve the best investment plan-lets make them a reality together</p>
    //     </div>  
    //   </div>
    //   <div className='w-full md:w-[50%] flex flex-col bg-white justify-center items-center order-last md:order-first'>
    //     <h1 className='self-center w-[70%] text-2xl mb-[2%]'>Register</h1>
    //     <div className='flex flex-col border-2 border-[#05204A] p-3 rounded-md w-[80%] h-fit md:w-[70%] md:h-fit p-5 bg-white justify-center '>
              
              // <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
           
              // <label>Username</label>
              // <input className="text-md rounded-md p-2 border-[#05204A] border-2 mb-[2%] bg-white" type="text" placeholder="Username" {...register("username", {required: true})} />
              // <div className='flex gap-2 justify-between'>
              //   <div className='flex flex-col w-full'>
              //   <label>First Name</label>
              //   <input className="text-md rounded-md p-2 border-[#05204A] border-2 mb-[2%] w-full bg-white" type="text" placeholder="FirstName" {...register("firstname", {required: true})} />
              //   </div>
              //   <div className='flex flex-col w-full'>
              //   <label>Last Name</label>
              //   <input className="text-md rounded-md p-2 border-[#05204A] border-2 mb-[2%] w-full bg-white" type="text" placeholder="LastName" {...register("lastname", {required: true})} />
              //   </div>            
              // </div>
              // <label>Phone</label>
              // <input className="text-md rounded-md p-2 border-[#05204A] border-2 mb-[2%] bg-white" type="text" placeholder="Phone" {...register("phone", {required: true})} />
              // <label>Email</label>
              // <input className="text-md rounded-md p-2 border-[#05204A] border-2 mb-[2%] bg-white" type="email" placeholder="Email" {...register("email", {required: true})} />
              // <label>Password</label>
              // <input className="text-md rounded-md p-2 border-[#05204A] border-2 mb-[2%] bg-white" type="password" placeholder="Password" {...register("password", {required: true})} />
            
              // <input disabled={isLoading} type="submit" className='bg-[#2978A0] text-white text-xl p-3 rounded-full w-auto cursor-pointer md:w-fit self-center mt-[5%]'/>
              // <Link href={'/auth/login'} className='text-center mt-5'>You Have a account? <mark className='bg-[#043565] p-1 rounded-md text-white'>Login</mark></Link>
              // </form>
    //       </div>
    //     </div>
    // </div>
    <section className="h-screen flex justify-center items-center">
      <div className="container h-full px-6">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="text-xl p-2 w-full border-2 rounded-lg mb-[2%] bg-white" type="text" placeholder="Email" {...register("email", {required: true})} />
                  <input className="text-xl p-2 w-full border-2 rounded-lg bg-white" type="password" placeholder="Password" {...register("password", {required: true})} />
                  <input disabled={isLoading} type="submit" className='bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xl p-3 w-full cursor-pointer self-center mt-[5%]' />
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)}>
            <input className="text-xl p-2 w-full border-2 rounded-lg mb-[1%] bg-white" type="text" placeholder="Username" {...register("username", {required: true})} />
            <div className='flex gap-2 justify-between mt-[1%] mb-[2%]'>
              <div className='flex flex-col w-full'>
              <input className="text-xl p-2 w-full border-2 rounded-lg bg-white" type="text" placeholder="FirstName" {...register("firstname", {required: true})} />
              </div>
              <div className='flex flex-col w-full'>
                <input className="text-xl p-2 w-full border-2 rounded-lg bg-white" type="text" placeholder="LastName" {...register("lastname", {required: true})} />
              </div>            
            </div>
            <input className="text-xl p-2 w-full border-2 rounded-lg mb-[2%] bg-white" type="text" placeholder="Phone" {...register("phone", {required: true})} />
            <input className="text-xl p-2 w-full border-2 rounded-lg mb-[2%] bg-white" type="email" placeholder="Email" {...register("email", {required: true})} />
            <input className="text-xl p-2 w-full border-2 rounded-lg  bg-white" type="password" placeholder="Password" {...register("password", {required: true})} />
          
            <input disabled={isLoading} type="submit" className='bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xl p-3 w-full cursor-pointer self-center mt-[5%]' />
           </form>
          </div>
          <div className='w-full flex justify-center items-center'>
                <Link href={'/auth/login'} className='text-center mt-5'>You Have a account? <mark className='bg-blue-500 px-2 py-1 rounded-md text-white'>Login</mark></Link>
          </div>
        </div>
      </div>
    </section>

  )
}
