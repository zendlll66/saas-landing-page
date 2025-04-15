import React from 'react'
import Image from 'next/image';

const OurSponsorsSection = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-[120px] py-[60px]">
      <h1 data-aos="fade-up" className="text-4xl md:text-5xl font-bold text-center mb-10">
        Our Sponsors
      </h1>

      <div data-aos="fade-up" className="flex md:flex-row flex-col gap-10 items-center justify-center ">
        <Image
          src="/assets/image/Apple.png"
          alt="Apple"
          width={100}
          height={50}
          className="object-contain shrink-0"
        />
        <Image
          src="/assets/image/microsoft.png"
          alt="Microsoft"
          width={150}
          height={50}
          className="object-contain shrink-0"
        />
        <Image
          src="/assets/image/Slack.png"
          alt="Slack"
          width={150}
          height={50}
          className="object-contain shrink-0"
        />
        <Image
          src="/assets/image/Google.png"
          alt="Google"
          width={150}
          height={50}
          className="object-contain shrink-0"
        />
      </div>
    </div>
  )
}

export default OurSponsorsSection
