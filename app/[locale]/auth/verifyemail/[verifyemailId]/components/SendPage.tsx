'use client'
import React from 'react'
import { RiMailLine } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";

export default function SendPage({loading, steps, STEPS, verifyEmailRequest}: any) {
  if(loading){
    return <div className='text-4xl'>Please Loading...</div>
  }

  if(steps == STEPS.sendRequest){
    return (
    <div>
        <h3 className="text-2xl">Thanks for signing up for Websitename!</h3>
        <div className="flex justify-center my-2">
            <RiMailLine className="w-24 h-24 fill-green-500"/>
        </div>
        <button onClick={() => {verifyEmailRequest()}}>Send Request</button>
    </div>);
  }

  return (
    <div>
        <h3 className="text-2xl">Thanks for signing up for Websitename!</h3>
        <div className="flex justify-center my-2">
            <RiMailSendLine className="w-24 h-24 fill-green-500"/>
        </div>
        <h2>Please Ckeck your email</h2>
        <button onClick={() => {verifyEmailRequest()}}>Send Request Again</button>
    </div>
  )
}
