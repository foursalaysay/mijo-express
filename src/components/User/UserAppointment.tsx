'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

import UserAppointmentStatus from "./UserAppointmentStatus"


type Service = {
    serviceId: number;
    serviceCode: string;
    serviceName: string;
    providerName: string;
    providerAddress: string;
    providerContactNumber: string;
    date: string;
    status: "Accepted" | "Declined" | "Completed" | "In Progress";
  };





export default function UserAppointment({services} : {services : Service[]}){
    return(
        <Tabs defaultValue="useraccepted" className="w-[400px]">
        <TabsList>
            <TabsTrigger value="useraccepted">Account</TabsTrigger>
            <TabsTrigger value="userhistory">Password</TabsTrigger>
            <TabsTrigger value="userreview">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="useraccepted">
            <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
                    <UserAppointmentStatus services={services}/>
            </ScrollArea>

        </TabsContent>
        <TabsContent value="userhistory">Change your password here.</TabsContent>
        <TabsContent value="userreview">Change your password here.</TabsContent>
        </Tabs>

    )
}


