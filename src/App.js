import React, { useEffect } from 'react'
import Home from './Component/Home/Home'
import Aos from 'aos'
import "aos/dist/aos.css"
export default function App() {
  useEffect(()=>{
   Aos.init();
   Aos.refresh();
  },[])
  return (
    <div>
      <Home/>
    </div>
  )
}
