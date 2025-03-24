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
}

export const ProductListContext = createContext<ProductListContextType | null>(
	null
);

export default function ProductListContextProvider({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isProductListOpen, setIsProductListOpen] = useState<boolean>(false);

	return (
		<ProductListContext.Provider
			value={{
				isProductListOpen,
				setIsProductListOpen,
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
