import React from 'react'
import uprightArrow from './../assets/image/svg/upright-arrow.svg'
const CustomButton = (props) => {
    return (
        <div>
            <button className={`${props.customClass} font-bold flex gap-[3px] w-full max-w-[155px] max-h-[48px] hover:scale-[1.09] duration-300 ease-linear lg:text-base text-sm lg:py-3 py-2 lg:px-[20.5px] px-4 rounded-[50px] rounded-tl-none bg-white text-black `}>{props.btnTittle} <img src={uprightArrow} alt="upright-arrow" /> 
            </button>
        </div>
    )
}

export default CustomButton