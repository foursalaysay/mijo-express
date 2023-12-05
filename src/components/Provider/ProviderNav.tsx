'use client'


import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
  

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

export default function ProviderNav(){
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
            <NavigationMenu >
            <NavigationMenuList className='flex flex-col gap-2 m-5 '>
                <NavigationMenuItem  className="w-56">
                    <Link href=''>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-56 text-left font-poppins  hover:bg-yellow-400 hover:text-white`}>
                            Job Feed
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem  className="w-56 ">
                    <Link href='provider-update'>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-56 text-left font-poppins  hover:bg-yellow-400 hover:text-white`}>
                            Profile
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem  className="w-56 ">
                    <Link href='provider-update'>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-56 text-left font-poppins  hover:bg-yellow-400 hover:text-white`}>
                            History
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem  className="w-56 ">
                    <Link href='provider-request'>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-56 text-left font-poppins  hover:bg-yellow-400 hover:text-white`}>
                            Job Requests
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem  className="w-56 ">
                    <Link href='/'>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-56 text-left font-poppins  hover:bg-yellow-400 hover:text-white`}>
                            Settings
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
            </div>
        </div>
    )
}


