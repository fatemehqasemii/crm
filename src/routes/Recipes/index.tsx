import { RecipesHeader } from "./components/recipes-header";
import { RecipesTable } from "./components/recipes-table";

export const RecipesPage = () => {
  return (
    <div
      className="page-container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      <RecipesHeader />
      <RecipesTable />
    </div>
  );
};
