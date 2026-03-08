import React from 'react'
import Features from './Components.jsx/Works'
import WhyChoose from './Components.jsx/Choose'
import TestimonialSection from './Components.jsx/Customer'
import Servicesection from './Components.jsx/Services'
import NewsSection from './Components.jsx/Lastest'
import PoolProjects from './Components.jsx/Pools'
import CementArts from './Components.jsx/Cementarts'
import PondsArts from './Components.jsx/Ponds'
import IntroductionSection from './Components.jsx/introduction'

import ViewDetails from './Components.jsx/ViewDetails'
import Hero from './Components.jsx/Hero'


const Frontpage = () => {
  return (
    <div>
      <Hero/>
      <IntroductionSection/>
    <Features/>
  
    <WhyChoose/>
    <PoolProjects/>
    <PondsArts/>
    <CementArts/>
    <TestimonialSection/>
    <Servicesection/>
    <NewsSection/>
    
    

    {/* <TestimonialSection/> */}
    </div>
  )
}

export default Frontpage