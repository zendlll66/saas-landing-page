import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn' // Adjust the path based on your project structure

const ExtesionSection = () => {
    return (
        <div className='bg-[#6D64FE] py-[140px] px-[120px] flex flex-row'>
            <div className='w-1/2  flex flex-col justify-center '>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                    Use as Extension
                </h1>
                <p className='text-lg md:text-xl text-white opacity-80 mb-8 max-w-lg mx-auto lg:mx-0'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea animi reprehenderit nihil voluptas expedita vero in esse cupiditate praesentium magni!
                </p>
                <div className='flex justify-center lg:justify-start'>
                    <Btn
                        text="Let go"
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                    />
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center relative '>
                <div className='w-full max-w-md lg:max-w-lg'>
                    <Image
                        src="/assets/image/undraw_bento-grid.svg"  // หรือ URL จากภายนอกก็ได้
                        alt="logo"
                        width={600}
                        height={500}
                        layout="responsive"
                        quality={100}
                        className=''
                    />
                </div>
            </div>

        </div>
    )
}

export default ExtesionSection