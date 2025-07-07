'use client'
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form

const ForgetPasswordForm = () => {

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
            <div className='w-full justify-start flex flex-col gap-3'>
                <span className="w-full text-start text-zinc-950 text-3xl font-medium font-Inter leading-10">
                    Forgot your password?
                </span>
                <span className="  text-zinc-950 text-base font-normal font-Inter leading-normal">No worries, just enter your email and we’ll send you a reset link.</span>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6'>
                <div className='w-full flex flex-col gap-1.5 md:gap-3'>
                    {/* Email */}
                    <span className="text-Neutral-100 text-base font-medium font-['Inter'] leading-normal">Email</span>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: { value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, message: 'Invalid email address' }
                        })} // Register input with validation for email
                        className="text-zinc-400 text-base font-normal font-Inter leading-normal h-10 md:h-14 px-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px]"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>} {/* Show error message */}
                </div>


                {/* Submit Button */}
                <div className='w-full flex flex-col items-center gap-2 md:gap-8'>
                    <button type="submit" className="w-full px-5 py-4 bg-green-500 rounded-lg flex justify-center items-center">
                        <Link href={'/resetPassword'}>
                            <span className="text-center text-white text-base font-semibold font-Inter leading-normal">Reset Password</span>
                        </Link>
                    </button>
                    <span className="text-neutral-600 text-sm font-normal font-Inter leading-relaxed">
                        <Link className="ml-[9px] text-green-500 font-semibold underline" href={'/signIn'}>Return to login</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default ForgetPasswordForm;
