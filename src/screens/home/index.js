import React from 'react'
import Navbar from '../../navbar/Navbar';
import Index from './homeBanner/Index';
import Building from './Building-today/Building';
import Services from './services/Services';
import Process from './process/Process';
import UpperFooter from '../../utils/UpperFooter';
import MiddleFooter from '../../utils/MiddleFooter';
import Footer from '../../utils/Footer';


function Home() {
  return (
    <div >
      <Navbar />
      {/* HOme banner */}
      <Index />  

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
      <Footer />

    </div>
  )
}

export default Home;