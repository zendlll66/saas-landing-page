import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Btn from '../common/Btn'
const Navbar = () => {
    // px-[220px]
    return (
        <div className='bg-[#6D64FE]  w-full '> 
            <div className='flex flex-row items-center justify-between py-3 px-[120px]'> 
                <Image
                    src="/assets/image/Logo.png"  // หรือ URL จากภายนอกก็ได้
                    alt="logo"
                    width={200}
                    height={300}
                    className='w-[190px] h-[34px]'
                />

                <div className='flex flex-row space-x-10 items-center '>
                    <div className='text-white space-x-5'>
                        <Link href="/">
                            Products
                        </Link>
                        <Link href="/">
                            Solutions
                        </Link>
                        <Link href="/">
                            Resources
                        </Link>
                        <Link href="/">
                            Pricing
                        </Link>
                    </div>
                    <div className='flex flex-row space-x-5 text-white'>
                        <Btn text = {"Login"} className='bg-[#FFE492] text-[#6D64FE]' />
                        <Btn text = {"Try Whitepace free"} className='bg-[#4F9CF9] text-white'  />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar