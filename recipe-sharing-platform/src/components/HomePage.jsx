import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

const HomePage = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(()=> {
        fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setRecipes(data.recipes))
        .catch((error) => console.error('Error loading recipes: ', error));
    
    }, []);

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-xl sm:text-xl font-bold mb-4 sm:mb-6">Recipe List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:-6">
            {recipes.map((recipe) => (

                <div
                    key={recipe.id}
                    className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                    <Link to={`/recipes/${recipe.id}`}>

                    <img 
                    src={recipe.image}
                    alt={recipe.title} 
                    className="w-full h-36 sm:h-48 object-cover"
                    />
                    <div className="p-3 sm:p-4">
                    <h2 className="text-xl sm:text-xl font-semibold mb-1 sm:mb-2">{recipe.title}</h2>

                    <p className="text-gray-600 ">{recipe.summary}</p>
                    </div>
                    </Link>

                </div>

            ))}
            </div>
        </div>
    );
};

export default HomePage;
