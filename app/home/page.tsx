import React from 'react'
import Hero from './components/hero/Hero'
import BookYourVehicleIn from './components/forms/BookYourVehicleIn'
import Topbar from './components/topbar/Topbar'
import HowToBookYourMOT from './components/howtobookyourmot/HowToBookYourMOT'
import ReadyToBookYourMot from './components/readytobookyourmot/ReadyToBookYourMot'
import FAQ from './components/faq/FAQ'

const homepage = () => {
  return (
    <div>
      < Topbar/>
        <Hero/>  
        <HowToBookYourMOT/>
        <ReadyToBookYourMot/>
        <FAQ/>
     </div>
  )
}

export default homepage
