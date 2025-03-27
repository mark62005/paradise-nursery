"use client";

import { useAppDispatch, useAppSelector } from "@/state/redux";
import { toggleCartOpen } from "@/state/slices/cartSlice";
import { selectTotalCartItems } from "@/state/slices/cartSlice";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Navbar() {
	const dispatch = useAppDispatch();
	const totalCartItems = useAppSelector(selectTotalCartItems);
	const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);

	function handlePlantLinkClick() {
		if (isCartOpen) {
			dispatch(toggleCartOpen());
		}

		return;
	}

	function handleButtonClick() {
		dispatch(toggleCartOpen());
	}

	return (
		<nav className="flex justify-between items-center gap-8">
			<Button
				variant="link"
				onClick={handlePlantLinkClick}
				className="text-xl font-medium text-primary-foreground hover:text-primary-foreground/90"
			>
				Plants
			</Button>

			<Button
				variant="secondary"
				onClick={handleButtonClick}
				className="h-11"
			>
				<ShoppingCart className="!w-6 !h-6" />
				<Badge>{totalCartItems}</Badge>
			</Button>
		</nav>
	);
}
export default Navbar;
