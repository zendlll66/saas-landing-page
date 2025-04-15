import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn' // Adjust the path based on your project structure

const ExtesionSection = () => {
    return (
        <div className='bg-[#6D64FE] flex flex-col md:flex-row items-center justify-center py-10 md:py-[120px] px-5 md:px-[120px] gap-10'>
            
            <div className='w-full md:w-1/2 flex flex-col justify-center text-center md:text-left'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                    Use as Extension
                </h1>
                <p className='text-base md:text-lg lg:text-xl text-white opacity-80 mb-8 max-w-lg mx-auto md:mx-0'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea animi reprehenderit nihil voluptas expedita vero in esse cupiditate praesentium magni!
                </p>
                <div className='flex justify-center md:justify-start'>
                    <Btn
                        text="Let go"
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                    />
                </div>
            </div>

            <div className='w-full md:w-1/2 flex justify-center'>
                <div className='w-full max-w-sm md:max-w-md lg:max-w-lg'>
                    <Image
                        src="/assets/image/undraw_bento-grid.svg"
                        alt="logo"
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

export default ExtesionSection
