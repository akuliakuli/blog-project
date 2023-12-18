'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTranslations } from 'next-intl'


function NewsIdClient({blog}: any) {
  // CASHALE
  const t = useTranslations("Trade")
  return (
    <div className="flex flex-col justify-center items-center mt-8 ">
      <img src={`${blog.image}`} alt='' className='rounded-md h-[400px] object-cver'/>
      <Link href={"/"}>{t("getBack")}</Link>
      <h1 className='font-bold text-2xl mb-[2%] mt-[2%]'>{blog.title}</h1>
      <p className='w-[60%]'>{blog.content}</p>
    </div>
   
  )
}

export default NewsIdClient