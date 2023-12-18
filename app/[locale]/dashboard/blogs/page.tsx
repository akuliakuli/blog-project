import getCurrentUser from '@/app/[locale]/actions/getCurrentUser';
import { Role } from '@/prisma/generated/client';
import { redirect } from 'next/navigation';
import React from 'react'
import BlogsClient from './BlogsClient';
import getAllBlog from '@/app/[locale]/actions/getAllBlog';

export default async function page() {
  const currentUser = await getCurrentUser();
  const blogs = await getAllBlog({});

  if(currentUser?.role != Role.Admin){
    return redirect("/account");
  }
  return (
    <div>
      <BlogsClient blogs={blogs}/>
    </div>
  )
}
