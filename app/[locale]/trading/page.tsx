"use client"
import React from 'react'
import "./video.css";
import Link from 'next/link';
import { useTranslations } from 'next-intl';

function Index() {
    const t = useTranslations("Trade")
  return (
    <div className="flex min-h-screen flex-col relative " style={{backgroundColor: "#003844",
        backgroundImage: 'linear-gradient(32deg, #003844 0%, #011936 100%)'
        }}>
      <div className="video-container">
        <video autoPlay muted loop>
            <source src="/images/trading.mp4" type="video/mp4" />
        </video>
         
        <div className="caption ml-[5%]">
            <Link href={"/"} className='bg-gray-600 text-purple-500 font-bold p-2 text-md rounded-md'>{t("getBack")}</Link>
            <h1 className="text-4xl text-[#06D6A0]">{t("exchange")}</h1>
            <h1 className="text-start text-white text-3xl md:text-4xl lg:text-5xl font-bold">{t("title")}</h1>
            <p className="text-white text-2xl mt-[2%] w-[40%] text-start">{t("subtitle")}</p>
            <button className="text-white bg-[#820B8A] p-3 text-center rounded-full w-[20%] text-md mt-[2%]">{t("btn")}</button>
            <p className="text-md text-gray-500 w-[45%] text-start mt-[2%]">{t("useCase")}</p>
        </div>
    </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center mt-[4%] gap-5">
            <div className="rounded-xl text-white bg-[#297373] h-full w-[35%] md:w-[25%] p-3 ">
                <h1 className="text-3xl mb-[2%]">Top Gainers</h1>
                <div className="flex justify-between items-center gap-5">
                    <div className="flex flex-col">
                        <h1>INJ USD</h1>
                        <p className="text-[8px]">VOL $104.562.122</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">+ $17.34%</h1>
                        <p className="text-[14px] text-gray-700">8.53</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>PTR USD</h1>
                        <p className="text-[8px]">VOL $652.342</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">+ 14.25%</h1>
                        <p className="text-[14px] text-gray-700">10.53</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>HIN</h1>
                        <p className="text-[8px]">VOL $</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">+ 5.5%</h1>
                        <p className="text-[14px] text-gray-700">45.53</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>INJ USD</h1>
                        <p className="text-[8px]">VOL $100.8523.188</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">+ 33.69%</h1>
                        <p className="text-[14px] text-gray-700">14.23</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>INJ USD</h1>
                        <p className="text-[8px]">VOL $45.050.234</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">+ 3.22%</h1>
                        <p className="text-[14px] text-gray-700">1.65</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>INJ USD</h1>
                        <p className="text-[8px]">VOL $456.453.222</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">+ 3.22%</h1>
                        <p className="text-[14px] text-gray-700">123.5%</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl text-white bg-[#297373] h-full w-[35%] md:w-[25%] p-3">
                <h1 className="text-3xl mb-[2%]"> Trending Down</h1>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>BTB USD</h1>
                        <p className="text-[8px]">VOL $192.440.670</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-red-600">- 34.12%</h1>
                        <p className="text-[14px] text-gray-700">20.05</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>B2B CDV</h1>
                        <p className="text-[8px]">VOL $75.529.883</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-red-600">- 45%</h1>
                        <p className="text-[14px] text-gray-700">3.21%</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>INJ USD</h1>
                        <p className="text-[8px]">VOL $</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-red-600">- 22.93%</h1>
                        <p className="text-[14px] text-gray-700">14</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>INJ UKD</h1>
                        <p className="text-[8px]">VOL $224.23.003</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-red-600">- 33.21%</h1>
                        <p className="text-[14px] text-gray-700">12.31</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>INJ USD</h1>
                        <p className="text-[8px]">VOL $185.0266.452</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-red-600">- 7.15%</h1>
                        <p className="text-[14px] text-gray-700">10.2</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>INJ USD</h1>
                        <p className="text-[8px]">VOL $423.123.456</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-red-600">- 7.54%</h1>
                        <p className="text-[14px] text-gray-700">28.34</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl text-white bg-[#297373] h-full w-[35%] md:w-[25%] p-3 ">
                <h1 className="text-3xl mb-[2%]">New Listings</h1>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>SUSHI USD</h1>
                        <p className="text-[8px]">VOL $63.342.423</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">+ 34.00</h1>
                        <p className="text-[14px] text-gray-700">1.25</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>TKT CBD</h1>
                        <p className="text-[8px]">VOL $543.188.098</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">- 11.12%</h1>
                        <p className="text-[14px] text-gray-700">8.5</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>THT</h1>
                        <p className="text-[8px]">VOL $200.042.129</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">- 0.85%</h1>
                        <p className="text-[14px] text-gray-700">1.05</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>ETHB</h1>
                        <p className="text-[8px]">VOL $112.002.958</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">- 5.65%</h1>
                        <p className="text-[14px] text-gray-700">4.91</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>TEK IBM</h1>
                        <p className="text-[8px]">VOL $45.003.518</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">- 33.1%</h1>
                        <p className="text-[14px] text-gray-700">0.05</p>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1>BKC SEV</h1>
                        <p className="text-[8px]">VOL $103.003.425</p>
                    </div>
                    <div className="flex flex-col items-end justify-center">
                        <h1 className="text-green-600">- 112.85%</h1>
                        <p className="text-[14px] text-gray-700">8.53</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-[10%] gap-2 ">
            <img alt='' src='/images/cryptocompare (1).png' className='h-[160px] w-[24%] object-cover'/>
            <img alt='' src='/images/cryptocompare (2).png' className='h-[160px] w-[24%] object-cover'/>
            <img alt='' src='/images/cryptocompare (3).png' className='h-[160px] w-[24%] object-cover'/>
        </div>
        <div className='flex  flex-col mt-[10%] items-center justify-center'>
            <h1 className='text-4xl w-[60%] text-white text-center'>{t("firstCard")}</h1>
            <div className='flex items-center gap-5 justify-center mt-[4%]'>
                <div className='flex flex-col w-[40%]'>
                    <h1 className='text-white text-2xl md:text-5xl'>{t("firstCardTitle")}</h1>
                    <p className='text-[#E6E6EA] text-2xl'>{t("firstCardText")}</p>
                </div>
                <img alt='' src='/images/trade-laptop.jpg' className='w-[40%] object-cover rounded-xl'/>
            </div>
            <div className='flex items-center gap-5 justify-center mt-[4%]'>
            <img alt='' src='/images/stocks.jpg' className='w-[40%] object-cover rounded-xl'/>
                <div className='flex flex-col w-[40%]'>
                    <h1 className='text-white text-2xl md:text-5xl'>{t("secondCard")}</h1>
                    <p className='text-[#E6E6EA] text-2xl'><mark className='inline bg-[#009FB7]'>UBS</mark>  {t("secondCardText")}</p>
                </div>
            </div>
        </div>
        <div className='flex mt-[10%] flex-col md:flex-row gap-5 justify-center items-center'>
            <div className='flex flex-col rounded-xl h-auto md:h-[350px] bg-[#01172F] shadow-lg w-[80%] md:w-[20%] border-2 border-[#465362] p-2'>
                <h1 className='text-3xl text-white'>{t("thirdCard")}</h1>
                <h2 className='text-xl h-full text-white'>{t("thirdCardText")}</h2>
            </div>
            <div className='flex flex-col rounded-xl h-auto md:h-[350px] bg-[#01172F] shadow-lg w-[80%] md:w-[20%] border-2 border-[#465362] p-2'>
                <h1 className='text-3xl text-white'>{t("fourthCard")}</h1>
                <h2 className='text-xl h-full text-white'>24/7</h2>
            </div>
            <div className='flex flex-col relative rounded-xl h-auto md:h-[350px] shadow-lg	 bg-[#01172F]  w-[80%] md:w-[20%] border-2 border-[#06BA63] p-2'>
                <h1 className='text-3xl text-white'>{t("fifthCard")}</h1>
                <h2 className='text-xl h-full text-white'>{t("fifthCardText")}</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Index