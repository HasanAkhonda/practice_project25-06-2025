'use client'
import { useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog'

const AddAnotherVehicle = ({ open, setIsOpen, handleAddVehicle  }) => {
    const [registrationNumber, setRegistrationNumber] = useState(''); // State to store input value

    const handleInputChange = (e) => {
        setRegistrationNumber(e.target.value); // Update the state with the new input value
    };


    return (
        <div>
            <Dialog open={open} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px] p-0 border-0 bg-transparent">
                    <div>
                        <div className=" w-full p-8 relative bg-green-600 rounded-tl-2xl rounded-tr-2xl backdrop-blur-[5px]  flex flex-col justify-start items-start gap-8">
                            <div className=" w-full justify-start text-white text-3xl font-medium font-Inter leading-9">Add Another Vehicle</div>
                            <div className="w-7 h-7   absolute right-2 top-3 overflow-hidden">
                            </div>
                        </div>
                        <div className=" w-full p-8 bg-white rounded-bl-2xl rounded-br-2xl   outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px] inline-flex flex-col justify-start items-start gap-8">
                            <div className=" w-full flex flex-col justify-start items-start gap-5">
                                <div className=" w-full flex flex-col justify-start items-start gap-3">
                                    <div className="justify-start text-zinc-950 text-lg font-normal font-Inder leading-snug">Registration Number</div>
                                    <div className=" w-full flex flex-col justify-start items-end gap-2">
                                        <input onChange={handleInputChange} value={registrationNumber} placeholder='XXXXXXXXXX' className=" w-full px-2.5 py-2.5 bg-white rounded-lg  outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px] inline-flex justify-start items-center gap-2.5  text-zinc-950 text-lg font-normal font-Inter leading-relaxed">
                                        </input>
                                    </div>
                                </div>
                                <button onClick={handleAddVehicle} className=" w-full flex flex-col justify-start items-start gap-3">
                                    <div className=" w-full px-3 py-3 bg-green-500 rounded-lg   outline-1 outline-offset-[-1px] outline-green-500 inline-flex justify-center items-center gap-2">
                                        <div className="justify-start text-white text-lg font-medium font-Inter leading-relaxed">Add Vehicle</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddAnotherVehicle
