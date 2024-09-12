import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const RecipeDetail = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => {
            const foundRecipe = data.recipes.find((recipe) => recipe.id === parseInt(id));
            setRecipe (foundRecipe);
        })
        .catch((error) => console.error("Error finding recipe: ", error));

    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
        
    }

    return(
        <div className='container mx-auto p-4 shadow-md '>
            <h1 className='text-3xl font-bold mb-4'>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} className='w-full h-64 object-cover mb-4' />
            <p className='text-gray-700 text-lg mb-4'>{recipe.summary}</p>
            <h2 className='text-2xl font-bold mb-2'>Ingredients</h2>
            <ul className='list-disc list-inside mb-4'>
                {recipe.ingredients && recipe.ingredients.map((ingredient, index)=> (
               <li key={index}>{ingredient}</li> 
                ))}
             </ul>
            <h2 className='text-2xl font-bold mb-2'>Cooking Instructions</h2>
            <p className='text-gray-700'>
                {recipe.instructions}
            </p>
        </div>
    );
};

export default RecipeDetail;
