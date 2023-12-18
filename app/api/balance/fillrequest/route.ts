import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

import prisma from '@/app/[locale]/libs/prismadb'
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

  const User = await prisma.fillRequest.create({
    data: {
        amount: intAmount,
        userId: currentUser.id,
    }
  })
  
  return NextResponse.json(User);
}