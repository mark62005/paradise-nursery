"use client";

import { useAppSelector } from "@/state/redux";
import { selectPlants } from "@/state/slices/plantSlice";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import Category from "@/components/products/Category";
import { cn } from "@/lib/utils";

function ProductListSection() {
	const plants = useAppSelector(selectPlants);
	const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);

	return (
		<MaxWidthWrapper
			className={cn(
				"mt-15",
				isCartOpen ? "h-[80vh] overflow-hidden" : "overflow-y-auto"
			)}
		>
			{plants.map((category) => (
				<Category
					category={category}
					key={category.id}
				/>
			))}
		</MaxWidthWrapper>
	);
}
export default ProductListSection;
