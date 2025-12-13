import React from 'react'
import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonials'
import ContactForm from '../pages/ContactForm'
import AlwaysReady from '../pages/AlwaysReady'

export default function page() {
  return (
    <div>
      <Hero/>
      <About/>
      <Testimonials/>
      {/* <ContactForm/> */}
      <AlwaysReady/>
    </div>
  )
}
