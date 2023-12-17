import UserHeader from "@/components/User/UserHeader"
import UserAppointment from "@/components/User/UserAppointment"

import { Service } from '@/lib/Types'



export default function UserAppointmentPage({services} : {services : Service[]}){
    return(
        <div className="max-w-8xl h-screen bg-white flex flex-col">       
            <UserHeader />
            <UserAppointment services={services}/>
        </div>
    )
}