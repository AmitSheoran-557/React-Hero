import React from 'react'
import CustomHeading from '../../common/CustomHeading'
import { ACCORDION } from '../../utils/Helper';
import { useState } from 'react';

const Comparisons = () => {

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className='mx-auto max-w-[1160px] w-full px-4 xl:mt-[165px] lg:mt-28 md:mt-20 mt-14'>
      <div className="flex flex-wrap">
        <div className="lg:w-6/12 w-full flex flex-col max-lg:justify-center max-lg:items-center mx-auto">
          <CustomHeading tittleOne="Comprehensive Utility" tittleTwo="Comparisons" additionalClasses="!font-normal xl:!max-w-[456px] xl:!mb-[46px] lg:!mb-9 !mb-7" additionalClassesTwo="!font-bold" />
          <div className="max-w-[558px] w-full">
            {ACCORDION.map((item, index) => (
              <div key={item.id} className="xl:mb-6 lg:mb-5  mb-4 hover:shadow-customOne rounded overflow-hidden relative border border-lightBlack">
                <div
                  className="flex items-center xl:min-h-[92px] accordion-content min-h-16 cursor-pointer bg-gray-100 hover:bg-gray-200 max-sm:pr-10"
                  onClick={() => toggleAccordion(index)}>
                  <div className="xl:min-w-16 lg:min-w-14 icon min-w-12 mb-auto lg:pt-[14px] py-3 mx-[14px]">{item.img}</div>
                  <div className='flex flex-col xl:pl-[10px] pl-2 lg:py-[14px] py-3'>
                    <div className='flex items-center'>
                      <h3 className="xl:text-2xl lg:text-xl md:text-lg text-base text-deepBlue font-medium">{item.title}</h3>
                      <span className={`transition-transform duration-200 ease-linear absolute  right-[14px] ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.330173 0.844159C0.541647 0.623794 0.828428 0.5 1.12745 0.5C1.42648 0.5 1.71326 0.623794 1.92473 0.844159L7.50681 6.66269L13.0889 0.84416C13.3016 0.63004 13.5864 0.51156 13.8821 0.514238C14.1778 0.516916 14.4606 0.640538 14.6697 0.858478C14.8788 1.07642 14.9974 1.37124 15 1.67944C15.0025 1.98764 14.8889 2.28457 14.6834 2.50626L8.30409 9.15584C8.09261 9.37621 7.80583 9.5 7.50681 9.5C7.20778 9.5 6.921 9.37621 6.70953 9.15584L0.330173 2.50626C0.118763 2.28583 -6.49944e-08 1.9869 -5.137e-08 1.67521C-3.77456e-08 1.36352 0.118763 1.06459 0.330173 0.844159Z" fill="#00171F" />
                        </svg>
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
        <div className="lg:w-6/12 w-full flex flex-col pt-8 lg:items-end items-center">
          <img className='xl:max-w-[530px] lg:max-w-md max-w-md w-full' src="./assets/image/png/comparisons-sec-img.png" alt="comparisons-img" />
        </div>
      </div>
    </div>
  )
}

export default Comparisons