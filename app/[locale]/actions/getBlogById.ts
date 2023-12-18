import prisma from "@/app/[locale]/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

import { FillStatus, Role } from "@/prisma/generated/client";

export interface IUserByIdParams {
    blogId: any,
}

export default async function getBlogById(
params: IUserByIdParams
) {
  try{
    const {
        blogId
    } = params;

    if(!blogId){
      return;
    }

    const blogById = await prisma.blog.findUnique({
        where: {
          id: blogId,
        },
    });

    return blogById;
  } catch (error: any) {
    throw new Error(error);
  }
}