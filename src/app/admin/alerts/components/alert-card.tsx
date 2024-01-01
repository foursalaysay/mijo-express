/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowUpFromLine, Filter } from "lucide-react";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "../../components/data-table";
import { alertData } from "./data";

function AlertCard() {
	return (
		<Card className="grow">
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle>Alerts</CardTitle>
					<div className="flex items-center gap-4">
						<Button variant="secondary" size="icon">
							<Filter size={15} />
						</Button>
						<Button
							variant="secondary"
							className={cn(
								"text-primary dark:text-foreground flex gap-2"
							)}>
							View all
						</Button>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<DataTable columns={columns} data={alertData} />
			</CardContent>
		</Card>
	);
}

export default AlertCard;
