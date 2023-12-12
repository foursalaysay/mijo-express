'use client'

import UserHeader from "@/components/User/UserHeader"
import UserFeed from "@/components/User/UserFeed"
import { feedArray } from "@/components/sampleData/Data"




export default function UserPage(){
    return(
        <div className="max-w-8xl h-screen bg-white flex flex-row">
            <div className="w-full bg-white">
               <UserHeader />
               <UserFeed feedArray={feedArray} />
            </div>
        </div>
    )
}