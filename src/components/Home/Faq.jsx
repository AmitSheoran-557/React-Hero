import React, { useState } from 'react'
import CustomHeading from '../../common/CustomHeading'
import SubHeading from '../../common/SubHeading'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Index of the currently open accordion
  const accordions = [
    { id: 1, title: 'Accordion 1', content: 'This is the content of Accordion 1.' },
    { id: 2, title: 'Accordion 2', content: 'This is the content of Accordion 2.' },
    { id: 3, title: 'Accordion 3', content: 'This is the content of Accordion 3.' },
  ];
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div>
      <div className='max-w-[1140px] mx-auto w-full px-4 xl:mt-[162px] lg:mt-28 md:mt-20 sm:mt-14 mt-12'>
        <CustomHeading tittleOne="Frequently Asked" tittleTwo="Questions" additionalClasses="!font-normal xl:!max-w-[620px] text-center mx-auto xl:!mb-4 !mb-3" additionalClassesTwo="!font-bold" />
        <SubHeading additionalClasses="!max-w-[550px] text-center mx-auto xl:mb-[58px] lg:mb-12 md:mb-7 mb-5" tittleOne="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />

        <div className="max-w-[916px] w-full mx-auto">
          {accordions.map((accordion, index) => (
            <div key={accordion.id} className={`border border-gray-300 rounded-md mb-7 overflow-hidden transition-all ${activeIndex === index ? 'h-auto' : 'h-[76px]'
              }`} >
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between h-[76px] px-[24px] py-[26px] cursor-pointer"
                onClick={() => toggleAccordion(index)}>
                <h3 className="text-lg font-medium">{accordion.title}</h3>
                <div className="text-xl">
                  {activeIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round"
                      strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /> </svg>) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" d="M12 4v16m8-8H4" /> </svg>)}
                </div>
              </div>
              {/* Accordion Content */}
              {activeIndex === index && (
                <div className="px-[24px] py-[26px] text-gray-700">
                  {accordion.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq