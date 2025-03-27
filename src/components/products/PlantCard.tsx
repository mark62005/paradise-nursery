"use client";

import { useAppDispatch, useAppSelector } from "@/state/redux";
import {
	addNewCartItem,
	incrementItemQuantity,
	selectCartItems,
	updateTotalCost,
} from "@/state/slices/cartSlice";
import { useProductListContext } from "@/contexts/product-list-context";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface PlantCardProps {
	plant: Plant;
}

function PlantCard({ plant }: PlantCardProps) {
	const dispatch = useAppDispatch();
	const cartItems = useAppSelector(selectCartItems);
	const { cartItemIdsMap } = useProductListContext();

	function isInCart() {
		return cartItems.findIndex((item) => item.id === plant.id) !== -1;
	}

	function handleAddToCartButtonClick(product: Plant) {
		/* NEW ITEM */
		if (cartItemIdsMap.get(product.id) === undefined) {
			// Add item to store
			dispatch(addNewCartItem({ product }));

			// Set item to ids map
			cartItemIdsMap.set(product.id, true);
		} else {
			/* EXISTING ITEM IN CART */
			// Increment quantity to store
			dispatch(incrementItemQuantity({ id: product.id }));
		}

		dispatch(updateTotalCost({ cost: product.cost }));
	}

	return (
		<Card className="relative items-center text-center border-none">
			<CardHeader className="w-full">
				<CardTitle>{plant.name.toString()}</CardTitle>
			</CardHeader>
			<CardContent>
				<Image
					src={plant.imgUrl}
					alt={plant.name}
					width={200}
					height={200}
					priority
					className="object-contain object-center h-40 w-full"
				/>

				<p className="text-light-red my-1">${plant.cost}</p>
				<p className="w-5/6 mx-auto">{plant.description}</p>
			</CardContent>
			<CardFooter>
				<Button
					disabled={isInCart()}
					onClick={() => handleAddToCartButtonClick(plant)}
				>
					{isInCart() ? "Added" : "Add"} To Cart
				</Button>
			</CardFooter>

			{/* SALE BADGE */}
			<span className="absolute top-0 right-0 z-10 bg-light-red text-primary-foreground text-sm font-semibold py-0.5 px-3 border-none">
				SALE
			</span>
		</Card>
	);
}
export default PlantCard;
