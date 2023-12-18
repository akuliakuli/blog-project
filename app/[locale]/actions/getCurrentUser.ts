import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import prisma from '@/app/[locale]/libs/prismadb'
import { Role } from "@/prisma/generated/client";

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
        // role: Role.User,
        blocked: false,
        // NOT: {
        //   role: Role.Admin
        // }
      },
      include: {
        FillRequests: true,
        WithdrawRequests: true
      }
    });

    if (!currentUser) {
      return null;
    }

    return currentUser
  } catch (error: any) {
    return null;
  }
}

