import React from "react";
import "./RecipeCard.css";

function RecipeCard(props) {
  return (
    <div className="recipe-card">
      <img src={props.img} alt="" />
      <p className="fs-16px weight-6 gray">{props.title}</p>
    </div>
  );
}

export default RecipeCard;
