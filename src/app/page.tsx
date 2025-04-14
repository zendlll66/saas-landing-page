import CustomiseSection from '@/components/sections/CustomiseSection'
import ExtesionSection from '@/components/sections/ExtesionSection'
import HomeSection from '@/components/sections/HomeSection'
import ProjectSection from '@/components/sections/ProjectSection'
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
    </div>
  )
}

export default page