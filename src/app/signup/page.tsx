'use client'

import CleaningIcon from '../../../public/images/cleaning.jpg';
import Image from 'next/image';

export default function RegisterPage(){
  return (
    <div className='max-w-8xl h-[calc(100vh-80px)] flex flex-row'>
      <Image src={CleaningIcon} alt='logo' height={500} width={500} />
      <div>
       
      </div>
    </div>
  );
}
