import React from 'react'

function Footer() {
  return (
    <footer className="dark:bg-gray-900 self-stretch w-[100%] border-t rounded-xl bg-[#7180AC]">
    <div className="mx-auto w-full ">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
      <img  src='/images/tokentrust.png' className='w-[100px] h-[100px] ml-[10%]'/>

        <div>
            
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Brand Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
    
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul className="text-white dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
      
    </div>
    
    </div>
</footer>
  )
}

export default Footer