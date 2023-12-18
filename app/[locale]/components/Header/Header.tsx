'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Avatar from './Auth/Avatar'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Languages from './Languages'
import { useLocale } from 'next-intl'
interface HeaderProps {
  currentUser: any,
  fixed?: boolean,
}
function Header({
  currentUser,
  fixed
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  return (
    <>
      {/* Web */}
      <div className={`hidden md:flex flex-col items-center md:flex-row top-0 justify-around p-2 shadow-md md:h-[7rem] relative ${fixed && 'md:fixed'} w-full z-20 bg-white`}>
        <div className='flex gap-5 items-center w-[70%] '>
            <Link href={'/'}>
              <Image src={"/images/logo.jpg"} width={90} height={70} alt='tokentrust logo'/>
            </Link>

            <div className='hidden gap-2 md:flex'>
                <Link href={"/trading"}>Trade</Link>
                <Link href={"/about"}>About us</Link>
                <Link href={"/blogs"}>News</Link>
                <Link href={"/university"}>University</Link>
            </div>
        </div>
        <Languages locale={locale}/>
        <div className='hidden md:block'>
          {currentUser ? (
          <Avatar currentUser={currentUser}/>
        ) : (
          <div className='flex gap-5 items-center'>
              <Link href={'/auth/login'} className='p-2 text-md text-center rounded-md border-2 border-[#77D4FC] w-[104px]  hover:bg-[#1D3461] hover:text-white hover:border-blue-800 hover:-translate-y-2' style={{transition:"0.3s"}}>sign in</Link>
              <Link href={'/auth/register'} className='p-2 text-md text-center bg-[#4B91F1] rounded-md w-[104px] hover:-translate-y-2' style={{transition:"0.3s"}}>register</Link>
          </div>
        )}
        </div>
    </div>
    

    {/* Phone */}
    <div className={`flex md:hidden flex-col items-center top-0 justify-around p-2 shadow-md ${fixed ? ' fixed' : 'relative'} w-full z-20 bg-white`}>
          <div className='flex relative justify-between items-center h-[7rem] w-full'>
            <Link href={'/'}>
              <Image src={"/images/tokentrust.png"} width={90} height={70} alt='tokentrust logo'/>
            </Link>
            <button onClick={() => {
                setOpen(!open)
              }}>
                {!open ? <AiOutlineMenu size={25}/> : <AiOutlineClose size={25}/>}
            </button>
            <Languages locale={locale}/>
            <div className='flex justify-center items-center'>
              {currentUser ? (
                <Avatar currentUser={currentUser}/>
              ) : (
                <div className='flex gap-5 items-center'>
                    <Link href={'/auth/login'} className='p-2 text-md text-center rounded-md border-2 border-[#77D4FC] w-[104px]  hover:bg-[#1D3461] hover:text-white hover:border-blue-800 hover:-translate-y-2' style={{transition:"0.3s"}}>sign in</Link>
                    <Link href={'/auth/register'} className='p-2 text-md text-center bg-[#4B91F1] rounded-md w-[104px] hover:-translate-y-2' style={{transition:"0.3s"}}>register</Link>
                </div>
              )}
            </div>
          </div>

          {open && (
            <div className='h-[4rem] w-full items-center border-t-2 flex justify-around'>
                  <Link href={"/trading"}>Trade</Link>
                  <Link href={"/about"}>About us</Link>
                  <Link href={"/blog"}>News</Link>
                  <Link href={"/trading"}>Trade</Link>
            </div>
          )}
    </div>


    {fixed && <hr className={`${open ? 'mt-44' : 'mt-28'} md:mt-28`}></hr>}
    </>
  )
}

export default Header