import React from 'react'
import Navbar from '../../navbar/Navbar'
import PreConstruction from './Pre-construction';
import Construction from './Construction';
import PostConstruction from './Post-Construction';
import Homebanner from './Homebanner';
import UpperFooter from '../../utils/UpperFooter';
import MiddleFooter from '../../utils/MiddleFooter';
import Footer from '../../utils/Footer';


function Process() {
  return (
    <div>
      <Navbar />
      <Homebanner />
      <PreConstruction />
      <Construction />
      <PostConstruction />
      <UpperFooter />
      <MiddleFooter />
      <Footer />
    </div>
  )
}

export default Process;