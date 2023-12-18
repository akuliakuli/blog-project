import prisma from "@/app/[locale]/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

export interface IRoomsParams {
  email: any,
}

export default async function getUserForVerifyEmail(
  params: IRoomsParams
) {
  try {
    const {
      email
    } = params;

    if(!email){
        return null
    }

    const userById = await prisma.user.findUnique({
        where: {
          email: email,
          emailVerified: undefined,
          blocked: false
        },
        select: {
          email: true,
          emailVerified: true
        }
    });

      
    return userById;
  } catch (error: any) {
    throw new Error(error);
  }
}
