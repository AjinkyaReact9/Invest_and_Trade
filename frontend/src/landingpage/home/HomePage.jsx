import React from 'react'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import OpenAccount from '../OpenAccount'
import Hero from './Hero'


const HomePage = () => {
  return (
    <>
        {/* <Navbar /> */}
        <Hero />
        {/* <Awards /> */}
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        {/* <Footer /> */}

    </>
  )
}

export default HomePage
