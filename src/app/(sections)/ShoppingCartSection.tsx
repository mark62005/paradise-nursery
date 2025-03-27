"use client";

import CartItemCard from "@/components/carts/CartItemCard";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/state/redux";
import { selectCartItems, toggleCartOpen } from "@/state/slices/cartSlice";
import { useDispatch } from "react-redux";

function ShoppingCartSection() {
	const dispatch = useDispatch();
	const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
	const totalCost = useAppSelector((state) => state.cart.totalCost);
	const cartItems = useAppSelector(selectCartItems);

	function handleContinueButtonClick() {
		dispatch(toggleCartOpen());
	}

	function handleCheckoutButtonClick() {
		alert("Functionality to be added for future reference");
	}

	return (
		<section
			className={cn(
				"fixed top-0 bottom-0 left-0 right-0 z-[90] min-h-screen w-full bg-[#f0f0f0]/80 overflow-y-scroll",
				isCartOpen ? "block" : "hidden"
			)}
		>
			<MaxWidthWrapper className="my-20 flex flex-col justify-start items-center gap-6 text-center h-auto">
				<p className="pt-10 text-2xl font-bold">
					Total Cart Amount: ${totalCost}
				</p>
				<div className="flex flex-col w-2/5 shadow border">
					{cartItems.map((item) => (
						<CartItemCard
							item={item}
							key={item.id}
						/>
					))}
				</div>

				<Button
					onClick={() => {
						handleContinueButtonClick();
					}}
					className="flex w-1/6"
				>
					Continue Shopping
				</Button>
				<Button
					onClick={() => {
						handleCheckoutButtonClick();
					}}
					className="flex w-1/6"
				>
					Checkout
				</Button>
			</MaxWidthWrapper>
		</section>
	);
}
export default ShoppingCartSection;
