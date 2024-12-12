import React from 'react'
import CustomHeading from '../../common/CustomHeading'
import SubHeading from '../../common/SubHeading'
import Input from '../../common/Input'

const Newsletter = () => {
  return (
    <div className='mx-auto max-w-[1140px] w-full px-4 xl:mt-[160px] lg:mt-28 md:mt-20 mt-14'>
      <div className="py-[54px] bg-SkyBlueTwo mb-10 w-full relative">
        <img className='max-w-[300px] w-full absolute left-0 bottom-0' src="./assets/image/webp/newsletter-side-img.webp" alt="lines-img" />
        <CustomHeading tittleOne="Join Our " tittleTwo="Newsletter" additionalClasses="!font-normal xl:!max-w-[456px] text-center mx-auto lg:!mb-4 !mb-3" additionalClassesTwo="!font-bold" />
        <SubHeading additionalClasses="lg:!mb-[38px] md:mb-7 mb-5 mx-auto text-center !max-w-[620px]" tittleOne="Stay up to date with the latest deals, energy-saving tips, and exclusive offers! Sign up for our newsletter and never miss out on great savings opportunities again." />
        <div className='flex justify-center items-center'>
          <Input btnTittle="Submit" placeholder="Enter your email" formAdditionalClass="!border-gray border" />
        </div>
      </div>
    </div>
  )
}

export default Newsletter