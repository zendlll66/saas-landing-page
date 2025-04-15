"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Btn from '../common/Btn'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='bg-[#6D64FE]/60 fixed z-[50] w-full backdrop-blur-xl '>
            <div className=' flex flex-row items-center justify-between py-3 lg:px-[120px] md:px-[50px] px-[20px]'>
                {/* Logo */}
                <Link href="#home">
                    <Image
                        src="/assets/image/Logo.png"
                        alt="logo"
                        width={200}
                        height={300}
                        className='w-[190px] h-[34px]'
                    />
                </Link>
                {/* Desktop Menu */}
                <div className='hidden md:flex flex-row space-x-10 items-center'>
                    <div className='text-white space-x-5'>
                        <Link href="#products">Products</Link>
                        <Link href="#solutions">Solutions</Link>
                        <Link href="#resources">Resources</Link>
                        <Link href="#pricing">Pricing</Link>
                    </div>
                    <div className='flex flex-row space-x-5 text-white justify-center items-center'>
                        <Btn text="Login" className='bg-[#FFE492] text-[#6D64FE]' />
                        <Btn text="Try Whitepace free" className='bg-[#4F9CF9] text-white md:text-[12px] ' />
                    </div>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className='md:hidden flex items-center'>
                    <button onClick={toggleMenu} className='text-white' aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-[#6D64FE] py-4 px-[20px]'>
                    <div className='flex flex-col space-y-4 text-white'>
                        <Link href="/">Products</Link>
                        <Link href="/">Solutions</Link>
                        <Link href="/">Resources</Link>
                        <Link href="/">Pricing</Link>
                        <div className='flex flex-col space-y-4'>
                            <Btn text="Login" className='bg-[#FFE492] text-[#6D64FE]' />
                            <Btn text="Try Whitepace free" className='bg-[#4F9CF9] text-white' />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
