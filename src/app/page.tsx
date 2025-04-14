import CustomiseSection from '@/components/sections/CustomiseSection'
import ExtesionSection from '@/components/sections/ExtesionSection'
import HomeSection from '@/components/sections/HomeSection'
import OurSponsorsSection from '@/components/sections/OurSponsorsSection'
import OurSponsors from '@/components/sections/OurSponsorsSection'
import ProjectSection from '@/components/sections/ProjectSection'
import SloganSection from '@/components/sections/SloganSection'
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
    </div>
  )
}

export default page