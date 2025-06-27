import React from 'react'
import { FaCalendarAlt, FaCar } from 'react-icons/fa'
import { FaTimeline } from 'react-icons/fa6'
import { IoCarSportOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const HowToBookYourMOT = () => {
    return (
        <div className='flex flex-col w-full max-w-[1600px] mx-auto gap-12 items-center px-[188px] py-[100px] '>
            <h1 className='text-[56px] text-center w-full'>How To Book Your MOT</h1>
            <div className='flex gap-6 m'>
                <div className='flex flex-col items-center gap-6'>
                    <IoCarSportOutline className='text-6xl' />
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='font-medium'>Enter Your Details</h1>
                        <p className='text-[16px] font-base text-gray-400 w-[314px] h-[52px] text-center'>
                            Enter your car reg and postcode to find local garages near you.
                        </p>
                    </div>

                </div>
                <div className='flex flex-col items-center gap-6'>
                    <FaTimeline className='text-6xl' />
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='font-medium'>Choose A Date And Garage</h1>
                        <p className='text-[16px] font-base text-gray-400 w-[314px] h-[52px] text-center '>
                            Select one of our trusted garages and a date that best suits you.
                        </p>
                    </div>

                </div>
                <div className='flex flex-col items-center gap-6'>
                    <SlCalender className='text-6xl' />
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='font-medium'>Book Your Appointment</h1>
                        <p className='text-[16px] font-base text-gray-400 w-[314px] h-[52px] text-center'>
                            Confirm your booking – it’s that simple
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HowToBookYourMOT
