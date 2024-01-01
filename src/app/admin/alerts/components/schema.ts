/** @format */

import { z } from "zod";

const AlertProduct =z.object({
	title: z.string(),
	price: z.number(),
	image: z.string(),
})

export const alertSchema = z.object({
	id: z.string(),
	product: AlertProduct,
	amount: z.number(),
	status: z.string(),
});

export type Alert = z.infer<typeof alertSchema>;
export type AlertProduct = z.infer<typeof AlertProduct>;
