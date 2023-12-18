import React from 'react'
import LoginClient from './LoginClient'
import getCurrentUser from '../../actions/getCurrentUser'
import { redirect } from 'next/navigation';
import { Role } from '@/prisma/generated/client';

export default async function page() {
  const currentUser = await getCurrentUser();

  if(currentUser?.role == Role.Admin){
    return redirect('/dashboard')
  }

  if(currentUser){
    return redirect('/account')
  }

  return (
    <div>
      <LoginClient/>
    </div>
  )
}
