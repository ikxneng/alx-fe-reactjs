import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  searchTerm: '',
  filteredRecipes: [],
  recommendations: [],

  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return { 
      recipes: updatedRecipes, 
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ) 
    };
  }),

  setRecipes: (recipes) => set(state => ({
    recipes,
    filteredRecipes: recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  deleteRecipe: (id) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  updateRecipe: (updatedRecipe) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  setSearchTerm: (term) => set(state => {
    const updatedSearchTerm = term;
    return {
      searchTerm: updatedSearchTerm,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(updatedSearchTerm.toLowerCase())
      )
    };
  }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
