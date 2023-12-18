import prisma from '@/app/[locale]/libs/prismadb'
import getCurrentUser from "./getCurrentUser";

import { FillStatus, Role } from "@/prisma/generated/client";

export interface IUserByIdParams {
  userId: any,
}

export default async function getUserById(
params: IUserByIdParams
) {
  try{
    const {
      userId
    } = params;

    const currentUser = await getCurrentUser();

    if(!userId){
      return;
    }

    if(currentUser?.role != Role.Admin){
        return;
    }
    

    const fillRequests = await prisma.user.findUnique({
        where: {
          id: userId,
          role: Role.User,
          blocked: false
        },
        include: {
            FillRequests: {
                where: {
                    NOT: {
                        status: FillStatus.Waiting
                    }
                }
            },
            WithdrawRequests: {
              where: {
                  NOT: {
                      status: FillStatus.Waiting
                  }
              }
          },
        }
    });

    return fillRequests;
  } catch (error: any) {
    throw new Error(error);
  }
}