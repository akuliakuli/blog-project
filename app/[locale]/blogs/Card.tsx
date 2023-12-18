
import Link from 'next/link'
import React from 'react'


interface CardProps {
  blog: any
  deleteBlog?: any,
  editBlog?: any
}
function Card({blog, deleteBlog, editBlog}: CardProps) {
  return (
    <div className='flex flex-col w-[40%] md:w-[30%] mb-[5%] h-full gap-3'>
      <div className='flex justify-between w-[80%] md:w-[90%]'>
        {editBlog && (
          <button className='px-2 py-1 bg-blue-200 rounded-2xl hover:bg-blue-300 border' onClick={() => {
            editBlog(blog)
          }}>
            Edit Blog
          </button>
        )}
        {deleteBlog && (
              <button className='px-2 py-1 bg-red-200 rounded-2xl hover:bg-red-300 border' onClick={() => {
                deleteBlog(blog.id)
              }}>
                Remove Blog
              </button>
        )}
      </div>
      <Link href={`/blogs/${blog.id}`}>
          <img src={blog.image} className='w-[90%] mb-5 bg-cover h-[250px] object-cover rounded-xl' alt=''/>
          <div className='flex flex-col gap-2 w-[90%]'>
              <div className='flex gap-4'>
                {blog.theme?.map((item: any, i: any) => (
                  <button key={i} className='rounded-md p-2 text-sm w-max bg-[#EC058E] font-bold text-[#FFFBFC] hover:hover:-translate-y-2' style={{transition:"0.3s"}}>{item}</button>
                ))}
              </div>
              <h1 className='text-xl md:text-3xl w-[100%] hover:text-[#62BBC1] cursor-pointer' style={{transition:"0.3s"}}>{blog.title}</h1>

              <p className='w-[100%]'>{blog.content.split(" ", 10).toString().replaceAll(',', ' ')} ...</p>
              <p className='text-[#3E505B] text-sm'>Oct 26, 2023 | 12 min read</p>
          </div>
    </Link>
    </div>
  )
}

export default Card