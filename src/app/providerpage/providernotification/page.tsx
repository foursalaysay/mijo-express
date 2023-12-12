'use client'

import ProviderNav from "@/components/Provider/ProviderNav"
import ProviderHeader from "@/components/Provider/ProviderHeader"
import ProviderFeed from '@/components/Provider/ProviderFeed'




export default function ProviderNotification(){
    return(
        <div className="max-w-8xl h-screen bg-white flex flex-row">
            <div className="w-full bg-white">
                    <ProviderHeader />
            </div>
        </div>
    )
}