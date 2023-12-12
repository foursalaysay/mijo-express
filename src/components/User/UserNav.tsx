'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


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
                <Button asChild className='text-black'>
                    <Link
                    className="w-full h-10 -pl-24 text-black bg-white hover:bg-yellow-400  justify-center items-center hover:text-white text-md font-poppins "
                    href='/userpage'>Provider Feed</Link>
                </Button>
                 <Button asChild className='text-black'>
                    <Link
                    className="w-full h-10 -pl-24 text-black bg-white hover:bg-yellow-400  justify-center items-center hover:text-white text-md font-poppins "
                    href='/userpage/providerprofile'>Profile</Link>
                </Button>
                 <Button asChild className='text-black'>
                    <Link
                    className="w-fullh-10 -pl-24 text-black bg-white hover:bg-yellow-400  justify-center items-center hover:text-white text-md font-poppins "
                    href='/providerpage/providerhistory'>History</Link>
                </Button>
                <Button asChild className='text-black'>
                    <Link
                    className="w-full h-10 -pl-24 text-black bg-white hover:bg-yellow-400  justify-center items-center hover:text-white text-md font-poppins "
                    href='/providerpage/providerrequest'>Job Request</Link>
                </Button>
               
                
                
            </div>
           
            </div>
        </div>
    )
}


