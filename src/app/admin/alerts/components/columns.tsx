/** @format */

import { ColumnDef } from "@tanstack/react-table";
import { Alert, AlertProduct } from "./schema";
import { DataTableColumnHeader } from "../../components/data-table-column-header";
import Image from "next/image";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Alert>[] = [
	{
		accessorKey: "product",
		header: ({ column }) => (
			<DataTableColumnHeader title="Product" column={column} />
		),
		cell: ({ row }) => {
			const product: AlertProduct = row.getValue("product");

			return (
				<div className="flex items-center gap-5">
					<Image
						src="/placeholder.jpg"
						alt="place holder image"
						width={100}
						height={100}
					/>
					<div className="">
						<h1 className="font-semibold">{product.title}</h1>
						<span className="text-muted-foreground">${product.price}</span>
					</div>
				</div>
			);
		},
	},
	{
		accessorKey: "amount",
		header: ({ column }) => (
			<DataTableColumnHeader title="Amount" column={column} />
		),
		cell: ({ row }) => {
			return (
				<span className="text-muted-foreground">${row.getValue("amount")}</span>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => (
			<DataTableColumnHeader title="Status" column={column} />
		),
		cell: ({ row }) => {
			const status = row.getValue("status") as keyof typeof statusClasses;

			const statusClasses = {
				New: "inline-flex items-center  px-3 py-2 bg-info-100 rounded-full text-sm text-info-500",
				Reviewed:
					"inline-flex items-center  px-3 py-2 bg-danger-100  rounded-full text-sm text-danger-500",
			};
			const statusClass = statusClasses[status];

			if (statusClass) {
				return (
					<span
						className={`text-xs font-medium me-2 p-2 rounded-full ${statusClass}`}>
						{status}
					</span>
				);
			} else {
				return null;
			}
		},
	},
	{
		id: "actions",
		cell: ({ row }) => <DataTableRowActions row={row} />,
	},
];
