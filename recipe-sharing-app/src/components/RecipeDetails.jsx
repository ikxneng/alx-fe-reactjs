import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm'; // Adjust the path as needed
import DeleteRecipeButton from './DeleteRecipeButton'; // Adjust the path as needed

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === Number(recipeId)) // Convert ID to number if necessary
  );

  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <p>Recipe not found</p>; // Handle case where recipe is not found
  }

  return (
    <div>
      {isEditing ? (
        <EditRecipeForm recipeId={Number(recipeId)} onClose={() => setIsEditing(false)} />
      ) : (
        <div>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
          <DeleteRecipeButton recipeId={Number(recipeId)} />
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
