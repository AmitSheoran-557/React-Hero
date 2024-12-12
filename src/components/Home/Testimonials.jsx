import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { NEXT_ARROW, PREV_ARROW } from '../../utils/Icons';
import CustomHeading from '../../common/CustomHeading';
import SubHeading from '../../common/SubHeading';
import { TESTIMONIALS } from '../../utils/Helper';

const Testimonials = () => {
    return (
        <div>
            <div className='max-w-[1160px] mx-auto w-full max-xl:px-4 xl:mt-[162px] lg:mt-28 md:mt-20 sm:mt-14 mt-12 relative'>
                <CustomHeading tittleOne="Our" tittleTwo="Testimonials" additionalClasses="!font-normal xl:!max-w-[620px] text-center mx-auto xl:!mb-4 !mb-3 text-deepBlue opacity-[90%]" additionalClassesTwo="!font-bold" />
                <SubHeading additionalClasses="!max-w-[490px] text-center mx-auto xl:mb-11 lg:mb-9 md:mb-7 mb-5 text-deepBlue opacity-[90%]" tittleOne="Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum" />
                <div className="max-w-[1160px] mx-auto relative">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={24}
                        slidesPerView={1}
                        centeredSlides={true}
                        centerInsufficientSlides={true}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                        }}
                        pagination={true}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                                pagination: { clickable: true },
                            },
                            1280: {
                                slidesPerView: 3,
                                centeredSlides: true,
                                pagination: false,
                            },
                        }}>
                        {TESTIMONIALS.map((item, index) => (
                            <SwiperSlide key={index} className="max-w-[364px] h-[256px]">
                                <div className="border shadow-customOne border-darkTeal border-opacity-[10%] rounded-lg p-5 flex flex-col justify-between h-full text-center">
                                    <div className='flex gap-2 lg:mb-6 mb-4'>
                                        <img src={item.profileImg} className="lg:w-[60px] w-12 rounded-full" />
                                        <div className="text-start">
                                            <h4 className="xl:text-2xl lg:text-xl text-lg !leading-[150%]">{item.name}</h4>
                                            <a className='text-black opacity-[50%] !leading-[150%]' href="/">{item.id}</a>
                                        </div>
                                    </div>
                                    <img className='max-w-[99px]' src={item.rating} alt={item.rating} />
                                    <p className="lg:text-base text-start text-sm text-gray-600 xl:mt-[17px] lg:mt-4 mt-3 max-w-xs !leading-[150%]">{item.paragraph}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-prev max-w-max absolute top-[124px] xl:block max-xl:hidden duration-300 ease-linear hover:bg-deepBlue -left-20 cursor-pointer border p-2 rounded-full"><PREV_ARROW /></div>
                    <div className="custom-next max-w-max absolute top-[124px] xl:block max-xl:hidden duration-300 ease-linear hover:bg-deepBlue -right-20 cursor-pointer border p-2 rounded-full"><NEXT_ARROW /></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials










