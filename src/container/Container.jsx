import React from 'react'
import About from './About/About';
import Header from './Header/Header';
import Skills from './Skills/Skills';
import Testimonial from './Testimonial/Testimonial';
import Work from './Work/Work';
import Footer from './Contact/Contact';

const Container = () => {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />

    </div>
  )
}

export default Container