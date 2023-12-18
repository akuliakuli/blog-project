'use client'
import Link from 'next/link';
import React from 'react'
import { RiMailCheckLine } from "react-icons/ri";

export default function VerifyedPage() {
  return (
    <div>
        <h3 className="text-2xl">Thanks for signing up for Websitename!</h3>
        <div className="flex justify-center my-2">
            <RiMailCheckLine className="w-24 h-24 fill-green-500"/>
        </div>
        <h2 className='my-2 text-2xl font-bold'>Verified</h2>
        <Link href={'/auth/login'}>Login</Link>
    </div>
  )
}
