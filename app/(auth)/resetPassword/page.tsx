'use client'
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form

const ResetPassword = () => {

    // Initialize useForm
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isShow, setIsShow] = useState(false);
    const [isShow2, setIsShow2] = useState(false);

    // Handle show/hide password
    const handleShowPassword = (e) => {
        e.preventDefault(); // Prevent default behavior of button click
        setIsShow(!isShow); // Toggle password visibility
    };
    const handleShowPassword2 = (e) => {
        e.preventDefault(); // Prevent default behavior of button click
        setIsShow2(!isShow2); // Toggle password visibility
    };

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data); // Log form data on submit
    };

    return (
        <div className="w-full  md:min-w-lg  p-8 bg-white rounded-[10px] outline-1 outline-offset-[-1px] outline-green-500 flex flex-col justify-start items-center gap-6 md:gap-12">
            <span className="w-full text-start text-zinc-950 text-3xl font-medium font-Inter leading-10">
                Enter your new password
            </span>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col gap-6'>
                <div className='w-full flex flex-col gap-1.5 md:gap-3'>
                    {/* Password */}
                    <span className="text-Neutral-100 text-base font-medium font-['Inter'] leading-normal">New Password</span>
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
                    {errors.password && <span className="text-red-500">{String(errors.password.message)}</span>} {/* Show error message */}
                </div>
                <div className='w-full flex flex-col gap-1.5 md:gap-3'>
                    {/* Password */}
                    <span className="text-Neutral-100 text-base font-medium font-['Inter'] leading-normal">Confirm Password</span>
                    <div className="text-zinc-400 text-base font-normal font-['Inter'] leading-normal px-2.5 rounded-lg outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px] flex justify-between items-center">
                        <input
                            {...register('password', {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be at least 6 characters' }
                            })}
                            type={isShow2 ? "text" : "password"} // Toggle password visibility
                            className='h-10 md:h-14 w-full outline-0'
                        />
                        <button onClick={handleShowPassword2} type="button" className=' text-green-500'>
                            {isShow2 ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                    {errors.password && <span className="text-red-500">{String(errors.password.message)}</span>} {/* Show error message */}
                </div>

                {/* Submit Button */}
                <div className='w-full flex flex-col items-center gap-2 md:gap-8'>
                    <button type="submit" className="w-full px-5 py-4 bg-green-500 rounded-lg flex justify-center items-center">
                        <span className="text-center text-white text-base font-semibold font-Inter leading-normal">New Password</span>
                    </button>
                    <span className="text-neutral-600 text-sm font-normal font-Inter leading-relaxed">
                        <Link className="ml-[9px] text-green-500 font-semibold underline" href={'/signIn'}>Return to login</Link>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default ResetPassword;
