'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

import { UserTransactionHistory } from '@/lib/types/userType'


export default function UserHistory(userTransactionData : UserTransactionHistory[]){
    return(
        <div className='h-[calc(100vh - 128px)]'>
            <ScrollArea className="h-[500px] w-11/12 rounded-md border mx-10">
                {userTransactionData ? (userTransactionData.map((userEachTransaction : UserTransactionHistory) => (
                        <Card key={userEachTransaction.tRef} className='w-full px-5 h-20'>
                                <CardHeader>
                                    <CardTitle>Card Title</CardTitle>
                                    <CardDescription>Card Description</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>Card Content</p>
                                </CardContent>
                                <CardFooter>
                                    <p>Card Footer</p>
                                </CardFooter>
                            </Card>
                
                ))) : (
                    
                )}

            </ScrollArea>
        </div>
    )
}