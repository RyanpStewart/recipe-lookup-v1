import React, { useState, useEffect } from 'react';

const RecipeApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false); // State for tracking search status

  useEffect(() => {
    if (searchTerm !== '') {
      fetchRecipes(); // Fetch recipes when searchTerm changes
    } else {
      setRecipes([]); // Clear recipes when searchTerm is empty
    }
  }, [searchTerm]);

  const fetchRecipes = async () => {
    setIsLoading(true);
    try {
      // Make an API call to fetch recipes based on the search term
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      setRecipes(data.meals || []); 
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setIsLoading(false);
      setSearched(true); 
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchRecipes(); // Trigger recipe fetch when search form is submitted
  };

  return (
    <div className="container">
      <h1>Recipe Lookup App</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter a recipe keyword"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {searched && recipes.length === 0 ? (
            <div className="no-recipes">No recipes found</div>
          ) : (
            <ul className="recipe-list">
              {recipes.map((recipe) => (
                <li key={recipe.idMeal} className="recipe-item">
                  {recipe.strMeal}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default RecipeApp;
