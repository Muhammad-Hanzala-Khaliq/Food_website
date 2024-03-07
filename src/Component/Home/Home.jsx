import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import DisplaySection from '../DisplaySection/DisplaySection'
import FeatureProduct from '../FeatureProduct/FeatureProduct'

import TopSell from '../TopSell/TopSell'
import Blog from '../Blog/Blog'
import Brands from '../Brands/Brands'
import Footer from '../Footer/Footer'


export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <DisplaySection/>
      <FeatureProduct/>
      
      <TopSell/>
      <Blog/>
      <Brands/>
      <Footer/>
    </div>
  )
}
