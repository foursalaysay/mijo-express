/** @format */

"use client";

import ProviderHeader from "@/components/Provider/ProviderHeader";
import ProviderRequest from "@/components/Provider/ProviderRequest";

import { ProviderHistoryData } from "@/components/sampleData/Data";

export default function ProviderRequestPage() {
	return (
		<div className="max-w-8xl h-screen bg-white flex flex-row">
			<div className="w-full bg-white">
				<ProviderHeader />
				<ProviderRequest ProviderHistoryData={ProviderHistoryData} />
			</div>
		</div>
	);
}
