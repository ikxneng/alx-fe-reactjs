import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preparationSteps, setPreparationSteps] = useState('');

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = 'Recipe title is required';
        if (!ingredients.trim()) newErrors.ingredients = 'At least one ingredient is required';
        if (!preparationSteps.trim()) newErrors.preparationSteps = 'Preparation steps are required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;  // return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const ingredientArray = ingredients.split(',').map(ingredient => ingredient.trim());

        const newRecipe = {
            title,
            ingredients: ingredientArray,
            preparationSteps
        };

        console.log(newRecipe);

        // Clear form after submission
        setTitle('');
        setIngredients('');
        setPreparationSteps('');
        setErrors({});
    };

    return (
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Add Recipe</h1>
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">Recipe Title</label>
                    <input
                        type="text"
                        value={title}
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.title ? 'border-red-500' : ''}`}
                        placeholder='Enter the Recipe Title'
                    />
                    {errors.title && <p className="text-red-500 text-xs italic">{errors.title}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="ingredients">
                        Ingredients (comma-separated)
                    </label>
                    <textarea
                        id="ingredients"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ingredients ? 'border-red-500' : ''}`}
                        placeholder='Enter ingredients'
                    />
                    {errors.ingredients && <p className="text-red-500 text-xs italic">{errors.ingredients}</p>}
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="preparationSteps">
                        Preparation Steps
                    </label>
                    <textarea
                        id="preparationSteps"
                        value={preparationSteps}
                        onChange={(e) => setPreparationSteps(e.target.value)}
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.preparationSteps ? 'border-red-500' : ''}`}
                        placeholder='Enter the preparation steps'
                    />
                    {errors.preparationSteps && <p className="text-red-500 text-xs italic">{errors.preparationSteps}</p>}
                </div>

                <div className='flex items-center justify-between'>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipeForm;
