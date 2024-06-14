import React from 'react'
import Navbar from '../../navbar/Navbar'
import Homebanner from './Homebanner';
import Faq from './FAQ';
import ContactForm from './Contact';
import UpperFooter from '../../utils/UpperFooter';
import MiddleFooter from '../../utils/MiddleFooter';
import Footer from '../../utils/Footer';
import Subject from './Subject';



function Contact() {
  return (
    <div className='font-orelaga'>
      <Navbar />
      <Homebanner />
      <ContactForm />
      {/* <Subject /> */}
      <Faq />
      <UpperFooter />
      <MiddleFooter />
      <Footer />
    </div>
  )
}

export default Contact;