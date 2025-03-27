import Image from "next/image";
import Link from "next/link";

function Logo() {
	return (
		<Link
			href="/"
			className="flex justify-between items-center gap-6 p-2 hover:opacity-90"
		>
			<Image
				src="/logo.png"
				alt={"Logo of Paradise Nursery"}
				width={44}
				height={44}
				className="rounded-full"
			/>

			<div className="flex flex-col items-start justify-center text-primary-foreground">
				<h1 className="text-2xl font-bold">Paradise Nursery</h1>
				<h5 className="text-sm font-medium">Where Green Meets Serenity</h5>
			</div>
		</Link>
	);
}
export default Logo;
