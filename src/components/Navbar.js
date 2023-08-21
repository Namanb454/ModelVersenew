import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 shadow-gray-300 shadow-md">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center w-full">
                        <img src='ModelVerse.png' />
                        <a href='/' className="flex-shrink-0 text-[#072C81] text-xl font-semibold">ModelVerse</a>
                        <div className="hidden md:block w-full">
                            {/* Add your navigation links here */}
                            <nav class="w-fit mx-auto items-center text-base justify-center">
                                <a href='/' class="mx-8 text-sm hover:text-gray-900">Reviews and examples</a>
                                <a href='/' class="mx-8 text-sm hover:text-gray-900">How it works?</a>
                                <a href='/' class="mx-8 text-sm hover:text-gray-900">Styles</a>
                                <a href='/' class="mx-8 text-sm hover:text-gray-900">Pricing</a>
                                <a href='/' class="mx-8 text-sm hover:text-gray-900">Near me</a>
                                <a href='/' class="mx-8 text-sm hover:text-gray-900">Blog</a>
                            </nav>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {/* Add more elements for desktop */}
                        <div className='flex'>
                            <button class="inline-flex items-center mx-1 shadow-md shadow-gray-300 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 text-[#072C81] rounded text-sm mt-4 md:mt-0">Login
                            </button>
                            <button class="inline-flex items-center mx-1 bg-[#072C81] text-white border-0 py-2 px-3 w-32 text-center  focus:outline-none hover:bg-gray-200 hover:text-[#072C81] rounded text-sm mt-4 md:mt-0">Get your images
                            </button>
                        </div>

                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}

            <div className="md:hidden">
                {/* Add your mobile navigation links here */}
                {/* <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
                    



                    <a href="/" className="hover:text-gray-900 transition-all block px-3 py-2 rounded-md text-base"
                    >Reviews and examples
                    </a>
                    <a href="/" className="hover:text-gray-900 transition-all block px-3 py-2 rounded-md text-base">How it works?
                    </a>
                    <a href="/" className="hover:text-gray-900 transition-all block px-3 py-2 rounded-md text-base">Styles
                    </a>
                    <a href="/" className="hover:text-gray-900 transition-all block px-3 py-2 rounded-md text-base">Pricing
                    </a>
                    <a href="/" className="hover:text-gray-900 transition-all block px-3 py-2 rounded-md text-base">Near me
                    </a>
                    <a href="/" className="hover:text-gray-900 transition-all block px-3 py-2 rounded-md text-base">Blog
                    </a>
                    <a />
                    <button class="items-center mx-1 shadow-md shadow-gray-300 border-0 py-2 px-3 focus:outline-none hover:bg-gray-200 text-[#072C81] rounded text-sm mt-4 md:mt-0">Login
                    </button>
                    <button class="items-center mx-1 bg-[#072C81] text-white border-0 py-2 px-3 w-32 text-center  focus:outline-none hover:bg-gray-200 hover:text-[#072C81] rounded text-sm mt-4 md:mt-0">Get your images
                    </button>
                    <a />

                </div> */}
            </div>

        </nav >
    );
};

export default Navbar;
