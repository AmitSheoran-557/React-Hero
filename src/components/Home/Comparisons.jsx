import React from 'react'
import CustomHeading from '../../common/CustomHeading'
import { ACCORDION } from '../../utils/Helper';
import { useState } from 'react';
import { ANGLE_ARROW } from '../../utils/Icons';

const Comparisons = () => {

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className='mx-auto max-w-[1160px] w-full px-4 xl:mt-[160px] lg:mt-28 md:mt-20 mt-14'>
      <div className="flex flex-wrap">
        <div className="lg:w-6/12 w-full flex flex-col max-lg:justify-center max-lg:items-center mx-auto">
          <CustomHeading tittleOne="Comprehensive Utility" tittleTwo="Comparisons" additionalClasses="!font-normal xl:!max-w-[456px] xl:!mb-[46px] lg:!mb-9 !mb-7" additionalClassesTwo="!font-bold" />
          <div className="max-w-[558px] w-full">
            {ACCORDION.map((item, index) => (
              <div key={item.id} className="xl:mb-6 lg:mb-5 mb-4 hover:shadow-customOne rounded overflow-hidden relative border border-lightBlack">
                <div
                  className="flex items-center xl:min-h-[92px] xl:min-w-[558px] accordion-content min-h-16 cursor-pointer bg-gray-100 hover:bg-gray-200 max-sm:pr-10"
                  onClick={() => toggleAccordion(index)}>
                  <div className={`xl:min-w-16 lg:min-w-14 min-w-12 mb-auto lg:pt-[14px] py-3 mx-[14px] ${openIndex === index ? 'active-accordion' : '' }`}>{item.img}</div>
                  <div className='flex flex-col xl:pl-[10px] pl-2 lg:py-[14px] py-3'>
                    <div className='flex items-center'>
                      <h3 className="xl:text-2xl lg:text-xl md:text-lg text-base text-deepBlue font-medium">{item.title}</h3>
                      <span className={`transition-transform duration-200 ease-linear absolute  right-[14px] ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                        <ANGLE_ARROW/>
                      </span>
                    </div>
                    {openIndex === index && (
                      <div className=" bg-white max-xl:max-w-sm max-xl:pr-3 lg:mt-[7px] mt-1 text-deepBlue lg:text-base md:text-sm text-[13px]">
                        {item.content}
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-6/12 w-full flex flex-col lg:pt-10 pt-8 lg:items-end items-center">
          <img className='xl:max-w-[530px] lg:max-w-md max-w-md w-full xl:translate-x-6' src="./assets/image/png/comparisons-sec-img.png" alt="comparisons-img" />
        </div>
      </div>
    </div>
  )
}

export default Comparisons