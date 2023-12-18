import React from 'react'
// import getCurrentAdmin from '../actions/getCurrentAdmin'
import { redirect } from 'next/navigation';
import DashboardAdmin from './DashboardAdmin';
import getAllUsersRequest from '../actions/getAllUsersRequest';
import getAllUsersHistory from '../actions/getAllUsersHistory';
import getCurrentUser from '../actions/getCurrentUser';
import { Role } from '@/prisma/generated/client';

export default async function page() {
  // const currentAdmin = await getCurrentAdmin();
  const allUsersRequest = await getAllUsersRequest();
  const allUsersHistory = await getAllUsersHistory();

  const currentUser = await getCurrentUser();

  if(currentUser?.role != Role.Admin){
    return redirect("/account");
  }

  return (
    <div>
        <DashboardAdmin allUsersRequest={allUsersRequest} allUsersHistory={allUsersHistory}  currentUser={currentUser}/>
    </div>
  )
}
