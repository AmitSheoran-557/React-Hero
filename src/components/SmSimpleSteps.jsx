import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      variableWidth:true,
      centerMode:true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Slider {...settings}>
       <div className='relative group max-h-[661px] mt-[18px] img-box'><img className='max-w-[300px] w-full' src="./assets/image/png/step-sec-img-1.png" alt="simple-step-img-1" />
          <div className='overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
            <p className='absolute text-deep-blue md:text-base text-sm min-w-[500px] -mt-3 -rotate-90'>1. Enter Your Location and Preferences</p>
          </div>
          <div className='absolute bottom-0 hidden group-hover:block max-w-[360px] w-full xl:min-h-[217px] bg-Prussian-Blue xl:p-8 lg:p-6 p-5'>
            <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>1. Your Location</h4>
            <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
          </div>
        </div>
        <div className='relative group max-h-[661px] mt-[18px] img-box'><img className='max-w-[300px] w-full' src="./assets/image/png/step-sec-img-2.png" alt="simple-step-img-2" />
          <div className='overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
            <p className='text-deep-blue md:text-base text-sm -rotate-90 min-w-[500px] -mt-3'>2. Compare Providers</p>
          </div>
          <div className='absolute hidden group-hover:block bottom-0 max-w-[360px] w-full xl:min-h-[217px] bg-Prussian-Blue xl:p-8 lg:p-6 p-5'>
            <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>2. Providers</h4>
            <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
          </div>
        </div>
        <div className='relative group max-h-[661px] mt-[18px] img-box'><img className='max-w-[300px] w-full' src="./assets/image/png/step-sec-img-3.png" alt="simple-step-img-3" />
          <div className='overlay p-8 text-start flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
            <p className='text-deep-blue md:text-base text-sm -rotate-90 min-w-[500px] -mt-3'>3. Switch Easily</p>
          </div>
          <div className='absolute hidden group-hover:block bottom-0 max-w-[360px] w-full xl:min-h-[217px] bg-Prussian-Blue xl:p-8 lg:p-6 p-5'>
            <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>3. Switch Easily</h4>
            <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
          </div>
        </div>
        <div className='relative max-w-[360px] group max-h-[661px] w-full mt-[18px] img-box'><img className='max-w-[300px] w-full' src="./assets/image/png/step-sec-img-4.png" alt="simple-step-img-4" />
          <div className='overlay p-8 text-start max-w-[360px                                                                                                                 ] flex justify-center items-center z-50 absolute top-0 left-0 right-0 bottom-0 bg-lightSkyBlue opacity-100'>
            <p className='text-deep-blue md:text-base text-sm -rotate-90 min-w-[500px] -mt-3'>4. Choose the Best Plan</p>
          </div>
          <div className='absolute hidden group-hover:block bottom-0 max-w-[360px] w-full xl:min-h-[217px] bg-Prussian-Blue xl:p-8 lg:p-6 p-5'>
            <h4 className='lg:mb-[14px] mb-2 text-white lg:text-[32px] md:text-2xl text-xl'>4. Best Plan</h4>
            <p className='text-white opacity-[90%] lg:text-base text-sm max-w-[286px]'>Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.</p>
          </div>
        </div>
      </Slider>
    );
  }