import { useTranslations } from 'next-intl'
import React from 'react'

function Faq() {
  const t = useTranslations("Faq")
  return (
    <div className='flex flex-col justify-center items-center mt-[10%] mb-[5%]'>
    <div className='flex flex-col w-[60%] h-[350px] justify-center overflow-y-scroll	'>
        <h1 className='font-bold text-xl'>{t("firstTitle")}</h1>
        <p>
          {t("firstText")}
</p>
<h1 className='font-bold text-xl'>{t("secondTitle")}</h1>
<p>{t("secondText")}</p>
<h1 className='font-bold text-xl'>{t("thirdTitle")}</h1>
<p>{t("thirdText")}</p>
<h1 className='font-bold text-xl'>{t("fourthTitle")}</h1>
<p>{t("fourthText")}</p>

<h1 className='font-bold text-xl'>{t("fifthTitle")}</h1>
<p>
  {t("fifthText")}
</p>
    </div>
</div>
  )
}

export default Faq