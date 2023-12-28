'use client'

import { ScrollArea } from '@/components/ui/scroll-area'

interface userHistory {
    tId : string,
    tName: string, 
    tPrice : number,
    tDate : 


}


export default function UserHistory(){
    return(
        <div className='h-[calc(100vh - 128px)]'>
            <ScrollArea className="h-[500px] w-11/12 rounded-md border mx-10">

            </ScrollArea>
        </div>
    )
}