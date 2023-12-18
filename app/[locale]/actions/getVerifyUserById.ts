import prisma from "@/app/[locale]/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

import { FillStatus, Role } from "@/prisma/generated/client";

export interface IUserByIdParams {
  userId: any,
}

export default async function getVerifyUserById(
params: IUserByIdParams
) {
  try{
    const {
      userId
    } = params;

    if(!userId){
      return;
    }

    const fillRequests = await prisma.user.findUnique({
        where: {
          id: userId,
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