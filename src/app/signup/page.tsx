'use client'

import CleaningIcon from '../../../public/images/cleaning.jpg';
import Image from 'next/image';

import GetAddress from '@/components/Reusables/getAddress';
import { RegionProps, ProvinceProps } from '@/lib/Types';


export default function RegisterPage({
  region,
  province, 
}: {
  region: RegionProps;
  province: ProvinceProps ;
}){

  return (
    <div className='max-w-8xl h-[calc(100vh-80px)] flex flex-row'>
      <Image src={CleaningIcon} alt='logo' height={500} width={500} />
      <div>
      <GetAddress region={region} province={province} />
      </div>
    </div>
  );
}
