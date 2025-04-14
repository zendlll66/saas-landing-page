import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn'
const HomeSection = () => {
    return (
        <div className='bg-[#6D64FE] h-screen w-full flex justify-center items-center px-[120px] '>
            {/* background Element */}
            <Image
                src="/assets/image/Element.svg"  // หรือ URL จากภายนอกก็ได้
                alt="logo"
                width={500}
                height={300}
                className='w-full absolute'
            />

<div className='container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-16'>
                {/* Text Content */}
                <div className='w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left'>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                        Get More Done with Whitepace
                    </h1>
                    <p className='text-lg md:text-xl text-white opacity-80 mb-8 max-w-lg mx-auto lg:mx-0'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea animi reprehenderit nihil voluptas expedita vero in esse cupiditate praesentium magni!
                    </p>
                    <div className='flex justify-center lg:justify-start'>
                        <Btn
                            text="Try Whitepace Free"
                            className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors duration-300 transform hover:scale-105'
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 flex justify-center relative '>
                    <div className='w-full max-w-md lg:max-w-lg'>
                        <Image
                            src="/assets/image/undraw_avatars_xsfb.svg"  // หรือ URL จากภายนอกก็ได้
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
        </div>
    )
}

export default HomeSection