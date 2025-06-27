'use client'
import Image from 'next/image'
import { useState } from 'react'
import faq from '@/public/vectors/GroupFAQ.svg'
import { FaPlus } from 'react-icons/fa';
import FAQItems from '@/components/reusable/FAQItems';

const faqItems = [
    ['How Do I Make A Booking?',
        (
            <div className='flex flex-col gap-5 '>
                <div className='flex flex-col gap-3 '>
                    <h1 className='font-bold'>Step 1: Enter Your Vehicle Details</h1>
                    <p>
                        Type in your Vehicle registration number and postcode to get started.
                    </p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <h1 className='font-bold'>step2</h1>
                    <p>
                        Browse through the list of nearby garages. Pick the one that works best for you and select a date that fits your schedule.
                    </p>
                </div>
                <div className='flex flex-col gap-3 '>
                    <h1 className='font-bold'>step2</h1>
                    <p>
                        Once you've chosen your garage and date, just confirm to book your appointment. You're all set!                        </p>
                </div>
            </div>
        )],
    ['Do I Pay Anything Upfront?', 'Nope! You simply pay the garage directly on the day of your MOT'],
    ['How Do I Choose A Time For My Booking?', 'You can pick a preferred morning or afternoon slot, but not a specific time. Don’t worry- most garages will reach out to confirm the exact time after you book.',
    ],
    ['How Do I Change The Date Or Time Of My Booking Or Make Any Amendments?', 'Get in touch with the garage directly if you need to make any changes to your booking, like rescheduling or updating the date/time.',
    ],
    ['How Do I Cancel My Booking?', 'Want to cancel your booking? Just let the garage know directly - they’ll take it from there.',],
    ['Are There Any Cancellation Fees?', 'Nope! There are no cancellation fees.',
    ],
    ['Are There Any Retest Fees? ', 'It depends on the garage, but don’t worry - if there is a fee, it’ll be clearly shown on their booking page.',],

    ['What Do I Do If I Need Additional Services From The Garage?', "Just leave a note in the space provided when booking — the more details, the better! The garage will get back to you with a quote for any additional services you're interested in.",],
    ['I Forgot When My Appointment Is — What Should I Do?', "No worries! You’ll have received an email and text confirmation when you booked. Please check those for your appointment details. If you’re still unsure, feel free to reach out to us or the garage directly and we’ll be happy to help!",
    ], ['I Haven’t Received An Email Or Text After Making A Booking', "No problem! Please check your junk or spam folder just in case it landed there. If you still can’t find it, just drop us an email and we’ll be happy to resend your confirmation."]
];


const FAQ = () => {

    return (
        <div className='max-w-[1600px] mx-auto flex flex-col md:flex-row gap-12 px-[188px] py-[100px]'>
            <div className='flex flex-col gap-12'>
                <h1 className='text-black  text-6xl font-normal font-Inder leading-[67.20px]'>
                    Frequently Asked Questions
                </h1>
                <Image src={faq} alt={''} />
            </div>
            <div className='flex w-full flex-col gap-3'>
                {faqItems.map((items ,index   ) => (
                    <FAQItems    question={items[0]} answer={items[1]} />
                )

                )}
            </div>
        </div>
    )
}

export default FAQ
