import React from 'react'
import './Footer.css'
import logo from '../Images/Frame.png'
import logo2 from '../Images/payment.png'
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Fade } from 'react-reveal';

export default function Footer() {
  return (
    <div className='mt-[29px] bg-[#9FB846] h-[457px] relative overflow-hidden'>
      <div className="mx-[320px] flex justify-between items-center gap-[6x`5px] pt-[23px] container ">
        <div className='flex justify-between justify-items-center items-center w-[60%]'>
        <div>
          <img src={logo} className='w-[146px] h-[93px]' alt="" />
          </div>
          <div>
            <h3 className='text-[18px] font-[500]'>Call us <br />+009 000 000</h3>
          </div>
          <div>
            <h3 className='text-[18px] font-[500]'>Follow Us</h3>
           <div className='flex gap-[10px]'>
            <div className='bottom-social-icon'>
            <FaFacebookF />
            </div>
            <div className='bottom-social-icon'>
            <BsInstagram />

            </div>
            <div className='bottom-social-icon'>
            <FaTiktok />
            </div>
            <div className='bottom-social-icon'>
            <BsTwitter />
            </div>
            </div>
          </div>
        </div>
        <div>
          <img src={logo2} alt="" />
        </div>
      </div>
      <div className='mt-[24px] mx-[320px] hr-line'/>
      <div className="container grid27">
      <div className='mx-[320px] mt-[25px] flex justify-between'>
     <Fade left delay={1000}>
     <div className='footer-info w-[330px] h-[250px] z-[5]'>
        <h2 className='text-[22px] font-[600] mb-[20px]'>Location</h2>
        <p className='text-[14px]' >Shop Address and <br/> Location</p>
        <p className='text-[14px]'>support@microbuddy.com</p>
        </div>
     </Fade>


     <Fade left delay={1500}>
      <div className='footer-info w-[250px] h-[250px] z-[4]'>
        <h2 className='text-[22px] font-[600] mb-[10px]'>Information</h2>
          <p>About Us</p>
          <p>Blog</p>
          <p>CheckOut</p>
          <p>Contact Us</p>
          <p>Service</p>
      </div>
     </Fade>
     <Fade left delay={2000}>
      <div className='footer-info w-[250px] h-[250px] z-[3]'>
        <h2 className='text-[22px] font-[600] mb-[10px]'>My Account</h2>
          <p>My Account</p>
          <p>Contact</p>
          <p>Shopping Cart</p>
          <p>Shop</p>
       
      </div>
     </Fade>
     <Fade left delay={2500}>
      <div className='footer-info w-[250px] h-[250px] z-[2]'>
        <h2 className='text-[22px] font-[600] mb-[10px]'>Categories</h2>
          <p>Fruit</p>
          <p>Dairy</p>
          <p>Vegitable</p>
          <p>Healt</p>
       
      </div>
     </Fade>
     <Fade left delay={3500}>
      <div className='footer-info w-[250px] h-[250px] z-[1]'>
        <h2 className='text-[22px] font-[600] mb-[10px]'>Subscribe Us</h2>
          <p>SignUp and Get a Voucher</p>
          <div className='footer-search-bar'>
            <input type="text" name="" id="" placeholder='Email Address' />
          </div>
       

      </div>
     </Fade>
     </div>
      </div>
      <div className='mt-[68px] mx-[10px] hr-line'/>

      <p className='copyright mx-[320px]'>CopyRight@abcd.com All Right Reserved</p>
    </div>
  )
}
