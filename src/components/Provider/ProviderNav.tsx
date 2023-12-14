'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState } from 'react'
import React from 'react'

import { Newspaper } from 'lucide-react';
import { User } from 'lucide-react';
import { History } from 'lucide-react';
import { GitPullRequestArrow } from 'lucide-react';


import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  



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

export default function ProviderNav(){

    const [online, setOnline] = useState(false);
    var checkStat = '';

    const handleSwitchChange = () => {
        setOnline((prevOnline) => !prevOnline); 
    };

   

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
            <div className="w-full flex flex-col justify-start border-r border-gray-300">
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/providerpage'>
                        <Newspaper
                        height={16}
                        width={16} 
                        />    
                        Job Feed</Link>
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/providerpage/providerprofile'>
                        <User
                        height={16}
                        width={16} 
                        />    
                        Profile</Link>
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/providerpage/providerhistory'>
                        <History
                        height={16}
                        width={16} 
                        />    
                        History</Link>
                        <Link
                        className=" flex flex-row gap-5 w-full h-10 pl-5 text-black bg-white hover:bg-yellow-400  justify-start items-center hover:text-white text-sm  "
                        href='/providerpage/providerrequest'>
                        <GitPullRequestArrow
                        height={16}
                        width={16} 
                        />    
                        Job Request</Link>
            </div>

            <Card className='w-11/12 ml-3'>
            <CardHeader>
                <h1>Set Availability</h1>
            </CardHeader>
            <CardContent>
            <div className="flex items-center space-x-2 gap-2">

            {/* IF ALREADY ACCEPTED A WORK FOR THE MEANTIME */}

                <Switch
                    id="airplane-mode"
                    aria-pressed={online}
                    onClick={handleSwitchChange}
                    value={'Available | Unavailable'}
                />
                {online ? (
                checkStat = 'Available',
                <Label
                className='font-poppins text-md ml-2' 
                htmlFor="airplane-mode">Available</Label>
                ) : (
                    checkStat = 'Unavailable',
                    <Label
                    className='font-poppins text-md ml-2' 
                     htmlFor="airplane-mode">Unavailable</Label>
                )}
                </div>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}


