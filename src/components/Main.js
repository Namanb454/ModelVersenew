import React, { useState } from 'react'
import { MdArrowForward } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { HowItWorks } from '../content/Main'
import { pricing } from '../content/Main'
import { location } from '../content/Main'
import { questions } from '../content/Main'
// import { MdDoneAll } from 'react-icons/md';

function Main() {

    const [visible, setVisible] = React.useState(false)
    const [visible1, setVisible1] = React.useState(false)

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
            <section class="text-gray-600 body-font bg-[#efeded] overflow-hidden">
                <div class="container px-5 py-24 mx-auto">

                    <div class="flex flex-wrap mx-10">
                        <h2 class="text-3xl font-semibold text-left my-5 title-font text-[#21B8B9] tracking-widest">How it works?</h2>
                        <h1 class="text-[#18347B] text-4xl text-left my-5 title-font font-bold mb-4">The quickest and simplest way to get a professional model Photoshoot </h1>

                        <div className='my-5'>
                            {HowItWorks.map((data) => {
                                return (
                                    <div class="lg:w-full w-full lg:py- mb-6 lg:mb-0">
                                        <div className='flex mx-auto'>
                                            <div className={`lg:w-[65%] ${visible1 ? 'heading-visible1' : 'heading-hidden'}`}>
                                                <div className='px-5 flex'>

                                                    <h2 className='text-black text-3xl text-left title-font font-semibold mb-4'>{data.heading}</h2>
                                                    <button className='ml-auto' onClick={() => setVisible1(!visible1)}>
                                                        {visible1 ? <RxCross2 /> : <AiOutlinePlus />}
                                                    </button>
                                                </div>
                                                <style>{`

            .element-visible1 { display: block }
            .element-hidden { display: none }

            .heading-visible1 {width: 65%}
            .heading-hidden {width: 59vw}

      `}</style>
                                                <p class={`w-[90%] leading-relaxed mb-4 px-5 text-xl text-justify ${visible1 ? 'element-visible1' : 'element-hidden'}`}>{data.desc}</p>
                                            </div>
                                            <div className='flex ml-auto'>
                                                <img alt="ecommerce" class={`lg:w- mx-10 ml-auto w-40 lg:h-72 h-64 object-cover object-center rounded ${visible1 ? 'element-visible1' : 'element-hidden'}`} src={data.img1} />
                                                <img alt="ecommerce" class={`lg:w- mx-10 ml-auto w-40 lg:h-72 h-64 object-cover object-center rounded ${visible1 ? 'element-visible1' : 'element-hidden'}`} src={data.img2} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </section>



            {/* Location  */}
            <section class="body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full">
                        <h2 class="sm:text-3xl text-3xl font-semibold title-font mb-10 text-[#2F1F94]">Location & Backdrop</h2>
                        <h1 class="lg:w-[70%] mx-auto sm:text-5xl text-3xl font-bold title-font mb-5 text-[#3F3503]">
                            Choose from a wide range of locations and studio backdrop</h1>

                    </div>

                    <section class="text-gray-600 body-font">
                        <div class="container px-5 pt-24 mx-auto">

                            <div class="flex flex-wrap -m-4">
                                {location.map((data) => {
                                    return (
                                        <div class="xl:w-1/5 md:w-1/2 p-">
                                            <div class="p-6 rounded-lg">
                                                <img class="h-[45vh] rounded w-full object-cover object-center mb-6" src={data.img} alt="content" />

                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </section>
                </div>
            </section>


            {/* Pricing */}
            <section class="bg-[#efeded] body-font overflow-hidden">
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



                                <div class="p-4 xl:w-1/4 md:w-1/2 w-full mx-auto ">
                                    <div class="bg-white h-full p-6 rounded-lg py-10 shadow-md shadow-gray-600 hover:border-[#6A0202] border-2 flex flex-col relative overflow-hidden">
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


            {/* Questions and answer */}
            <section class="text-gray-600 body-font">
                <div class="container px-10 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 lg:px-10 rounded-lg overflow-hidden">
                        <h1 className='lg:text-6xl text-left text-[#6A0202] '>Frequently Asked Questions</h1>
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-0 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            {/* {(const [visible, setVisible] = React.useState(false))} */}
                            {questions.map((data) => {
                                return (
                                    <div class="flex-grow w-full mb-5">
                                        <div className='w-full flex items-center mb-3'>
                                            <h2 class="text-gray-900 text-lg title-font font-semibold">{data.ques}</h2>
                                            {/* const [visible, setVisible] = React.useState(false) */}
                                            <button className='ml-auto' onClick={() => setVisible(!visible)}>
                                                {visible ? <RxCross2 /> : <AiOutlinePlus />}

                                            </button>

                                            {/* <AiOutlinePlus className='ml-auto' onClick={onClick} /> */}
                                        </div>
                                        <style>{`

            .element-visible { display: block }
            .element-hidden { display: none }

      `}</style>

                                        <p class={`w-[80%] leading-relaxed text-base text-justify ${visible ? 'element-visible' : 'element-hidden'} `}>{data.ans}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>



            {/* Poster  */}
            <section class="text-gray-600 body-font bg-[#537FEF] mx-20 rounded-3xl">
                <div class="container mx-auto flex px-20 my-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 font-bold text-white">Get Your Models</h1>
                        <p class="mb-8 leading-relaxed text-xl text-justify text-[#FFF5F5]">Just a few clicks away are your professional studio-like images and models. Don't miss out on the opportunity to showcase your garment's best image with AI-generated models!</p>
                        <div class="flex w-full md:justify-start justify-center items-end">

                            <button class="w-[30%] flex items-center mt-auto bg-[#001D66] hover:bg-white text-white hover:text-[#001D66] hover:font-semibold py-2 px-5 focus:outline-none rounded">Get your models
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div class="">
                        <img class="object-cover mx-auto object-center rounded" alt="hero" src="models/posterimg.png" />
                    </div>
                </div>
            </section>

            <div className='my-24'>
                <img src='footerimg.png' />
            </div>


            {/* Footer  */}
            <footer class="body-font bg-[#efeded]">
                <div class="container px-10 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a href='/' class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <span class="text-3xl text-black font-bold">Model Verse</span>
                        </a>
                        <p class="mt-2 text-sm text-black text-justify">Professional Model Catalogs, without physical studio Photoshoot</p>
                        <p class="mt-2 text-sm text-black text-justify">© Copyright 2023 All Rights Reserved by Jumbla Creations PTE LTD.</p>
                    </div>
                    <div class="flex-grow flex flex-wrap md:px-24 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">

                            <nav class="list-none my-14">
                                <li className='my-5'>
                                    <a class="text-black hover:text-gray-800">Refund</a>
                                </li>
                                <li className='my-5'>
                                    <a class="text-black hover:text-gray-800">Terms & Conditions</a>
                                </li>
                                <li className='my-5'>
                                    <a class="text-black hover:text-gray-800">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">

                            <nav class="list-none my-14">
                                <li className='my-5'>
                                    <a class="text-black hover:text-gray-800">FAQ’s</a>
                                </li>
                                <li className='my-5'>
                                    <a class="text-black hover:text-gray-800">Examples</a>
                                </li>
                                <li className='my-5'>
                                    <a class="text-black hover:text-gray-800">Get Started</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/3 md:w-1/2 w-full px-4">
                            <h2 class="w-full title-font font-bold text-black tracking-widest text-3xl mb-3">Get In Touch</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <input class="text-black py-1 bg-[#D9D9D9] my-2 px-3" placeholder='Enter Your Name' />
                                </li>
                                <li>
                                    <input class="text-black py-1 bg-[#D9D9D9] my-2 px-3" placeholder='Enter Your Contact Info.' />
                                </li>
                                <li className='flex'>
                                    <input class="text-black py-1 bg-[#D9D9D9] my-2 px-3" placeholder='Enter Your Message' />
                                    <button className='bg-[#001D66] px-4 mx-3 my-2 rounded-md text-white text-sm'>
                                        Submit
                                    </button>
                                </li>
                                <li>
                                    <a class="text-gray-600 text-xs hover:text-gray-800">or email us at contact@modelverse.in</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>

            </footer>



        </div>
    )
}

export default Main
