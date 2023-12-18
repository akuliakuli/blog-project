import { useTranslations } from 'next-intl';
import Link from 'next/link'
import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai"
import { FaPeopleGroup } from "react-icons/fa6";
import { GrPlan } from "react-icons/gr";
import { MdOutlineAttachMoney } from "react-icons/md";

function HowToStart() {
    const t = useTranslations("HowToStart")
  return (
    <div className='flex flex-col w-[80%] mt-[5%] self-center'>
        <h1 className='text-4xl mb-[4%]'>{t("title")}</h1>
        <div className='flex flex-wrap gap-5 md:flex-nowrap items-center justify-center h-[100%]'>
            <div className='flex flex-col items-center justify-center bg-[#2D898B] rounded-md self-stretch md:h-[350px] w-[46%] md:w-[25%]'>
                <div className='rounded-full  w-[30%] h-[30%] md:w-[20%] md:h-[20%] bg-[#102E4A] flex justify-center items-center'>
                    <AiOutlineUserAdd size={45} color='white' />
                </div>
                <p className='text-2xl mb-[3%] text-white text-center md:text-start md:h-[10%]'>{t("firstCardTitle")}</p>
                <p className='text-md text-white w-[70%] text-center mb-[10%]'>{t("firstCardText")}</p>
                <button className='rounded-full p-3 bg-[#731DD8] text-white text-md hover:-translate-y-2' style={{transition:"0.3s"}}>{t("firstCardBtn")}</button>
            </div>
            <div className='flex flex-col p-3 items-center justify-center rounded-md bg-[#DEE5E5] w-[46%] md:w-[25%] h-[300px]'>
                <div className='rounded-full text-white w-[48px] h-[48px] bg-[#102E4A] flex justify-center items-center'>
                    <FaPeopleGroup  size={30} color="white"/>

                </div>
                <p className='text-2xl mb-[3%] text-center'>{t("secondCardTitle")}</p>
                <p className='text-center'>{t("secondCardText")}</p>
        

            </div> 
            <div className='flex flex-col p-3 justify-center items-center rounded-md bg-[#DEE5E5] w-[46%] md:w-[25%] h-[300px]'>
                <div className='rounded-full text-white w-[48px] h-[48px] bg-[#102E4A] flex justify-center items-center'>
                <GrPlan size={30} color="white" />

                </div>
                <p className='text-2xl mb-[3%] text-center'>{t("thirdCardTitle")}</p>
                <p className='text-center'>{t("thirdCardText")}</p>
         

            </div>
            <div className='flex flex-col p-3 items-center justify-center  rounded-md bg-[#DEE5E5] w-[46%] md:w-[25%] h-[300px]'>
                <div className='rounded-full  text-white w-[48px] h-[48px] bg-[#102E4A] flex justify-center items-center'>
                    <MdOutlineAttachMoney size={30} color="white"/>
                </div>
                <p className='text-2xl mb-[3%] text-center'>{t("fourthCardTitle")}</p>
                <p className='text-center'>{t("fourthCardText")}</p>

            </div>
        </div>
    </div>
  )
}

export default HowToStart