import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import OurChef from '../Components/OurChef'
import BestBurger from '../Components/BestBurger'
import BigBurger from '../Components/BigBurger'
import Statistics from '../Components/Statistics'
import Packages from '../Components/Packages'
import Poster from '../Components/Poster'
import SubscribeSection from '../Components/SubscribeSection'

function Home() {
  return (
    <div>
        <Navbar/>
          <HeroSection/>
          <OurChef/>
          <BestBurger/>
          <BigBurger/>
          <Statistics/>
          <Packages/>
          <Poster/>
          <SubscribeSection/>
        <Footer/>
    </div>
  )
}

export default Home