'use client'

import ProviderNav from "@/components/Provider/ProviderNav"
import ProviderHeader from "@/components/Provider/ProviderHeader"


import ProviderPhoto from '@/components/Provider/ProviderPhoto'
import ProviderProfile from "@/components/Provider/ProviderProfile"





export default function ProviderProfilePage(){
    return(
        // <div className="w-full h-screen bg-white flex flex-row">
        //     <div className="w-1/5">
        //         <ProviderNav  />
        //     </div>
        //     <div className="w-4/5 bg-white">
        //         <ProviderHeader />
        //         <ProviderProfile />
        //     </div>
        // </div>
        <div className="max-w-8xl h-screen bg-white flex flex-row">
            <div className="w-full bg-white">
               <ProviderHeader />
               <ProviderProfile/>
            </div>
        </div>
    )
}