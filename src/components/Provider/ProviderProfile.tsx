
'use client'

import ProviderPhoto from "./ProviderPhoto"
import ProviderInfo from "./ProviderInfo"
import ProviderNav from "./ProviderNav"


export default function ProviderProfile(){
    return(
        <div>
            <div>
                <ProviderPhoto />
                <ProviderInfo />
            </div>
        </div>
        
    )
}