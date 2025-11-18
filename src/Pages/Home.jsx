import React from 'react'
import Hero from '../Components/Hero'
import Domainchecker from '../Components/Domainchecker'
import PricingSection from '../Components/Pricingsection'
import Advantage from '../Components/Advantage'
import Transfer from '../Components/TransferSteps'
import Testimonials from '../Components/Testimonials'
import DataCenters from '../Components/DataCenters'
import Faqs from '../Components/Faqs'
import Security from "../Components/security"

const Home = () => {
  return (
    <div>
      <Hero />
      <Domainchecker  />
      <PricingSection />
      <Advantage />
      <Security />
      <Transfer />
      <DataCenters />
      <Faqs />
      <Testimonials />
    </div>
  )
}

export default Home