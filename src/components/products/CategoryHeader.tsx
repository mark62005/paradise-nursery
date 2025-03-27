import { PlantCategoryName } from "@/types/enum";

interface CategoryHeaderProps {
	title: PlantCategoryName;
}

function CategoryHeader({ title }: CategoryHeaderProps) {
	return (
		<h2 className="w-3/5 text-2xl font-bold text-center  py-3 border-y-[#050404] border-y">
			{title}
		</h2>
	);
}
export default CategoryHeader;
