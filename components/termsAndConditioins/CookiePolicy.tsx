import React from 'react'

const CookiePolicy = () => {
    return (
        <div>
            <div className='bg-[#00ce04] w-full '>
                <div className='  md:px-12 lg:px-[188px] py-[60px] lg:py-[100px]  px-6   flex flex-col gap-8 md:gap-12  mx-auto w-full justify-between items-center text-sm font-medium'>
                    <span className="text-white text-6xl font-normal  font-Inder leading-[67.20px]">Cookie policy</span>
                </div>
            </div>
            {/* body drivers  */}
            <div className=' px-6 md:px-12     lg:px-[188px] py-[60px] lg:py-[100px]   flex flex-col gap-8 md:gap-12  max-w-[1600px]  mx-auto w-full justify-between items-start text-sm font-medium'>
                <div className='flex flex-col gap-3'>
                    <span className="text-gray-950 text-2xl font-medium  font-Poppins leading-9">Last Updated: May 2025</span>
                    <span className="text-black text-lg font-normal  font-Poppins leading-loose">This Cookie Policy explains how simplymot.co.uk (“we”, “us”, or “our”) uses cookies and similar technologies on our website. By using our website, you consent to our use of cookies in accordance with this policy.</span>
                </div>
                {/* 1 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">1. What Are Cookies?</span>
                    <span className="text-black text-lg font-normal  font-Poppins leading-loose">Cookies are small text files placed on your device by websites you visit. They help websites function properly, remember your preferences, and gather information to improve your experience.</span>
                </div>
                {/* 2 */}
                <div className='flex flex-col gap-6'>
                    <span className="text-black text-3xl font-medium  font-Poppins leading-10">2. Types of Cookies We Use</span>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-3'>
                            <span className="  text-black  text-lg font-semibold font-Poppins leading-loose">Essential Cookies</span>
                            <span className="text-black text-lg font-normal  font-Poppins leading-loose">These are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences or filling in forms.</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className="  text-black  text-lg font-semibold font-Poppins leading-loose">Performance & Analytics Cookies</span>
                            <span className="text-black text-lg font-normal  font-Poppins leading-loose">These cookies help us understand how visitors interact with the site by collecting and reporting information anonymously (e.g., pages visited, time on site). We may use tools like Google Analytics.</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className="  text-black  text-lg font-semibold font-Poppins leading-loose">Functional Cookies</span>
                            <span className="text-black text-lg font-normal  font-Poppins leading-loose">These cookies allow the website to remember choices you make (like your location or login details) and provide enhanced features.</span>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className="  text-black  text-lg font-semibold font-Poppins leading-loose">Marketing & Advertising Cookies</span>
                            <span className="text-black text-lg font-normal  font-Poppins leading-loose">We may use these to deliver relevant ads or offers and track the effectiveness of our marketing campaigns. These cookies may be set through our site by third-party advertising partners.</span>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex flex-col gap-6'>
                    <div className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">3. How to Manage Cookies</div>
                    <div className='flex flex-col gap-3'>
                        <span className="self-stretch justify-start text-zinc-950 text-lg font-normal  font-Inter leading-7">You can control and manage cookies through your browser settings. Most browsers allow you to:</span>
                        <ol className='list-disc list-inside flex flex-col gap-3'>
                            <li><span className="self-stretch justify-start text-zinc-950 text-lg font-normal font-['Inter'] leading-7">View which cookies are stored</span></li>
                            <li><span className="self-stretch justify-start text-zinc-950 text-lg font-normal font-['Inter'] leading-7">Delete cookies</span></li>
                            <li><span className="self-stretch justify-start text-zinc-950 text-lg font-normal font-['Inter'] leading-7">Block cookies from certain websites or all websites</span></li>
                            <li><span className="self-stretch justify-start text-zinc-950 text-lg font-normal font-['Inter'] leading-7">Please note: Disabling certain cookies may affect website functionality.</span></li>
                        </ol>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex flex-col gap-6'>
                    <span className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">4. Third-Party Cookies</span>
                    <span className="  text-black text-lg font-normal font-['Poppins'] leading-loose">We may allow trusted third parties to place cookies on your device for analytics, advertising, or social media integration. We do not control the use of these cookies. You should refer to the third parties’ privacy and cookie policies.</span>
                </div>
                {/* 5 */}
                <div className='flex flex-col gap-6'>
                    <span className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">5. Changes to This Cookie Policy</span>
                    <span className="  text-black  text-lg font-normal font-['Poppins'] leading-loose">We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.</span>
                </div>
                {/* 6 */}
                <div className='flex flex-col gap-6'>
                    <span className="self-stretch justify-center text-black text-3xl font-medium  font-Poppins leading-10">6. Contact Us</span>
                    <div className='flex flex-col gap-[18px]'>
                        <span className="  justify-start text-black text-lg font-normal  font-Poppins leading-loose">If you have any questions about our use of cookies, please contact us:</span>
                        <div className='flex flex-col gap-3'>
                            <span className="  justify-start text-neutral-600 text-lg font-normal  font-Inter leading-7">Email Address:</span>
                            <span className="  justify-start text-zinc-950 text-xl font-medium  font-Inter leading-loose">info@simplymot.co.uk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookiePolicy
