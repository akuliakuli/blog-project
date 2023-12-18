"use client"
import React, { createRef, useState } from 'react'
import { GiEarthAfricaEurope } from "react-icons/gi";
import {AiFillCaretDown} from 'react-icons/ai'
import { useRouter } from 'next-intl/client';
import { usePathname } from 'next-intl/client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const languages = [
    {
        k: 'en',
        name: 'EN',
        country_code: 'en'
    },
    {
        k: 'kz',
        name: 'KZ',
        country_code: 'kz'
    },
    {
      k: 'ru',
      name: 'RU',
      country_code: 'ru'
  }
]

export default function Languages({
  locale
}: {
  locale: any
}) {

    const router = useRouter();
    const pathname = usePathname();
    const [dropdown, setDropdown] = useState(false);
    const btnDropdownRef = createRef<any>();
    const handleChange = (value: any) => {
      router.push(pathname, { locale: value })
      setDropdown(false)
    }
    return (
      <>
        <div className="flex flex-wrap bg-[#172E60] rounded-xl mr-[5px]">
          <div className="w-full ">
            <div className="relative inline-flex align-middle w-full items-center ">
              <button
                aria-pressed="false"
                ref={btnDropdownRef}
                className={
                  " text-black p-2 uppercase"
                }
                title='button'
                style={{ transition: "all .15s ease",
                minWidth: "2rem"
                }}
                type="button"
                onClick={() => {
                  setDropdown(!dropdown)
                }}
              >
                
                <h1 className={`flex text-[20px] gap-2 justify-center ${pathname == `/` && 'text-white md:text-white'} text-white 2xl:text-[20px] md:text-black items-center`}>
                  {/* {!dropdown ?  
                    // <Image src={"/images/langarrow.png"} height={7.69} width={7.69} className='object-cover w-[10px] h-[10px] 2xl:h-[13.69px] 2xl:w-[13.69px]' alt={'okay'}/>
 
                    :
                    // <Image src={"/images/langarrow.png"} height={7.69} width={7.69} className='object-cover w-[10px] h-[10px] 2xl:h-[13.69px] 2xl:w-[13.69px] rotate-90' alt={'okay'}/>

                    } */}
                    {locale}
                </h1>
              </button>
              <div
                className={`
                  ${dropdown ? 'flex flex-col ' : 'hidden'}
                  'text-[11px] rounded-b-xl w-full uppercase z-50 absolute top-[37px] md:top-[37px]  justify-center text-center  list-none mt-0 text-white'
                  bg-[#172E60]  p-[4px] md:p-0 text-[20px]  uppercase z-50 absolute top-[17px] md:top-[22px] justify-center text-center  list-none mt-0 text-white
                  `
                }
              >
                {languages.map(({k, name, country_code}) => (
                    locale != k && (
                      <button
                        aria-pressed="false"
                        disabled={false}
                        key={country_code}
                        className={`
                          'text-white md:text-white
                          text-white   2xl:text-[20px] mt-[5px] cursor-pointer block w-full whitespace-no-wrap bg-transparent 
                        `}
                        onClick={() => {
                          handleChange(k)
                        }}
                      >
                        {name}
                      </button>
                    )
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}