"use client";

import Image from "next/image";
import CartItemQuantityControl from "./CartItemQuantityControl";
import { useAppSelector } from "@/state/redux";
import {
	removeCartItem,
	selectItemQuantityWithId,
	updateTotalCost,
	updateTotalNumOfCartItems,
} from "@/state/slices/cartSlice";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useProductListContext } from "@/contexts/product-list-context";

interface CartItemCardProps {
	item: CartItem;
}

function CartItemCard({ item }: CartItemCardProps) {
	const dispatch = useDispatch();
	const quantity = useAppSelector((state) =>
		selectItemQuantityWithId(state, item.id)
	);
	const { cartItemIdsMap } = useProductListContext();

	function handleRemoveButtonClick(id: string) {
		dispatch(removeCartItem({ id }));
		dispatch(updateTotalNumOfCartItems({ quantity: quantity * -1 }));
		dispatch(updateTotalCost({ cost: item.cost * item.quantity * -1 }));

		cartItemIdsMap.delete(id);
	}

	return (
		<div className="h-50 grid grid-cols-2 items-center gap-4 bg-white text-black border-b-1">
			<Image
				src={item.imgUrl}
				alt={`Image of ${item.name}`}
				width={250}
				height={250}
				loading="lazy"
				className="max-h-44 col-span-1 object-cover my-2"
			/>

			<div className="col-span-1 flex flex-col justify-center items-start gap-2 py-2">
				<h5 className="text-lg font-bold">{item.name}</h5>
				<span className="text-sm">${item.cost}</span>

				<CartItemQuantityControl
					itemId={item.id}
					cost={item.cost}
					quantity={quantity}
				/>

				<span className="">Total: ${item.cost * item.quantity}</span>

				<Button
					variant="destructive"
					onClick={() => handleRemoveButtonClick(item.id)}
				>
					Delete
				</Button>
			</div>
		</div>
	);
}
export default CartItemCard;
