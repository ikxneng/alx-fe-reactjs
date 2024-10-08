import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const navigate = useNavigate();  
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {

    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);

      navigate('/');
    }
  };

  return (
    <button onClick={handleDelete} className="delete-recipe-button">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
