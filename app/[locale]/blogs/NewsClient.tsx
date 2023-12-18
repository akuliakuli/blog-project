'use client'
import React from 'react'
import Card from './Card'
import { useTranslations } from 'next-intl'

function NewsClient({blogs}: any) {
  const t = useTranslations("News")
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col  justify-center items-center  lg:h-[300px] p-5 bg-[#62BBC1]'>
            <div className='flex relative flex-col justify-center self-stretch items-center'>
            <h1 className='text-2xl lg:text-5xl w-max flex gap-2 text-[#FFFBFC] mb-[2%]'>{t("crypto")}<p className='text-[#EC058E]'>{t("continue")}</p> </h1>
            <p className='text-[#FFFBFC] text-xl w-[40%] text-center'>{t("news")}</p>
            <input className='lg:absolute text-xl lg:text-4xl md:p-2 lg:p-3 rounded-md md:-bottom-[80%]' placeholder='Search...'/>
        
            </div>
        </div>
        <div className='flex flex-wrap mt-[5%] justify-center gap-5'>
            {blogs?.map((blog: any, index: any) => <Card blog={blog} key={index}/>)}
        </div>
    </div>
  )
}

export default NewsClient