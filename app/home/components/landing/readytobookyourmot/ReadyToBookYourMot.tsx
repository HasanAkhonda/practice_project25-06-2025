import Image from 'next/image'
import React from 'react'
import vector1 from '@/public/vectors/Group.svg'
import vector2 from '@/public/vectors/Groupleft.svg'

const ReadyToBookYourMot = () => {
    return (
        <div className='bg-gradient-to-bl  from-[#00cf00] via-[#00d00a] to-[#00b712]'>
            <div className='relative  text-white flex flex-col gap-6 px-[188px] pt-[163px] pb-[150px] max-w-[1600px] mx-auto items-center'>

            <h1 className='leading-[67.20px] text-6xl text-center w-full'>
                Ready To Book Your MOT?
            </h1>
            <p className='text-lg font-normal w-[604px]  text-center leading-7'>
                Book your MOT test today and ensure your vehicle stays legal, safe, and ready for the road.
            </p>
            <button className='bg-white px-6 py-3.5 rounded-xl text-black  text-lg font-normal font-Inter leading-relaxed'>
                Book My MOT
            </button>
            <Image className='absolute bottom-0 right-0' src={vector1} width={300} height={101} alt={''}/>
            <Image className='absolute bottom-0 left-0' src={vector2} width={160} height={101} alt={''}/>
        </div>
        </div>

    )
}

export default ReadyToBookYourMot
