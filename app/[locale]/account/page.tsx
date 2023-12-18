import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import { redirect } from 'next/navigation';
import AccountClient from './AccountClient';
import Header from '../components/Header/Header';
import { Role } from '@/prisma/generated/client';

export default async function page() {
  const currentUser = await getCurrentUser();
  // const currentUser = {
  //   firstname: "John",
  //   lastname:"Doe",
  //   email:"user@email.com",
  //   balance:"45000",
  //   phone:"12341235",
  //   username:"Arab"
  // }
  // if(!currentUser){
  //   return redirect('/auth/login')
  // }
  // Firstname: {currentUser.firstname} <br></br>
  // Lastname: {currentUser.lastname} <br></br>
  // email: {currentUser.email} <br></br>
  // balance: {currentUser.balance}$ <br></br>
  // phone: {currentUser.phone} <br></br>
  // username: {currentUser.username} <br></br>

  if(!currentUser){
    return redirect('/auth/login')
  }

  if(currentUser.role == Role.Admin){
    return redirect('/dashboard')
  }


  return (
    <>
      <Header currentUser={currentUser}/>
      <AccountClient currentUser={currentUser}/>
    </>
  )
}
