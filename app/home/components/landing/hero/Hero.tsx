import React from 'react';
import BookYourVehicleIn from '../../forms/BookYourVehicleIn';
import Image from 'next/image';
import c1 from '@/public/clients/Ellipse 1.png';
import c2 from '@/public/clients/Ellipse 2.png';
import c3 from '@/public/clients/Ellipse 3.png';
import c4 from '@/public/clients/Ellipse 4.png';
import star from '@/public/vectors/star.svg';
import starhlf from '@/public/vectors/StarHalf.svg';
import { FaStar } from 'react-icons/fa';

const Hero = () => {
    return (
        // gradient-to-bl from-[#00cf00] via-[#00d00a] to-[#00b712]
        <div
            // className='bg-[&src(`./public/images/Ract.png`)]'
            className='bg-cover bg-[url("/images/Ract.png")]'
        >
            <section
                id="Hero"
                className="flex flex-col lg:flex-row    gap-8 items-center   justify-between    max-w-[1600px] px-5 sm:px-10   md:px-12 lg:px-[188px] py-[60px] lg:py-[100px]   sm:py-8   md:py-[169px] mx-auto  "
            >
                {/* Left Text Section */}
                <div className='flex-1 flex flex-col gap-8 '>
                    <div className=" text-center md:text-left gap-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal font-['Inder'] leading-tight">
                            MOT Bookings Made Simple.
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white font-['Inter'] leading-relaxed max-w-xl mx-auto md:mx-0">
                            Find Trusted MOT Garages Near You. No Upfront Payments. Book Anytime, Anywhere.
                        </p>
                    </div>
                    {/* clients happy */}
                    <div className='flex flex-col gap-3 fit px-2'>
                        <div className='flex  gap-3 fit px-2'>
                            <div className='flex  relative  w-[150px] '>
                                <Image src={c1} alt={'client 1'} width={48} height={48} className=' ' />
                                <Image src={c2} alt={'client 2'} width={48} height={48} className='-translate-x-3.5 ' />
                                <Image src={c3} alt={'client 3'} width={48} height={48} className=' -translate-x-8.5 ' />
                                <Image src={c4} alt={'client 4'} width={48} height={48} className=' -translate-x-13.5 ' />

                            </div>

                            <div className='flex flex-col -gap-1'>
                                <h1 className='text-[#FADF2F]'>100+</h1>
                                <h1 className='text-white'>happy clients</h1>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[8.96px]'>
                            <div className='flex'><Image src={star} alt={''} /> </div>
                            <div className='flex'><Image src={starhlf} alt={''} /> </div>

                        </div>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="flex-1  ">
                    <BookYourVehicleIn />
                </div>
            </section>
        </div>
    );
};

export default Hero;
