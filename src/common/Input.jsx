import React from 'react'
import CustomBtnTwo from './CustomBtnTwo'

const Input = () => {
  return (
    <form className='max-w-[476px] flex justify-between bg-white rounded-[50px] rounded-tl-none w-full p-[9px] overflow-hidden'>
        <input type="" required placeholder='Start typing your address' className='max-w-[476px] outline-none ps-[13px] bg-transparent placeholder:text-gray text-gray'/>
        <CustomBtnTwo btnTittle="Compare"/>
    </form>
  )
}

export default Input