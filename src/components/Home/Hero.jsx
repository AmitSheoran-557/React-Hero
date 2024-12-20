import React from 'react'
import Input from '../../common/Input'
import Header from '../../common/Header'

const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-cover bg-center lg:pb-[202px] pb-12 bg-hero-bg'>
            <div className='max-w-[1140px] mx-auto w-full text-white'>
                <Header />
            </div>
            <div className='max-w-[1140px] lg:px-4 px-4 mx-auto w-full text-white xl:pt-24 lg:pt-20 md:pt-16 pt-12'>
                <div className='flex flex-wrap '>
                    <div className="lg:w-6/12 w-full flex flex-col max-lg:justify-center max-lg:items-center max-lg:mb-14 max-md:mb-12 xl:pt-[15px]">
                        <h1 className='mb-4 xl:text-[64px] lg:text-5xl text-4xl max-lg:text-center xl:max-w-[612px] lg:max-w-lg !leading-[110%] text-white max-lg:max-w-xl max-md:max-w-lg'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span>  Plans</h1>
                        <p className='lg:mb-[42px] mb-7 xl:max-w-[506px] max-w-md lg:text-base text-sm text-white opacity-[90%] !leading-[145%] max-lg:text-center'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
                        <Input btnTittle="Compare" placeholder="Start typing your address"/>
                    </div>
                    <div className="lg:w-6/12 w-full flex justify-center max-lg:items-center">
                        <div className='relative'>
                            <img className='pointer-events-none xl:max-w-[190px] lg:max-w-24 max-w-20 absolute xl:-top-[52px] xl:left-[180px] lg:-top-9 lg:left-[150px] sm:-right-6 -top-6 right-0' src="./assets/image/webp/dots-img.webp" alt="dots-img" />
                            <img className='xl:max-w-[558px] lg:max-w-md max-w-sm max-lg:w-full max-lg:relative lg:absolute xl:mt-1 top-0 xl:-left-[250px] lg:-left-56' src="./assets/image/webp/hero-sec-img.webp" alt="hero-sec-bg" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero