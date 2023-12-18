'use client'
import Email from 'next-auth/providers/email';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

export default function LoginClient() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
    } = useForm<FieldValues>({
      defaultValues: {
        email: '',
        password: ''
      },
  });
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    setLoading(true)
    signIn('credentials', { 
      ...data, 
      redirect: false,
    })
    .then((callback) => {
      if (callback?.ok) {
        toast.success("Succesfuly logined");
        setLoading(false)
        router.refresh();
        router.push('/account')
      }
      if (callback?.error) {
        if(callback.error == "emailverify"){
          router.push(`/en/auth/verifyemail/${data.email}`);
          toast.error('Please verify your Email');
        }
        else{
          toast.error(callback.error);
        }
        setLoading(false)
      }
    });
  }
  return (
  //   <div className='flex flex-col md:flex-row justify-center h-full md:h-screen w-full bg-[#E2EFDE]'>
  //   <div className='w-full md:w-[50%] flex flex-col bg-white justify-center items-center order-last md:order-first'>
  //   <h1 className='self-start text-4xl mr-[3%] w-[70%] justify-center self-center mb-[5%]'>LOGIN</h1>

              // <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col border-2 border-[#AFD0BF] p-3 rounded-md w-[80%] h-[400px] md:w-[70%] md:h-[300px] bg-white justify-center'>
              //             <h1>Mail</h1>
              //             <input className="text-xl p-2 border-[#AFD0BF] border-2 mb-[2%] bg-white" type="text" placeholder="Email" {...register("email", {required: true})} />
              //             <h1>Password</h1>
              //             <input className="text-xl p-2 border-[#AFD0BF] border-2 bg-white" type="password" placeholder="Password" {...register("password", {required: true})} />
              //             <input disabled={isLoading} type="submit" className='bg-[#2978A0] text-white text-xl p-3 rounded-full w-auto cursor-pointer md:w-[30%] self-center mt-[5%]' />
              //             <Link href={'/auth/register'} className='text-center mt-5'>Dont Have a account? <mark className='bg-[#043565] p-1 rounded-md text-white'>Register</mark></Link>
              // </form>
  //           </div>
  //           <div className='w-full md:w-[50%] flex flex-col bg-white justify-center items-center' style={{backgroundColor: '#8BC6EC',
  //       backgroundImage: 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'
  //       }}>

  //       <div className='bg-white h-[300px] md:h-[500px] w-[60%] rounded-md backdrop-blur-xl	relative flex justify-end items-end mb-[4%]'>
  //         <h1 className='self-start p-3 ml-[2%] mr-[2%] text-3xl'>Where <mark className='bg-[#043565] text-white'>smart investments</mark> meet financial success!</h1>
  //         <img src='/images/woman.png' alt="" className='h-[200px] md:h-[400px] -left-[40px] absolute object-cover'/>
  //         <div className='h-[50px] w-[50px] bg-gray-700 rounded-full self-center -right-[20px] absolute text-white text-3xl text-center flex justify-center items-center'>+</div>
  //       </div>
  //   </div>
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
            
            <form onSubmit={handleSubmit(onSubmit)}>
                  <input className="text-xl p-2 w-full border-2 rounded-lg mb-[2%] bg-white" type="text" placeholder="Email" {...register("email", {required: true})} />
                  <input className="text-xl p-2 w-full border-2 rounded-lg bg-white" type="password" placeholder="Password" {...register("password", {required: true})} />
                  <input disabled={isLoading} type="submit" className='bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-xl p-3 w-full cursor-pointer self-center mt-[5%]' />
            </form>
            <div className="my-6 flex items-center justify-between">
                <div className="mb-[0.125rem] flex justify-center items-center min-h-[1.5rem] pl-[1.5rem]">
                  <input type="checkbox"
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]"
                  />
                  <label
                    className="inline-block pl-[0.15rem]"
                    htmlFor="exampleCheck3"
                  >
                    Remember me
                  </label>
                </div>

                {/* <!-- Forgot password link --> */}
                <Link
                  href={'/auth/forgot'}
                  className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >
                  Forgot password?
                </Link>
              </div>
              <div className='w-full flex justify-center items-center'>
                <Link href={'/auth/register'} className='text-center mt-5'>Dont Have a account? <mark className='bg-blue-500 px-2 py-1 rounded-md text-white'>Register</mark></Link>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
