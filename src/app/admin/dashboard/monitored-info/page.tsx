/** @format */

import { Button } from "@/components/ui/_app/button";
import { Download, Plus, SlidersHorizontal } from "lucide-react";
import React from "react";

const MonitoredInfoPage = () => {
	return (
		<div className="p-5">
			<div className="flex items-center justify-between  mb-5">
				<h1 className="text-2xl font-bold ">Report</h1>
				<div className="flex gap-2">
					<Button className="" variant="secondary">
						<SlidersHorizontal size={15}  />
					</Button>
					<Button className="flex gap-4">
						<Download size={15} />
						Download
					</Button>
				</div>
			</div>
			{/* Add your content here */}
			<div className="flex flex-col gap-10 w-full"></div>
		</div>
	);
};

export default MonitoredInfoPage;
