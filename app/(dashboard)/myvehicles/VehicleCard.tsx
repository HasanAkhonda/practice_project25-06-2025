'use client'
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { useState } from 'react'

import React from 'react'

interface VehicleCardProps {
    brandName: string;
    modelNo: string;
     onDelete?: () => void;
}


const VehicleCard: React.FC<VehicleCardProps> = ({ brandName, modelNo,  onDelete }) => {

     const [isMoreOpen, setIsMoreOpen] = useState(false);
    const handleMore = () => {
        setIsMoreOpen(!isMoreOpen);
    }
    return (
        <div className=" shrink-0 w-64 h-32  px-14 py-2 relative bg-gray-50 rounded-xl  flex   justify-center items-center ">
            <div className="w-full h-full flex flex-col justify-between items-center gap-2.5">
                {/* Brand logo   */}
                <div className=' bg-cover h-[64px] flex items-center'>
                    <Image className="h-full w-fit " width={3840} height={2160} src={`/brands/${brandName.toLowerCase()}.png`} alt={`brand ${brandName.toLowerCase()}`} />
                </div>
                {/* model no  */}
                <div className="px-3 py-1 bg-zinc-950 rounded-lg flex justify-center items-center  ">
                    <span className="  text-white text-sm font-semibold font-Inter leading-relaxed">{modelNo}</span>
                </div>
            </div>
            <button onClick={handleMore} className=''>
                <svg className="w-8 h-6 left-[222px] top-[8px] absolute overflow-hidden" width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.25 10C1.94036 10 2.5 10.5596 2.5 11.25C2.5 11.9404 1.94036 12.5 1.25 12.5C0.559644 12.5 0 11.9404 0 11.25C0 10.5596 0.559644 10 1.25 10ZM1.25 5C1.94036 5 2.5 5.55964 2.5 6.25C2.5 6.94036 1.94036 7.5 1.25 7.5C0.559644 7.5 0 6.94036 0 6.25C0 5.55964 0.559644 5 1.25 5ZM1.25 0C1.94036 0 2.5 0.559644 2.5 1.25C2.5 1.94036 1.94036 2.5 1.25 2.5C0.559644 2.5 0 1.94036 0 1.25C0 0.559644 0.559644 0 1.25 0Z" fill="#070707" />
                    <path d="M1.25 10C1.94036 10 2.5 10.5596 2.5 11.25C2.5 11.9404 1.94036 12.5 1.25 12.5C0.559644 12.5 0 11.9404 0 11.25C0 10.5596 0.559644 10 1.25 10ZM1.25 5C1.94036 5 2.5 5.55964 2.5 6.25C2.5 6.94036 1.94036 7.5 1.25 7.5C0.559644 7.5 0 6.94036 0 6.25C0 5.55964 0.559644 5 1.25 5ZM1.25 0C1.94036 0 2.5 0.559644 2.5 1.25C2.5 1.94036 1.94036 2.5 1.25 2.5C0.559644 2.5 0 1.94036 0 1.25C0 0.559644 0.559644 0 1.25 0Z" fill="black" fillOpacity="0.2" />
                </svg>
            </button>
            {isMoreOpen &&
                (
                    <Button variant='destructive' className="pl-3 pr-2 py-1 right-0 top-10 absolute   rounded-lg inline-flex justify-center items-center gap-2" onClick={onDelete} >
                        <div className='flex gap-2 '>
                            <span>Delete</span>
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.3188 13.5472C16.2548 14.5915 16.2041 15.4202 16.1002 16.0822C15.9935 16.7611 15.8228 17.3264 15.4814 17.8209C15.1691 18.2733 14.767 18.6552 14.3007 18.9421C13.7909 19.2557 13.2217 19.3929 12.5442 19.4585L7.43949 19.4584C6.76125 19.3927 6.19143 19.2552 5.68133 18.941C5.21469 18.6536 4.81245 18.2711 4.50023 17.8179C4.15894 17.3226 3.9888 16.7564 3.88298 16.0766C3.77978 15.4137 3.73019 14.5837 3.66768 13.5379L3.125 4.4585H16.875L16.3188 13.5472ZM7.91667 15.4676C7.57149 15.4676 7.29167 15.1878 7.29167 14.8426V9.84258C7.29167 9.49741 7.57149 9.21758 7.91667 9.21758C8.26184 9.21758 8.54167 9.49741 8.54167 9.84258V14.8426C8.54167 15.1878 8.26184 15.4676 7.91667 15.4676ZM12.7083 9.84258C12.7083 9.49741 12.4285 9.21758 12.0833 9.21758C11.7382 9.21758 11.4583 9.49741 11.4583 9.84258V14.8426C11.4583 15.1878 11.7382 15.4676 12.0833 15.4676C12.4285 15.4676 12.7083 15.1878 12.7083 14.8426V9.84258Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.1201 1.56881C11.5911 1.61093 12.0336 1.75464 12.4137 2.03809C12.6948 2.24774 12.8901 2.50435 13.0569 2.78228C13.2115 3.03982 13.3671 3.36092 13.5436 3.72517L13.8993 4.45875H17.4974C17.9576 4.45875 18.3307 4.83185 18.3307 5.29209C18.3307 5.75233 17.9576 6.12542 17.4974 6.12542C12.4972 6.12542 7.49755 6.12542 2.4974 6.12542C2.03716 6.12542 1.66406 5.75233 1.66406 5.29209C1.66406 4.83185 2.03716 4.45875 2.4974 4.45875H6.1722L6.4687 3.8083C6.64083 3.43064 6.79242 3.09802 6.9447 2.83112C7.10895 2.54323 7.3034 2.27681 7.5879 2.05855C7.97266 1.76339 8.42415 1.61374 8.90565 1.56991C9.26815 1.53691 9.63356 1.54145 9.9974 1.54204C10.4231 1.54272 10.8057 1.54069 11.1201 1.56881ZM8.00386 4.45875H12.0471C11.8582 4.06926 11.7374 3.82239 11.6279 3.64C11.4676 3.37306 11.2756 3.25604 10.9716 3.22885C10.7556 3.20953 10.474 3.20875 10.0261 3.20875C9.56715 3.20875 9.27823 3.20955 9.05673 3.22971C8.74498 3.25809 8.55065 3.37957 8.39231 3.65705C8.28857 3.83889 8.17562 4.08231 8.00386 4.45875Z" fill="white" />
                            </svg>
                        </div>
                    </Button>
                )
            }
        </div>
    )
}

export default VehicleCard
