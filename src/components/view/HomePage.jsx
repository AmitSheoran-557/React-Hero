import React from 'react'
import Hero from '../Home/Hero'
import Comparisons from '../Home/Comparisons'
import Faq from '../Home/Faq'
import LogoList from '../Home/LogoList'
import SimpleSteps from '../Home/SimpleSteps'
import SwitchingEnergy from '../Home/SwitchingEnergy'
import Testimonials from '../Home/Testimonials'
import Utilities from '../Home/Utilities'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <LogoList/>
        <SwitchingEnergy/>
        <SimpleSteps/>
        <Comparisons/>
        <Utilities/>
        <Testimonials/>
        <Faq/>
    </>
  )
}

export default HomePage