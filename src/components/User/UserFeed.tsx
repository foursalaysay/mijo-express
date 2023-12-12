'use client'

type feed = {
  id: number;
  name: string;
  contactNumber: string;
  address: string;
  problemDetails: string;
}

interface ProviderFeedProps {
  feedArray: feed[];
}


import { Button } from '@/components/ui/button'
import { ScrollArea } from "@/components/ui/scroll-area"

import UserRequest from '@/components/User/UserRequest'



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
        feedArray.map((feedSample) => (
          <div key={feedSample.id} className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 ">
            <div className="bg-white shadow-lg rounded-lg p-6 ">
              <p className="text-lg font-semibold mb-2">{feedSample.name}</p>
              <p className="text-gray-600">{feedSample.address}</p>
              <p className="text-gray-600">{feedSample.contactNumber}</p>
              <Button className='w-full mt-4'>Details</Button>
            </div>
          </div>
        ))
      )}
    </div>
  </ScrollArea>
</div>
  );
}



