import React from 'react'
import { RIGHT_ARROW, UTILITIES_ICON_ONE,   } from '../../utils/Icons'
import CustomHeading from '../../common/CustomHeading'
import SubHeading from '../../common/SubHeading'
import { UTILITIES } from '../../utils/Helper'

const utilities = () => {
  return (
    <div className='max-w-[1140px] mx-auto px-4 w-full xl:mt-[132px] lg:mt-28 md:mt-20 sm:mt-14 mt-12'>
      <CustomHeading tittleOne="Why Choose Us for" tittleTwo="Utilities" additionalClasses="!font-normal xl:!max-w-[620px] text-center mx-auto xl:!mb-4 !mb-3" additionalClassesTwo="!font-bold" />
      <SubHeading additionalClasses="!max-w-[620px] text-center mx-auto xl:mb-[58px] lg:mb-12 md:mb-7 mb-5" tittleOne="This emphasizes both the action and the benefits, drawing in potential customers with a clear value proposition. Let me know if you'd like any adjustments!" />
      <div className="flex flex-wrap xl:min-h-[596px] justify-center mx-auto w-full">
        <div className="xl:w-4/12 flex justify-center items-center mx-auto">
          <div className='bg-prussianBlue p-10 xl:min-w-[424px] max-w-[424px] w-full h-full rounded'>
            <div className='flex flex-col'>
              <div className="xl:mb-[51px] lg:mb-10 mb-8"><UTILITIES_ICON_ONE /></div>
              <h3 className='lg:mb-3 mb-2 text-white'>Tailored Recommendations</h3>
              <p className='xl:mb-[22px] lg:mb-5 mb-4 text-white'>Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.</p>
              <button className='px-[26px] py-[22px] bg-white max-w-max rounded-full hover:scale-[1.09] duration-300 ease-linear'><RIGHT_ARROW /></button>
            </div>
          </div>
        </div>
        <div className="xl:w-8/12 max-xl:mt-10 flex flex-wrap justify-center gap-6 xl:pl-[46px]">
          {UTILITIES.map((obj, index) => (
            <div key={index}>
              <div className="w-full">
                <div className="p-6 bg-white md:max-w-[334px] utilities-box rounded border-darkTeal border-opacity-[10%] border duration-300 ease-linear hover:bg-prussianBlue group shadow-customOne w-full lg:min-h-[286px] min-h-[241px]">
                  <div className="mb-[18px]">{obj.icon}</div>
                  <h3 className='lg:mb-3 mb-2 group-hover:text-white lg:text-2xl text-xl !leading-[110%]'>{obj.heading}</h3>
                  <p className='lg:text-base group-hover:text-white text-sm text-deepBlue opacity-[90%] !leading-[150%]'>{obj.subHeading}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default utilities