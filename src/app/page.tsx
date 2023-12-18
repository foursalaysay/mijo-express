'use client'

//COMPONENTS
import LoginForm from '@/components/Reusables/LoginForm'
import MainNavbar from '@/components/Reusables/MainNavbar'

import Link from 'next/link'


import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import AddressComponent from '@/components/Reusables/AddressComponent'



export default function Home() {
  return (
    <>

       {/* Testing Page */}

       
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
        <AddressComponent />
      </>
  )
}
