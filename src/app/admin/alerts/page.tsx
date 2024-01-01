/** @format */

import React from "react";
import AlertCard from "./components/alert-card";
import { format } from "date-fns";
import ActivitiesCard from "./components/activities-card";

export default function AlertPage() {
	const today = format(new Date(), "MMM dd, yyyy");

	return (
		<div className=" p-5">
			<div className="flex items-center gap-5 mb-5">
				<h1 className="text-2xl font-bold ">Alert Details</h1>
				<span className="bg-primary/5  dark:bg-muted dark:text-foreground text-primary text-sm p-2 rounded-full ">{`Today: ${today}`}</span>
			</div>
			{/* Add your content here */}
			<div className="flex flex-wrap gap-5">
				<AlertCard />
				<ActivitiesCard />
			</div>
		</div>
	);
}
