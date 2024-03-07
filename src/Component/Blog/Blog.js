import React from 'react'
import './Blog.css'
import img1 from '../Images/buy2.jpg'
import { Fade } from 'react-reveal'
import img2 from '../Images/buy.jpg'
import icon1 from '../Images/milk.png'
import icon2 from '../Images/mutton.png'
import icon3 from '../Images/carrot.png'
import icon4 from '../Images/shalgom.png'
import icon5 from '../Images/greenflower.png'
import icon6 from '../Images/mushro.png'
import icon7 from '../Images/fish.png'

export default function Blog() {
  return (
    <div>
    <div className='mx-[320px] mt-[80px] relative'>
    <img src={icon1} className='absolute left-[47%] top-[-80px]' alt="" />
    <img src={icon2} className='absolute left-[89%]' alt="" />
    <img src={icon3} className='absolute left-[-10%] top-[42%]' alt="" />
    <img src={icon4} className='absolute left-[46%] top-[35%]' alt="" />
    <img src={icon5} className='absolute left-[94%] top-[34%]' alt="" />
    <img src={icon6} className='absolute left-[-20%] bottom-[20px]' alt="" />
    <img src={icon7} className='absolute left-[47%] bottom-[40px]' alt="" />
</div>


  
  <div className="container grid11">
  <Fade left delay={1000}>
      <div className='Image'>
        <img src={img1} alt="" />
        
      </div>
      </Fade>
      <Fade left delay={1500}>
      <div className='text'>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero atque voluptatibus illo explicabo placeat eveniet adipisci dicta, beatae possimus aut, sint molestiae! Dolor, odio.</p>
      </div>
      </Fade>
       </div>
       
       <div className="container grid11">
       <Fade right delay={2000}>
       <div className='text-contact'>
      <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero atque voluptatibus illo explicabo placeat eveniet adipisci dicta, beatae possimus aut, sint molestiae! Dolor, odio.</p>
 
      </div>
      </Fade>
      <Fade top delay={2500}>
      <div className="Image contact-img">
        <img src={img2} alt="" />
      </div>
      </Fade>
      </div>
      <div>

      </div>
      <hr className='mt-[70px]' />
    </div>
  )
}



{/* <div className='flex'>
<Fade left delay={1000}>
  <div className='w-1/2'>
    <div className='blog-cont-img cursor-pointer w-[572px] h-[354px]'>
      <div className='blogImg'>
        <img src={img1} alt="" />
      </div>
    </div>
  </div>
</Fade>
 <Fade left delay={1500}>
 <div className='w-1/2 p-[50px] gap-0'>
      <h1 className='text-[25px] font-[700]  mt-[-40px] '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      <p className='text-[12px] text-[#7e7c7c] mt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat provident aperiam laboriosam sapiente autem repellat ut incidunt consectetur ab reprehenderit ducimus iste fugit tenetur sunt officia repellendus dignissimos, corrupti velit numquam eius, veritatis vitae maxime odit iusto! Corporis, sit culpa. Reprehenderit commodi nemo, iusto delectus ad doloribus quos amet id.</p>
     </div>
 </Fade>
  </div> */}
  // <div className='flex mt-[40px]'>
  // <Fade right delay={2000}>
  // <div className='w-1/2 p-[40px]'>
  //      <h1 className='text-[25px] font-[700] '>Why Customer Love Us?</h1>
  //      <p className='text-[12px] text-[}#7e7c7c mt-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vero atque voluptatibus illo explicabo placeat eveniet adipisci dicta, beatae possimus aut, sint molestiae! Dolor, odio.</p>
  //      <div className='mt-[18px]'>
  //        <h3 className='text-[18px] font-[500]'>Customer Name</h3>
  //        <div className='flex gap-[18px] mt-[8px]'>
  //          <div className='w-[6px] h-[6px] rounded-full bg-[#d9d9d9]'></div>
  //          <div className='w-[6px] h-[6px] rounded-full bg-[#d9d9d9]'></div>
  //          <div className='w-[16px] h-[6px] rounded-full bg-[#2AC01D]'></div>
  //        </div>
  //      </div>
  //    </div>
  // </Fade>

  //   <Fade top delay={2500}>
  //   <div className='m1-[70px] blog-cont-img w-[572px] h-[354px] mt-[10px]'>
  //      <div className='blogImg '>
  //        <img className='w-[572px] h-[254px] ml-[40px]' src={img2} alt="" />
  //      </div>
  //    </div>
  //   </Fade>
    
  //   </div>