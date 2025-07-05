import React from 'react'
import Hero from './components/landing/hero/Hero'
import BookYourVehicleIn from './components/forms/BookYourVehicleIn'
import Topbar from './components/topbar/Topbar'
import HowToBookYourMOT from './components/landing/howtobookyourmot/HowToBookYourMOT'
import ReadyToBookYourMot from './components/landing/readytobookyourmot/ReadyToBookYourMot'
import FAQ from './components/landing/faq/FAQ'

const homepage = () => {
  return (
    <div>
       <Hero />
      <HowToBookYourMOT />
      <ReadyToBookYourMot />
      <FAQ />
    </div>
  )
}

export default homepage
