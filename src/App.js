import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RecipeApp from './RecipeApp';
import Navbar from './Navbar';
const App = () => {
  return (
    <Router>
      <div>
     <Navbar>
        <header>
          <nav>
            <ul className="navbar">
              <li className="navbar-item">
                <Link to="/" className="navbar-link">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/about" className="navbar-link">About</Link>
              </li>
              <li className="navbar-item">
                <Link to="/recipeapp" className="navbar-link">Recipe App</Link>
              </li>
            </ul>
          </nav>
        </header>
 </Navbar>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/recipeapp" element={<RecipeApp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
