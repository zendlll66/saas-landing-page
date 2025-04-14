import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn' // Adjust the path based on the actual location of the Btn component

const CustomiseSection = () => {
    return (
        <div className='flex flex-row my-[140px] space-x-[60px] px-[140px]'>
            <div className='w-full lg:w-1/2'>
                <Image
                    src="/assets/image/undraw_advanced-customization.svg"  // หรือ URL จากภายนอกก็ได้
                    alt="work"
                    width={500}
                    height={500}
                    className=' '
                />

            </div>
            <div className='w-full lg:w-1/2 space-y-[60px]'>
                <div className='space-y-[24px]'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight'>Customise it
                        to your needs</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores, nisi voluptas fugit molestias reprehenderit modi quam cupiditate dolore! Inventore!</p>
                </div>
                <Btn
                    text="Let's Go"
                    className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                />
            </div>

        </div>
    )
}

export default CustomiseSection