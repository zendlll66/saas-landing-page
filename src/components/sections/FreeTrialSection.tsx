import React from 'react'
import Btn from '../common/Btn'
import Image from 'next/image'

const FreeTrialSection = () => {
    return (
        <div className='w-full bg-[#6D64FE] text-white py-[100px] px-4 sm:px-8 md:px-16'>
            <div className='max-w-2xl mx-auto flex flex-col items-center text-center space-y-6'>
                <h1 data-aos="fade-up" className='font-bold text-4xl md:text-5xl'>
                    Try Whitepace<br />today
                </h1>

                <p data-aos="fade-up" className='text-base md:text-lg'>
                    Get started for free. <br />
                    Add your whole team as your needs grow.
                </p>
                <div data-aos="fade-up">
                    <Btn
                        text={"Try Taskey free"}
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                    />
                </div>


                <p data-aos="fade-up" className='text-sm opacity-80'>On a big team? <span className='underline cursor-pointer'>Contact sales</span></p>

                <div data-aos="fade-up" className='pt-8'>
                    <Image
                        src={"/assets/image/App-icon.png"}
                        alt='App Icon'
                        width={160}
                        height={160}
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default FreeTrialSection
