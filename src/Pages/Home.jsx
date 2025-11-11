import React from 'react'
import Hero from '../Components/Hero'
import Domainchecker from '../Components/Domainchecker'
import PricingSection from '../Components/Pricingsection'
import Advantage from '../Components/Advantage'
import Migration from '../Components/Migration'
import Testimonials from '../Components/Testimonials'
import DataCenters from '../Components/DataCenters'
import Faqs from '../Components/Faqs'

const Home = () => {
  return (
    <div>
      <Hero />
      <Domainchecker  />
      <PricingSection />
      <Advantage />
      <Migration />
      <Testimonials />
      <DataCenters />
      <Faqs />
    </div>
  )
}

export default Home