import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

import prisma from '@/app/[locale]/libs/prismadb'
import { sendEmail } from "@/app/[locale]/libs/mailer";
import getCurrentUser from "@/app/[locale]/actions/getCurrentUser";

export async function POST(
  request: Request,
): Promise<any> {
  const body = await request.json();
  const currentUser = await getCurrentUser();
  if(!currentUser){
    return null;
  }

  const { 
    amount,
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const intAmount = parseInt(amount)

  if(intAmount > currentUser.balance){
    return null;
  }

  if(intAmount <= 0) {
    return null
  }

  const updatedUserMoney = await prisma.user.update({
        where: {
            id: currentUser.id,
        },
        data:{
            balance: {decrement: intAmount}
        }
  })

  await prisma.withdrawRequests.create({
    data: {
        userId: currentUser.id,
        amount: intAmount
    }
  })
  
    await sendEmail({email: currentUser.email, emailType: "WITHDRAW", amount: intAmount})
  return NextResponse.json(updatedUserMoney);
}