import { NextResponse } from "next/server";
import prisma from '@/app/[locale]/libs/prismadb'

export async function POST(
    request: Request,
  ): Promise<any> {
    try {
        const body = await request.json();
        const { token } = body;
    
        const user = await prisma.user.findFirst({
            where: {
                verifyToken: token
            }
        })
        
        if(!user){
            return NextResponse.error()
        }

        if(user?.verifyToken != token){
            return NextResponse.error()
        }
        
        await prisma.user.updateMany({
            where: {
                verifyToken: token,
            },
            data: {
                emailVerified: new Date(),
                verifyToken: null,
                verifyTokenExpiry: null,
            }
        })
        

        return NextResponse.json({
            message: "Email verified successfully"
        })

    }catch (error: any) {
        return NextResponse.json(error)
    }
}