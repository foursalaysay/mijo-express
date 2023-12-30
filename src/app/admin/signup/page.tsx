'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import CleaningIcon from '../../../../public/register.svg'
import Image from 'next/image';
import MainNavbar from '@/components/Reusables/MainNavbar';
import RegisterForm from "@/components/Reusables/RegisterForm";

export const POST = async () => {
  console.log("Recording Data");
}


export default function RegisterPage(){

  return (
    <div className='flex flex-col'>
      <MainNavbar />
      <div className='max-w-8xl h-[calc(100vh-80px)] flex flex-row mt-20'>
        <div className='flex flex-col justify-start items-start mt-24'>
          <Image src={CleaningIcon} alt='logo' height={500} width={500} className='ml-10 mt-5'/>
        </div>
      <div className='ml-10 w-[calc(100vw-520px)]'>
            <ScrollArea className="w-full rounded-md border p-4 h-[calc(100vh-80px)]">
              <h1 className='font-poppins text-black text-7xl'>Register Here!</h1>
              <p className='mt-5'>Fill up the form to create your account.</p>

              {/* CREATING THE FORM */}
              <RegisterForm />
            </ScrollArea>
        </div>
      </div>
    </div>
  );
}
