/** @format */

"use client";

import ProviderHeader from "@/components/Provider/ProviderHeader";
import ProviderFeed from "@/components/Provider/ProviderFeed";
import { feedArray } from "@/components/sampleData/Data";

export default function ProviderPage() {
	return (
		<div className="max-w-8xl h-screen bg-white flex flex-col">
			<ProviderHeader />
			<ProviderFeed feedArray={feedArray} />
		</div>
	);
}
