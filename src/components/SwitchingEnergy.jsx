import React from 'react'
import CustomHeading from './CustomHeading'
import SubHeading from './SubHeading'
import { ENERGY_BENEFITS } from '../utils/Helper'
import CustomBtnTwo from '../common/CustomBtnTwo'

const SwitchingEnergy = () => {
  return (
    <div className='max-w-[1140px] mx-auto w-full xl:mt-[170px] lg:mt-28 md:mt-20 sm:mt-14 mt-12 lg:px-3 px-4'>
      <div className='flex flex-wrap justify-center items-center'>
        <div className="lg:w-6/12 w-full max-lg:flex justify-center">
          <img className='max-w-[507px] w-full' src="./assets/image/webp/switching-energy.webp" alt="man-and-bulb-img" />
        </div>
        <div className="lg:w-6/12 w-full max-lg:flex justify-center flex-col items-center max-lg:mt-5">
          <div className='max-lg:flex flex-col items-center'>
            <CustomHeading tittleOne="Switching Energy" tittleTwo="Made Simple" additionalClasses="max-w-[509px] max-lg:text-center" />
            <SubHeading additionalClasses="lg:!mb-[38px] md:mb-7 mb-5 max-lg:text-center max-w-[700px]" tittleOne="Say goodbye to confusing energy plans! We simplify the process by providing clear and competitive electricity and gas recommendations. Whether you're moving or just seeking a better deal, our platform connects you with the best energy providers quickly and easily, helping you save on energy bills." />
            <h4 className='xl:text-2xl lg:text-xl text-lg text-Prussian-Blue lg:mb-7 md:mb-6 sm:mb-5 mb-2 !leading-[110%]'>Benefits Of Comparing Energy Plans</h4>
            <div className='text-start'>
              {ENERGY_BENEFITS.map((item, index) => (
                <ul key={index} className='text-deep-blue pl-6'>
                  <li className='lg:mb-2 mb-1 lg:text-base text-sm list-disc !leading-[150%]'>{item.tittle}</li>
                </ul>
              ))}
            </div>
            <CustomBtnTwo btnTittle="Compare With Us" additionalClasses="!max-w-[201px] lg:!px-5 w-full xl:!mt-10 lg:!mt-7 !mt-5"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwitchingEnergy