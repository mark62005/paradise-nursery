import Header from "@/components/shared/Header";
import LandingSection from "./(sections)/LandingSection";
import ProductListSection from "./(sections)/ProductListSection";
import ShoppingCartSection from "./(sections)/ShoppingCartSection";

export default function Home() {
	return (
		<div className="relative min-h-60vh">
			<Header />

			<main className="relative">
				<LandingSection />
				<ProductListSection />

				<ShoppingCartSection />
			</main>
		</div>
	);
}
