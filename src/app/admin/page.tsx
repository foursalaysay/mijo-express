/** @format */

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

export default function AdminPage() {
	return (
		<div className="w-96 md:w-2/3 lg:w-screen">
			<div>
				<aside>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Home
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/about" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										About
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/signup" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										SignUp
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</aside>

				<main>
					<section></section>
				</main>
			</div>
			<footer></footer>
		</div>
	);
}
