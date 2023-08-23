import React from 'react'
import { MdArrowForward } from 'react-icons/md';
import { HowItWorks } from '../content/Main'
import { pricing } from '../content/Main'
// import { MdDoneAll } from 'react-icons/md';

function Main() {
    const icons = [
        {
            "icon": "uploadicon.png",
            "position": "First:",
            "desc": "Upload Raw Images"
        },
        {
            "icon": "starsicon.png",
            "position": "Second:",
            "desc": "Our AI starts it’s work"
        },
        {
            "icon": "ellipseicon.png",
            "position": "Third:",
            "desc": "Download your models"
        }

    ]
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
        { "img": "models/img23.png" },
        { "img": "models/img12.png" },
        { "img": "models/img22.png" },
        { "img": "models/img13.png" },
        { "img": "models/img14.png" },
        { "img": "models/img15.png" },
        { "img": "models/img16.png" },
        { "img": "models/img17.png" },
        { "img": "models/img18.png" },
        { "img": "models/img19.png" },
        { "img": "models/img20.png" },
        { "img": "models/img21.png" },
    ]
    return (
        <div>

            <div>
                <div className='relative'>
                    <img className='opacity-50' src='bg1.png' />
                </div>

                <section class="absolute lg:top-32 top-12 text-gray-600 w-full body-font">
                    <div class="container lg:px-5 lg:py-24 py-10">
                        <div class="flex flex-col text-center w-full mb-10">
                            <h1 class="lg:w-[60%] mx-auto lg:text-4xl text-xl font-semibold title-font mb-2 text-[#072C81]">Professional Model Catalogs, </h1>
                            <span className='lg:w-[70%] mx-auto lg:text-4xl text-xl font-semibold title-font text-[#072C81]'>without physical studio photoshoot</span>
                            <p class="lg:w-2/3 mx-auto leading-relaxed my-5 font-semibold text-black lg:text-lg text-sm">No.1 Professional AI Model Catalog Generator</p>
                            <p class="lg:w-[40%] mx-auto leading-relaxed text-xs">Get on-model images of your garments in minutes with our AI-</p>
                            <p class="lg:w-[45%] mx-auto leading-relaxed text-xs">photographer. Upload photos, pick style & receive 100+ On-Model Images</p>
                        </div>

                        <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className='mx-auto'>
                                <button class="text-white bg-[#F33737] border-[1px] border-[#F33737] lg:py-2 py-1 lg:mx-8 mx-2 lg:px-8 px-4 focus:outline-none hover:bg-white hover:text-[#F33737] hover:border-[#F33737]  rounded text-xs">Get Your Models</button>
                                <button class="text-black bg-white lg:py-2 py-1 lg:mx-8 mx-2 lg:px-8 px-4 border-[1px] border-black focus:outline-none hover:bg-black hover:text-white rounded text-xs">Register as team</button>
                            </div>
                        </div>
                        <div className='flex my-10'>
                            <p class="flex items-center lg:w-fit mx-auto leading-relaxed text-black text-base"><span className='font-semibold'>1835+</span> AI models already created
                                <img className='h-5' src='stars.png' alt='images' />
                            </p>
                        </div>

                        <div class="container lg:w-[80%] px-5 py-5 mx-auto bg-[#F8F7F7] border-[1px] border-black rounded-md shadow-sm shadow-black">
                            <div class="lg:flex lg:flex-wrap sm:-m-4 mx-auto md:space-y-0 space-y-6">

                                {icons.map((data) => {
                                    return (
                                        <div class="lg:p-4 lg:w-1/4 lg:flex items-center lg:mx-auto mx-3">
                                            <div class="lg:w-12 w-10 lg:h-12 h-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                                <img src={data.icon} />
                                            </div>
                                            <div class="flex-grow lg:text-start">
                                                <h2 class="text-gray-900 lg:text-lg text-sm title-font font-semibold">{data.position}</h2>
                                                <p class="leading-relaxed lg:text-base text-xs">{data.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* <section class="absolute text-gray-600 body-font top-[80%]"> */}

                    {/* </section> */}

                </section>
            </div>


            <section class="text-gray-600 body-font lg:my-0 mt-[70%]">
                <div class="container py-10 mx-auto">

                    <div class="flex flex-wrap bg-[#C3CFED] lg:py-20 pt-[100%]">

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

            {/* 11,112 AI Models already generated */}
            {/* for 66+ happy customers! */}
            <section class="text-gray-600 body-font mt-10">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-col text-center w-full mb-0">
                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900"><span className='text-[#21B8B9]'>11,112</span> AI Models already generated for <span className='text-[#AD9307]'> 66+ </span> happy customers!</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">See what their results look like below</p>
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font flex">
                <div class="container px-5 py- mx-auto">
                    <div className='my- flex items-center'>
                        <img className='w-[5%]' src='models/img1_1.png' />
                        <img className='h-[5vh]' src='models/forwardarrow.png' />
                    </div>
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
                <div class="container px-5 py- mx-auto">
                    <div className='my- flex'>
                        <img className='ml-auto h-[5vh]' src='models/backwardarrow.png' />
                        <img className='w-[5%]' src='models/img4_1.png' />
                    </div>
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

            {/* <div className="marquee">
                <div className="maylike-products-container track">
                    {imagecarousel.map((item) => (
                        <div>
                            <img src={item.img} />
                        </div>
                    ))}
                </div>
            </div> */}

            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {imagecarousel.map((item) => (
                            <div class="lg:w-[11%] md:w-1/2 p-4 w-full mx-auto">
                                <div class="block relative lg:h-[30vh] rounded overflow-hidden">
                                    <img alt="models" class="object-center lg:w-[30vw] w-full lg:h-[25vh] block" src={item.img} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* How it works? */}
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">

                    <div class="flex flex-wrap mx-10">
                        <h2 class="text-3xl font-semibold text-left title-font text-[#21B8B9] tracking-widest">How it works?</h2>
                        <h1 class="text-[#18347B] text-4xl text-left title-font font-bold mb-4">The quickest and simplest way to get a professional model Photoshoot </h1>

                        {HowItWorks.map((data) => {
                            return (
                                <div class="lg:w-full w-full lg:py-6 mb-6 lg:mb-0">
                                    <div className='flex mx-auto'>
                                        <div className='lg:w-[65%] mx-5'>
                                            <h2 className='text-black text-3xl text-left title-font font-semibold mb-4'>{data.heading}</h2>
                                            <p class="leading-relaxed mb-4 text-xl text-justify">{data.desc}</p>
                                        </div>
                                        <div className='flex ml-auto'>
                                            <img alt="ecommerce" class="lg:w- mx-10 ml-auto w-40 lg:h-72 h-64 object-cover object-center rounded" src={data.img1} />
                                            <img alt="ecommerce" class="lg:w- mx-10 ml-auto w-40 lg:h-72 h-64 object-cover object-center rounded" src={data.img2} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>



            {/* Pricing */}
            <section class="bg-gray-100 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full">
                        <h2 class="sm:text-3xl text-3xl font-semibold title-font mb-10 text-[#2F1F94]">Pricing</h2>
                        <h1 class="lg:w-[70%] mx-auto sm:text-5xl text-3xl font-bold title-font mb-5 text-[#3F3503]">
                            Model Catalog Photo Shoot for 50x cheaper than Physical shoot</h1>
                        <p class="lg:w-[50%] mx-auto leading-relaxed text-base text-black">Our affordable pricing makes it possible for small and large businesses to get high-quality professional on-model images  for their garments</p>

                    </div>
                    <div className='flex items-center mb-10'>
                        <img className='h-[10vh]' src='models/forwardarrow.png' alt='images' />
                        <img className='h-[10vh] ml-auto' src='models/backwardarrow.png' alt='images' />
                    </div>
                    <div class="flex flex-wrap -m-4">


                        {pricing.map((data) => {
                            return (



                                <div class="p-4 xl:w-1/4 md:w-1/2 w-full mx-auto">
                                    <div class="h-full p-6 rounded-lg py-10 shadow-md shadow-gray-600 hover:border-[#6A0202] border-2 flex flex-col relative overflow-hidden">
                                        <h1 class="text-7xl mx-auto text-[#6A0202] leading-none flex items-end pb-4 mb-4 border-b border-gray-200">
                                            <span>{data.price}</span>
                                            <span class="text-xl ml-1 font-semibold text-[#676161]">/shoot</span>
                                        </h1>
                                        <h2 className='font-semibold text-2xl text-left text-black my-5'>includes</h2>
                                        <p class="flex items-center text-gray-600 mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                                <MdArrowForward />
                                            </span>
                                            <span className='font-bold'>{data.images}&nbsp;</span>Images
                                        </p>
                                        <p class="flex items-center text-gray-600 mb-2">
                                            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                                <MdArrowForward />
                                            </span>
                                            <span className='font-bold'>2&nbsp;</span>hour down time
                                        </p>

                                        <button class="flex items-center mt-auto text-black border-2 border-[#6A0202] hover:text-white hover:bg-[#6A0202] py-2 px-4 w-full focus:outline-none rounded">Get your models
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>





        </div>
    )
}

export default Main
