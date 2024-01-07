/** @format */
"use client";

import { NextPage } from "next";
import React from "react";
import { PieGraphTransactions } from "./components/pie-graph-transactions";
import { TransactionsTable } from "./components/transactions-table";

const DashboardPage: NextPage = () => {
	return (
		<div >
			<div className=" p-5">
				<h1 className="text-2xl font-bold mb-5">Dashboard Page</h1>
				{/* Add your content here */}
				<div className="flex flex-wrap gap-5">
					<PieGraphTransactions />
					<TransactionsTable />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
