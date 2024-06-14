import React from 'react'
import Navbar from '../../navbar/Navbar'
import Homebanner from './Homebanner';
import ChooseGfb from './ChooseGFB';
import Constructions from './Constructions';
import Philoshphy from './Philoshpy';
import UpperFooter from '../../utils/UpperFooter'
import MiddleFooter from '../../utils/MiddleFooter'
import Footer from '../../utils/Footer'

function About() {
  return (
    <div className='font-orelaga'>
      <Navbar />
      <Homebanner />
      <Philoshphy />
      <Constructions />
      <ChooseGfb />
      <UpperFooter />
      <MiddleFooter />
      <Footer />
    </div>
  )
}

export default About;