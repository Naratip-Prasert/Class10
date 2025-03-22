import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { Link } from '@mui/material';

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className="fixed top-0 left-0 right-0 z-30 bg-white shadow-md flex items-center">
            <div className="flex-1"></div>
            <div className="flex space-x-6 bg-white px-4 py-2 rounded-md">
                
                <TopMenuItem title="Booking" pageRef="/booking"/>
            </div>
            <div className="px-4 py-2 rounded-md ml-2">
                <Image 
                    src={'/img/logo.png'} 
                    alt="logo"
                    width={40} 
                    height={40} 
                    className="h-auto w-auto"
                />
            </div>
                {
                    session?<Link href="/api/auth/signout"><div className='top-6 flex item-center absolute left-0 h-full px-2 text-cyan-600 text-sm' >
                        Sign-Out of {session.user?.name}</div></Link>
                    :<Link href="/api/auth/signin"><div className='top-6 flex item-center absolute left-0 h-full px-2 text-cyan-600 text-sm'>
                        Sign-In</div></Link>
                }
        </div>
    );
}
