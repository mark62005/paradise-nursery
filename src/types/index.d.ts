import { PlantCategoryName as PlantCategoryNameFromModule } from "./enum";

declare global {
	/* PLANTS */
	export interface PlantCategory {
		id: string;
		name: PlantCategoryName;
		plants: Plant[];
	}

	export interface Plant {
		id: string;
		name: string;
		imgUrl: string;
		description: string;
		cost: number;
	}

	/* CARTS */
	export interface CartItem extends Plant {
		quantity: number;
	}

	/* ENUMS */
	enum PlantCategoryName {
		AirPurifying = PlantCategoryNameFromModule.AirPurifying,
		AromaticFragrant = PlantCategoryNameFromModule.AromaticFragrant,
		InsectRepellent = PlantCategoryNameFromModule.InsectRepellent,
		Medicinal = PlantCategoryNameFromModule.Medicinal,
		LowMaintenance = PlantCategoryNameFromModule.LowMaintenance,
	}
}

export {};
