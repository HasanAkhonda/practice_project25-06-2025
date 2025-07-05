import React from 'react'

const TermsGarages = () => {
    return (
        <div>
            <div className='bg-[#00ce04] w-full '>
                <div className='lg:px-6 md:px-12 lg:px-[188px] py-[60px] lg:py-[100px]  px-6 md:px-12 py-[100px] flex flex-col gap-8 md:gap-12  mx-auto w-full justify-between items-center text-sm font-medium'>
                    <span className="text-white text-6xl font-normal  font-Inder leading-[67.20px]">Terms and Conditions for Garages</span>
                </div>
            </div>
            {/* body drivers  */}
            <div className=' px-6 md:px-12 lg:px-6 md:px-12 lg:px-[188px] py-[60px] lg:py-[100px] py-[100px] flex flex-col gap-8 md:gap-12  max-w-[1600px]  mx-auto w-full justify-between items-start text-sm font-medium'>
                <div className='flex flex-col gap-3'>
                    <span className="text-gray-950 text-2xl font-medium  font-Poppins leading-9">Last Updated: May 2025</span>
                    <span className="text-black text-lg font-normal  font-Poppins leading-loose">By subscribing to and using the simplymot.co.uk platform, you agree to the following terms:</span>
                </div>
                {/* 1 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">1. Garage Eligibility and Responsibilities</span>
                    <div className='flex flex-col gap-3'>
                        <span className="text-black text-lg font-normal  font-Poppins leading-loose">You confirm that your garage is fully registered and authorized by the DVSA (Driver and Vehicle Standards Agency) to carry out MOT tests.</span>
                        <span className="text-black text-lg font-normal  font-Poppins leading-loose">You agree to provide MOT services in accordance with all applicable laws, regulations, and professional standards.</span>
                        <span className="text-black text-lg font-normal  font-Poppins leading-loose">You are responsible for the accuracy and completeness of the information provided on your garage profile.</span>
                        <span className="text-black text-lg font-normal  font-Poppins leading-loose">You agree to respond promptly to booking requests and notify customers of any cancellations or rescheduling.</span>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">2. Subscription and Payment</span>
                    <div className='flex flex-col gap-3'>
                        <span className="text-black text-lg font-normal  font-Poppins leading-loose">Garages pay a monthly subscription fee to be listed and receive booking requests through simplymot.co.uk.</span>
                        <span className="text-black text-lg font-normal  font-Poppins leading-loose">Subscription fees are payable in advance and are non-refundable unless otherwise agreed in writing.</span>
                        <span className="text-black text-lg font-normal  font-Poppins leading-loose">simplymot.co.uk reserves the right to revise subscription fees periodically. Garages will be notified of any such changes in advance by email and/or postal mail.</span>
                        <span className="text-black text-lg font-normal  font-Poppins leading-loose">simplymot.co.uk does not take any commission on MOT service fees charged by the garage to customers.</span>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex flex-col gap-6'>
                    <div className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">3. Booking Management</div>
                    <div className='flex flex-col gap-3'>
                        <span className="self-stretch justify-start text-zinc-950 text-lg font-normal  font-Inter leading-7">Booking confirmations, cancellations, and communication with customers are the responsibility of the garage.</span>
                        <span className="self-stretch justify-start text-zinc-950 text-lg font-normal  font-Inter leading-7">Garages must ensure that booked MOT services are provided as agreed.</span>
                        <span className="self-stretch justify-start text-zinc-950 text-lg font-normal  font-Inter leading-7">Garages may cancel bookings but must notify customers as soon as possible.</span>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex flex-col gap-6'>
                    <span className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">4. Liability and Indemnity</span>
                    <div className='flex flex-col gap-3'>
                        <span className="self-stretch justify-start text-black text-lg font-normal  font-Poppins leading-loose">simplymot.co.uk acts solely as a booking platform and is not responsible for the quality, safety, or legality of any MOT services provided by garages.</span>
                        <span className="self-stretch justify-start text-black text-lg font-normal  font-Poppins leading-loose">The garage indemnifies simplymot.co.uk against any claims, damages, or losses arising from the garage’s actions or omissions.</span>
                        <span className="self-stretch justify-start text-black text-lg font-normal  font-Poppins leading-loose">Garages must comply with all relevant laws and standards.</span>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex flex-col gap-6'>
                    <span className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">5. Suspension and Termination</span>
                    <div className='flex flex-col gap-3'>
                        <span className="self-stretch justify-start text-black text-lg font-medium  font-Poppins leading-loose">simplymot.co.uk reserves the right to suspend or terminate a garage’s access to the platform for breach of these terms or repeated customer complaints.</span>
                        <span className="self-stretch justify-start text-black text-lg font-medium  font-Poppins leading-loose">Subscription fees paid prior to suspension or termination are non-refundable.</span>

                    </div>
                </div>
                {/* 6 */}
                <div className='flex flex-col gap-6'>
                    <span className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">6. Governing Law</span>
                    <span className="self-stretch justify-start text-black text-lg font-normal  font-Poppins leading-loose">These Terms are governed by the laws of England and Wales. Disputes shall be subject to the exclusive jurisdiction of the English courts.</span>
                </div>
                {/* 7 */}
                <div className='flex flex-col gap-6'>
                    <span className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">7. Contact Us</span>
                    <div className='flex flex-col gap-[18px]'>
                        <span className="  justify-start text-black text-lg font-normal  font-Poppins leading-loose">If you have any questions or concerns regarding these terms or your subscription, please contact us at:</span>
                        <div className='flex flex-col gap-3'>
                            <span className="  justify-start text-neutral-600 text-lg font-normal  font-Inter leading-7">Email Address:</span>
                            <span className="  justify-start text-zinc-950 text-xl font-medium  font-Inter leading-loose">info@simplymot.co.uk</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className="  justify-start text-neutral-600 text-lg font-normal  font-Inter leading-7">Website: </span>
                            <span className="  justify-start text-zinc-950 text-xl font-medium  font-Inter leading-loose">https://www.simplymot.co.uk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsGarages
