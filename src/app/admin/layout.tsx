/** @format */

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const isSidebarOpen = false;

	const closeSidebar = () => {};
	return (
		<div className="w-full flex overflow-hidden">
			<div
				className={`fixed bottom-0 left-0 top-0 z-50 flex  w-72 flex-col  border bg-background  transition-transform duration-300 md:translate-x-0`}>
				<div className="mx-4 flex items-center justify-between md:justify-center">
					<a href="#" className="flex h-20  items-center"></a>

					{/* <X
						onClick={closeSidebar}
						className="block cursor-pointer md:hidden"
					/> */}
				</div>
				<ScrollArea>
					<Sidebar />
				</ScrollArea>
				<div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t">
					<div className="flex gap-2 items-center">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<div className="">
							<h3 className="font-semibold">Dr John Smith</h3>
							<p className="text-sm">drsmith@smithdental.com</p>
						</div>
					</div>
				</div>
			</div>

			<div className="ml-72 w-full ">
				<Navbar />
				<ScrollArea className="h-[calc(100vh-69px)]">{children}</ScrollArea>
			</div>
		</div>
	);
}
