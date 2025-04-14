import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn'
const ProjectSection = () => {
    return (
        <div className='bg-white w-full relative px-[120px]'>
            {/* background Element */}
            <Image
                src="/assets/image/BACKGROUND.png"  // หรือ URL จากภายนอกก็ได้
                alt="logo"
                width={200}
                height={200}
                className='w-[200px] absolute top-[30%] '
            />

            <div className='flex flex-row my-[140px] space-x-[60px]   '>
                <div className='w-full lg:w-1/2 space-y-[60px]'>
                    <div className='space-y-[24px]'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight'>Project Management</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores, nisi voluptas fugit molestias reprehenderit modi quam cupiditate dolore! Inventore!</p>
                    </div>
                    <Btn
                        text="Try Whitepace Free"
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                    />
                </div>
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <Image
                        src="/assets/image/undraw_working.svg"  // หรือ URL จากภายนอกก็ได้
                        alt="logo"
                        width={500}
                        height={500}
                        className=' '
                    />

                </div>
            </div>
            <div className='flex flex-row my-[140px] space-x-[60px]   '>
                <div className='w-full lg:w-1/2'>
                    <Image
                        src="/assets/image/Work-Together-Image.png"  // หรือ URL จากภายนอกก็ได้
                        alt="work"
                        width={500}
                        height={500}
                        className=' '
                    />

                </div>
                <div className='w-full lg:w-1/2 space-y-[60px]'>
                    <div className='space-y-[24px]'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight'>Work together</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores, nisi voluptas fugit molestias reprehenderit modi quam cupiditate dolore! Inventore!</p>
                    </div>
                    <Btn
                        text="Try Whitepace Free"
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                    />
                </div>

            </div>
        </div>
    )
}

export default ProjectSection