import React from 'react';
import { GoBell } from "react-icons/go";

const BookYourVehicleIn = () => {
  return (
    <div className="rounded w-full px-4 sm:px-6 md:px-8">
      <div className="flex w-full flex-col min-w-[288px] md:min-w-md mx-auto">
        {/* Header Section */}
        <div className="flex self-stretch p-6 sm:p-8 bg-green-600 rounded-t-2xl backdrop-blur-[5px] flex-col justify-start items-start gap-4 sm:gap-6">
          <div className="text-white text-xl sm:text-2xl font-semibold leading-7">
            Book Your Vehicle In
          </div>
        </div>

        {/* Form Section */}
        <div className="self-stretch w-full p-6 sm:p-8 bg-white rounded-b-2xl   outline-1 outline-green-500 backdrop-blur-[5px] flex flex-col gap-6">
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-6">
              {/* Registration Number */}
              <div className="flex flex-col gap-3">
                <label className="text-green-500 text-base sm:text-lg font-normal leading-snug">
                  Registration number (number plate)
                </label>
                <div className="px-3 py-2.5 bg-emerald-50 rounded-lg   outline-1 outline-green-500">
                  <input
                    type="text"
                    placeholder="e.g., AB12 CDE"
                    className="w-full bg-transparent text-green-500 text-base sm:text-lg font-normal outline-none"
                  />
                </div>
              </div>

              {/* Postcode */}
              <div className="flex flex-col gap-3">
                <label className="text-green-500 text-base sm:text-lg font-normal leading-snug">
                  Postcode
                </label>
                <div className="px-3 py-2.5 bg-emerald-50 rounded-lg   outline-1 outline-green-500">
                  <input
                    type="text"
                    placeholder="e.g., SW1A 1AA"
                    className="w-full bg-transparent text-green-500 text-base sm:text-lg font-normal outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button className="w-full px-3 py-3 bg-green-700 hover:bg-green-700/90 rounded-lg text-white text-base sm:text-lg font-medium">
                Book My MOT
              </button>
              <button className="w-full px-3 py-3 bg-white hover:bg-black/5 rounded-lg   outline-1 outline-green-600 text-green-600 text-base sm:text-lg font-medium">
                <span className='text-center'>
                  Free MOT Reminder<GoBell className='ml-2 inline-flex text-2xl stroke-1' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourVehicleIn;
