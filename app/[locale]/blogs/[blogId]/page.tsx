import Header from '@/app/[locale]/components/Header/Header'
import React from 'react'
import NewsIdClient from './NewsIdClient'
import getBlogById from '@/app/[locale]/actions/getBlogById';
import { redirect } from 'next/navigation';

interface IParams {
  blogId: any;
}

export default async function page({ params }: { params: IParams}) {
  const blog = await getBlogById({blogId: params.blogId})
// const newsById = Data.News[params.newsId]
// if(!newsById){
//     return redirect("/news")
//    }
  if(!blog){
    redirect('/blogs')
  }
  return (
    <div>
        <NewsIdClient blog={blog} />
    </div>
  )
}