import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="body-font bg-[#efeded]">
                <div className="container lg:px-10 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="lg:w-64 w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="lg:text-3xl text-2xl text-black font-bold tracking-wider">Model Verse</span>
                        </a>
                        <p className="mt-2 mx-2 lg:text-sm text-black text-xs text-center lg:text-justify">Professional Model Catalogs, without physical studio Photoshoot</p>
                        <p className="mt-2 mx-2 lg:text-sm text-black text-xs text-center lg:text-justify">© Copyright 2023 All Rights Reserved by Jumbla Creations PTE LTD.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:px-24 -mb-10 lg:py-0 py-5 md:mt-0 mt-0 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-1/2 px-4">

                            <nav className="list-none lg:my-14 my-2 tracking-wider">
                                <li className='lg:my-5 my-2'>
                                    <a className="text-black lg:text-base text-sm hover:text-gray-800">Refund</a>
                                </li>
                                <li className='lg:my-5 my-2'>
                                    <a className="text-black lg:text-base text-sm hover:text-gray-800">Terms & Conditions</a>
                                </li>
                                <li className='lg:my-5 my-2'>
                                    <a className="text-black lg:text-base text-sm hover:text-gray-800">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-1/2 px-4">

                            <nav className="list-none lg:my-14 my-2 tracking-wider">
                                <li className='lg:my-5 my-2'>
                                    <a className="text-black lg:text-base text-sm hover:text-gray-800">FAQ’s</a>
                                </li>
                                <li className='lg:my-5 my-2'>
                                    <a className="text-black lg:text-base text-sm hover:text-gray-800">Examples</a>
                                </li>
                                <li className='lg:my-5 my-2'>
                                    <a className="text-black lg:text-base text-sm hover:text-gray-800">Get Started</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full lg:px-4 px-0 lg:my-0 my-5">
                            <h2 className="w-full title-font font-bold text-black tracking-widest lg:text-3xl text-2xl mb-3">Get In Touch</h2>
                            <nav className="list-none mb-10">
                                <li className='lg:mx-0 mx-20'>
                                    <input className="text-black text-center lg:w-fit w-full lg:text-base text-sm py-1 bg-[#D9D9D9] my-2 px-3" placeholder='Enter Your Name' />
                                </li>
                                <li className='lg:mx-0 mx-20'>
                                    <input className="text-black text-center lg:w-fit w-full lg:text-base text-sm py-1 bg-[#D9D9D9] my-2 px-3" placeholder='Enter Your Contact Info.' />
                                </li>
                                <li className='lg:flex lg:mx-0 mx-20'>
                                    <input className="text-black lg:w-fit w-full text-center lg:text-base text-sm py-1 px-3 bg-[#D9D9D9] my-2" placeholder='Enter Your Message' />
                                    <button className='bg-[#001D66] px-4 lg:py-0 py-2 mx-3 my-2 rounded-md text-white text-sm'>
                                        Submit
                                    </button>
                                </li>
                                <li>
                                    <a className=" text-xs hover:text-gray-800">or email us at contact@modelverse.in</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default Footer
