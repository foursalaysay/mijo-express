'use client'


import React from "react"
import UserNav from '@/components/User/UserNav'

const ProviderLayout = ({children} : {children : React.ReactNode}) => {
    return(
        <div className="max-w-8xl h-screen bg-white flex flex-row">
        <div className="w-1/5">
            <UserNav  />
        </div>
        <div className="w-4/5 h-screen bg-white">
           {children}
        </div>
    </div>
    )
}

export default ProviderLayout