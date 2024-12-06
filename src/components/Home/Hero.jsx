import React from 'react'
import Input from '../../common/Input'
import dotImg from './../../assets/image/png/dots-img.png'
import heroImg from './../../assets/image/png/hero-sec-img.png'
import heroBg from './../../assets/image/png/hero-sec-bg.png'
import Navbar from '../../common/NavBar'

const Hero = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center bg-cover bg-center pb-[202px]'  style={{ backgroundImage: `url(${heroBg})` }}>
                <div className='max-w-[1140px] mx-auto w-full text-white'>
                    <Navbar/>
                </div>
                <div className='max-w-[1140px] lg:px-3 px-4 mx-auto w-full text-white pt-24'>
                    <div className='flex flex-wrap '>
                        <div className="lg:w-6/12 w-full flex flex-col max-lg:justify-center max-lg:items-center max-lg:mb-20">
                            <h1 className='mb-4 xl:text-[64px] lg:text-5xl text-4xl max-lg:text-center xl:max-w-[612px] lg:max-w-96 !leading-[120%] text-white'>Easily Compare <span className='font-bold'>Energy, Gas, And Internet</span>  Plans</h1>
                            <p className='lg:mb-[42px] mb-7 xl:max-w-[506px] max-w-md lg:text-base text-sm text-white opacity-[90%] !leading-[150%] max-lg:text-center'>Find and switch to the best energy, gas, and internet plans with ease. Our platform simplifies your search, letting you compare providers and make informed decisions, all in one place.</p>
                            <Input />
                        </div>
                        <div className="lg:w-6/12 w-full flex justify-center max-lg:items-center">
                        <div className='relative'>
                            <img className='pointer-events-none lg:max-w-[190px] max-w-20 absolute xl:-top-[52px] xl:left-36 lg:-top-9 lg:left-36 sm:-right-6 -top-6 right-0' src={dotImg} alt="dots-img" />
                            <img className='xl:max-w-[558px] lg:max-w-md max-w-sm max-lg:w-full max-lg:relative lg:absolute top-0 xl:-left-72 lg:-left-56' src={heroImg} alt="hero-sec-bg" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero