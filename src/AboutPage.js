import React from 'react';

const AboutPage = () => {
  return (
    <div className="container">
      <h1>About Recipe Lookup App</h1>
      <p>
        The Recipe Lookup App allows you to search for various recipes based on keywords. Simply enter a recipe keyword
        in the search box, and the app will fetch recipes matching your search term from the MealDB API.
      </p>
      <p>
        The app provides a list of recipes along with their names. You can click on a recipe to view more details or to
        see the instructions on how to prepare it.
      </p>
      <p>
        The Recipe Lookup App is built using React and utilizes the React Router for navigation. It demonstrates the use
        of React hooks such as useState and useEffect to manage state and perform asynchronous API calls.
      </p>
      <p>Start exploring and discovering new recipes with the Recipe Lookup App!</p>
    </div>
  );
};

export default AboutPage;