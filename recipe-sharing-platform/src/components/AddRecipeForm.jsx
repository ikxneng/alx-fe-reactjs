import React, {useState} from 'react';



const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [preperation, setPreperation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const ingredientArray = ingredients.split(',').map(ingredient => ingredient.trim());

        const newRecipe = {
            title, 
            ingredients: ingredientArray,
            preperationSteps
        };

        console.log(newRecipe);
    };

    return(
        <div className='container mx-auto p-4'>
            <h1 className='text-2xl font-bold mb-4'>Add Recipe </h1>
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">Recipe Title</label>
                    <input 
                    type="text"
                    value={title} 
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}  
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder='Enter the Recipe Title '
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="ingredients">
                        Ingredients (comma seperated)
                    </label>

                    <textarea 
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                    placeholder='Enter ingredients'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="preparationSteps">
                        Preperation Steps 
                    </label>

                    <textarea 
                    id="preparationSteps" 
                    value={preparationSteps}
                    onChange={(e)=> setPreperation(e.target.value)}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:ouline-none focus:shadow-outline '
                    placeholder='Enter the preparation steps'
                    />
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

