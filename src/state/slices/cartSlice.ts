import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../redux";
import { checkItemExistInCart } from "@/lib/utils";

interface InitialStateType {
	isCartOpen: boolean;
	cartItems: CartItem[];
	totalNumOfCartItems: number;
	totalCost: number;
}

export const initialState: InitialStateType = {
	isCartOpen: false,
	cartItems: [],
	totalNumOfCartItems: 0,
	totalCost: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addNewCartItem: (
			state: InitialStateType,
			action: PayloadAction<{ product: Plant }>
		) => {
			const { product } = action.payload;

			/* CHECK IF ITEM DOES NOT EXIST IN CART */
			if (checkItemExistInCart(state.cartItems, product.id)) {
				return;
			}

			state.cartItems.push({
				...product,
				quantity: 1,
			});
			state.totalNumOfCartItems++;
		},
		removeCartItem: (state, action: PayloadAction<{ id: string }>) => {
			const { id } = action.payload;

			/* CHECK IF ITEM EXIST IN CART */
			if (!checkItemExistInCart(state.cartItems, id)) {
				return;
			}

			state.cartItems = state.cartItems.filter((item) => item.id !== id);
		},
		incrementItemQuantity: (
			state: InitialStateType,
			action: PayloadAction<{ id: string }>
		) => {
			const { id } = action.payload;

			/* CHECK IF ITEM EXIST IN CART */
			if (!checkItemExistInCart(state.cartItems, id)) {
				return;
			}

			state.cartItems = state.cartItems.map((item) => {
				if (item.id === id) {
					item.quantity++;
				}
				return item;
			});
			state.totalNumOfCartItems++;
		},
		decrementItemQuantity: (
			state: InitialStateType,
			action: PayloadAction<{ id: string }>
		) => {
			const { id } = action.payload;

			/* CHECK IF ITEM EXIST IN CART */
			if (!checkItemExistInCart(state.cartItems, id)) {
				return;
			}

			state.cartItems = state.cartItems.map((item) => {
				if (item.id === id && item.quantity > 1) {
					item.quantity--;
				}
				return item;
			});
			state.totalNumOfCartItems--;
		},
		toggleCartOpen: (state) => {
			state.isCartOpen = !state.isCartOpen;
		},
		updateTotalNumOfCartItems: (
			state,
			action: PayloadAction<{ quantity: number }>
		) => {
			state.totalNumOfCartItems += action.payload.quantity;
		},
		updateTotalCost: (state, action: PayloadAction<{ cost: number }>) => {
			state.totalCost += action.payload.cost;
		},
	},
});

export const {
	addNewCartItem,
	removeCartItem,
	incrementItemQuantity,
	decrementItemQuantity,
	toggleCartOpen,
	updateTotalNumOfCartItems,
	updateTotalCost,
} = cartSlice.actions;

export function selectTotalCartItems(state: RootState): number {
	return state.cart.totalNumOfCartItems;
}

export function selectCartItems(state: RootState): CartItem[] {
	return state.cart.cartItems;
}

export function selectItemQuantityWithId(state: RootState, id: string): number {
	return state.cart.cartItems.find((item) => item.id === id)?.quantity ?? 0;
}

export default cartSlice.reducer;
