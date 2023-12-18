import prisma from '../libs/prismadb'


interface AllBlogsProps {
    smalled?: boolean
}

export default async function getAllBlog({smalled}: AllBlogsProps) {
  try {

    let allBlogs;

    if(smalled){
        allBlogs = await prisma.blog.findMany({
            take: -4
        });
    }else{
        allBlogs = await prisma.blog.findMany();
    }


    if (!allBlogs) {
      return null;
    }

    return allBlogs.reverse();
  } catch (error: any) {
    return null;
  }
}

