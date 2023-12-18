import { useTranslations } from 'next-intl'
import React from 'react'

function University() {
    const t = useTranslations("UniversityCards")
  return (
    <div className='flex flex-col w-[80%] mt-[10%] self-center'>
    <h1 className='text-3xl'>{t("cardTitle")}</h1>

    <div className='flex flex-col md:flex-row justify-center gap-5 mt-[4%]' >
        <div className='flex flex-col rounded-xl relative w-full md:w-[60%] bg-[#14213D] p-5 md:h-[550px]' style={{backgroundImage:`url("/images/bg.jpg")`,backgroundSize:"cover"}}>
            <h1 className='text-white text-4xl mt-[5%]'>{t("firstCardTitle")}</h1>
            <h1 className='text-white text-3xl mb-[5%]'>{t("firstCardSubtitle")}</h1>
            <p className='w-[40%] text-[#E5E5E5] text-md h-[60%]'>{t("firstCardContext")}</p>
            <button className='self-start bg-white rounded-full	 p-2 w-[10%] hover:w-[20%] hover:bg-[#FCA311] hover:text-white' style={{transition:"0.3s"}}>➜</button>            
            
        </div>
        <div className='flex flex-col gap-5 w-full md:w-[50%]'>
        <div className='flex w-full gap-2'>
            <div className='flex justify-center w-[50%] md:w-[24%] rounded-md items-center bg-[#EDF2EF]'>
                <img src='https://miro.medium.com/v2/resize:fit:1400/1*opn1wt7cJxF3a4KnqHItVw.jpeg' className='w-[120px] h-[120px] object-cover '/>
            </div>
            <div className='flex flex-col w-[60%]'>
                <p className='text-xl h-full hover:text-[#57C4E5] cursor-pointer'>{t("secondCardTitle")}</p>
                <p className='text-[#686963]'>{t("secondCardDate")}</p>
            </div>
        </div>
        <div className='flex w-full gap-2'>
            <div className='flex justify-center w-[50%] md:w-[24%] rounded-md items-center bg-[#EDF2EF]'>
                <img src='/images/block.png' className='w-[120px] h-[120px] object-cover '/>
            </div>
            <div className='flex flex-col w-[60%]'>
                <p className='text-xl h-full hover:text-[#57C4E5] cursor-pointer'>{t("thirdCardTitle")}</p>
                <p className='text-[#686963]'>{t("thirdCardDate")}</p>
            </div>
        </div>
        <div className='flex w-full gap-2'>
            <div className='flex justify-center w-[50%] md:w-[24%] rounded-md items-center bg-[#EDF2EF]'>
                <img src='/images/earth.png' className='w-[120px] h-[120px] object-cover '/>
            </div>
            <div className='flex flex-col w-[60%]'>
                <p className='text-xl h-full hover:text-[#57C4E5] cursor-pointer'>{t("fourthCardTitle")}</p>
                <p className='text-[#686963]'>{t("fourthCardDate")}</p>
            </div>
        </div>
        <div className='flex w-full gap-2'>
            <div className='flex justify-center w-[50%] md:w-[24%] rounded-md items-center bg-[#EDF2EF]'>
                <img src='/images/invest.png' className='w-[120px] h-[120px] object-cover '/>
            </div>
            <div className='flex flex-col w-[60%]'>
                <p className='text-xl h-full hover:text-[#57C4E5] cursor-pointer'>{t("fifthCardTitle")}</p>
                <p className='text-[#686963]'>{t("fifthCardDate")}</p>
            </div>
        </div>
    </div>
    </div>

</div>

  )
}

export default University