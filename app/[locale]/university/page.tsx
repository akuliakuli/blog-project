import React from 'react'
import { FaBookAtlas } from "react-icons/fa6";
import { FaSearchDollar } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaForwardStep } from "react-icons/fa6";
import Header from '../components/Header/Header';
import getCurrentUser from '../actions/getCurrentUser';
import Footer from '../components/Footer/Footer';
import { useTranslations } from 'next-intl';


function University() {
  const t = useTranslations("University")
    const currentUser = getCurrentUser()
  return (
    <div className='flex min-h-screen flex-col'>
      <Header currentUser={currentUser}/>

   
    <div className='flex flex-col justify-center items-center mb-[10%]'>
   
      <div className='flex flex-col justify-end items-start p-3 h-[600px] self-stretch  object-cover no-repeat bg-center' style={{backgroundImage:"url(images/learning.jpg)"}}>
          <h1 className='text-white text-3xl w-[45%] bg-gray-600 rounded-md p-3'>{t("firstText")}</h1>
          <p className='text-xl text-white w-[45%] mt-[1%] bg-[#80CED7] p-3'>{t("secondText")}
</p>
      </div>
      <div className='flex flex-col md:flex-row mt-[3%] w-[90%] gap-3'>
        <div className='border items-center justify-center border-gray-600 rounded-xl p-3 h-fit w-[100%] md:w-[30%] flex flex-col'>
          <FaBookAtlas size={30} />
          <p className=' text-xl mt-[2%]'>{t("thirdText")}</p>
        </div>
        <div className='border items-center justify-center border-gray-600 rounded-xl p-3 h-fit w-[100%] md:w-[30%] flex flex-col'>
          <FaSearchDollar size={30}/>
          <p className=' text-xl mt-[2%]'>{t("fourthText")}</p>
        </div>
        <div className='border items-center justify-center border-gray-600 rounded-xl p-3 h-fit w-[100%] md:w-[30%] flex flex-col'>
          <FaMoneyBillTrendUp size={30} />
          <p className=' text-xl mt-[2%]'>{t("fifthText")}</p>
        </div>
        <div className='border items-center justify-center border-gray-600 rounded-xl p-3 h-fit w-[100%] md:w-[30%] flex flex-col'>
           <FaForwardStep size={30} />

          <p className=' text-xl mt-[2%]'>{t("sixthText")}</p>
        </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5 mt-[5%]'>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div >
              <img className="rounded-t-lg h-[300px] object-cover" src="https://www.esds.co.in/home-images/digital-banking/iotBnk.jpg" alt="" />
          </div>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t("seventhText")}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t("eightText")}</p>
          
          </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div >
              <img className="rounded-t-lg h-[300px] object-cover" src="https://www.wealthwithin.com.au/public/img/4x3/trading-the-stock-market.jpg" alt="" />
          </div>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t("nineText")}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t("tenText")}</p>
           
          </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div >
              <img className="rounded-t-lg h-[300px] object-cover" src="https://cdn.geekwire.com/wp-content/uploads/2021/07/bigstock-House-On-Coins-And-House-Put-O-357127139-630x420.jpg" alt="" />
          </div>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t("elevenText")}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t("twelveText")}</p>
           
          </div>
      </div>
        </div>
    </div>
    <Footer/>
    </div>
  )
}

export default University