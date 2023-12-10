'use client'

import ProviderNav from "@/components/Provider/ProviderNav"
import ProviderHeader from "@/components/Provider/ProviderHeader"
import ProviderHistory from '@/components/Provider/ProviderHistory'
import { ProviderHistoryData } from "@/components/sampleData/Data"




export default function ProviderHistoryPage(){
    return(
        <div className="max-w-8xl h-screen bg-white flex flex-row">
            <div className="w-1/5">
                <ProviderNav  />
            </div>
            <div className="w-4/5 bg-white">
                <ProviderHeader />
                <ProviderHistory ProviderHistoryData={ProviderHistoryData} />
            </div>
        </div>
    )
}