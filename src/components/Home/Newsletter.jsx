import React from 'react'
import CustomHeading from '../../common/CustomHeading'

const Newsletter = () => {
  return (
    <div className='mx-auto max-w-[1140px] w-full px-4 xl:mt-[160px] lg:mt-28 md:mt-20 mt-14'>
      <div className="py-[54px]">
         <CustomHeading tittleOne="Join Our " tittleTwo="Newsletter" additionalClasses="!font-normal xl:!max-w-[456px] text-center mx-auto lg:!mb-9 !mb-7" additionalClassesTwo="!font-bold" />

      </div>
    </div>
  )
}

export default Newsletter