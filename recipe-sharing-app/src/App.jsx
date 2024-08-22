
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm'

const App = () => (
  <Router>
    <Routes>
      <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
    </Routes>
  </Router>
);

export default App;
