'use client'

import Link from 'next/link'
import background from '../../public/service.jpeg'
import Image from 'next/image'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import MainNavbar from '@/components/Reusables/MainNavbar'

export default function Home() {
  return(
    <>
        <div className='flex flex-row'>
            <MainNavbar />
            <Image
            src={background}
            alt='background'
            height={600}
            width={800}
            className='pt-20'
            />
            <div className='h-screen max-w-3xl flex flex-col items-center justify-center ml-20'>
                <h1 className='font-poppins text-6xl'>MiJo</h1>
                <h1 className='font-poppins text-6xl'>Express</h1>
            </div>
        </div>
       <NavigationMenu className='mt-30'>
                <NavigationMenuList className="font-poppins flex flex-wrap gap-5">
                <NavigationMenuItem>
                        <Link href="/testing" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Testing Components
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/providerpage" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Provider Testing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/login" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Login
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem >
                        <Link  href="/signup" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-yellow-300 text-black`}>
                            Register
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem >
                        <Link  href="/userpage" legacyBehavior passHref>
                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-yellow-300 text-black`}>
                            UserPage
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
      </>
  )
}
