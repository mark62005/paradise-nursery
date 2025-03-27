"use client";

import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";

interface ProductListContextType {
	isProductListOpen: boolean;
	setIsProductListOpen: Dispatch<SetStateAction<boolean>>;
	cartItemIdsMap: Map<string, boolean>;
	setCartItemIdsMap: Dispatch<SetStateAction<Map<string, boolean>>>;
}

export const ProductListContext = createContext<ProductListContextType | null>(
	null
);

export default function ProductListContextProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isProductListOpen, setIsProductListOpen] = useState<boolean>(true);
	const [cartItemIdsMap, setCartItemIdsMap] = useState<Map<string, boolean>>(
		new Map()
	);

	return (
		<ProductListContext.Provider
			value={{
				isProductListOpen,
				setIsProductListOpen,
				cartItemIdsMap,
				setCartItemIdsMap,
			}}
		>
			{children}
		</ProductListContext.Provider>
	);
}

export function useProductListContext() {
	const context = useContext(ProductListContext);
	if (!context) {
		throw new Error(
			"useProductListContext must be used within a ProductListContextProvider"
		);
	}

	return context;
}
