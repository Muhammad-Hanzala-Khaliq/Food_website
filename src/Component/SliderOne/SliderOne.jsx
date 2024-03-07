import React, { useState } from 'react'
import './SliderOne.css'
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { Navigation, Autoplay } from 'swiper/modules';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "swiper/css/navigation"
import "swiper/css/pagination"
import Api from './Api';
export default function SliderOne() {
    const [img,setImg] =useState(Api)
  return (
    <div className="swiper-container">
      <Swiper
      slidesPerView={4}
      spaceBetween={0}
      autoplay={{
        delay:2500,
        disableOnInteraction:false,
        pauseOnMouseEnter:true,
      }}
      navigation={true}
      modules={[Autoplay,Navigation]}
      className='mySwiper'
   

     
      >
     {    img.map((value)=>{
        return  <SwiperSlide>
            <div className='hoverIncrease'>
                <img src={value.imgUrl} alt="" />
                <div className='content'>
                    <h1>Product One</h1>
                    <h2>{value.price}</h2>
                    <div className='price-underline'></div>
                    <div className='select-btn'>
                        <p>SELECT OPTION</p>
                        <MdKeyboardDoubleArrowRight className='m1-1' />
                    </div>
                </div>
            </div>
         </SwiperSlide>
     })  }
      </Swiper>
    </div>
  )
}
