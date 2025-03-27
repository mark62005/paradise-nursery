"use client";

import { useProductListContext } from "@/contexts/product-list-context";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Navbar from "./Navbar";

function Header() {
	const { isProductListOpen } = useProductListContext();

	return (
		<header
			className={cn(
				"fixed top-0 left-0 w-full bg-primary",
				!isProductListOpen ? "z-[-10]" : "z-[99]"
			)}
		>
			<MaxWidthWrapper className="min-h-[5rem] flex justify-between items-center">
				<Logo />

				<Navbar />
			</MaxWidthWrapper>
		</header>
	);
}
export default Header;
