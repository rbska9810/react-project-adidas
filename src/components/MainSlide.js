import React from 'react'

/* swiper */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

/* style */
import '../style/MainSlide.css';


const MainSlide = () => {
  return (
    <div className='MainSlide'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={process.env.PUBLIC_URL + './img/slide1.png'} alt="slide" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + './img/slide2.png'} alt="slide" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + './img/slide3.png'} alt="slide" /></SwiperSlide>
        <SwiperSlide><img src={process.env.PUBLIC_URL + './img/slide4.png'} alt="slide" /></SwiperSlide>
        ...
      </Swiper>
    </div>
  )
}

export default MainSlide