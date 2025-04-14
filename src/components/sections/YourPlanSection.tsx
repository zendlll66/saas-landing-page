import React from 'react'
import CheckIcon from '../common/CheckIcon'
import Btn from '../common/Btn'

const YourPlanSection = () => {
    return (
        <div className='lg:m-[140px] md:m-[10px] sm: '>
            <div className=''>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black  leading-tight flex justify-center'>
                    Choose Your Plan
                </h1>
                <p className='text-black flex justify-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam.
                </p>
            </div>
            <div className='grid  md:grid-cols-3 grid-cols-1 lg:gap-6 gap-3 mt-5  '>
                <div className='w-full  flex justify-center'>
                    <div className='p-6 py-12 max-w-sm '>
                        <div className='space-y-3 mb-3 '>
                            <h2 className='text-xl font-bold'>Free</h2>
                            <h1 className='text-2xl font-bold text-black'>$0</h1>
                            <p>Capture ideas and find them quickly</p>
                        </div>
                        <ul className='space-y-5 mb-10'>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                <span>Sync unlimited devices</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                <span>10 GB monthly uploads</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                <span>200 MB max. note size</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                <span>Customize Home dashboard and access extra widgets</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                Connect primary Google Calendar account
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                Add due dates, reminders, and notifications to your tasks
                            </li>
                        </ul>
                        <Btn
                            text="Get Started"
                            className=' text-black  transition-colors duration-300 transform hover:scale-105'
                        />
                    </div>
                </div>
                <div className='w-full  flex justify-center'>
                    <div className='bg-[#6D64FE] text-white px-6 py-12 rounded-xl max-w-sm  '>
                        <div className='space-y-3 mb-3'>
                            <h2 className='text-xl font-bold'>Personal</h2>
                            <h1 className='text-2xl font-bold text-amber-200'>$11.99</h1>
                            <p>Keep home and family on track</p>
                        </div>
                        <ul className='space-y-5 mb-10'>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon.png"} />
                                <span>Syn cunlimited devices</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon.png"} />
                                <span>10 GB monthly uploads</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon.png"} />
                                <span>200 MB max. note size</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon.png"} />
                                <span>Customize Home dashboard and access extra widgets</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon.png"} />
                                Connect primary Google Calendar account
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon.png"} />
                                Add due dates, reminders, and notifications to your tasks
                            </li>
                        </ul>
                        <Btn
                            text="Get Started"
                            className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white  transition-colors duration-300 transform hover:scale-105'
                        />
                    </div>
                </div>

                <div className='w-full  flex justify-center items-center'>
                    <div className='p-6 max-w-sm'>
                        <div className='space-y-3 mb-3'>
                            <h2 className='text-xl font-bold'>Organization</h2>
                            <h1 className='text-2xl font-bold text-black'>$49.99</h1>
                            <p>Capture ideas and find them quickly</p>
                        </div>
                        <ul className='space-y-5 mb-10'>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                <span>Sync unlimited devices</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                <span>10 GB monthly uploads</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                <span>200 MB max. note size</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                <span>Customize Home dashboard and access extra widgets</span>
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                Connect primary Google Calendar account
                            </li>
                            <li className='flex flex-row items-center  '>
                                <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                Add due dates, reminders, and notifications to your tasks
                            </li>
                        </ul>
                        <Btn
                            text="Get Started"
                            className=' text-black  transition-colors duration-300 transform hover:scale-105'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourPlanSection
