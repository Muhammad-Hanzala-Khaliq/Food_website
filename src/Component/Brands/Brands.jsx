import React from 'react'
import './Brands.css'

import img1 from '../Images/Frame.png'
import img2 from '../Images/brnad4.png'
import img3 from '../Images/brnad6.png'
import img4 from '../Images/Frame.png'


export default function Brands() {
  return (
    <div className="container ">
    <div className='mx-[320px] mt-[60px] grid22'>
      <div className='flex justify-content-center items-center gap-[92px] hero1'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />


      </div>
    </div>
    </div>
  )
}
