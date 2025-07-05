import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div>
            <div className='bg-[#00ce04] w-full '>
                <div className='lg:px-[188px]  px-6 md:px-12 py-[100px] flex flex-col gap-8 md:gap-12  mx-auto w-full justify-between items-center text-sm font-medium'>
                    <span className="text-white text-6xl font-normal  font-Inder leading-[67.20px]">Privacy Policy</span>
                </div>
            </div>
            {/* body drivers  */}
            <div className=' px-6 md:px-12 lg:px-[188px] py-[100px] flex flex-col gap-8 md:gap-12  max-w-[1600px]  mx-auto w-full justify-between items-start text-sm font-medium'>
                <div className='flex flex-col gap-3'>
                    <span className="text-gray-950 text-2xl font-medium  font-Poppins leading-9">Last Updated: May 2025</span>
                    <span className="text-black text-lg font-normal  font-Poppins leading-loose">simplymot.co.uk (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our website and services.</span>
                </div>
                {/* 1 */}
                <div className='flex flex-col gap-6'>
                    <span className="  text-black text-3xl font-medium font-Poppins leading-10">1. Information We Collect</span>
                    <div className='flex flex-col gap-[18px]'>
                        <span className=" text-black text-2xl font-medium font-Poppins leading-9">From Drivers:</span>
                        <div className='flex flex-col gap-3'>
                            <span className="text-black text-lg font-normal font-Poppins leading-loose">Name</span>
                            <span className="text-black text-lg font-normal font-Poppins leading-loose">Email address</span>
                            <span className="text-black text-lg font-normal font-Poppins leading-loose">Phone number</span>
                            <span className="text-black text-lg font-normal font-Poppins leading-loose">Postal address</span>
                            <span className="text-black text-lg font-normal font-Poppins leading-loose">Vehicle details (make, model, registration)</span>
                            <span className="text-black text-lg font-normal font-Poppins leading-loose">MOT expiry date</span>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex flex-col gap-6'>
                    <span className="  text-black text-3xl font-medium font-Poppins leading-10">2. How We Use Your Information</span>
                    <div className='flex flex-col gap-[18px]'>
                        <span className="text-black text-lg font-medium font-Poppins  leading-loose">We use your information to:</span>
                        <ol className='list-disc list-inside flex flex-col gap-3'>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">Process and manage MOT booking requests</span></li>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">Communicate confirmations, updates, and service-related information</span></li>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">Improve and personalise the website and our services</span></li>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">Send marketing communications (with your consent)</span></li>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">Comply with legal and regulatory requirements</span></li>
                        </ol>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex flex-col gap-6'>
                    <span className="  text-black text-3xl font-medium font-Poppins leading-10">3. Legal Basis for Processing</span>
                    <div className='flex flex-col gap-[18px]'>
                        <span className="text-black text-lg font-medium font-Poppins  leading-loose">We process your data under one or more of the following legal bases:</span>
                        <ol className='list-disc list-inside flex flex-col gap-3'>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">Your consent</span></li>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">To fulfil a contract with you (e.g., bookings)</span></li>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">Compliance with legal obligations</span></li>
                            <li><span className="text-zinc-950 text-lg font-normal font-Inter leading-7">Legitimate interests, such as improving our platform</span></li>
                        </ol>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">4. Sharing Your Information</span>
                    <div className='flex flex-col gap-3'>
                        <span className=" text-black text-lg font-normal font-Poppins leading-loose">We share necessary driver information with garages to facilitate bookings.</span>
                        <span className=" text-black text-lg font-normal font-Poppins leading-loose">We may use trusted third-party service providers for website and communication support.</span>
                        <span className=" text-black text-lg font-normal font-Poppins leading-loose">We do not sell your personal data.</span>
                        <span className=" text-black text-lg font-normal font-Poppins leading-loose">We may disclose information if required by law.</span>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex flex-col gap-6'>
                    <span className="  text-black text-3xl font-medium  font-Poppins leading-10">5. Cookies</span>
                    <span className="  text-black  text-lg font-normal font-Poppins leading-loose">We use cookies to enhance your browsing experience and gather website usage analytics. You can manage or disable cookies in your browser settings.</span>
                </div>
                {/* 6 */}
                <div className='flex flex-col gap-6'>
                    <span className="  text-black text-3xl font-medium  font-Poppins leading-10">6. Your Rights</span>
                    <div className='flex flex-col gap-3'>
                        <span className=" text-black text-lg font-medium font-Poppins leading-loose">You have the right to:</span>
                        <ol className='list-disc list-inside flex flex-col gap-3'>
                            <li><div className=" text-zinc-950 text-lg font-normal font-Inter leading-7">Access your personal data</div></li>
                            <li><div className=" text-zinc-950 text-lg font-normal font-Inter leading-7">Correct inaccurate information</div></li>
                            <li><div className=" text-zinc-950 text-lg font-normal font-Inter leading-7">Request data deletion (where applicable)</div></li>
                            <li><div className=" text-zinc-950 text-lg font-normal font-Inter leading-7">Object to or limit data processing</div></li>
                            <li><div className=" text-zinc-950 text-lg font-normal font-Inter leading-7">Withdraw consent (e.g., for marketing)</div></li>
                            <li><div className=" text-zinc-950 text-lg font-normal font-Inter leading-7">Request data portability</div></li>
                            <li><div className=" text-zinc-950 text-lg font-normal font-Inter leading-7">To exercise any of these rights, please contact us (see Section 11).</div></li>
                        </ol>
                    </div>
                </div>
                {/* 7 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">7. Data Security</span>
                    <span className="text-black  text-lg font-normal font-Poppins leading-loose">We take reasonable measures to protect your data from loss, misuse, and unauthorized access. However, no internet-based service is 100% secure.</span>
                </div>
                {/* 8 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">8. Data Retention</span>
                    <div className='flex flex-col gap-3'>
                        <span className="text-black  text-lg font-normal font-Poppins leading-loose">We retain personal data only as long as necessary to:</span>
                        <span className="text-black  text-lg font-normal font-Poppins leading-loose">Provide services</span>
                        <span className="text-black  text-lg font-normal font-Poppins leading-loose">Comply with legal and regulatory obligations</span>
                        <span className="text-black  text-lg font-normal font-Poppins leading-loose">Resolve disputes and enforce our agreements</span>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">9. Children’s Privacy</span>
                    <span className="text-black  text-lg font-normal font-Poppins leading-loose">Our website and services are not intended for users under the age of 17. We do not knowingly collect personal data from children.</span>
                </div>
                {/* 10 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">10. Changes to This Policy</span>
                    <span className="text-black  text-lg font-normal font-Poppins leading-loose">We may occasionally update this policy. Any changes will be posted here, and the updated date will appear at the top of the page.</span>
                </div>
                {/* 11 */}
                <div className='flex flex-col gap-6'>
                    <span className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">11. Contact Us</span>
                    <div className='flex flex-col gap-[18px]'>
                        <span className="  justify-start text-black text-lg font-normal  font-Poppins leading-loose">If you have questions or concerns about this Privacy Policy or how we handle your data, please contact us:</span>
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

export default PrivacyPolicy
