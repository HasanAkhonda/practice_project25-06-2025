import FAQ from './components/landing/faq/FAQ'
import Hero from './components/landing/hero/Hero'
import HowToBookYourMOT from './components/landing/howtobookyourmot/HowToBookYourMOT'
import ReadyToBookYourMot from './components/landing/readytobookyourmot/ReadyToBookYourMot'

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
