'use client'
import { signOut } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Avatar({currentUser}: any) {
  const [open, setOpen] = useState(false);
  return (
    <button onClick={() => {setOpen(!open)}} className='w-24 h-24 flex flex-col relative justify-center items-center rounded-full'>
      <Image width={12} height={12} alt='placeholder' className='w-12 h-12 object-cover' src={'/images/placeholder.svg'}/>
      {open && (
        <div className='w-full bg-white shadow rounded-md h-[100px] top-0 absolute mt-20 '>
            <Link href={'/account'}>Account</Link>
            <button onClick={() => {signOut()}}>Sign out</button>
        </div>
      )}
    </button>
  )
}
