'use client'

import UserNav from "@/components/User/UserNav"
import React from "react"


const ProviderLayout = ({children} : {children : React.ReactNode}) => {
    return(
        <div className="max-w-8xl h-screen bg-white flex flex-row">
        <div className="w-1/5">
            <UserNav  />
        </div>
        <div className="w-4/5 bg-white">
           {children}
        </div>
    </div>
    )
}

export default ProviderLayout