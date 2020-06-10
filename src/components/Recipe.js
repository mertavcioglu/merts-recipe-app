import React from "react"

function Recipe(props) {
  return (
    <div key={props.id} className="recipe-div">
      <h1 className="recipe-header">{props.title}</h1>
      <ol className="ordered-list">
        {props.ingredients.map((ingredient, index) => (
          <li key={index} className="list-item">{ingredient.text}</li>
        ))}
      </ol>
      <div>
        <p className="calories-p"><span className="calories-text">Calories: </span><span className="calories-number">{Math.floor(props.calories)}</span></p>
        <img className="recipe-image" src={props.image} alt="" />
      </div>
    </div>
  )
}

export default Recipe