/** @format */

"use client";

import ProviderHeader from "@/components/Provider/ProviderHeader";
import ProviderProfile from "@/components/Provider/ProviderProfile";

export default function ProviderProfilePage() {
	return (
		<div className="max-w-8xl h-screen bg-white flex flex-col">
			<ProviderHeader />
			<ProviderProfile />
		</div>
	);
}
