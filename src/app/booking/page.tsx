import DateReserve from "@/components/DateReserve"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import getUserProfile from "@/libs/getUserProfile"


export default async function Bookings(){

        const session = await getServerSession(authOptions)
        if(!session || !session.user.token) return null
    
        const profile = await getUserProfile(session.user.token)
        var createdAt = new Date(profile.data.createAt)
    

    return(
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-black text-xl font-medium">Venue Booking</div>
            
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Pick-Up Date and Location</div>
                <DateReserve/>
            </div>

            <button name='Book Venue' className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
            text-white shadow-sm">Book Venue
            </button>

            <div className="bg-slate-100 text-black m-5 p-5">
            <div className="text-2xl">{profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2"><tbody>
            <tr><td>Name</td><td>{profile.data.name}</td></tr>
            <tr><td>Email</td><td>{profile.data.email}</td></tr>
            <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
            <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody></table>
            </div>

        </main>
    )
}