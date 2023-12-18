import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

function GlobalCard() {
  const t = useTranslations("ReviewCard")
  return (
    <div className='flex flex-col md:flex-row items-center md:items-stretch gap-5 bg-[#00072D] justify-center mt-[5%] w-[95%] rounded-xl self-center p-5'>
        <img alt='' className='w-[60%] h-full object-cover	' src={"/images/world.png"}/>
        <div className='flex flex-col w-[40%] justify-center items-center'>
            <img alt='' src={"/images/stars.png"} className='h-[80px] object-cover	w-[200px]' />
            <p className='text-2xl text-[#CED0CE] text-center'>{t("text")}</p>
            <p className='text-2xl text-white text-center mt-[2%]'> - {t("name")}</p>
            <button className='rounded-full bg-[#F15025] text-white text-xl p-3 mt-[4%]'>{t("btntext")}</button>
        </div>
    </div>
  )
}

export default GlobalCard