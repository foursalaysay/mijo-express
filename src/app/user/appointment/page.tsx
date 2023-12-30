/** @format */

import UserHeader from "@/components/User/UserHeader";
import UserAppointment from "@/components/User/UserAppointment";

import { services } from "@/components/User/InfoTypes";

export default function UserAppointmentPage() {
	return (
		<div className="max-w-8xl h-screen bg-white flex flex-col">
			<UserHeader />
			<UserAppointment services={services} />
		</div>
	);
}
