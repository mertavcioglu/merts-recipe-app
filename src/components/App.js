import React, { useEffect, useState } from 'react';
import runtimeEnv from "@mars/heroku-js-runtime-env"
import Header from "./Header"
import Form from "./Form"
import Recipe from "./Recipe"
import Footer from "./Footer"

function App() {
  const env = runtimeEnv()

  const APP_ID = env.REACT_APP_APP_ID;
  const APP_KEY = env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  function getSearch(event) {
    setQuery(search);
    setSearch("")
    event.preventDefault();
    document.getElementById("form").value = ""
  }

  function handleChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="App">

      <Header />

      <Form
        getSearch={getSearch}
        onChange={handleChange}
      />

      <div className="recipes">
        {recipes.map((recipe, index) => {
          return (
            <Recipe
              key={index}
              id={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          )
        })}
      </div>

      <Footer />

    </div>
  );
}

export default App;
