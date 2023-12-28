'use client'

import { ScrollArea } from '@/components/ui/scroll-area'

import { UserTransactionHistory } from '@/lib/types/userType'


export default function UserHistory(){
    return(
        <div className='h-[calc(100vh - 128px)]'>
            <ScrollArea className="h-[500px] w-11/12 rounded-md border mx-10">

            </ScrollArea>
        </div>
    )
}