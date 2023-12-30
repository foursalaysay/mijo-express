/** @format */

"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Service } from "@/lib/Types";


import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export default function UserAppointment({ services }: { services: Service[] }) {
    console.log(services);
    
	return (
		<ScrollArea className="w-full">
			<div>
				{services?.length > 0 ? (
					services.map((getService) => (
						<Card
							className="w-full h-20 flex flex-row gap-2"
							key={getService.serviceId}>
							<CardHeader>
								<CardTitle>{getService.serviceName}</CardTitle>
								<CardDescription>{getService.serviceCode}</CardDescription>
							</CardHeader>

<<<<<<< HEAD


export default function UserAppointment({services} : {services : Service[]}){
    return(
        <ScrollArea className="w-full">
            <div>
            {services.length > 0  ?  (services.map((getService) => (
                <Card 
                className="w-full h-20 flex flex-row gap-2"
                key={getService.serviceId}> 
                    <CardHeader>
                        <CardTitle>{getService.serviceName}</CardTitle>
                        <CardDescription>{getService.serviceCode}</CardDescription>
                    </CardHeader>
                    
                    <CardFooter>
                        <Dialog>
                            <DialogTrigger>More Info</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle>More Details</DialogTitle>
                                <DialogDescription>
                                    
                                </DialogDescription>
                                </DialogHeader>
                                <div>
                                        <p>{getService.providerName}</p>
                                        <p>{getService.providerAddress}</p>
                                        <p>{getService.providerContactNumber}</p>
                                    </div>
                                    <div>
                                        <p>{getService.date}</p>
                                        <p>{getService.status}</p>
                                    </div>
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

        </ScrollArea>
    )
=======
							<CardFooter>
								<Dialog>
									<DialogTrigger>More Info</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>More Details</DialogTitle>
											<DialogDescription></DialogDescription>
										</DialogHeader>
										<div>
											<p>{getService.providerName}</p>
											<p>{getService.providerAddress}</p>
											<p>{getService.providerContactNumber}</p>
										</div>
										<div>
											<p>{getService.date}</p>
											<p>{getService.status}</p>
										</div>
									</DialogContent>
								</Dialog>
							</CardFooter>
						</Card>
					))
				) : (
					<div className="flex items-center justify-center">
						<h1>No Services Available</h1>
					</div>
				)}
			</div>
		</ScrollArea>
	);
>>>>>>> 1ca0dd1ef0ac038d5ee94c03625360b0e46c07b3
}
