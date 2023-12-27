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
import UserRequestForm from '@/components/User/UserRequestForm'




export default function UserFeed({ feedArray }: ProviderFeedProps) {


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
          <div key={feedPro.id} className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 border-solid border-yellow-500 ">
            <div className="bg-white shadow-lg rounded-lg p-6 ">
              <p className="text-lg font-semibold mb-2">{feedPro.name}</p>
              <p className="text-gray-600">{feedPro.address}</p>
              <p className="text-gray-600 mb-5">{feedPro.contactNumber}</p>
              <Separator />
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
                      <CardTitle>Provide Job Details</CardTitle>
                      <CardDescription>Input necessary data</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <UserRequestForm />
                    </CardContent>
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