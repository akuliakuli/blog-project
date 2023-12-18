import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

import prisma from '@/app/[locale]/libs/prismadb'
import getCurrentUser from "@/app/[locale]/actions/getCurrentUser";
import { FillStatus, Role } from "@/prisma/generated/client";




interface IParams {
    withdrawsId: string
}
export async function POST(
  request: Request,
  { params }: { params: IParams }
): Promise<any> {
  const body = await request.json();
  const currentUser = await getCurrentUser();


  if(currentUser?.role != Role.Admin){
    return null;
  }

  const { 
    status,
   } = body;

  const { withdrawsId } = params;
  
  if (!withdrawsId || typeof withdrawsId !== 'string') {
    throw new Error('Invalid ID');
  }


   let WithdrawRequest;


   Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
        NextResponse.error();
        }
    });

   if(status === FillStatus.Accepted){
    WithdrawRequest = await prisma.withdrawRequests.update({
            where: {
                id: withdrawsId
            },
            data: {
                status: status
            }
    })
   }

   if(status === FillStatus.Declined){
    WithdrawRequest = await prisma.withdrawRequests.update({
        where: {
            id: withdrawsId
        },
        data: {
            status: status
        }
    })
    const request = await prisma.withdrawRequests.findUnique({
        where: {
            id: withdrawsId
        }
    })

    await prisma.user.update({
        where: {
            id: request?.userId,
        },
        data:{
            balance: {increment: request?.amount}
        }
    })
   }



  return NextResponse.json(WithdrawRequest);
}