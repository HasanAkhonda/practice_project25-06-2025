import React from 'react'

const Topbar = () => {
  return (
    <div className='bg-green-700'>
      <div className='w-full max-w-[1600px] flex flex-col lg:flex-row    items-center mx-auto py-3.5 px-5 sm:px-10 md:px-[188px]'>
        <h1 className=" text-white text-4xl sm:text-5xl font-['Arial_Rounded_MT_Bold']">simplymot.co.uk</h1>
        <div className='flex w-full mt-2 sm:mt-0 justify-end gap-2.5'>
          <button className='rounded-lg px-6 py-3.5 border text-white text-sm sm:text-base'>
            Log In
          </button>
          <button className='rounded-lg px-6 py-3.5 border-gray-100 text-black bg-white text-sm sm:text-base'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
