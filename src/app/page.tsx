import Footer from '@/components/layout/Footer'
import AppsSection from '@/components/sections/AppsSection'
import CustomiseSection from '@/components/sections/CustomiseSection'
import ExtesionSection from '@/components/sections/ExtesionSection'
import FreeTrialSection from '@/components/sections/FreeTrialSection'
import HomeSection from '@/components/sections/HomeSection'
import OurSponsorsSection from '@/components/sections/OurSponsorsSection'
import ProjectSection from '@/components/sections/ProjectSection'
import SloganSection from '@/components/sections/SloganSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import YourDataSection from '@/components/sections/YourDataSection'
import YourPlanSection from '@/components/sections/YourPlanSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HomeSection/> 
      <ProjectSection/>
      <ExtesionSection/>
      <CustomiseSection/>
      <YourPlanSection/>
      <SloganSection/>
      <YourDataSection/>
      <OurSponsorsSection/>
      <AppsSection/>
      <TestimonialSection/>
      <FreeTrialSection/>
      <Footer/>
    </div>
  )
}

export default page