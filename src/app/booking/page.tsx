'use client'
import DateReserve from "@/components/DateReserve"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import getUserProfile from "@/libs/getUserProfile"
import { useSearchParams } from "next/navigation"

export default function Bookings(){

    const urlParans = useSearchParams()
    const vid = urlParans.get('id')
    const name = urlParans.get('name')

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-black text-xl font-medium">Venue Booking</div>
            <div className="text-black text-xl font-medium">Venue: {name}</div>
            
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-Up Date and Location</div>
                <DateReserve/>
            </div>

            <button name='Book Venue' className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm">Book Venue
            </button>  

        </main>
    )
}