"use client"
import React from 'react'
import {TbPick} from 'react-icons/tb'
import {BsFlag, BsFillGearFill} from 'react-icons/bs'
import { useTranslations } from 'next-intl'
function Index() {
    const t = useTranslations("About")
  return (
    <div className='flex min-h-screen flex-col bg-[#FBFFFE]'>
        <div className='flex flex-col justify-center items-center h-[500px] bg-cover' style={{backgroundImage:`url("/images/background.png")`}}>
            <div className='flex gap-2 items-center'>
                <img alt='' src='/images/hand.png' className='h-[96px] w-[96px] object-cover'/>
                <h1 className='flex gap-2 text-2xl md:text-5xl mb-[2%] text-[#F4F4ED]'><mark className='text-[#326273]'>UBS</mark> {t("firstText")}</h1>
            </div>
            <p className='text-xl text-gray-700 w-[40%] text-center text-[#D2FDFF]'>{t("secondText")}</p>
<button className='rounded-full p-3 bg-[#3ABEFF] text-2xl mt-[2%] w-[35%] md:w-[20%] hover:bg-[#D2FDFF] mb-[4%]' style={{transition:"0.3s"}}>{t("thirdText")}</button>
        </div>
        <div className='flex justify-center flex-col md:flex-row gap-5 w-full mt-[3%]'>
            <img alt='' src={"/images/chair.jpg"} className='h-[200px] md:h-[300px] object-cover'/>
            <div className='flex flex-wrap gap-2 items-center justify-center'>
                <img alt='' src={"/images/charter.jpg"} className='rounded-full object-cover w-[49%] h-[150px] md:h-[100px]' />
                <img alt='' src={"/images/charter.jpg"} className='rounded-full object-cover w-[49%] h-[150px] md:h-[100px]' />
                <img alt='' src={"/images/charter.jpg"} className='rounded-full object-cover w-[49%] h-[150px] md:h-[100px]' />
                <img alt='' src={"/images/charter.jpg"} className='rounded-full object-cover w-[49%] h-[150px] md:h-[100px]' />
            </div>
            <img alt='' src={"/images/chair.jpg"} className='h-[150px] md:h-[300px] object-cover'/>
        </div>
        <div className='flex justify-center gap-[4em] w-[80%] self-center mt-[5%]'>
            <p className='text-2xl font-bold w-[40%]'>{t("fourthText")}</p>
            <p className='w-[40%] text-md'>{t("fifthText")}</p>
        </div>
        <div className='flex flex-wrap gap-5 self-center w-[80%] justify-center mt-[5%]'>
            <div className='md:h-[200px] flex justify-center items-center flex-col p-5 md:p-[20px] bg-[#F7F7F7] rounded-xl w-[45%] md:w-[25%] shadow-xl	'>
                <p className='text-5xl font-bold'>2013</p>
                <p className='text-xl'>{t("sixthText")}</p>
            </div>
            <div className='md:h-[200px] flex justify-center items-center flex-col p-5 md:p-[20px] bg-[#F7F7F7] rounded-xl w-[45%] md:w-[25%] shadow-xl	'>
                <p className='text-5xl font-bold'>5M+</p>
                <p className='text-xl'>{t("seventhText")}</p>
            </div>
            <div className='md:h-[200px] flex justify-center items-center flex-col p-5 md:p-[20px] bg-[#F7F7F7] rounded-xl w-[45%] md:w-[25%] shadow-xl	'>
                <p className='text-5xl font-bold'>30+</p>
                <p className='text-xl'>{t("eightText")}</p>
            </div>
            <div className='md:h-[200px] flex justify-center items-center flex-col p-5 md:p-[20px] bg-[#F7F7F7] rounded-xl w-[45%] md:w-[25%] shadow-xl	'>
                <p className='text-5xl font-bold'>30+</p>
                <p className='text-xl'>{t("ninthText")}</p>
            </div>
            <div className='md:h-[200px] flex justify-center items-center flex-col p-5 md:p-[20px] bg-[#F7F7F7] rounded-xl w-[45%] md:w-[25%] shadow-xl	'>
                <p className='text-5xl font-bold'>$7.5B</p>
                <p className='text-xl'>{t("tenthText")}</p>
            </div>
            <div className='md:h-[200px] flex justify-center items-center flex-col p-5 md:p-[20px] bg-[#F7F7F7] rounded-xl w-[45%] md:w-[25%] shadow-xl	'>
                <p className='text-5xl font-bold'>40.6M</p>
                <p className='text-xl'>{t("elevenText")}</p>
            </div>
            <div className='md:h-[200px] flex justify-center items-center flex-col p-5 md:p-[20px] bg-[#F7F7F7] rounded-xl w-[45%] md:w-[25%] shadow-xl	'>
                <p className='text-5xl font-bold'>583K</p>
                <p className='text-xl'>{t("twelveText")}</p>
            </div>
        
        </div>
        <div className='flex flex-wrap md:flex-nowrap w-full justify-center md:w-[90%] self-center  items-center mt-[5%] '>
            <div className='flex flex-col w-[40%] md:w-[35%]'>
                <div className='p-5 rounded-r-2xl bg-[#0E4749] self-start w-[77%] text-center mb-[1%]'>
                    <h1 className='text-2xl text-white'>Announcement of acquisition</h1>
                </div>
                <p className='w-[75%]'> <a href='https://www.ubs.com/global/en/our-firm/creating-sustainable-value/_jcr_content/mainpar/toplevelgrid_copy_2089636725/col1/accordion/accordionsplit/innergrid/xcol3/linklistreimagined_c/link.1401046722.file/PS9jb250ZW50L2RhbS9hc3NldHMvY2MvaW52ZXN0b3ItcmVsYXRpb25zL2FnbS8yMDIzL2FwcmlsL2d2LXRyYWt0YW5kdW0tMS0yMDIzLWNvbG0ta2VsbGVoZXItZW4ucGRm/gv-traktandum-1-2023-colm-kelleher-en.pdf'>Link</a></p>
            </div>
            <div className='flex flex-col w-[40%] md:w-[35%]'>
                <div className='p-5 rounded-r-2xl bg-[#E55812] self-start w-[77%] text-center mb-[1%]'>
                    <h1 className='text-2xl'>Announcement of new Group CEO</h1>
                </div>
                <p className='w-[75%]'><a href='https://www.ubs.com/global/en/our-firm/creating-sustainable-value/_jcr_content/mainpar/toplevelgrid_copy_2089636725/col1/accordion/accordionsplit/innergrid/xcol2/linklistreimagined_c/link.1159903060.file/PS9jb250ZW50L2RhbS9hc3NldHMvbmV3cy8yMDIzLzAzLzI5LzIwMjMwMzI5LW1yLXVicy1jZW8gY2hhbmdlLWVuLnBkZg==/20230329-mr-ubs-ceo%20change-en.pdf'>Link</a></p>
            </div>
            <div className='flex flex-col w-[40%] md:w-[35%]'>
                <div className='p-5 rounded-r-2xl self-start w-[77%] text-center mb-[1%]' style={{backgroundColor: "#0093E9",
backgroundImage: `linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);`
}}>
                    <h1 className='text-2xl'>Related speeches from the AGM</h1>
                </div>
                <p className='w-[75%]'><a href='https://www.ubs.com/global/en/our-firm/creating-sustainable-value/_jcr_content/mainpar/toplevelgrid_copy_2089636725/col1/accordion/accordionsplit/innergrid/xcol3/linklistreimagined_c/link.1401046722.file/PS9jb250ZW50L2RhbS9hc3NldHMvY2MvaW52ZXN0b3ItcmVsYXRpb25zL2FnbS8yMDIzL2FwcmlsL2d2LXRyYWt0YW5kdW0tMS0yMDIzLWNvbG0ta2VsbGVoZXItZW4ucGRm/gv-traktandum-1-2023-colm-kelleher-en.pdf'>Link</a></p>
            </div>

        </div>
        <div className='flex flex-col justify-center self-center items-center w-[70%] mt-[10%]'>
            <h1 className='text-4xl font-bold text-[#08BDBD] mb-[3%]'>{t("twelveText")}</h1>
            <div className='flex gap-5 flex-wrap md:flex-nowrap'>
                <div className='flex flex-col p-5 relative rounded-xl' style={{backgroundColor: "#08AEEA",
backgroundImage: "linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)"
}}>
                    <h1 className='text-xl md:text-4xl font-bold mb-[3%] text-white'>OK</h1>
                    <p className='text-md md:text-xl text-white'>{t("thirteenText")}</p>
                    <img alt='' src={"/images/users.png"} className='h-[400px] w-[400px] object-contain self-end'/>
                </div>
                <div className='flex flex-col gap-5 rounded-xl'>
                    <div className='flex-grow bg-[#F8F7F9] p-5'>
                        <div className='flex gap-2'>
                            <TbPick size={45}/>
                            <h1 className='text-4xl mb-[3%]'>{t("fourteenText")}</h1>
                        </div>
                        <p className='text-xl'></p>
                    </div>
                    <div className='flex-grow bg-[#F8F7F9] p-5'>
                    <div className='flex gap-2'>
                            <BsFlag size={45}/>
                            <h1 className='text-4xl mb-[3%]'>{t("fifteenText")}</h1>
                        </div>
                        <p className='text-xl'>{t("sixteenText")}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-5 flex-wrap md:flex-nowrap w-[70%] self-center mt-[2%]'>
        <div className='flex-grow w-[50%] bg-[#F8F7F9] p-5'>
            <div className='flex gap-2'>
                <BsFillGearFill size={45}/>
                <h1 className='text-4xl mb-[3%]'>{t("seventeenText")}</h1>
            </div>
            <p className='text-xl'>{t("eighteenText")}</p>
        </div>
            <div className='flex-grow w-[50%] bg-[#F8F7F9] p-5'>
                <div className='flex gap-2'>
                    <TbPick size={45}/>
                    <h1 className='text-4xl mb-[3%]'>{t("nineteenText")}</h1>
                </div>
                <p className='text-xl'>{t("twentyOneText")}</p>
            </div>
        </div>
    </div>
  )
}

export default Index