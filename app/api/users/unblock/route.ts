import { NextResponse } from "next/server";
import prisma from '@/app/[locale]/libs/prismadb'

export async function POST(
    request: Request,
  ): Promise<any> {
    try {
        const body = await request.json();
        const { userId } = body;
        
        const blockedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                blocked: false
            }
        })

        return NextResponse.json(blockedUser);
    }catch (error: any) {
        return NextResponse.json(error)
    }
}