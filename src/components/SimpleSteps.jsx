import React from 'react'
import SubHeading from './SubHeading'

const SimpleSteps = () => {
  return (
    <>
      <div className='max-w-[1140px] mx-auto w-full xl:mt-[170px] lg:mt-28 md:mt-20 sm:mt-14 mt-12 lg:px-3 px-4'>
        <h3 className='xl:text-5xl lg:text-4xl text-3xl lg:mb-4 mb-3 !text-deep-blue text-center'>Simple Steps to <span className='font-bold'>Switch</span></h3>
        <SubHeading additionalClasses="!max-w-[610px] text-center mx-auto xl:mb-[40px] lg:mb-12 md:mb-7 mb-5" tittleOne="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
      </div>
      <div className='flex flex-wrap justify-center items-center mb-20'>
        <div className='relative group max-h-[661px] mt-[18px] img-box'><img className='max-w-[360px]' src="./assets/image/png/step-sec-img-1.png" alt="simple-step-img-1" />
          <div className='overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
            <p className='xl:text-[32px] absolute text-deep-blue lg:text-2xl text-lg min-w-[600px] -mt-3 -rotate-90'>1. Enter Your Location and Preferences</p>
          </div>
          <div className='absolute bottom-0 hidden group-hover:block max-w-[360px] w-full xl:min-h-[217px] bg-Prussian-Blue xl:p-8 lg:p-6 p-5'>
            <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>1. Your Location</h4>
            <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
          </div>
        </div>
        <div className='relative group max-h-[661px] mt-[18px] img-box'><img className='max-w-[360px]' src="./assets/image/png/step-sec-img-2.png" alt="simple-step-img-2" />
          <div className='overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
            <p className='xl:text-[32px] text-deep-blue lg:text-2xl text-lg -rotate-90 min-w-[600px] -mt-3'>2. Compare Providers</p>
          </div>
          <div className='absolute hidden group-hover:block bottom-0 max-w-[360px] w-full xl:min-h-[217px] bg-Prussian-Blue xl:p-8 lg:p-6 p-5'>
            <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>2. Providers</h4>
            <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
          </div>
        </div>
        <div className='relative group max-h-[661px] mt-[18px] img-box'><img className='max-w-[360px]' src="./assets/image/png/step-sec-img-3.png" alt="simple-step-img-3" />
          <div className='overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
            <p className='xl:text-[32px] text-deep-blue lg:text-2xl text-lg -rotate-90 min-w-[600px] -mt-3'>3. Switch Easily</p>
          </div>
          <div className='absolute hidden group-hover:block bottom-0 max-w-[360px] w-full xl:min-h-[217px] bg-Prussian-Blue xl:p-8 lg:p-6 p-5'>
            <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>3. Switch Easily</h4>
            <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
          </div>
        </div>
        <div className='relative group max-h-[661px] mt-[18px] img-box'><img className='max-w-[360px]' src="./assets/image/png/step-sec-img-4.png" alt="simple-step-img-4" />
          <div className='overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
            <p className='xl:text-[32px] text-deep-blue lg:text-2xl text-lg -rotate-90 min-w-[600px] -mt-3'>4. Choose the Best Plan</p>
          </div>
          <div className='absolute hidden group-hover:block bottom-0 max-w-[360px] w-full xl:min-h-[217px] bg-Prussian-Blue xl:p-8 lg:p-6 p-5'>
            <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>4.Best Plan</h4>
            <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleSteps