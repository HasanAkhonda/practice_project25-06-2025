'use client'
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form

const CreateAccountForm = () => {

    // Initialize useForm
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShow, setIsShow] = useState(false);

    // Handle show/hide password
    const handleShowPassword = (e) => {
        e.preventDefault(); // Prevent default behavior of button click
        setIsShow(!isShow); // Toggle password visibility
    };

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data); // Log form data on submit
    };

    return (
        <div className="w-full  md:min-w-lg  p-8 bg-white rounded-[10px] outline-1 outline-offset-[-1px] outline-green-500 flex flex-col justify-start items-center gap-6 md:gap-12">
            <span className="w-full text-start text-zinc-950 text-3xl font-medium font-Inter leading-10">
                Let’s create your account.
            </span>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6'>
                <div className='w-full flex flex-col gap-1.5 md:gap-3'>
                    {/* Name */}
                    <span className="text-Neutral-100 text-base font-medium font-['Inter'] leading-normal">Name</span>
                    <input
                        {...register('name', { required: 'Name is required' })} // Register input with validation
                        className="text-zinc-400 text-base font-normal font-['Inter'] leading-normal h-10 md:h-14 px-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px]"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>} {/* Show error message */}
                </div>

                <div className='w-full flex flex-col gap-1.5 md:gap-3'>
                    {/* Email */}
                    <span className="text-Neutral-100 text-base font-medium font-['Inter'] leading-normal">Email</span>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: 'Invalid email address' }
                        })} // Register input with validation for email
                        className="text-zinc-400 text-base font-normal font-['Inter'] leading-normal h-10 md:h-14 px-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px]"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>} {/* Show error message */}
                </div>

                <div className='w-full flex flex-col gap-1.5 md:gap-3'>
                    {/* Phone Number */}
                    <span className="text-Neutral-100 text-base font-medium font-['Inter'] leading-normal">Phone Number</span>
                    <input
                        {...register('phone', {
                            required: 'Phone number is required',
                            minLength: { value: 10, message: 'Phone number must be at least 10 digits' }
                        })}
                        className="text-zinc-400 text-base font-normal font-['Inter'] leading-normal h-10 md:h-14 px-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px]"
                    />
                    {errors.phone && <span className="text-red-500">{errors.phone.message}</span>} {/* Show error message */}
                </div>

                <div className='w-full flex flex-col gap-1.5 md:gap-3'>
                    {/* Password */}
                    <span className="text-Neutral-100 text-base font-medium font-['Inter'] leading-normal">Password</span>
                    <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-normal px-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px] flex justify-between items-center">
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters' }
                            })}
                            type={isShow ? "text" : "password"} // Toggle password visibility
                            className='h-10 md:h-14 w-full outline-0'
                        />
                        <button onClick={handleShowPassword} type="button" className=' text-green-500'>
                            {isShow ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>} {/* Show error message */}
                </div>

                {/* Terms and Conditions */}
                <div className='flex gap-2 items-center justify-start'>
                    <input
                        {...register('terms', { required: 'You must agree to the terms and conditions' })}
                        type="checkbox"
                        className='scale-150'
                    />
                    <label className="self-stretch justify-center text-neutral-600 text-sm font-normal font-Inter leading-relaxed">
                        I agree to the Terms and Privacy Policy
                    </label>
                    {errors.terms && <span className="text-red-500">{errors.terms.message}</span>} {/* Show error message */}
                </div>

                {/* Submit Button */}
                <div className='w-full flex flex-col items-center gap-2 md:gap-8'>
                    <button type="submit" className="w-full px-5 py-4 bg-green-500 rounded-lg flex justify-center items-center">
                        <span className="text-center text-white text-base font-semibold font-Inter leading-normal">Continue</span>
                    </button>
                    <span className="text-neutral-600 text-sm font-normal font-Inter leading-relaxed">
                        Already have an account?
                        <Link className="ml-[9px] text-green-500 font-semibold underline" href={''}>Log in</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default CreateAccountForm;
