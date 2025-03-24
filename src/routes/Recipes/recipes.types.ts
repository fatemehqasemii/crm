export interface OptionType {
  label: string;
  value: string;
}

export interface Recipe {
  id: string;
  recipeName: string;
  category: string;
  type: string;
  yield: number;
  serving: number;
  recipeCost: number;
  foodCost: number;
  materialCost: number;
}
