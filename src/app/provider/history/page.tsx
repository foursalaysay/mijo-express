/** @format */

"use client";

import ProviderHeader from "@/components/Provider/ProviderHeader";
import ProviderHistory from "@/components/Provider/ProviderHistory";
import { ProviderHistoryData } from "@/components/sampleData/Data";

export default function ProviderHistoryPage() {
	return (
		<div className="max-w-8xl h-screen bg-white flex flex-col">
			<ProviderHeader />
			<ProviderHistory ProviderHistoryData={ProviderHistoryData} />
		</div>
	);
}
