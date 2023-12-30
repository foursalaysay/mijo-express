/** @format */

import UserHeader from "@/components/User/UserHeader";
import UserProfile from "@/components/User/UserProfile";

export default function UserProfilePage() {
	return (
		<div className="max-w-8xl h-screen bg-white flex flex-col">
			<UserHeader />
			<UserProfile />
		</div>
	);
}
