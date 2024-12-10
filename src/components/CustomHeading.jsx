import React from 'react'

const CustomHeading = (props) => {
  return (
   <h1 className={`font-bold xl:text-5xl lg:text-4xl !leading-[110%] text-3xl lg:mb-4 mb-3 !text-deep-blue ${props.additionalClasses}`}>{props.tittleOne} <span className='font-normal'> {props.tittleTwo} </span></h1>
  )
}

export default CustomHeading