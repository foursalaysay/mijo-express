'use client'

// ICONS
import { BookCopy } from 'lucide-react';
import { User } from 'lucide-react';
import { Contact2 } from 'lucide-react';
import { History } from 'lucide-react';
import { Star } from 'lucide-react';


import Image from 'next/image'
import Link from 'next/link'





type Provider = {
    id:number,
    name:string,
    profilePic:string
}

const provider : Provider = {
    id:1,
    name:"kyle",
    profilePic:"/images/sampleProvider.jpg"
}

export default function UserNav(){

   

    return (
        <div className="w-1/5 h-screen fixed flex flex-col">
            {/* Provider Header */}
        <div className='flex flex-col justify-center items-center m-5' key={provider.id}>
            <Image
            className="rounded-t-lg w-full m-5"
            src={provider.profilePic}
            width={200}
            height={200}
            alt='Profile Picture'/>
        </div >
            {/* Provider Navigation */}
            <div >
            <div className="w-full flex flex-col p-1">
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/userpage'>
                        <BookCopy />
                        User Feed</Link>
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/userpage/userprofile'>
                         <User />
                        User Profile</Link>
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/userpage/userappointment'>
                         <Contact2 />
                        Requested Appointments</Link>
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/userpage/userhistory'>
                        <History />
                        Service History</Link>
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/userpage/userreview'>
                        <Star />
                        Rate and Review
                        </Link>
            </div>
           
            </div>
        </div>
    )
}


