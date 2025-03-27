import CategoryHeader from "./CategoryHeader";
import PlantCard from "./PlantCard";

interface CategoryProps {
	category: PlantCategory;
}

function Category({ category }: CategoryProps) {
	return (
		<section className="flex flex-col justify-center items-center gap-6 my-20 mx-auto">
			<CategoryHeader title={category.name} />

			<div className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-5 mx-auto md:w-full">
				{category.plants.map((plant) => (
					<PlantCard
						plant={plant}
						key={plant.id}
					/>
				))}
			</div>
		</section>
	);
}
export default Category;
