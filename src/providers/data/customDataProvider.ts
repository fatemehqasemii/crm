export const customDataProvider = {
  getList: async () => {
    const response = await fetch("http://localhost:3000/recipes");
    const data = await response.json();
    console.log("Fetched data:", data);

    const recipes = data;
    console.log(recipes, "recipes");

    return { data: recipes, total: recipes.length };
  },

  delete: async ({ id }: { id: number }) => {
    const response = await fetch(`http://localhost:3000/recipes/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error("Failed to delete recipe:", response.status);
      return { success: false };
    }

    return { success: true };
  },
};
