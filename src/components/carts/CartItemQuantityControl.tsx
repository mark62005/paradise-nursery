"use client";

import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import {
	decrementItemQuantity,
	incrementItemQuantity,
	updateTotalCost,
} from "@/state/slices/cartSlice";

interface CartItemQuantityControlProps {
	itemId: string;
	cost: number;
	quantity: number;
}

function CartItemQuantityControl({
	itemId,
	cost,
	quantity,
}: CartItemQuantityControlProps) {
	const dispatch = useDispatch();

	function handleIncrementQuantity(id: string) {
		dispatch(incrementItemQuantity({ id }));

		dispatch(updateTotalCost({ cost }));
	}

	function handleDecrementQuantity(id: string) {
		dispatch(decrementItemQuantity({ id }));

		dispatch(updateTotalCost({ cost: cost * -1 }));
	}

	return (
		<div className="flex justify-center items-center gap-3">
			<Button
				size="sm"
				variant="secondary"
				onClick={() => handleDecrementQuantity(itemId)}
				disabled={quantity === 1}
				className="font-bold bg-zinc-300 hover:bg-zinc-300/80"
			>
				&#8211;
			</Button>

			<span>{quantity}</span>

			<Button
				size="sm"
				variant="secondary"
				onClick={() => handleIncrementQuantity(itemId)}
				className="font-bold bg-zinc-300 hover:bg-zinc-300/80"
			>
				&#43;
			</Button>
		</div>
	);
}
export default CartItemQuantityControl;
