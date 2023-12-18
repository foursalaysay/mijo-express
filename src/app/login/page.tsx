import Image from 'next/image';
import loginIcon from '/public/login.svg'

//COMPONENTS
import LoginForm from '@/components/Reusables/LoginForm'
import MainNavbar from '@/components/Reusables/MainNavbar'

import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import FetchAddress from '@/components/sampleData/fetchAddress';

import Address from '@/components/sampleData/fetchAddress'

export default function Home() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <MainNavbar />
      <FetchAddress />
        <div className='flex flex-row h-[calc(100vh-80px)] pt-20'>
            <Image
            className='w-1/2 flex items-center justify-center m-auto'
          priority
          src={loginIcon}
          alt="Follow us on Twitter"
        />
    
        
        <div className='w-1/2 flex items-start justify-start flex-col m-10'>
          
          <h1 className='text-7xl font-extrabold'>Welcome</h1>
          <Card className='mt-3 w-96'>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Fill Up to Login</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
            <CardFooter>
              <Link href="/signup">Register</Link>
            </CardFooter>
        </Card>
        </div>
      </div>
      </div>
  )
}
