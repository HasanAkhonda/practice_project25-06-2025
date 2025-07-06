import Image from 'next/image'
import React from 'react'
import stearing from '@/public/vectors/stearing.svg'
import garage from '@/public/vectors/garage.svg'
const page = () => {
    return (
        <div className='bg-cover bg-[url("/images/Ract.png")] object-cover bg-center  h-[912px] flex flex-col items-center justify-center gap-10 sm:gap-20 md:gap-40'>
            <div>
                <span className="text-center text-white text-4xl md:text-6xl gap-3.5 leading-[67.20px] font-normal flex-wrap flex  justify-center">
                    <span className=" font-Inder ">Log in</span>
                    <span className=" font-Arial_Rounded_MT_Bold"> simplymot.co.uk </span>
                    <span className=" font-Inder ">Account</span>
                </span>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className="w-60 h-60 p-8 bg-white rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px] inline-flex flex-col justify-center items-center gap-4">
                    <Image src={stearing} alt={''} width={80} height={80} className='max-w-20 h-20 aspect-square' />
                    <span className="   text-2xl font-medium font-Inter leading-7">Driver Log In</span>
                </div>
                <div className="w-60 h-60 p-8 bg-white rounded-2xl shadow-[0px_0px_10px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px] inline-flex flex-col justify-center items-center gap-4">
                    <Image src={garage} alt={''} width={80} height={80} className='max-w-20 h-20 aspect-square' />
                    <span className="    text-2xl font-medium font-Inter leading-7">Garage Log In</span>
                </div>
            </div>
        </div>
    )
}

export default page
