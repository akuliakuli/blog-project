import { NextResponse } from "next/server";
import prisma from '@/app/[locale]/libs/prismadb'
import { sendEmail } from "@/app/[locale]/libs/mailer";
import bcrypt from 'bcrypt'

export async function POST(
    request: Request,
  ): Promise<any> {
    try {
        const body = await request.json();
        const { id, code } = body;  
        // oldPassword, newPassword
    
        const user = await prisma.user.findFirst({
            where: {
                id: id,
                passwordRecoverCode: code
            }
        })


        if(!user){
            return new Error("email not registered")
        }

        if(user.blocked){
            return new Error('Email is Blocked')
        }

        if(user.passwordRecoverCode != code){
            return new Error('Please Set Correct Code')
        }

        const updatePassword = await prisma.user.updateMany({
            where: {
                id: id,
            },data: {
                passwordRecoverCode: null
            }
        })

        return NextResponse.json(updatePassword)
    }catch (error: any) {
        throw new Error('Something went wrong')
    }
}