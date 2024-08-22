import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore'; 

const EditRecipeForm = ({ recipeId, onClose }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );

  const updateRecipe = useRecipeStore(state => state.updateRecipe);

  // Initialize state with the recipe's title and description
  const [title, setTitle] = useState(recipe ? recipe.title : '');
  const [description, setDescription] = useState(recipe ? recipe.description : '');

  useEffect(() => {

    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    updateRecipe({ ...recipe, title, description });
    onClose(); // Close the form after submission
  };

  if (!recipe) return <p>Loading...</p>; 

  return (
    <div className="edit-recipe-form">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
