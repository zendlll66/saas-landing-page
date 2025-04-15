import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn'

const ProjectSection = () => {
    return (
        <div className='bg-white w-full relative px-5 md:px-[120px]'>
            {/* background Element */}
            <Image
                src="/assets/image/BACKGROUND.png"
                alt="logo"
                width={200}
                height={200}
                className='w-[200px] absolute top-[30%] left-0 z-0'
            />

            {/* Section 1 */}
            <div className='flex flex-col lg:flex-row my-[80px] lg:my-[140px] gap-y-10 lg:gap-y-0 lg:space-x-[60px] relative z-10'>
                <div className='w-full lg:w-1/2 space-y-[40px] text-center lg:text-left'>
                    <div className='space-y-[24px]'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight'>
                            Project Management
                        </h1>
                        <p className='text-gray-700'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores, nisi voluptas fugit molestias reprehenderit modi quam cupiditate dolore! Inventore!
                        </p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <Btn
                            text="Try Whitepace Free"
                            className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <Image
                        src="/assets/image/undraw_working.svg"
                        alt="working"
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            {/* Section 2 */}
            <div className='flex flex-col lg:flex-row-reverse my-[80px] lg:my-[140px] gap-y-10 lg:gap-y-0 lg:space-x-[60px] relative z-10'>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <Image
                        src="/assets/image/Work-Together-Image.png"
                        alt="work together"
                        width={500}
                        height={500}
                    />
                </div>
                <div className='w-full lg:w-1/2 space-y-[40px] text-center lg:text-left'>
                    <div className='space-y-[24px]'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight'>
                            Work together
                        </h1>
                        <p className='text-gray-700'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores, nisi voluptas fugit molestias reprehenderit modi quam cupiditate dolore! Inventore!
                        </p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <Btn
                            text="Try Whitepace Free"
                            className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection
