/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import ActivityCard from "./activity-card";

export default function ActivitiesCard() {
	return (
		<Card>
			<CardHeader>
				<div className="flex justify-between items-center">
					<CardTitle>Activities</CardTitle>
					<Button
						variant="ghost"
						className={cn("bg-muted text-primary dark:text-foreground")}>
						View all
					</Button>
				</div>
			</CardHeader>
			<CardContent>
				<ActivityCard />
			</CardContent>
		</Card>
	);
}
