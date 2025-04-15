import React from 'react'
import CheckIcon from '../common/CheckIcon'
import Btn from '../common/Btn'

const YourPlanSection = () => {
    return (
        <div className='md:my-[120px] lg:mx-[120] my-[120px] px-4'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight'>
                    Choose Your Plan
                </h1>
                <p className='text-black'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, magnam.
                </p>
            </div>

            {/* Scrollable cards container on mobile */}
            <div className='overflow-x-auto'>
                <div className='flex md:grid md:grid-cols-3 gap-6 min-w-[700px] md:min-w-0'>
                    
                    {/* --- Card 1 --- */}
                    <div className='w-full flex justify-center'>
                        <div className='p-6 py-12 max-w-sm bg-white rounded-lg shadow-md'>
                            <div className='space-y-3 mb-3'>
                                <h2 className='text-xl font-bold'>Free</h2>
                                <h1 className='text-2xl font-bold text-black'>$0</h1>
                                <p>Capture ideas and find them quickly</p>
                            </div>
                            <ul className='space-y-5 mb-10 text-sm'>
                                {[
                                    "Sync unlimited devices",
                                    "10 GB monthly uploads",
                                    "200 MB max. note size",
                                    "Customize Home dashboard and access extra widgets",
                                    "Connect primary Google Calendar account",
                                    "Add due dates, reminders, and notifications to your tasks"
                                ].map((item, i) => (
                                    <li key={i} className='flex items-start'>
                                        <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Btn text="Get Started" className='text-black hover:scale-105 transition duration-300' />
                        </div>
                    </div>

                    {/* --- Card 2 --- */}
                    <div className='w-full flex justify-center'>
                        <div className='bg-[#6D64FE] text-white px-6 py-12 rounded-xl max-w-sm shadow-md'>
                            <div className='space-y-3 mb-3'>
                                <h2 className='text-xl font-bold'>Personal</h2>
                                <h1 className='text-2xl font-bold text-amber-200'>$11.99</h1>
                                <p>Keep home and family on track</p>
                            </div>
                            <ul className='space-y-5 mb-10 text-sm'>
                                {[
                                    "Syn cunlimited devices",
                                    "10 GB monthly uploads",
                                    "200 MB max. note size",
                                    "Customize Home dashboard and access extra widgets",
                                    "Connect primary Google Calendar account",
                                    "Add due dates, reminders, and notifications to your tasks"
                                ].map((item, i) => (
                                    <li key={i} className='flex items-start'>
                                        <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"Icon.png"} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Btn text="Get Started" className='bg-[#4F9CF9] hover:bg-[#3a8bef] text-white hover:scale-105 transition duration-300' />
                        </div>
                    </div>

                    {/* --- Card 3 --- */}
                    <div className='w-full flex justify-center'>
                        <div className='p-6 py-12 max-w-sm bg-white rounded-lg shadow-md'>
                            <div className='space-y-3 mb-3'>
                                <h2 className='text-xl font-bold'>Organization</h2>
                                <h1 className='text-2xl font-bold text-black'>$49.99</h1>
                                <p>Capture ideas and find them quickly</p>
                            </div>
                            <ul className='space-y-5 mb-10 text-sm'>
                                {[
                                    "Sync unlimited devices",
                                    "10 GB monthly uploads",
                                    "200 MB max. note size",
                                    "Customize Home dashboard and access extra widgets",
                                    "Connect primary Google Calendar account",
                                    "Add due dates, reminders, and notifications to your tasks"
                                ].map((item, i) => (
                                    <li key={i} className='flex items-start'>
                                        <CheckIcon className='w-[15px] h-[15px] mr-3 shrink-0' imageName={"icon-black.png"} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Btn text="Get Started" className='text-black hover:scale-105 transition duration-300' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default YourPlanSection
