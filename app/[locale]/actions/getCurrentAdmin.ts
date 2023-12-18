import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import prisma from '@/app/[locale]/libs/prismadb'
import { Role } from "@/prisma/generated/client";

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentAdmin() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentAdmin = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
        role: Role.Admin,
        NOT: {
          role: Role.User
        }
      },
    });

    if (!currentAdmin) {
      return null;
    }

    return currentAdmin
  } catch (error: any) {
    return null;
  }
}

