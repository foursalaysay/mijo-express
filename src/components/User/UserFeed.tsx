'use client'

type feed = {
  id: number;
  name: string;
  contactNumber: string;
  address: string;
  skillSet: string[];
}

interface ProviderFeedProps {
  feedArray: feed[];
}

import { Button } from '@/components/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"

import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import UserRequest from '@/components/User/UserRequest'
import { useState } from 'react'




export default function UserFeed({ feedArray }: ProviderFeedProps) {

 

  const [clickButton, setClickButton ] = useState(false);

  const assignClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setClickButton(true);
  }

 

  return (
<div className='h-[calc(100vh - 128px)]'>
  <ScrollArea className="h-[500px] w-11/12 rounded-md border mx-10">
  
    <div className='flex flex-row mt-10 items-center justify-around'>
      <h1 className='font-poppins text-5xl'>Providers You may Find</h1>
      <UserRequest />
    </div>
    <div className="flex flex-wrap p-4 w-full" >
      {feedArray.length === 0 ? (
        <p>No Data Available</p>
      ) : (
        feedArray.map((feedPro) => (
          <div key={feedPro.id} className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 hover:border-solid hover:border-yellow-500 ">
            <div className="bg-white shadow-lg rounded-lg p-6 ">
              <p className="text-lg font-semibold mb-2">{feedPro.name}</p>
              <p className="text-gray-600">{feedPro.address}</p>
              <p className="text-gray-600 mb-5">{feedPro.contactNumber}</p>
              {feedPro.skillSet.map((eachSkill, index) => {
                        return <p key={index}>{eachSkill}</p>
                      })}
                <Dialog>
                  <Button asChild className='w-full mt-4'>
                    <DialogTrigger>Assign A Job</DialogTrigger>
                  </Button>
                  <DialogContent>
                  <Card className='mt-4'>
                    <CardHeader>
                      <CardTitle>Provider Details</CardTitle>
                      <CardDescription>See the Provider Skillset</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className='text-sky-500'>Skills and Abilities</h4>
                      
                    </CardContent>
                    <CardFooter>
                        <Button onClick={assignClick}>Assign a Job</Button>
                    </CardFooter>
                    
                  </Card>

                  </DialogContent>
                </Dialog>
             
            

            </div>
          </div>
        ))
      )}
    </div>
  </ScrollArea>
</div>
  );
                    }