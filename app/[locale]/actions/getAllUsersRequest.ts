import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import prisma from '../libs/prismadb'
import { FillStatus, Role } from "@/prisma/generated/client";
import getCurrentUser from "./getCurrentUser";


export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getAllUsersRequest() {
  try {
    const session = await getSession();
    const currentUser = await getCurrentUser();

    if(currentUser?.role != Role.Admin){
        return null;
    }

    if (!session?.user?.email) {
      return null;
    }

    const allUsers = await prisma.user.findMany({
      where: {
         role: Role.User,
         blocked: false,
      },
      include: {
        FillRequests: {
          where: {
            status: FillStatus.Waiting
          },
          include: {
            user: true
          }
        },
        WithdrawRequests: {
          where: {
            status: FillStatus.Waiting
          },
          include: {
            user: true
          }
        }
      }
    });

    if (!allUsers) {
      return null;
    }

    return allUsers.reverse();
  } catch (error: any) {
    return null;
  }
}

