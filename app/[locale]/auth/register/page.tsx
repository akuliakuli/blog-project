import React from 'react'
import RegisterClient from './RegisterClient'
import { redirect } from 'next/navigation'
import getCurrentUser from '@/app/[locale]/actions/getCurrentUser'
import { sendEmail } from '@/app/[locale]/libs/mailer';
import { Role } from '@/prisma/generated/client';

export default async function page() {
  const currentUser = await getCurrentUser();

  if(currentUser?.role === Role.Admin){
    return redirect('/dashboard')
  }

  if(currentUser){
    return redirect('/account')
  }

  
  return (
    <div>
      <RegisterClient/>
    </div>
  )
}
