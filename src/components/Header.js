import React from 'react'
import { MdDone } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';

function Header() {
    return (
        <div>
            <header className="text-gray-600 body-font bg-[#D9D9D9]">
                <div className="container mx-auto px-20 flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <MdDone className='text-[#22C55E] text-xs' />
                        <span className="ml-2 text-xs">Founded in India. We respect your privacy</span>
                    </span>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xs justify-center">
                        <AiFillStar className='text-[#22C55E]' />
                        <AiFillStar className='text-[#22C55E]' />
                        <AiFillStar className='text-[#22C55E]' />
                        <AiFillStar className='text-[#22C55E]' />
                        <AiFillStar className='text-[#22C55E]' />
                        <span className="mr-5 ml-2 hover:text-gray-900">Used by 11 + E-commerce brands</span>
                    </nav>
                    <MdDone className='text-[#22C55E] text-xs' />
                    <span className="inline-flex items-center text-xs mt-4 ml-2 md:mt-0">1835+  human models created
                    </span>
                </div>
            </header>
        </div>
    )
}

export default Header
