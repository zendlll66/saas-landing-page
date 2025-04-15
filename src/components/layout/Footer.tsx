import React from 'react'
import Image from 'next/image'
import Btn from '../common/Btn'

const Footer = () => {
    return (
        <div className='bg-[#6D64FE] text-white px-4 sm:px-8 md:px-16 py-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12'>
                {/* Logo and Description */}
                <div className='max-w-xs space-y-4'>
                    <Image
                        src="/assets/image/Logo.png"  // หรือ URL จากภายนอกก็ได้
                        alt="logo"
                        width={200}
                        height={50}
                        className='w-[190px] h-[34px]'
                    />
                    <p className='text-sm'>
                        Whitepace was created for the new ways we live and work. We make a better workspace around the world.
                    </p>
                </div>

                {/* Product Links */}
                <div className='space-y-3'>
                    <h1 className='text-xl font-semibold'>Product</h1>
                    <h1>Overview</h1>
                    <h1>Pricing</h1>
                    <h1>Customer stories</h1>
                </div>

                {/* Resources Links */}
                <div className='space-y-3'>
                    <h1 className='text-xl font-semibold'>Resources</h1>
                    <h1>Blog</h1>
                    <h1>Guides & tutorials</h1>
                    <h1>Help center</h1>
                </div>

                {/* Company Links */}
                <div className='space-y-3'>
                    <h1 className='text-xl font-semibold'>Company</h1>
                    <h1>About us</h1>
                    <h1>Careers</h1>
                    <h1>Media kit</h1>
                </div>

                {/* CTA Section */}
                <div className='max-w-xs space-y-4'>
                    <h1 className='text-2xl font-semibold'>Try It Today</h1>
                    <p className='text-sm'>
                        Get started for free. Add your whole team as your needs grow.
                    </p>
                    <Btn 
                        text='Start today' 
                        className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white px-8 py-3 rounded-lg text-lg w-fit font-medium transition-colors duration-300 transform hover:scale-105' 
                    />
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className='mt-12 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center'>
                <div className='flex flex-row space-x-6 text-sm'>
                    <h1>English</h1>
                    <h1>Terms & privacy</h1>
                    <h1>Security</h1>
                    <h1>Status</h1>
                    <h1>©2021 Whitepace LLC.</h1>
                </div>
                <div>
                    <Image
                        src="/assets/image/Social-Icon.svg"  // หรือ URL จากภายนอกก็ได้
                        alt="Social Icon"
                        width={100}
                        height={50}
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer
