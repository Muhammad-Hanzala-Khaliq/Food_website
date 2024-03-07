import React from 'react'
import './TopSell.css'
import SliderTwo from '../SliderOne/SliderTwo'

export default function TopSell() {
  return (
    <div className="container">
    <div className='mx-[300px] mt-[60px]' >
        <div className='section-title'>
        <div className='section-line'></div>
            <h1>Top Sell Products</h1>
        <div className='section-line'></div>
      </div>

      <div data-aos='fade-left' data-aos-duration="2000" data-aos-easing="ease-in-out" className="mt-[60px]">
   <SliderTwo/>
      </div>
      <hr className='mt-[67px]' />
    </div>
    </div>
  )
}
