import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function checkItemExistInCart(
	cartItems: CartItem[],
	id: string
): boolean {
	return cartItems.findIndex((item) => item.id === id) !== -1;
}
