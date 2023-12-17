'use client'


import ProviderHeader from "@/components/Provider/ProviderHeader"
import ProviderNotification from "@/components/Provider/ProviderNotification"

export default function ProviderNotificationPage(){
    return(
        <div className="max-w-8xl h-screen bg-white flex flex-row">
            <div className="w-full bg-white">
                    <ProviderHeader />
                    <ProviderNotification />
            </div>
        </div>
    )
}