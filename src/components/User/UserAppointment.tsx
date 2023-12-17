'use client'

import { ScrollArea } from "@/components/ui/scroll-area"
import UserAppointmentStatus from "./UserAppointmentStatus"
import { Service } from '@/lib/Types'




export default function UserAppointment({services} : {services : Service[]}){
    return(
        <ScrollArea className="w-full">
            <UserAppointmentStatus services={services}/>

        </ScrollArea>
    )
}


