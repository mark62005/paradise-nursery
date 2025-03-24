import ProductListContextProvider from "@/contexts/product-list-context";
import StoreProvider from "@/state/redux";

function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<StoreProvider>
			<ProductListContextProvider>{children}</ProductListContextProvider>
		</StoreProvider>
	);
}
export default Providers;
