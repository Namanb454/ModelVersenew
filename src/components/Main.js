import React, { useState, useContext } from 'react'
import styled, { keyframes, css } from "styled-components";
import { MdArrowForward } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { HowItWorks } from '../content/Main'
// import { pricing } from '../content/Main'
import { location } from '../content/Main'
import { questions } from '../content/Main'
// import { MdDoneAll } from 'react-icons/md';

function Main() {

    const row1 = [
        "models/img7.png",
        "models/img8.png",
        "models/img9.png",
        "models/img10.png",
        "models/img35.png",
        "models/img23.png",
        "models/img11.png",
        "models/img22.png",
        "models/img12.png",
    ];
    const row2 = [
        "models/img7.png",
        "models/img8.png",
        "models/img9.png",
        "models/img10.png",
        "models/img35.png",
        "models/img23.png",
        "models/img11.png",
        "models/img22.png",
        "models/img12.png",
        //    "models/img7.png",
    ];

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
            "icon": "downloadicon.png",
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

    const bg1 = [
        "footerimg.png"
    ];
    const bg2 = [
        "footerimg.png"
    ]

    const HowItWorks1 = [
        "models/img24.png",
        "models/img26.png",
        "models/img24.png",
        "models/img28.png",
    ];
    const HowItWorks2 = [
        "models/img26.png",
        "models/img24.png",
        "models/img28.png",
        "models/img24.png",
    ];
    const HowItWorks3 = [
        "models/img27.png",
        "models/img25.png",
        "models/img29.png",
        "models/img25.png",
    ];
    const HowItWorks4 = [
        "models/img27.png",
        "models/img25.png",
        "models/img29.png",
        "models/img25.png",
    ];


    return (
        <div className='tracking-wide'>
            <div>

                <div className=' w-full naman'>
                    {/* <img src='footerimg.png' /> */}
                    <AppContainerbg className='lg:h-[100vh] '>
                        <Wrapperbg className=''>
                            <Marqueebg className=''>
                                <MarqueeGroupbg className='MarqueeGroup'>

                                    <ImageGroupbg className='ImageGroup '>
                                        <Imagebg src="footerimg.png" className='' />
                                    </ImageGroupbg>
                                </MarqueeGroupbg>
                                <MarqueeGroupbg className='MarqueeGroup'>

                                    <ImageGroupbg className='ImageGroup'>
                                        <Imagebg src="footerimg.png" className='Image' />
                                    </ImageGroupbg>

                                </MarqueeGroupbg>
                            </Marqueebg>
                        </Wrapperbg>
                    </AppContainerbg>
                </div>

                <section className="absolute  lg:top-32 top-12 body-font w-full ">

                    <div className="container  lg:px-0 lg:mt-10 lg:py-10 mt-10 text-opacity-100 mx-auto lg:w-[75%]">

                        <div className="flex flex-col text-center w-full lg:mb-10 mb-5 ">
                            <h1 className="lg:w-[60%] mx-auto lg:text-4xl text-base font-bold title-font lg:mb-2 lg:mt-0 mt-3 text-[#072C81]">Professional Model Catalogs, </h1>
                            <span className='lg:w-[70%] mx-auto lg:text-4xl text-base font-bold title-font text-[#072C81]'>without physical studio photoshoot</span>
                            <p className="lg:w-2/3 mx-auto leading-relaxed lg:my-5 my-5 font-semibold text-black lg:text-lg text-xs">No.1 Professional AI Model Catalog Generator</p>
                            <p className="lg:w-[40%] mx-auto leading-relaxed lg:font-medium font-medium lg:text-xs text-[10px]">Get on-model images of your garments in minutes with our AI-</p>
                            <p className="lg:w-[45%] mx-auto leading-relaxed lg:font-medium font-medium lg:text-xs text-[10px]">photographer. Upload photos, pick style & receive 100+ On-Model Images</p>
                        </div>

                        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                            <div className='mx-auto'>
                                <button className="text-white bg-[#F33737] border-[1px] border-[#F33737] lg:py-2 py-1 lg:mx-8 mx-2 lg:px-8 px-4 focus:outline-none hover:bg-white hover:text-[#F33737] hover:border-[#F33737]  rounded text-xs">Get Your Models</button>
                                <button className="text-black bg-white lg:py-2 py-1 lg:mx-8 mx-2 lg:px-8 px-4 border-[1px] border-black focus:outline-none hover:bg-black hover:text-white rounded text-xs">Register as team</button>
                            </div>
                        </div>
                        <div className='flex my-10'>
                            <p className="flex lg:text-base text-sm items-center lg:w-fit mx-auto leading-relaxed text-black"><span className='font-semibold'>1835+</span> AI models already created
                                <img className='h-5' src='stars.png' alt='images' />
                            </p>
                        </div>

                        <div className="container lg:w-[100%] px-5 py-5 mx-auto bg-[#F8F7F7] border-[1px] border-black rounded-md shadow-sm shadow-black">
                            <div className="lg:flex lg:flex-wrap sm:-m-4 mx-auto md:space-y-0 space-y-6">

                                <div className="lg:p-4 lg:w-1/4 lg:flex items-center lg:mx-auto mx-3">
                                    <div className="lg:w-12 w-10 bg-[#F9EBA3] border-[1px] border-black lg:h-12 h-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img src='uploadicon.png' />
                                    </div>
                                    <div className="flex-grow lg:text-start">
                                        <h2 className="text-gray-900 lg:text-lg text-sm title-font font-semibold">First:</h2>
                                        <p className="leading-relaxed lg:text-base text-xs">Upload Raw Images</p>
                                    </div>
                                </div>

                                <div className="lg:flex lg:w-20 hidden items-center lg:mx-auto mx-3">
                                    <div className="lg:w-20 w-0 lg:h-12 h-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img src='arrow1.png' />
                                    </div>
                                </div>
                                <div className="lg:p-4 lg:w-1/4 lg:flex items-center lg:mx-auto mx-3">
                                    <div className="lg:w-12 w-10 lg:h-12 h-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img src='starsicon.png' />
                                    </div>
                                    <div className="flex-grow lg:text-start">
                                        <h2 className="text-gray-900 lg:text-lg text-sm title-font font-semibold">Second:</h2>
                                        <p className="leading-relaxed lg:text-base text-xs">Our AI starts it’s work</p>
                                    </div>
                                </div>
                                <div className="lg:w-20 hidden lg:flex items-center lg:mx-auto mx-3">
                                    <div className="lg:w-20 lg:h-12 h-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img src='arrow2.png' />
                                    </div>
                                </div>

                                <div className="lg:p-4 lg:w-1/4 lg:flex items-center lg:mx-auto mx-3">
                                    <div className="lg:w-12 w-10 bg-[#F9EBA3] border-[1px] border-black lg:h-12 h-10 inline-flex items-center justify-center rounded-full flex-shrink-0">
                                        <img src='downloadicon.png' />
                                    </div>
                                    <div className="flex-grow lg:text-start">
                                        <h2 className="text-gray-900 lg:text-lg text-sm title-font font-semibold">Third:</h2>
                                        <p className="leading-relaxed lg:text-base text-xs">Download your models</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>



            <section className="text-black body-font lg:my-0 mt-[60%] w-full bg-[#C3CFED]">
                <div className="container w-[100%] mx-auto">

                    <div className="flex flex-wrap lg:py-20 pt-[90%]">

                        <div className="xl:w-1/3 lg:w-1/2 md:w-full w-[90%] mx-auto px-8 py-6 lg:border-l-2 border-gray-200 border-opacity-60">
                            <h2 className="text-lg sm:text-xl w-fit lg:mx-4 text-black text-left font-semibold title-font mb-2">All Model Photoshoots include</h2>
                            <div className="lg:mx-4 py-4 w-[90%] lg:text-base text-sm">
                                <nav className="flex flex-col sm:items-start sm:text-left text-justify items-left -mb-1 space-y-2.5">
                                    <span>
                                        <span className="bg-transparent text-black border-black border-[1.8px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>HD Quality Images
                                    </span>
                                    <span>
                                        <span className="bg-transparent text-black border-black border-[1.8px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>30+ Unique Location & Models
                                    </span>
                                    <span>
                                        <span className="bg-transparent text-black border-black border-[1.8px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>Wide Variety of Locations & Skin Tones
                                    </span>
                                </nav>
                            </div>
                        </div>

                        <div className="xl:w-1/3 lg:w-1/2 md:w-full w-[90%] mx-auto lg:px-8 py-6 lg:border-l-2 border-[#5B85EF] border-opacity-60">
                            <h1 className="text-5xl text-black leading-none mx-auto flex items-center  mb-4 ">
                                <span className='text-[#001D66] lg:text-left lg:mx-0 mx-auto'>$19</span>
                                <span className="lg:text-base text-sm lg:ml-auto lg:mx-0 mx-auto font-normal text-black">starting at per catalog</span>
                            </h1>
                            <h1 className="text-5xl text-gray-900 leading-none  flex items-center mb-4 ">
                                <span className='text-[#001D66] lg:text-right lg:ml-0 ml-auto'>3</span>
                                <span className='text-[#001D66] text-lg lg:mr-0 mr-auto'>hrs</span>
                                <span className="lg:text-base text-sm lg:ml-auto lg:mx-0 mx-auto font-normal text-black">fastest turn around</span>
                            </h1>
                        </div>

                        <div className="xl:w-1/3 lg:w-1/2 md:w-full w-[90%] py-6 mx-auto lg:border-l-2 border-[#5B85EF] border-opacity-60">
                            <div>
                                <h2 className="text-lg sm:text-xl lg:mx-4 mx-auto w-fit text-gray-900 text-left font-semibold title-font mb-2">Why choose AI Photoshoot?</h2>
                                <div className="lg:mx-4 py-4 mx-auto w-[90%]">
                                    <nav className="lg:text-base text-sm flex flex-col sm:items-start sm:text-left text-justify items-start -mb-1 space-y-2.5">
                                        <span>
                                            <span className="bg-transparent text-black border-black border-[1.8px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Can’t be distinguished from real photos
                                        </span>
                                        <span>
                                            <span className="bg-transparent text-black border-black border-[1.8px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>No need for physical shoots
                                        </span>
                                        <span>
                                            <span className="bg-transparent text-gray-700 border-black border-[1.8px] w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                    <path d="M20 6L9 17l-5-5"></path>
                                                </svg>
                                            </span>Different Location, Different Model, Same Garment, Anytime, Anywhere
                                        </span>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11,112 AI Models already generated */}
            {/* for 66+ happy customers! */}
            <section id='styles' className=" body-font mt-10">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-0">
                        <h1 className="lg:w-[70%] mx-auto sm:text-5xl text-lg font-bold title-font mb-4 text-gray-900"><span className='text-[#21B8B9]'>11,112</span> AI Models already generated for <span className='text-[#AD9307]'> 66+ </span> happy customers!</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed lg:text-base text-sm">See what their results look like below</p>
                    </div>
                </div>
            </section>

            <section className=" body-font flex">
                <div className="container px-5 mx-auto">
                    <div className='mb-5 flex items-center'>
                        <img className='lg:w-[5%] w-[20%]' src='models/img1_1.png' />
                        <img className='lg:h-[5vh] h-[3vh]' src='models/forwardarrow.png' />
                    </div>
                    <div className="flex flex-wrap -m-4 mx-2">
                        {images1.map((data) => {
                            return (
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                                        <img className=" object-cover object-center" src={data.img} alt="blog" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container px-5 mx-auto">
                    <div className='mb-5 flex'>
                        <img className='ml-auto lg:h-[5vh] h-[3vh]' src='models/backwardarrow.png' />
                        <img className='lg:w-[5%] w-[20%]' src='models/img4_1.png' />
                    </div>
                    <div className="flex flex-wrap -m-4 mx-2">
                        {images2.map((data) => {
                            return (
                                <div className="p-4 md:w-1/3">
                                    <div className="h-full border-opacity-60 rounded-lg overflow-hidden">
                                        <img className=" object-cover object-center" src={data.img} alt="blog" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>


            </section>
            <div className='my-2'>
                <p className="lg:w-2/3 w-full px-10 mx-auto leading-relaxed lg:text-base text-sm">None of the images are real. All of them are the creation of Model Verse</p>
            </div>

            <section className=" body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {imagecarousel.map((item) => (
                            <div className="lg:w-[11%] md:w-1/6 md:p-3 w-1/3 lg:p-4 p-2 mx-auto">
                                <div className="block relative lg:h-[30vh] h-full rounded overflow-hidden">
                                    <img alt="models" className="object-center lg:w-[30vw] lg:h-[25vh] h-[100%] block" src={item.img} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <AppContainer className='lg:h-[40vh] h-[20vh]'>
                <Wrapper className='Wrapper'>
                    <Marquee className='Marquee'>
                        <MarqueeGroup className='MarqueeGroup'>
                            {row1.map((el) => (
                                <ImageGroup className='ImageGroup'>
                                    <Image src={el} className='' />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                        <MarqueeGroup className='MarqueeGroup'>
                            {row2.map((el1) => (
                                <ImageGroup className='ImageGroup'>
                                    <Image src={el1} className='Image' />
                                </ImageGroup>
                            ))}
                        </MarqueeGroup>
                    </Marquee>
                </Wrapper>
            </AppContainer>



            {/* How it works? */}
            <section id='howitworks' className=" body-font bg-[#efeded] my-10 overflow-hidden">
                <div className="container lg:py-10 py-5 mx-auto">

                    <div className="flex flex-wrap lg:px-20 px-5">
                        <div className='w-full'>
                            <h2 className="lg:text-3xl text-base font-semibold text-left lg:my-5 title-font text-[#21B8B9] tracking-widest">How it works?</h2>

                            <div className='lg:w-[60%] lg:h-[60vh]'>

                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LZbA45ZZE-c?si=JwIvDPVIisDFScBS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>

                        <h1 className="text-[#18347B] lg:text-4xl text-xl text-left my-5 title-font font-bold lg:mb-4 mb-0">The quickest and simplest way to get a professional model Photoshoot </h1>



                        <div className='my-5 lg:w-1/2 w-full'>
                            {HowItWorks.map((data) => {
                                return (
                                    <div className="w-full my-5 lg:my-5">
                                        <div className='flex mx-auto'>
                                            <div className={`lg:w-full w-full ${visible1 ? 'heading-visible1' : 'heading-hidden'}`}>
                                                <div className='px-5 w-[100%] items-center flex'>

                                                    <h2 className='text-black lg:text-2xl text-sm text-left title-font font-semibold'>{data.heading}</h2>
                                                    <button className='ml-auto' onClick={() => setVisible1(!visible1)}>
                                                        {visible1 ? <RxCross2 /> : <AiOutlinePlus />}
                                                    </button>
                                                </div>
                                                <style>{`
            .element-visible1 { display: block }
            .element-hidden { display: none }
      `}</style>
                                                <p className={`w-[90%] leading-relaxed mb-4 px-5 lg:text-xl text-sm text-justify ${visible1 ? 'element-visible1' : 'element-hidden'}`}>{data.desc}</p>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>


                        <div className='lg:w-1/2 w-full flex lg:my-0 my-10 lg:px-20'>
                            <AppContainerbghwt1 className='lg:h-[100vh]'>
                                <Wrapperbghwt1 className='Wrapper '>
                                    <Marqueebghwt1 className='Marquee'>
                                        <MarqueeGroupbghwt1 className='MarqueeGroup'>
                                            {HowItWorks1.map((el) => (
                                                <ImageGroupbghwt1 className='w-fit'>
                                                    <Imagebghwt1 src={el} className='mx-auto' />
                                                </ImageGroupbghwt1>
                                            ))}
                                        </MarqueeGroupbghwt1>
                                        <MarqueeGroupbghwt1 className='MarqueeGroup'>
                                            {HowItWorks2.map((el1) => (
                                                <ImageGroupbghwt1 className='w-fit'>
                                                    <Imagebghwt1 src={el1} className=' mx-auto' />
                                                </ImageGroupbghwt1>
                                            ))}
                                        </MarqueeGroupbghwt1>
                                    </Marqueebghwt1>
                                </Wrapperbghwt1>
                            </AppContainerbghwt1>

                            <AppContainerbghwt2 className='lg:h-[100vh]'>
                                <Wrapperbghwt2 className='Wrapper '>
                                    <Marqueebghwt2 className='Marquee'>
                                        <MarqueeGroupbghwt2 className='MarqueeGroup'>
                                            {HowItWorks4.map((el) => (
                                                <ImageGroupbghwt2 className='w-fit '>
                                                    <Imagebghwt2 src={el} className='mx-auto' />
                                                </ImageGroupbghwt2>
                                            ))}
                                        </MarqueeGroupbghwt2>
                                        <MarqueeGroupbghwt2 className='MarqueeGroup'>
                                            {HowItWorks3.map((el1) => (
                                                <ImageGroupbghwt2 className='w-fit'>
                                                    <Imagebghwt2 src={el1} className='mx-auto' />
                                                </ImageGroupbghwt2>
                                            ))}
                                        </MarqueeGroupbghwt2>
                                    </Marqueebghwt2>
                                </Wrapperbghwt2>
                            </AppContainerbghwt2>

                        </div>
                    </div>
                </div>
            </section>


            {/* Location  */}
            <section id='nearme' className="body-font overflow-hidden">
                <div className="container lg:px-5 px-0 lg:py-10 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h2 className="lg:text-3xl text-xl font-semibold title-font lg:mb-10 mb-5 text-[#2F1F94]">Location & Backdrop</h2>
                        <h1 className="lg:w-[70%] mx-auto lg:text-5xl text-[23px] font-bold title-font mb-5 text-[#3F3503]">
                            Choose from a wide range of locations and studio backdrop</h1>

                    </div>

                    <section className=" body-font">
                        <div className="container px-5 lg:pt-24 pt-10 mx-auto">

                            <div className="flex flex-wrap -m-4">
                                {location.map((data) => {
                                    return (
                                        <div className="xl:w-1/5 w-1/2 md:w-1/2 p-">
                                            <div className="lg:p-6 p-3 mx-auto rounded-lg">
                                                <img className="lg:h-[45vh] h-full rounded w-full object-cover object-center mb-" src={data.img} alt="content" />

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
            <section id='pricing' className="bg-[#efeded] body-font overflow-hidden">
                <div className="container lg:px-5 px-0 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full lg:mb-20 mb-10">
                        <h2 className="lg:text-3xl text-xl font-semibold title-font lg:mb-10 mb-5 text-[#2F1F94]">Pricing</h2>
                        <h1 className="lg:w-[60%] mx-auto lg:text-5xl text-[23px] font-bold title-font mb-5 text-[#3F3503]">
                            Model Catalog Photo Shoot for 50x cheaper than Physical shoot</h1>
                        <p className="lg:w-[50%] mx-auto leading-relaxed lg:text-base text-[11px] lg:px-10 px-2 text-black">Our affordable pricing makes it possible for small and large businesses to get high-quality professional on-model images  for their garments</p>

                    </div>

                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 xl:w-1/4 lg:h-[75vh] md:w-1/2 w-[85%] mx-auto ">
                            <div className="bg-white h-full p-6 rounded-lg py-10 shadow-md shadow-gray-600 hover:border-[#6A0202] border-2 flex flex-col relative overflow-hidden">
                                <h1 className="text-7xl mx-auto text-[#6A0202] leading-none flex items-end pb-4 mb-4 border-b border-gray-200">
                                    <span>$19</span>
                                    <span className="text-xl ml-1 font-semibold text-[#676161]">/shoot</span>
                                </h1>
                                <h2 className='font-semibold text-2xl text-left text-black my-5'>includes</h2>
                                <p className="flex items-center  mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        <MdArrowForward />
                                    </span>
                                    <span className='font-bold'>50&nbsp;</span>Images
                                </p>
                                <p className="flex items-center  mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        <MdArrowForward />
                                    </span>
                                    <span className='font-bold'>2&nbsp;</span>hour processing time
                                </p>

                                <button className="flex items-center mt-auto text-black border-2 border-[#6A0202] hover:text-white hover:bg-[#6A0202] py-2 px-4 w-full focus:outline-none rounded">Get your models
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>


                        <div className="p-4 xl:w-1/4 lg:h-[75vh] md:w-1/2 w-[85%] mx-auto ">
                            <div className="bg-white h-full p-6 rounded-lg py-10 shadow-md shadow-gray-600 border-[#6A0202] border-2 flex flex-col relative overflow-hidden">
                                <h1 className="text-7xl mx-auto text-[#6A0202] leading-none flex items-end pb-4 mb-4 border-b border-gray-200">
                                    <span>$29</span>
                                    <span className="text-xl ml-1 font-semibold text-[#676161]">/shoot</span>
                                </h1>
                                <h2 className='font-semibold text-2xl text-left text-black my-5'>includes</h2>
                                <p className="flex items-center  mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        <MdArrowForward />
                                    </span>
                                    <span className='font-bold'>110&nbsp;</span>Images
                                </p>
                                <p className="flex items-center  mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        <MdArrowForward />
                                    </span>
                                    <span className='font-bold'>2&nbsp;</span>hour processing time
                                </p>

                                <button className="flex items-center mt-auto border-2 border-[#6A0202] text-white bg-[#6A0202] py-2 px-4 w-full focus:outline-none rounded">Get your models
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>


                        <div className="p-4 xl:w-1/4 lg:h-[75vh] md:w-1/2 w-[85%] mx-auto ">
                            <div className="bg-white h-full p-6 rounded-lg py-10 shadow-md shadow-gray-600 hover:border-[#6A0202] border-2 flex flex-col relative overflow-hidden">
                                <h1 className="text-7xl mx-auto text-[#6A0202] leading-none flex items-end pb-4 mb-4 border-b border-gray-200">
                                    <span>$49</span>
                                    <span className="text-xl ml-1 font-semibold text-[#676161]">/shoot</span>
                                </h1>
                                <h2 className='font-semibold text-2xl text-left text-black my-5'>includes</h2>
                                <p className="flex items-center  mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        <MdArrowForward />
                                    </span>
                                    <span className='font-bold'>250&nbsp;</span>Images
                                </p>
                                <p className="flex items-center  mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center text-black font-bold rounded-full flex-shrink-0">
                                        <MdArrowForward />
                                    </span>
                                    <span className='font-bold'>2&nbsp;</span>hour processing time
                                </p>

                                <button className="flex items-center mt-auto text-black border-2 border-[#6A0202] hover:text-white hover:bg-[#6A0202] py-2 px-4 w-full focus:outline-none rounded">Get your models
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>

                        </div>


                    </div>
                </div>
            </section>


            {/* Questions and answer */}
            <section className=" body-font">
                <div className="container px-10 lg:py-24 py-10 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-0 lg:mb-0 lg:px-10 rounded-lg overflow-hidden">
                        <h1 className='lg:text-6xl text-3xl text-left text-[#6A0202] '>Frequently Asked Questions</h1>
                        <p className='lg:w-[80%] my-10 lg:text-xl text-base text-left'>Answers to some commonly asked questions. Incase if you still have any query, feel free tow rite us at </p>
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-0 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            {/* {(const [visible, setVisible] = React.useState(false))} */}
                            {questions.map((data) => {
                                return (
                                    <div className="flex-grow w-full mb-5">
                                        <div className='w-full flex items-center mb-3'>
                                            <h2 className="text-gray-900 lg:text-lg text-sm text-left title-font font-semibold">{data.ques}</h2>
                                            {/* const [visible, setVisible] = React.useState(false) */}
                                            <button className='ml-auto' onClick={() => setVisible(!visible)}>
                                                {visible ? <RxCross2 /> : <AiOutlinePlus />}
                                            </button>
                                        </div>
                                        <style>{`

            .element-visible { display: block }
            .element-hidden { display: none }

      `}</style>

                                        <p className={`w-[80%] leading-relaxed lg:text-base text-sm text-justify ${visible ? 'element-visible' : 'element-hidden'} `}>{data.ans}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>



            {/* Poster  */}
            <section className=" body-font bg-[#537FEF] lg:mx-20 h-full rounded-3xl">
                <div className="container mx-auto flex lg:px-20 lg:my-24 my-10 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font lg:text-6xl text-3xl lg:my-5 lg:px-0 px-10 my-10 mb-4 font-bold text-white">Get Your Models</h1>
                        <p className="mb-8 leading-relaxed lg:text-xl lg:px-0 px-5 text-base text-justify text-[#FFF5F5]">Just a few clicks away are your professional studio-like images and models. Don't miss out on the opportunity to showcase your garment's best image with AI-generated models!</p>
                        <div className="flex w-full md:justify-start justify-center items-end">

                            <button className="lg:w-[30%] w-[50%] flex items-center mt-auto bg-[#001D66] hover:bg-white text-white hover:text-[#001D66] hover:font-semibold py-2 px-5 focus:outline-none rounded">Get your models
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div className="">
                        <img className="lg:w-full w-[50%] object-cover mx-auto object-center rounded" alt="hero" src="models/posterimg.png" />
                    </div>
                </div>
            </section>

            <div className='relative w-full'>
                <AppContainerbg className='lg:h-[100vh] '>
                    <Wrapperbg className='Wrapper naman1'>
                        <Marqueebg className='Marquee'>
                            <MarqueeGroupbg className='MarqueeGroup'>
                                {bg1.map((el) => (
                                    <ImageGroupbg className='ImageGroup '>
                                        <Imagebg src={el} className='' />
                                    </ImageGroupbg>
                                ))}
                            </MarqueeGroupbg>
                            <MarqueeGroupbg className='MarqueeGroup'>
                                {bg2.map((el1) => (
                                    <ImageGroupbg className='ImageGroup'>
                                        <Imagebg src={el1} className='Image' />
                                    </ImageGroupbg>
                                ))}
                            </MarqueeGroupbg>
                        </Marqueebg>
                    </Wrapperbg>
                </AppContainerbg>
            </div>
            {/* <img src='footerimg.png' /> */}

        </div>

    )
}

export default Main


const AppContainerbg = styled.div`
  width: 98vw;
  height: ;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapperbg = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`;

const Marqueebg = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;

//   mask-image: linear-gradient(
//     to right,
//     hsl(0 0% 0% / 0),
//     hsl(0 0% 0% / 1) 10%,
//     hsl(0 0% 0% / 1) 90%,
//     hsl(0 0% 0% / 0)
//   );
`;

const scrollXbg = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const commonbg = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollXbg} 40s linear infinite;  
`;

const stylebg = {
    '@media (max-width: 600px)': {
        width: '100%',
        justify: 'space-evenly',
    },
}

const MarqueeGroupbg = styled.div`
  ${commonbg}
  ${stylebg}
`;

const ImageGroupbg = styled.div`
  display: ;
  place-items: ;
`;

const ResponsiveImagebg = {
    '@media (max-width: 600px)': {
        width: '100%',
        height: '100%',
        // padding: '0 0'
    },
}

const Image1bg = {
    width: '100vw',
    height: '100vh',
    padding: '0 '
}

const Imagebg = styled.img`
  ${Image1bg}
  ${ResponsiveImagebg}
`;



// How It Works1
const AppContainerbghwt1 = styled.div`
  width: 50%;
  height: 10vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapperbghwt1 = styled.div`
  width: 100%;
  height: 20vh;

  display: ;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Marqueebghwt1 = styled.div`
  display: ;
  overflow: hidden;
  user-select: none;

//   mask-image: linear-gradient(
//     to up,
//     hsl(0 0% 0% / 0),
//     hsl(0 0% 0% / 1) 10%,
//     hsl(0 0% 0% / 1) 90%,
//     hsl(0 0% 0% / 0)
//   );
`;

const scrollXbghwt1 = keyframes`
  from {
    bottom: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const commonbghwt1 = css`
  flex-shrink: 0;
  display: ;
  align-items: center;
  justify-content: space-evenly;
  white-space: ;
  width: 100%;
  animation: ${scrollXbghwt1} 15s linear infinite;  
`;

const stylebghwt1 = {
    '@media (max-width: 600px)': {
        width: '100%',
        justify: 'space-evenly',
    },
}

const MarqueeGroupbghwt1 = styled.div`
  ${commonbghwt1}
  ${stylebghwt1}
`;

const ImageGroupbghwt1 = styled.div`
  display: ;
  place-items: ;
`;

const ResponsiveImagebghwt1 = {
    '@media (max-width: 600px)': {
        width: '70%',
        height: 'auto',
        // padding: '0 0'
    },
}

const Image1bghwt1 = {
    width: '10vw',
    height: '35vh',
    padding: '0 '
}

const Imagebghwt1 = styled.img`
  ${Image1bghwt1}
  ${ResponsiveImagebghwt1}
`;

// How It Works2 

const AppContainerbghwt2 = styled.div`
  width: 50%;
  height: 10vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapperbghwt2 = styled.div`
  width: 100%;
  height: 20vh;

  display: ;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const Marqueebghwt2 = styled.div`
  display: ;
  overflow: hidden;
  user-select: none;

//   mask-image: linear-gradient(
//     to up,
//     hsl(0 0% 0% / 0),
//     hsl(0 0% 0% / 1) 10%,
//     hsl(0 0% 0% / 1) 90%,
//     hsl(0 0% 0% / 0)
//   );
`;

const scrollXbghwt2 = keyframes`
  from {
      transform: translateY(-100%);
    }
    to {
      top: translateY(0%);
  }
`;

const commonbghwt2 = css`
  flex-shrink: 0;
  display: ;
  align-items: center;
  justify-content: space-evenly;
  white-space: ;
  width: 100%;
  animation: ${scrollXbghwt2} 15s linear infinite;  
`;

const stylebghwt2 = {
    '@media (max-width: 600px)': {
        width: '100%',
        justify: 'space-evenly',
    },
}

const MarqueeGroupbghwt2 = styled.div`
  ${commonbghwt2}
  ${stylebghwt2}
`;

const ImageGroupbghwt2 = styled.div`
  display: ;
  place-items: ;
`;

const ResponsiveImagebghwt2 = {
    '@media (max-width: 600px)': {
        width: '70%',
        height: 'auto',
        // padding: '0 0'
    },
}

const Image1bghwt2 = {
    width: '10vw',
    height: '35vh',
    padding: '0'
}

const Imagebghwt2 = styled.img`
  ${Image1bghwt2}
  ${ResponsiveImagebghwt2}
`;







// images carousel 
const AppContainer = styled.div`
  width: 98vw;
  height: ;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 20s linear infinite;  
`;

const style = {
    '@media (max-width: 600px)': {
        width: '100%',
        justify: 'space-evenly',
    },
}

const MarqueeGroup = styled.div`
  ${common}
  ${style}
`;

const ImageGroup = styled.div`
  display: ;
  place-items: ;
`;

const ResponsiveImage = {
    '@media (max-width: 600px)': {
        width: '40vw',
        height: '10vh',
        // padding: '0 0'
    },
}

const Image1 = {
    width: '10vw',
    height: '30vh',
    padding: '0 '
}

const Image = styled.img`
  ${Image1}
  ${ResponsiveImage}
`;
