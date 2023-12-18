import React from 'react'
import VerifyEmailClient from './VerifyEmailClient';
import getUserForVerifyEmail from '@/app/[locale]/actions/getUserForVerifyEmail';
import { redirect } from 'next/navigation';
import { sendEmail } from '@/app/[locale]/libs/mailer';

interface IParams {
  verifyemailId: any;
}

export default async function page({ params }: { params: IParams }) {
  const email = params.verifyemailId?.replaceAll("%40", '@');
  const userByEmail = await getUserForVerifyEmail({email: email});

  if(!userByEmail){
    return redirect('/auth/register')
  }

  if(userByEmail.emailVerified){
    return redirect('/auth/login')
  }


  return (
      <VerifyEmailClient email={userByEmail.email}/>
  )
}
