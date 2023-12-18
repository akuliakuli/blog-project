import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

function FirstCard() {
  const t = useTranslations("FirstCard")
  return (
    <div className='z-0 flex flex-col gap-5 md:flex-row justify-around items-center min-h-[700px] w-full bg-[#03012C] rounded-b-3xl'>
    <div className='flex flex-col w-[90%] md:w-[40%]'>
        <p style={{background: "-webkit-linear-gradient(#53FF45, #1E2EDE)", WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}} 
          className=' text-2xl md:text-5xl mb-[4%] bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent'>
          {t("title")}</p>
        <p className='w-[70%] md:w-[60%] mb-[4%] text-xl text-white'>{t("subtitle")}</p>
        <div className='flex  justify-center items-center self-center gap-5 bg-[#002A22] w-[70%] md:w-[50%] rounded-md p-2'>
        <div className='flex flex-col gap-5 '>
            <p className='text-md text-white '>{t("rating")}</p>
            <Image alt="bitcoin " src={"/images/trust.png"} width={108} height={48}/>
        </div>
        <div className='flex flex-col gap-5 '>
            <p className='text-md text-white'>{t("rating")}</p>
            <Image alt="bitcoin " src={"/images/bit.png"} width={110} height={48}/>
        </div> 
        </div>
       
    </div>
    <div className='flex flex-col gap-2 bg-transparent backdrop-blur border-2 border-white rounded-md w-[80%] h-full md:w-[38%] md:h-[350px] p-4'>
        <h1 className='text-white text-3xl'>{t("cryptoPrice")}</h1>
        <div className='flex self-end p-2'>
          <p className='text-white'>{t("price")}</p>
        </div>
        <div className='flex justify-between bg-[#171A21] text-white p-2 rounded-md'>
          <div className='flex gap-2 items-center'>
            <img alt='' src='./images/btclogo.png' className='h-[30px] w-[30px] object-cover'/>
            <p>Bitcoin</p>
          </div>
          <p>39,491.40$</p>
        </div>
        <div className='flex justify-between bg-[#171A21] text-white p-2 rounded-md'>
          <div className='flex gap-2 items-center'>
            <img alt='' src="/images/etherlogo.png" className='h-[30px] w-[30px] object-cover' />
            <p>Ethereum</p>
          </div>
        
          <p>2,159.89$</p>
        </div>
        <div className='flex justify-between bg-[#171A21] text-white p-2 rounded-md'>
          <div className='flex gap-2 items-center'>
            <img alt='' src="/images/litecoin.png" className='h-[30px] w-[30px] object-cover' />
            <p>Litecoin</p>
          </div>
          
          <p>72.32$</p>
        </div>
    </div>
</div>
)
}

export default FirstCard