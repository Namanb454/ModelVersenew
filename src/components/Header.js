import React from 'react'
import { MdDone } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';

function Header() {
    return (
        <div>
            <header className="text-gray-600 body-font bg-[#D9D9D9]">
                <div className="container mx-auto lg:px-20 flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <MdDone className='text-[#22C55E] lg:text-base text-[5px]' />
                        <span className="ml-2 lg:text-xs text-[5px]">Founded in India. We respect your privacy</span>
                    </span>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center lg:text-xs text-[5px] justify-center">
                        <AiFillStar className='text-[#22C55E]' />
                        <AiFillStar className='text-[#22C55E]' />
                        <AiFillStar className='text-[#22C55E]' />
                        <AiFillStar className='text-[#22C55E]' />
                        <AiFillStar className='text-[#22C55E]' />
                        <span className="ml-2 hover:text-gray-900">Used by 11 + E-commerce brands</span>
                    </nav>
                    <MdDone className='text-[#22C55E] lg:text-base text-[5px]' />
                    <span className="inline-flex items-center lg:text-xs text-[5px] mt-4 ml-2 md:mt-0">1835+  human models created
                    </span>
                </div>
            </header>
        </div>
    )
}

export default Header
