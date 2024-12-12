import React, { useState } from 'react'
import CustomHeading from '../../common/CustomHeading'
import SubHeading from '../../common/SubHeading'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Index of the currently open accordion
  const accordions = [
    { id: 1, title: 'Can I switch providers if I’m currently in a contract?', content: 'Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.' },
    { id: 2, title: 'Will my service be interrupted if I switch providers?', content: 'Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.' },
    { id: 3, title: 'How long does it take to switch providers?', content: 'Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.' },
    { id: 4, title: 'Is there a fee for switching providers?', content: 'Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.' },
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
            <div key={accordion.id} className={`shadow-customTwo group py-[26px] text-deepBlue  px-6 rounded mb-7 overflow-hidden transition-all duration-300 ${activeIndex === index ? ' max-h-full bg-prussianBlue' : 'max-h-[76px]'}`} >
              {/* Accordion Header */}
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAccordion(index)}>
                <h3 className={`xl:text-2xl lg:text-xl text-lg font-medium group !leading-[110%] ${activeIndex === index ? 'text-white' : ''}`}>{accordion.title}</h3>
                <div className={`min-w-7 min-h-7 border-solid border-[2px] border-deepBlue flex justify-center items-center rounded-full ${activeIndex === index ? '!border-white' : ''}`}>
                  <div className={`w-3 h-0.5 relative bg-deepBlue after:w-3 after:h-0.5 after:bg-deepBlue after:rotate-90 after:absolute after:left-0 after:top-0 transition-all duration-300 after:transition-all after:duration-300 ${activeIndex === index ? 'after:!rotate-0 after:!bg-white !bg-white' : ''}`}></div>
                </div>
              </div>
              {/* Accordion Content */}
              <p className={`text-white max-w-[702px] !leading-[150%] lg:text-base mt-[14px] text-sm `}>{accordion.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq