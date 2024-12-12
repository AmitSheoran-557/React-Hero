import React from 'react'
import SubHeading from '../../common/SubHeading'
import Slider from './SmSimpleSteps'
import { SIMPLE_STEPS } from '../../utils/Helper'

const SimpleSteps = () => {
  return (
    <>
      <div className='max-w-[1140px] mx-auto w-full xl:mt-[170px] lg:mt-28 md:mt-20 sm:mt-14 mt-12 lg:px-3 px-4'>
        <h3 className='xl:text-5xl lg:text-4xl text-3xl lg:mb-4 mb-3 !text-deepBlue text-center'>Simple Steps to <span className='font-bold'>Switch</span></h3>
        <SubHeading additionalClasses="!max-w-[610px] text-center mx-auto xl:mb-[40px] lg:mb-12 md:mb-7 mb-5" tittleOne="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
      </div>
      <div className='flex max-lg:hidden justify-center items-center'>
        {SIMPLE_STEPS.map((obj, i) => (
          <div className='relative max-w-[360px] group max-h-[661px] w-full mt-[18px] img-box'><img className='max-w-[360px] w-full' src={obj.bgImg} alt="simple-step-img" />
            <div className='overlay p-8 text-start max-w-[360px] flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
              <p className='xl:text-[32px] absolute text-deepBlue lg:text-2xl text-lg xl:min-w-[600px] lg:min-w-[450px] -mt-3 -rotate-90'>{obj.tittle}</p>
            </div>
            <div className='absolute bottom-0 hidden group-hover:block max-w-[360px] w-full xl:min-h-[217px] bg-prussianBlue xl:p-8 lg:p-6 p-5'>
              <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>{obj.heading}</h4>
              <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>{obj.subHeading}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="max-lg:block lg:hidden max-h-max"> <Slider /></div>
    </>
  )
}

export default SimpleSteps