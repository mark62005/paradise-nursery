"use client";

import Image from "next/image";
import { useProductListContext } from "@/contexts/product-list-context";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { cn } from "@/lib/utils";

function LandingSection() {
	const { isProductListOpen, setIsProductListOpen } = useProductListContext();

	return (
		<div
			className={cn(
				"relative min-h-screen w-full flex flex-col justify-center items-center",
				isProductListOpen ? "hidden" : ""
			)}
		>
			<Image
				src="/greenhouse.jpg"
				alt="Background of landing section"
				fill
				priority
				className="object-cover object-center z-[-1]"
			/>
			{/* IMAGE OVERLAY */}
			<div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0" />

			<MaxWidthWrapper className="grid grid-cols-12 items-center gap-0 lg:gap-20 z-10 text-primary-foreground">
				{/* LEFT SIDE */}
				<div className="min-h-[60vh] col-span-12 lg:col-span-5 flex flex-col justify-center items-center gap-4 text-center">
					<h1 className="text-4xl font-bold">Welcome To Paradise Nursery</h1>
					<Separator className="!w-1/4 self-center bg-border/80" />
					<p className="">Where Green Meets Serenity</p>

					<Button
						size="lg"
						onClick={() => setIsProductListOpen((prev) => !prev)}
					>
						Get Started
					</Button>
				</div>

				{/* RIGHT SIDE */}
				<div className="col-span-12 lg:col-span-7 px-10 md:px-6 lg:px-0 text-justify font-medium">
					<h3 className="text-center font-semibold">
						Welcome to Paradise Nursery, where green meets serenity!
					</h3>
					<br />
					<p>
						At Paradise Nursery, we are passionate about bringing nature closer
						to you. Our mission is to provide a wide range of high-quality
						plants that not only enhance the beauty of your surroundings but
						also contribute to a healthier and more sustainable lifestyle. From
						air-purifying plants to aromatic fragrant ones, we have something
						for every plant enthusiast.
					</p>
					<br />
					<p>
						Our team of experts is dedicated to ensuring that each plant meets
						our strict standards of quality and care. Whether you're a seasoned
						gardener or just starting your green journey, we're here to support
						you every step of the way. Feel free to explore our collection, ask
						questions, and let us help you find the perfect plant for your home
						or office.
					</p>
					<br />
					<p>
						Join us in our mission to create a greener, healthier world. Visit
						Paradise Nursery today and experience the beauty of nature right at
						your doorstep.
					</p>
				</div>
			</MaxWidthWrapper>
		</div>
	);
}
export default LandingSection;
