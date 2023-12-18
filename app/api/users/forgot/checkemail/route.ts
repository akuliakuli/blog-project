import { NextResponse } from "next/server";
import prisma from '@/app/[locale]/libs/prismadb'
import { sendEmail } from "@/app/[locale]/libs/mailer";

export async function POST(
    request: Request,
  ): Promise<any> {
    try {
        const body = await request.json();
        const { email } = body;
    
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        
        if(!user){
            return new Error("email not registered")
        }

        if(user.blocked){
            return new Error('Email is Blocked')
        }
        

        return NextResponse.json({id: user.id})
    }catch (error: any) {
        throw new Error('Something went wrong')
    }
}