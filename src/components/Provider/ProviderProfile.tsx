
'use client'

import ProviderPhoto from "./ProviderPhoto"
import ProviderInfo from "./ProviderInfo"


export default function ProviderProfile(){
    return(
        <div className='w-full h-[calc(100vh-80px)] overflow-hidden'> 
                <ProviderPhoto />
                <ProviderInfo />
            </div>  
    )
}