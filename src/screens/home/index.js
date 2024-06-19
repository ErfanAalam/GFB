import React from 'react'
import Navbar from '../../navbar/Navbar';
import Building from './Building-today';
import Services from './services';
import Process from './process';
import UpperFooter from '../../utils/UpperFooter';
import MiddleFooter from '../../utils/MiddleFooter';
import Footer from '../../utils/Footer';
import Homebanner from './homeBanner/Index';


function Home() {
  return (
    <div className='font-orelaga'>
      <Navbar />
      {/* Home banner */}
      <Homebanner />

      {/* building today */}
      <Building />

      {/* Service section */}
      <Services />

      {/* Process section */}
      <Process />

      {/* Start your build journey */}
      <UpperFooter />

      {/* MiddleFooter */}
      <MiddleFooter />
      {/* Footer */}
      <Footer link1 ="homebanner"  link2 ="building" link3="services" link4="process" link5="startjourney" />

    </div>
  )
}

export default Home;