import React from 'react'
import './DisplaySection.css'
import img1 from '../Images/dp-img1.png'
import img2 from '../Images/dp-img2.jpg'
import img3 from '../Images/dp-img3.jpg'
import img8 from '../Images/flowerkolly.png'
import cherry from '../Images/cherry.png'
import tomato from '../Images/tomato-slice.png'
import orange from '../Images/orange-slice.png'
import plate from '../Images/plate.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation'
export default function DisplaySection() {
  return (
    <div className="container">
    <div className='mx-[140px] mt-[35px] hero'>
      <div className='flex flex-col md:flex-row gap-[51px] hero2 '>
        <div className='display-first-section'>
        <img src={img8} className='absolute -z-10' alt=""  />
        <div data-aos="fade-down" data-aos-duration="2000" className='absolute right-[40px] top-[20px]'>
            <img src={cherry} alt="" />
        </div>
        <div data-aos="fade-right" data-aos-duration="2000" className='absolute right-[242px] bottom-[60px]'>
            <img src={tomato} alt="" />
        </div>

        <div data-aos="fade-left" data-aos-duration="2000" className='absolute right-[50px] bottom-[30px]'>
            <img src={orange} alt="" />
        </div>

        <div className='absolute left-[-150px] bottom-[-180px]'>
        <img src={plate} className='rotate' alt="" />
        </div>

        <div className='content-sec-one'>
            <h2>DELICIOUS</h2>
            <h1>SALAD</h1>
            <h3> <TypeAnimation sequence={["EVERYDAY...",2000,'']} speed={50} repeat={Infinity}/></h3>

            <div className='shop-now-btn m1-[250px]'>
                <button>Shop Now</button>
                <MdKeyboardDoubleArrowRight className='m1-1' />
            </div>
        </div>
        <img src={img1} alt="" />
        </div>

        <div className='grid gap-[30px] hero3'>
            <div className='relative'>
                <div className='content-section-twp'>
                    <h1>Fresh</h1>
                    <h2>Vegitables</h2>

                    <div className='shop-now-btn'>
                        <button >Shop Now</button>
                        <MdKeyboardDoubleArrowRight className='m1-1'/>
                    </div>
                </div>
                <div>
                    <div className='hover05 column'>
                        <figure>
                            <img src={img2} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className='content-section-three'>
                    <h1>Fresh</h1>
                    <h2>EVERYDAY</h2>
                    <div className='shop-now-btn'>
                        <button>Shop Now</button>
                        <MdKeyboardDoubleArrowRight/>
                    </div>
                </div>
                <div>
                    <div className='hover05 column'>
                        <figure>
                            <img src={img3} alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}
