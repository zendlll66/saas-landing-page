import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn'

const AppsSection = () => {
    return (
        <div className='relative bg-[#6D64FE] py-[100px] px-4 sm:px-8 md:px-16 lg:px-[140px] overflow-hidden'>
            {/* Background Section */}
            <div className='absolute inset-0 w-full h-full z-0'>
                <Image
                    src={"/assets/image/Element-app.png"}
                    alt='app'
                    fill
                    className='object-cover opacity-30'
                />
            </div>

            <div className='relative z-10 flex flex-col lg:flex-row gap-10'>
                {/* Left Image */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <Image
                        src="/assets/image/Apps.png"
                        alt="work"
                        width={500}
                        height={500}
                        className='max-w-full h-auto'
                    />
                </div>

                {/* Right Text */}
                <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-10 text-white'>
                    <div className='space-y-6'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                            Work with Your Favorite Apps Using whitepace
                        </h1>
                        <p className='text-base md:text-lg opacity-90'>
                            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
                        </p>
                    </div>
                    <Btn
                        text="Read more"
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                    />
                </div>
            </div>
        </div>
    )
}

export default AppsSection
