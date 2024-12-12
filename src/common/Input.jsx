import React from 'react'

const Input = (props) => {
  return (
    <form className={`max-w-[476px] flex justify-between bg-white rounded-[50px] rounded-tl-none w-full p-[9px] overflow-hidden ${props.formAdditionalClass}`}>
        <input type="" required placeholder={props.placeholder} className='max-w-[476px] outline-none ps-[13px] bg-transparent placeholder:text-gray text-gray'/>
        <button required className={`font-bold flex gap-[3px] max-w-[154px] max-h-[48px]  hover:scale-[1.07] duration-300 ease-linear lg:text-base text-sm lg:py-3 py-2 lg:px-[20.5px] px-4 rounded-[50px] rounded-tl-none bg-skyBlue text-white ${props.additionalClasses}`}>{props.btnTittle} <img className='lg:size-6 size-5' src="./assets/image/webp/upright-arrow-two.webp" alt="upright-arrow" /></button>
    </form>
  )
}

export default Input