'use client'
import Card from '@/app/[locale]/blogs/Card'
import useCreateNewBlogModal from '@/app/[locale]/hooks/useCreateNewBlogModal'
import useEditBlogModal from '@/app/[locale]/hooks/useEditBlogModal';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

export default function BlogsClient({blogs}: any) {
  const newBlogModal = useCreateNewBlogModal();
  const editBlogModal = useEditBlogModal();
  const router = useRouter();
  const deleteBlog = (id: any) => {
    axios.post(`/api/blogs/deleteblog`, {
        blogId: id,
    }).then(() => {
        router.refresh();
        toast.success(":)")
    }).catch((error) => {
        router.refresh();
        toast.error(":(")
    })
  }

  const editBlog = (blog: any) => {
    editBlogModal.onOpen();
    editBlogModal.setBlog(blog);
  }
  return (
    <div>
        <div className='w-full h-[200px]'>
            <button onClick={() => {newBlogModal.onOpen()}}>Add New Blog</button>
        </div>
      {/* NEWS */}
      <div className='flex flex-col'>
        <div className='flex flex-col  justify-center items-center  lg:h-[300px] p-5 bg-[#62BBC1]'>
        </div>
        <div className='flex flex-wrap mt-[5%] justify-center gap-5'>
            {blogs?.map((blog: any, index: any) => <Card editBlog={editBlog} deleteBlog={deleteBlog} blog={blog} key={index}/>)}
        </div>
    </div>
    </div>
  )
}
