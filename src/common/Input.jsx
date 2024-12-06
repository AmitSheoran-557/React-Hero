import React from 'react'
import uprightArrowTwo from './../assets/image/png/upright-arrow-two.png'

const Input = () => {
  return (
    <div className='max-w-[476px] flex justify-between bg-white rounded-[50px] rounded-tl-none w-full p-[9px] overflow-hidden'>
        <input type="" placeholder='Start typing your address' className='max-w-[476px] outline-none ps-[13px] bg-transparent placeholder:text-[#7F8A8E] text-[#7F8A8E]'/>
        <button className='font-bold flex gap-[3px] max-w-[154px] max-h-[48px] lg:text-base text-sm lg:py-3 py-2 lg:px-5 px-4 rounded-[50px] rounded-tl-none bg-[#00A8E8] text-white '>Compare <img src={uprightArrowTwo} alt="upright-arrow" /></button>
    </div>
  )
}

export default Input