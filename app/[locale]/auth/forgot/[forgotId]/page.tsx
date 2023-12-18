import React from 'react'
import ForgotIdClient from './ForgotIdClient'
import getUserById from '@/app/[locale]/actions/getUserById';
import { redirect } from 'next/navigation';
import getVerifyUserById from '@/app/[locale]/actions/getVerifyUserById';
import getCurrentUser from '@/app/[locale]/actions/getCurrentUser';

interface IParams {
    forgotId: any;
}

export default async function page({ params }: { params: IParams }) {
  const user = await getVerifyUserById({userId: params.forgotId});
  const currentUser = await getCurrentUser();

  if(!user){
    return redirect('/auth/forgot')
  }

  if(user.blocked){
    return redirect('/auth/forgot')
  }

  if(currentUser){
    return (
      <div>
        <ForgotIdClient currentUser email={currentUser.email} forgotId={params.forgotId}/>
      </div>
    )
  }

  return (
    <div>
      <ForgotIdClient email={user.email} forgotId={params.forgotId}/>
    </div>
  )
}
