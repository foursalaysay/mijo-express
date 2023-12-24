'use client'


  import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import { Service } from '@/lib/Types'


export default function UserAppointmentStatus({services} : {services : Service[]}){
 
    return(
        
       
        <div>
            {services ?  (services.map((getService) => (
                <Card 
                className="w-full h-20 flex flex-row gap-2"
                key={getService.serviceId}> 
                    <CardHeader>
                        <CardTitle>{getService.serviceName}</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    
                    <CardFooter>
                        <Dialog>
                            <DialogTrigger>More Info</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle>More Details</DialogTitle>
                                <DialogDescription>
                                    <div>
                                        <p>{getService.providerName}</p>
                                        <p>{getService.providerAddress}</p>
                                        <p>{getService.providerContactNumber}</p>
                                    </div>
                                    <div>
                                        <p>{getService.date}</p>
                                        <p>{getService.status}</p>
                                    </div>
                                </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                            </Dialog>
                    </CardFooter>
                </Card>
           
            ))) : (
                <div className='flex items-center justify-center'>
                        <h1>No Services Available</h1>
                </div>
            
            )}
        </div>
         
        
    )
}