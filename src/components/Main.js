import React from 'react'
// import { MdDoneAll } from 'react-icons/md';

function Main() {
    const images1 = [
        { "img": "models/img1.png" },
        { "img": "models/img2.png" },
        { "img": "models/img3.png" }
    ]
    const images2 = [
        { "img": "models/img4.png" },
        { "img": "models/img5.png" },
        { "img": "models/img6.png" }
    ]
    const imagecarousel = [
        { "img": "models/img7.png" },
        { "img": "models/img8.png" },
        { "img": "models/img9.png" },
        { "img": "models/img10.png" },
        { "img": "models/img11.png" },
        { "img": "models/img12.png" },
        { "img": "models/img13.png" },
        { "img": "models/img14.png" },
        { "img": "models/img15.png" },
        { "img": "models/img16.png" },
        { "img": "models/img17.png" },
        { "img": "models/img18.png" },
        { "img": "models/img19.png" },
        { "img": "models/img20.png" },
    ]
    return (
        <div>

            <div>
                <div className='relative'>
                    <img className='opacity-50' src='bg1.png' />
                </div>

                <section class="absolute top-32 text-gray-600 w-full body-font">
                    <div class="container px-5 py-24">
                        <div class="flex flex-col text-center w-full mb-10">
                            <h1 class="w-[60%] mx-auto sm:text-4xl text-2xl font-semibold title-font mb-2 text-[#072C81]">Professional Model Catalogs, </h1>
                            <span className='w-[70%] mx-auto sm:text-4xl text-2xl font-semibold title-font text-[#072C81]'>without physical studio photoshoot</span>
                            <p class="lg:w-2/3 mx-auto leading-relaxed my-5 font-semibold text-black text-lg">No.1 Professional AI Model Catalog Generator</p>
                            <p class="lg:w-[40%] mx-auto leading-relaxed text-base">Get on-model images of your garments in minutes with our AI-</p>
                            <p class="lg:w-[45%] mx-auto leading-relaxed text-base">photographer. Upload photos, pick style & receive 100+ On-Model Images</p>
                        </div>

                        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className='mx-auto'>
                                <button class="text-white bg-[#F33737] border-[1px] border-[#F33737] py-2 mx-8 px-8 focus:outline-none hover:bg-white hover:text-[#F33737] hover:border-[#F33737]  rounded text-lg">Get Your Models</button>
                                <button class="text-black bg-white py-2 mx-8 px-8 border-[1px] border-black focus:outline-none hover:bg-black hover:text-white rounded text-lg">Register as team</button>
                            </div>
                        </div>
                        <div className='flex my-10'>
                            <p class="flex items-center lg:w-fit mx-auto leading-relaxed text-black text-xl"><span className='font-semibold'>1835+</span> AI models already created
                                <img className='h-5' src='stars.png' alt='images' />
                            </p>
                        </div>

                        <div class="container w-[80%] px-5 py-5 mx-auto bg-[#F8F7F7] border-[1px] border-black rounded-md shadow-sm shadow-black">
                            <div class="flex flex-wrap sm:-m-4 mx-auto -mb-10 -mt-4 md:space-y-0 space-y-6">
                                <div class="p-4 md:w-1/4 flex items-center mx-auto">
                                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img src='uploadicon.png' />
                                    </div>
                                    <div class="flex-grow text-start">
                                        <h2 class="text-gray-900 text-lg title-font font-semibold">First:</h2>
                                        <p class="leading-relaxed text-base">Upload Raw Images</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/4 flex items-center mx-auto">
                                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img src='starsicon.png' />
                                    </div>
                                    <div class="flex-grow text-start">
                                        <h2 class="text-gray-900 text-lg title-font font-semibold">Second:</h2>
                                        <p class="leading-relaxed text-base">Our AI starts it's work</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/4 flex items-center mx-auto">
                                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img src='ellipseicon.png' />
                                    </div>
                                    <div class="flex-grow text-start">
                                        <h2 class="text-gray-900 text-lg title-font font-semibold">Third:</h2>
                                        <p class="leading-relaxed text-base">Download your models</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <section class="absolute text-gray-600 body-font top-[80%]"> */}

                    {/* </section> */}

                </section>
            </div>


            <section class="text-gray-600 body-font">
                <div class="container py-10 mx-auto">

                    <div class="flex flex-wrap bg-[#C3CFED] py-20">

                        <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 class="text-lg sm:text-xl mx-4 text-gray-900 text-left font-semibold title-font mb-2">All Model Photoshoots include</h2>
                            <div class="mx-4 py-4 w-full">
                                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                    <a>
                                        <span class="bg-transparent text-gray-700 border-gray-700 border-[1.5px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>HD Quality Images
                                    </a>
                                    <a>
                                        <span class="bg-transparent text-gray-700 border-gray-700 border-[1.5px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>30+ Unique Location & Models
                                    </a>
                                    <a>
                                        <span class="bg-transparent text-gray-700 border-gray-700 border-[1.5px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Wide Variety of Locations & Skin Tones
                                    </a>
                                </nav>
                            </div>
                        </div>

                        <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center  mb-4 border-b border-gray-200">
                                <span className='text-[#001D66]'>$19</span>
                                <span class="text-base ml-auto font-normal text-gray-500">starting at per catalog</span>
                            </h1>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center mb-4 border-b border-gray-200">
                                <span>3</span>
                                <span className='text-[#001D66] text-lg'>hrs</span>
                                <span class="text-base ml-auto font-normal text-gray-500">fastest turn around</span>
                            </h1>
                        </div>

                        <div class="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                            <h2 class="text-lg sm:text-xl mx-4 text-gray-900 text-left font-semibold title-font mb-2">Why choose AI Photoshoot?</h2>
                            <div class="mx-4 py-4 w-full">
                                <nav class="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2.5">
                                    <a>
                                        <span class="bg-transparent text-gray-700 border-gray-700 border-[1.5px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Can’t be distinguished from real photos
                                    </a>
                                    <a>
                                        <span class="bg-transparent text-gray-700 border-gray-700 border-[1.5px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>No need for physical shoots
                                    </a>
                                    <a>
                                        <span class="bg-transparent text-gray-700 border-gray-700 border-[1.5px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Different Location, Different Model, Same Garment, Anytime, Anywhere
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="text-gray-600 body-font my-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900"><span className='text-[#21B8B9]'>11,112</span> AI Models already generated for <span className='text-[#AD9307]'> 66+ </span> happy customers!</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">See what their results look like below</p>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font flex">
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4 mx-2">
                        {images1.map((data) => {
                            return (
                                <div class="p-4 md:w-1/3">
                                    <div class="h-full border-opacity-60 rounded-lg overflow-hidden">
                                        <img class=" object-cover object-center" src={data.img} alt="blog" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div class="container px-5 py-10 mx-auto">
                    <div class="flex flex-wrap -m-4 mx-2">
                        {images2.map((data) => {
                            return (
                                <div class="p-4 md:w-1/3">
                                    <div class="h-full border-opacity-60 rounded-lg overflow-hidden">
                                        <img class=" object-cover object-center" src={data.img} alt="blog" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


            </section>
            <div className='my-2'>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">None of the images are real. All of them are the creation of Model Verse</p>
            </div>

            <div className="marquee">
                <div className="maylike-products-container track">
                    {imagecarousel.map((item) => (
                        <div>
                            <img src={item.img} />
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Main
