import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

import prisma from '@/app/[locale]/libs/prismadb'
import getCurrentUser from "@/app/[locale]/actions/getCurrentUser";
import { FillStatus, Role } from "@/prisma/generated/client";




interface IParams {
    fillrequestId: string
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

  const { fillrequestId } = params;
  
  if (!fillrequestId || typeof fillrequestId !== 'string') {
    throw new Error('Invalid ID');
  }
  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
    NextResponse.error();
    }
});

   let fillRequest;

   if(!status){
    throw new Error('Invalid Status');
   }

   if(status === FillStatus.Accepted){
    fillRequest = await prisma.fillRequest.update({
            where: {
                id: fillrequestId
            },
            data: {
                status: status
            }
    })
    const request = await prisma.fillRequest.findUnique({
        where: {
            id: fillrequestId
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

   if(status === FillStatus.Declined){
    fillRequest = await prisma.fillRequest.update({
        where: {
            id: fillrequestId
        },
        data: {
            status: status
        }
    })
   }



  return NextResponse.json(fillRequest);
}