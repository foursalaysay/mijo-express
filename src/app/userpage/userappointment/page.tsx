import UserHeader from "@/components/User/UserHeader"
import UserAppointment from "@/components/User/UserAppointment"


import { services } from '@/components/User/InfoTypes';

// async function getServices(){
//     const response = await fetch(services);
//     return response;
// }


export default async function UserAppointmentPage(){
    // const returnService = await getServices();

    return(
        <div className="max-w-8xl h-screen bg-white flex flex-col">       
            <UserHeader />
            <UserAppointment services={services}/>
        </div>
    )
}