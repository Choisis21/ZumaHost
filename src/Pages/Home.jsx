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

// ====== FAQ DATA ======
const homefaqs = [
  {
    question: "How can I trust Zuma Host?",
    answer:
      "At Zuma Host, we pride ourselves on offering the best web hosting service possible. Our support is friendly and efficient, and we keep our prices low to ensure that our clients get the best value for their money. If you wish to speak to us further about how to host your site, contact us on live chat or call us today.",
  },
  {
    question:
      "What is an SSL certificate? Can I get a free SSL certificate with my web hosting plan?",
    answer:
      "An SSL certificate encrypts data transferred between your website and its visitors, providing a secure browsing experience. Yes, all our web hosting plans include free SSL certificates at no additional cost.",
  },
  {
    question: "Can I transfer my existing domain to your platform?",
    answer:
      "Absolutely. We support easy, fast domain transfers with no downtime. Our support team can guide you through unlocking your domain and providing the EPP/Auth code.",
  },
  {
    question: "How long does domain registration take?",
    answer:
      "Domain registration is usually instant. Once you complete your order, the domain becomes active and ready to use within minutes.",
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Absolutely! All hosting plans support one-click upgrades without downtime. You can scale to more storage, bandwidth, or speed anytime.",
  },
  {
    question: "Do you offer migration support?",
    answer:
      "Yes, our team offers free website migration with all plans. We'll handle everything to ensure your site transitions smoothly without downtime.",
  },
];

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
      <Faqs 
      title="Frequently Asked Questions"
      faqs={homefaqs}
      />
      <Testimonials />
    </div>
  )
}

export default Home