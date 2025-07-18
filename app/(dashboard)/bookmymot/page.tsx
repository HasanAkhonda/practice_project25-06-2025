'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { any } from 'zod';
import registerdVehicle from "@/data/allVehicleInfo.json"
import VehicleCard from '../myvehicles/VehicleCard';


const Page = () => {
    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [searchGarages, setSearchGarages] = useState([]); // Now an array of results for garage
    const [searchVehicle, setSearchVehicles] = useState([]); // Now an array of results for vehicle

    // Handle form submission
    const onSubmit = (data) => {
        // Simulate a search using the input values (replace with real API call)
        console.log(data);


        // Example dynamic search result based on the registration number and postcode
        const garageResults = [
            {
                imageUrl: "/clients/mechanic.jpg",
                garageName: "QuickFix Auto - London",
                address: "123 Garage Street, London, " + data.postCode,
                postcode: "543235",
                contact: "01629999999",
                email: "md@gmail.com",
                vts: "01629999999",
                price: "£ 56.25",
            },
            {
                imageUrl: "/clients/mechanic.jpg",
                garageName: "Speedy Repair - Manchester",
                address: "456 Engine Road, Manchester, " + data.postCode,
                postcode: "654321",
                contact: "01730000000",
                email: "speedyrepair@gmail.com",
                vts: "01730000000",
                price: "£ 56.25",
            },
            {
                imageUrl: "/clients/mechanic.jpg",
                garageName: "AutoFix Garage - Birmingham",
                address: "789 Car Drive, Birmingham, " + data.postCode,
                postcode: "762493",
                contact: "01840000000",
                email: "autofix.bham@gmail.com",
                vts: "01840000000",
                price: "£ 56.25",
            },
            {
                imageUrl: "/clients/mechanic.jpg",
                garageName: "Precision Motors - Liverpool",
                address: "321 Fix-It Lane, Liverpool, " + data.postCode,
                postcode: "842736",
                contact: "01950000000",
                email: "precisionmotors.liv@gmail.com",
                vts: "01950000000",
                price: "£ 56.25",
            },
            {
                imageUrl: "/clients/mechanic.jpg",
                garageName: "Reliable Repairs - Leeds",
                address: "654 Engine Works, Leeds, " + data.postCode,
                postcode: "935671",
                contact: "02060000000",
                email: "reliablerepairs.leeds@gmail.com",
                vts: "02060000000",
                price: "£ 56.25",
            },
            {
                imageUrl: "/clients/mechanic.jpg",
                garageName: "Fast Track Auto - Edinburgh",
                address: "987 Quick Route, Edinburgh, " + data.postCode,
                postcode: "321876",
                contact: "01370000000",
                email: "fasttrack.edin@gmail.com",
                vts: "01370000000",
                price: "£ 56.25",
            },
            {
                imageUrl: "/clients/mechanic.jpg",
                garageName: "MotorFix - Glasgow",
                address: "432 Auto Avenue, Glasgow, " + data.postCode,
                postcode: "321876",
                contact: "01480000000",
                email: "motorfix.glasgow@gmail.com",
                vts: "01480000000",
                price: "£ 56.25",
            },
            {
                imageUrl: "/clients/mechanic.jpg",
                garageName: "ProFix Garage - Cardiff",
                address: "123 Repair Park, Cardiff, " + data.postCode,
                postcode: "753692",
                contact: "02990000000",
                email: "profix.cardiff@gmail.com",
                vts: "02990000000",
                price: "£ 56.25",
            },
        ];
        const vehicleResults = [
            { brandName: "Ford", modelNo: "L123", registrationNumber: "12335678" },
            { brandName: "hyundai", modelNo: "L123", registrationNumber: "12345678" },

        ]


        // Set search results to state
        setSearchGarages(garageResults.filter(garage => garage.postcode === data.postCode, any));

        setSearchVehicles(vehicleResults.filter(vehicle => vehicle.registrationNumber === data.registrationNumber, any));
    };

    return (
        <div className='h-full justify-start flex flex-col gap-25'>
            <div >
                <form className='p-6 bg-white rounded-3xl' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-3 justify-evenly items-end p-5 bg-gray-50 rounded-3xl'>
                        <div className='w-full flex-col flex gap-3'>
                            <div className="justify-start text-zinc-950 text-lg font-normal font-Inder leading-snug">Registration Number</div>
                            {errors.registrationNumber && <span className="text-red-500 text-sm">{`${errors.registrationNumber.message}`}</span>}
                            <input
                                type='text'
                                placeholder='XXXXXXXX'
                                className="text-zinc-950 text-lg font-normal font-Inter leading-relaxed px-2.5 py-2.5 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px]"
                                {...register('registrationNumber', {
                                    required: {
                                        value: true,
                                        message: '* Registration Number is required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "only 8 characters is valid"
                                    }
                                })}
                            />
                        </div>

                        <div className='w-full flex-col flex gap-3'>
                            <div className="justify-start text-zinc-950 text-lg font-normal font-Inder leading-snug">Post Code</div>
                            {errors.postCode && <span className="text-red-500 text-sm">{`${errors.postCode.message}`}</span>}
                            <input
                                type='text'
                                placeholder='XXXXXXXXXX'
                                className="text-zinc-950 text-lg font-normal font-Inter leading-relaxed px-2.5 py-2.5 bg-white rounded-lg outline-1 outline-offset-[-1px] outline-green-500 backdrop-blur-[5px]"
                                {...register('postCode', {
                                    required: '* Post Code is required', minLength: {
                                        value: 5,
                                        message: "5 digit postcode  "
                                    }
                                })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full h-fit px-8 py-3 bg-green-500 rounded-lg text-white text-lg font-medium font-Inter leading-relaxed outline-1 outline-offset-[-1px] outline-green-500 inline-flex justify-center items-center"
                        >
                            Find Garage
                        </button>
                    </div>
                </form>

                {/* Display Search Results */}
                {searchVehicle.length > 0 && (
                    <div className='bg-white p-6 mt-6 flex w-[calc(100vw-300px)]   rounded-3xl'>
                        <div className='flex gap-5 overflow-x-scroll'>
                            {/* vehicles card  */}
                            {
                                searchVehicle.map((vehicle, index) => {
                                    return (
                                        <VehicleCard class name {
                                            constructor(parameters) {
                                                
                                            }
                                        } key={index} brandName={vehicle.brandName} modelNo={vehicle.modelNo} />
                                    );
                                })
                            }
                        </div>

                    </div>
                )}
                {/* Display Search Results */}
                {searchGarages.length > 0 && (
                    <div>
                        <div className="self-stretch mt-6 justify-start text-Neutral-100 text-2xl font-semibold font-Inter leading-7">No upfront payment required - simply pay at your appointment.</div>
                        <div className="mt-6 p-4 bg-[#f8fafb] rounded-2xl">
                            <div className="mt-3">
                                {searchGarages.map((garage, index) => (
                                    <div key={index} className="flex justify-between items-center mt-4 p-4 bg-white rounded-lg  ">

                                        <div className='flex gap-6'>
                                            <div className='aspect-square w-[232px] h-[232px]  overflow-hidden '>
                                                <Image src={garage.imageUrl} alt={''} width={232} height={232} className='bg-cover' />
                                            </div>
                                            {/* details  */}
                                            <div className='flex flex-col '>
                                                <div>
                                                    <div className="text-lg font-semibold text-zinc-950">{garage.garageName}</div>
                                                    <div className="text-sm text-zinc-600">{garage.address}</div>
                                                </div>
                                                <div className='h-[1px] bg-black w-full my-3' />
                                                <div>
                                                    <div className="text-sm text-zinc-600"> {garage.postCode}</div>
                                                    <div className="text-sm text-zinc-600"> {garage.contact}</div>
                                                    <div className="text-sm text-zinc-600"> {garage.email}</div>
                                                    <div className="text-sm text-zinc-600"> {garage.vts}</div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* buttons  */}
                                        <div className='flex flex-col items-center justify-center gap-3'>
                                            <button className="w-full px-8 py-[13px] bg-green-500 text-white text-sm font-semibold rounded-lg ">
                                                Book my MOT
                                            </button>
                                            <button className="w-full px-8 py-[13px] text-green-500 bg-white text-sm outline-green-500 outline-1 flex justify-center items-center font-semibold rounded-lg">
                                                More Details
                                            </button>
                                            <div className="w-full text-4xl font-medium font-Poppins text-green-500">{garage.price}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Display a message if no results */}
                {searchGarages.length === 0 && (
                    <div className='w-xl flex mt-6 flex-col mx-auto gap-12 justify-center items-center'>
                        <div className="text-center justify-start text-green-500 text-6xl font-normal font-Inder leading-[67.20px]">
                            Input Registration Number & Postcode
                        </div>
                        <div>
                            <Image src={'/vectors/inputReg.svg'} alt={''} width={400} height={500} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page;
