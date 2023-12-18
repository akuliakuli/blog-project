import getBlockedUsers from '@/app/[locale]/actions/getBlockedUsers'
import getCurrentAdmin from '@/app/[locale]/actions/getCurrentAdmin';
import { redirect } from 'next/navigation';
import React from 'react'
import BlockedClient from './BlockedClient';
import getCurrentUser from '@/app/[locale]/actions/getCurrentUser';
import { Role } from '@/prisma/generated/client';

export default async function route() {
  const blockedUsers = await getBlockedUsers();
  // const currentAdmin = await getCurrentAdmin();
  const currentUser = await getCurrentUser();

  // if(!blockedUsers){
  //     return redirect('/dashboard')
  // }
  
  if(currentUser?.role != Role.Admin){
    return redirect('/account')
  }

  return (
      <BlockedClient blockedUsers={blockedUsers}/>
  )
}
