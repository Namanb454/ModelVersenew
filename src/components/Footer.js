import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="body-font bg-[#efeded]">
                <div className="container px-10 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span className="text-3xl text-black font-bold">Model Verse</span>
                        </a>
                        <p className="mt-2 text-sm text-black text-justify">Professional Model Catalogs, without physical studio Photoshoot</p>
                        <p className="mt-2 text-sm text-black text-justify">© Copyright 2023 All Rights Reserved by Jumbla Creations PTE LTD.</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:px-24 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">

                            <nav className="list-none my-14">
                                <li className='my-5'>
                                    <a className="text-black hover:text-gray-800">Refund</a>
                                </li>
                                <li className='my-5'>
                                    <a className="text-black hover:text-gray-800">Terms & Conditions</a>
                                </li>
                                <li className='my-5'>
                                    <a className="text-black hover:text-gray-800">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">

                            <nav className="list-none my-14">
                                <li className='my-5'>
                                    <a className="text-black hover:text-gray-800">FAQ’s</a>
                                </li>
                                <li className='my-5'>
                                    <a className="text-black hover:text-gray-800">Examples</a>
                                </li>
                                <li className='my-5'>
                                    <a className="text-black hover:text-gray-800">Get Started</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 className="w-full title-font font-bold text-black tracking-widest text-3xl mb-3">Get In Touch</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <input className="text-black py-1 bg-[#D9D9D9] my-2 px-3" placeholder='Enter Your Name' />
                                </li>
                                <li>
                                    <input className="text-black py-1 bg-[#D9D9D9] my-2 px-3" placeholder='Enter Your Contact Info.' />
                                </li>
                                <li className='flex'>
                                    <input className="text-black py-1 bg-[#D9D9D9] my-2 px-3" placeholder='Enter Your Message' />
                                    <button className='bg-[#001D66] px-4 mx-3 my-2 rounded-md text-white text-sm'>
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
