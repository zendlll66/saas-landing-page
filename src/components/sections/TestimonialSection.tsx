import React from 'react'
import Image from 'next/image'

const TestimonialSection = () => {
    return (
        <div className='py-[120px] px-4 sm:px-8 md:px-16 lg:px-[120px]'>
            <h1 data-aos="fade-up" className='text-4xl font-bold text-center'>What Our Clients Says</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-[60px]'>
                {[1, 2, 3].map((item, index) => (
                    <div key={index} className='p-6 space-y-4 rounded-2xl shadow-lg bg-white'>
                        <Image
                            src={"/assets/image/Quote.svg"}
                            alt='Quote'
                            width={60}
                            height={60}
                            data-aos="fade-up"
                        />

                        <p data-aos="fade-up" className='text-gray-700'>
                            Whitepate is designed as a collaboration tool for businesses that is a full project management solution.
                        </p>

                        <div data-aos="fade-up" className='bg-black w-full h-[2px] my-6'></div>

                        <div data-aos="fade-up" className='flex flex-row items-center space-x-4'>
                            <Image
                                data-aos="fade-up"
                                src={`/assets/image/Avater${item}.svg`}
                                alt='Avatar'
                                width={60}
                                height={60}
                                className='rounded-full'
                            />
                            <div data-aos="fade-up" className='space-y-1'>
                                <h2 className='font-semibold'>Oberon Shaw, MCH</h2>
                                <p className='text-sm text-gray-600'>Head of Talent Acquisition, North America</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TestimonialSection
