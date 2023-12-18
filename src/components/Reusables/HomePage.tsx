
import mainPhoto from '../../../public/images/cleaning.jpg'

import Image from 'next/image'

export default function HomePage(){
    return(
        <div className='w-full h-[calc(100vh-80px)]'>
            <Image
            src={mainPhoto}
            alt="Cleaning"
            layout='fill'  //layout= fill, fixed , intrinsic or responsive
            objectFit='cover'   //object-fit: cover | contain | none | scale-down;
             />
        </div>
    )
}