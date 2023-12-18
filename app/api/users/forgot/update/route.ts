import { NextResponse } from "next/server";
import prisma from '@/app/[locale]/libs/prismadb'
import { sendEmail } from "@/app/[locale]/libs/mailer";
import bcrypt from 'bcrypt'

export async function POST(
    request: Request,
  ): Promise<any> {
    try {
        const body = await request.json();
        const { id, newPassword } = body;  
    
        const user = await prisma.user.findFirst({
            where: {
                id: id,
            }
        })
        
        if(!user){
            return new Error("email not registered")
        }

        if(user.blocked){
            return new Error('Email is Blocked')
        }

        const hashedPassword = await bcrypt.hash(newPassword, 12);

        const updatePassword = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                hashedPassword: hashedPassword
            }
        })

        return NextResponse.json(updatePassword)
    }catch (error: any) {
        throw new Error('Something went wrong')
    }
}