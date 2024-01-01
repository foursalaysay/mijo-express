/** @format */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ActivityCard = () => {
	return (
		<Card className="w-[328px] bg-muted border-0 shadow-none">
			<CardHeader className="p-3">
				<div className="flex gap-5 items-center ">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div>
						<p className="font-semibold">Kathryn Murphy</p>
						<span className="text-muted-foreground text-sm">Deleted Transaction</span>
					</div>
				</div>
			</CardHeader>
		</Card>
	);
};

export default ActivityCard;
