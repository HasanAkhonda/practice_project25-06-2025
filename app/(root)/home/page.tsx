import FAQ from "@/components/Home/landing/faq/FAQ"
import Hero from "@/components/Home/landing/hero/Hero"
import HowToBookYourMOT from "@/components/Home/landing/howtobookyourmot/HowToBookYourMOT"
import ReadyToBookYourMot from "@/components/Home/landing/readytobookyourmot/ReadyToBookYourMot"
import WhatOurCustomerSay from "@/components/Home/whatCustomerSay/WhatOurCustomerSay"



const homepage = () => {
  
  return (
    <div>
      <Hero />
      <HowToBookYourMOT />
      <ReadyToBookYourMot />
      <WhatOurCustomerSay  />
      <FAQ />
    </div>
  )
}

export default homepage
