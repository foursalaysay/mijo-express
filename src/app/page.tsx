'use client'

import Image from 'next/image'
import MainNavbar from '@/components/Reusables/MainNavbar'

import background from '../../public/service.jpeg'

export default function Home() {
  return(
    <div className='max-w-8xl h-screen flex flex-col'>
         <MainNavbar />
        <div className='flex flex-row h-[calc(100vh-80px)]'>
            <Image
            src={background}
            alt='background'
            width={800}
            className='mt-20 h-full'
            />
            <div className='h-screen max-w-3xl flex flex-col items-start justify-center ml-10'>
                <h1 className='font-poppins text-bold text-8xl'>MiJo</h1>
                <h1 className='font-poppins text-8xl'>Express</h1>
                <p className='mt-2'>Always available at your service.</p>
            </div>
        </div>
    </div>
)
}
