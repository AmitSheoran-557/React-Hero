import React from 'react'

const SubHeading = (props) => {
  return (
    <p className={`lg:max-w-[558px] text-deepBlue lg:text-base text-sm opacity-[90%] !leading-[150%] ${props.additionalClasses}`}>{props.tittleOne}</p>
  )
}

export default SubHeading