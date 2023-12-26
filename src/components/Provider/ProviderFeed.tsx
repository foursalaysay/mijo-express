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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




export default function ProviderFeed({ feedArray }: ProviderFeedProps) {


  return (
    <ScrollArea className="h-[550px] w-11/12 rounded-md border mx-10">
      <h1 className='mx-10 mt-10 font-poppins text-5xl'>Jobs You May Find</h1>
      <div className="flex flex-wrap p-4 w-full">
        {feedArray.length === 0 ? (
          <p>No Data Available</p>
        ) : (
          feedArray.map((feedSample) => (
            <div key={feedSample.id} className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8 ">
              <div className="bg-white shadow-lg rounded-lg p-6 shadow-xl">
                <p className="text-lg font-semibold mb-2">{feedSample.name}</p>
                <p className="text-gray-600">{feedSample.address}</p>
                <p className="text-gray-600">{feedSample.contactNumber}</p>
                
                {/* PUT HERE ADDTIONAL INFO OF THE JOB */}
                <Dialog>
                  <DialogTrigger className='text-sm hover:text-blue-500 hover:underline'>Click here for more details</DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                      <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

              </div>
            </div>
          ))
        )}
      </div>
    </ScrollArea>
  );
}



