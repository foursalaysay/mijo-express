


//SHADCN
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


import Image from 'next/image'

export default function ProviderHeader(){
    return(
        <div className="w-full h-20 mt-5 flex flex-row justify-around gap-10">
            
            {/* <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="text" placeholder="Search here" />
            <Button type="submit">Search</Button>
            </div> */}
        <div className="flex items-center justify-start gap-2 pl-10">
            <div className="relative">
                <Input type="text" placeholder="Search here" className=" w-96 pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none" />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/>
                    </svg>
                </div>
            </div>
            <Button className="w-32" type="submit">Search</Button>

        </div>
            
        <div className="flex flex-row gap-5 items-center justify-end">
        <Button className="bg-white border-1.5 border-gray-200 rounded-full hover:bg-yellow-300 px-2">
            <Image
                src="/images/bell.png"
                width={25}
                height={25}
                alt="Notification Icon"
                >    
                </Image>
        </Button>
        <Button className="bg-white border-1.5 border-gray-200 rounded-full hover:bg-yellow-300 px-2">
            <Image
                src="/images/email.png"
                width={25}
                height={25}
                alt="Message Icon"
                />
        </Button>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="font-poppins">John Kyle</p>
        <div >
        <DropdownMenu >
                <DropdownMenuTrigger className="bg-white border-1.5 border-gray-200 rounded-full hover:bg-yellow-300 p-2">
                    <Image
                     
                    src="/images/down.png"
                    width={25}
                    height={25}
                    alt="Dropdown Icon"
                    />
                </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
            </DropdownMenu>
        </div>
       
        </div>
            


        </div>
    )
}
