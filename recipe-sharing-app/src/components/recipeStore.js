import {create} from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) => set((state) => ({recipes: state.recipes.filter(newRecipe => newRecipe.id !== id), })),
  updateRecipe: (updatedRecipe) => set((state) => ({recipes: state.recipes.map(newRecipe => newRecipe.id === updatedRecipe.id ? updatedRecipe : newRecipe), })),

}));

export default useRecipeStore;
