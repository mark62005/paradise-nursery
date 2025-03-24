import StoreProvider from "@/state/redux";

function Providers({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <StoreProvider>{children}</StoreProvider>;
}
export default Providers;
