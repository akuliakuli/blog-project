import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import prisma from '@/app/[locale]/libs/prismadb'
import { Role } from "@/prisma/generated/client";
import getCurrentUser from "./getCurrentUser";


export default async function getBlockedUsers() {
  try {

    const currentUser = await getCurrentUser();
    if(currentUser?.role != Role.Admin){
        return null;
    }


    const blockedUsers = await prisma.user.findMany({
      where: {
        blocked: true,
      },
    });

    if (!blockedUsers) {
      return null;
    }

    return blockedUsers
  } catch (error: any) {
    return null;
  }
}

