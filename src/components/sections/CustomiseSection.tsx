import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn'

const CustomiseSection = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center my-[80px] lg:my-[140px] px-5 md:px-[70px] lg:px-[140px] gap-y-10 lg:gap-y-0 lg:space-x-[60px]'>

            <div className='w-full lg:w-1/2 flex justify-center'>
                <Image
                    src="/assets/image/undraw_advanced-customization.svg"
                    alt="customization"
                    width={500}
                    height={500}
                    data-aos="fade-up"
                />
            </div>

            <div className='w-full lg:w-1/2 space-y-[40px] text-center lg:text-left'>
                <div className='space-y-[24px]'>
                    <h1 data-aos="fade-up" className='text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight'>
                        Customise it to your needs
                    </h1>
                    <p data-aos="fade-up" className='text-gray-700'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores, nisi voluptas fugit molestias reprehenderit modi quam cupiditate dolore! Inventore!
                    </p>
                </div>
                <div data-aos="fade-up" className='flex justify-center lg:justify-start'>
                    <Btn
                        text="Let's Go"
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                    />
                </div>
            </div>
        </div>
    )
}

export default CustomiseSection
