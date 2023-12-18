"use client"
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, {useState} from 'react'


function NavigationCards({blogs}: any) {
  const t = useTranslations("NavCard")
  const [flip, setFlip] = useState(false);
  return (
    <div className='flex flex-col justify-center 	bg-[#F1F2F6]'>
      <div className='flex flex-wrap md:flex-nowrap  justify-center items-center mt-[5%] gap-5'>
        {blogs?.map((blog: any, index: any) => (
          <Link href={`/blogs/${blog.id}`} key={index} className='group h-[180px] w-[40%] md:w-[18%] p-3 flex justify-start flex-col bg-[#161925] rounded-3xl cursor-pointer' style={{backgroundImage:`url(${blog.image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"bottom left"}}>
            <h1 className='text-white text-xl font-bold '>{blog.title.split(" ", 1).toString().replaceAll(',', ' ')}</h1>
            <p className='text-white text-md h-full mt-2'>{blog.content.split(" ", 10).toString().replaceAll(',', ' ')}. </p>
            <button className='self-start bg-white rounded-full	 p-2 w-[20%] group-hover:w-[40%] group-hover:bg-[#001514] group-hover:text-white' style={{transition:"0.3s"}}>➜</button>
          </Link>
        ))}
        </div>

        <div className='w-full py-5 text-center'>
          <Link className='px-5 py-2 bg-blue-300 rounded-2xl' href={'/blogs'}>More</Link>
        </div>

        <div className='flex flex-col items-center mt-[15%] w-[80%] self-center'>
          <h1 className='text-3xl md:text-6xl self-start'>{t("title")} </h1>
          <p className='text-xl self-start mb-[5%]'>{t("subtitle")}</p>
          <div className='flex gap-5 w-[90%] justify-center'>
        
              <div className='overflow-scroll h-[300px] md:h-[500px] bg-white p-3 rounded-xl'>
                  <h2 className='text-xl md:text-4xl mb-[4%]'>{t("contenttitle")}</h2>
                  <p>{t("content")} <a className='text-[#437F97]' href='https://www.ubs.com/global/en/our-firm/governance/ubs-europe-se/legal-information/_jcr_content/mainpar/toplevelgrid/col1/accordionbox/accordionsplit_67462/linklist/link.0695956311.file/PS9jb250ZW50L2RhbS9zdGF0aWMvd2VhbHRoLW1hbmFnZW1lbnQvZW5nYWdlbWVudC1wb2xpY3ktZW4ucGRm/engagement-policy-en.pdf'>{t("contentlink")}</a></p>
              </div>
              <div className='overflow-scroll h-[300px] md:h-[500px] bg-white p-3 rounded-xl'>
                  <h2  className='text-xl md:text-4xl mb-[4%]'>{t("contentsectitle")}</h2>
                  <p>{t("contentsecond")}</p>
              </div>
          </div>
        </div>
        <div className='flex flex-col mt-[10%] w-[80%] self-center'>
          <h1 className='text-2xl md:text-4xl'>{t("priceblocks")}</h1>
          <div className='flex w-[100%] mt-[4%] justify-center items-stretch gap-5'>
            <div className='h-[250px] md:h-[550px] bg-[#820263] w-[50%] rounded-xl flex flex-col justify-center p-3'>
                <h1 className='text-2xl md:text-2xl text-white'>{t("priceblockfirsttitle")}</h1>
                <p className="text-white text-md">{t("priceblockfirst")}</p>
            </div>
            <div className='flex flex-col w-[40%] gap-5 '>
            <div className='bg-[#1F7A8C] h-full rounded-xl flex flex-col p-3'>
            <h1 className='text-2xl md:text-2xl text-white'>{t("thirdtitle")}</h1>
            <p className="text-white text-md">{t("third")}</p>

            </div>
            <div className=' bg-[#FFD400] h-full rounded-xl flex flex-col p-3'>
            <h1 className='text-2xl md:text-2xl text-white'>{t("secondblocktitle")}</h1>
            <p className="text-white text-md">{t("secondblock")}</p>

            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavigationCards