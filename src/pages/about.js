import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/about/Header'
import CTA from '../components/about/CTA'
import Info from '../components/about/Info'
import Hero from '../components/about/Hero'


import Footer from '../components/Footer'

const about = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Hero />
        <Info />
        <CTA />
        <Footer />
    </>
  )
}

export default about