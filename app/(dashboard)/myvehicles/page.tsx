'use client'
import AddAnotherVehicle from '@/components/forms/AddAnotherVehicle';
import { useState } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import VehicleCard from './VehicleCard';
const arrayOfVehicles = [
    { brandName: "Ford", modelNo: "L123", registrationNumber: "12335678" },
    { brandName: "hyundai", modelNo: "L123", registrationNumber: "12345678" },

]
const page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModal = () => {
        setIsModalOpen(!isModalOpen);
    }


    return (
        <div className='bg-white p-6 flex w-[calc(100vw-300px)]   rounded-3xl'>
            <div className='flex gap-5 overflow-x-scroll'>
                {/* vehicles card  */}


                {arrayOfVehicles.map((vehicle, index) => {
                    return (
                        <VehicleCard key={index} brandName={vehicle.brandName} modelNo={vehicle.modelNo} />
                    );
                })}

                <button onClick={handleModal}>
                    <div className="w-64 h-32 px-14 mb-5 bg-gray-50 rounded-xl inline-flex flex-col justify-center items-center gap-2.5">
                        <div className="w-8 h-8 relative overflow-hidden">
                            <CiCirclePlus className='w-full h-full mx-auto ' />

                        </div>
                    </div>
                </button>

            </div>
            {isModalOpen && <AddAnotherVehicle open={isModalOpen} setIsOpen={setIsModalOpen} arrayOfVehicles={arrayOfVehicles} />}

        </div>
    )
}

export default page
