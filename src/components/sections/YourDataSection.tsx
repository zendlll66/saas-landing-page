import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn'

const YourDataSection = () => {
    return (
        <div id='resources' className='py-[100px] px-4 sm:px-8 md:px-16 lg:px-[120px] flex flex-col lg:flex-row items-center gap-10'>
            
            {/* Text Section */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                <h1 data-aos="fade-up" className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight text-center lg:text-left'>
                    100% your data
                </h1>
                <p data-aos="fade-up" className='text-lg md:text-xl opacity-80 mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                    The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
                </p>
                <div data-aos="fade-up" className='flex justify-center lg:justify-start'>
                    <Btn
                        text="Read more"
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                    />
                </div>
            </div>

            {/* Image Section */}
            <div data-aos="fade-up" className='w-full lg:w-1/2 flex justify-center relative'>
                <div className='w-full max-w-md lg:max-w-lg'>
                    <Image
                        src="/assets/image/ElementData.png"
                        alt="ElementData"
                        width={600}
                        height={500}
                        layout="responsive"
                        quality={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default YourDataSection
