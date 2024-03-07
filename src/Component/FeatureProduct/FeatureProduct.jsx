import React from 'react'
import './FeatureProduct.css'
import SliderOne from '../SliderOne/SliderOne'
export default function FeatureProduct() {
  return (
    <div className="container">
    <div className='mx-[300px] mt-[45px]'>
      <div className='section-title'>
        <div className='section-line'></div>
            <h1>Feature Products</h1>
        <div className='section-line'></div>
      </div>
      <div data-aos="fade-right" data-aos-duration="1500" className='mt-[60px]'>
      <SliderOne/>
      </div>
    </div>
    </div>
  )
}
