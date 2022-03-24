import React from "react";
import "./TitleBar.css";

function TitleBar(props) {
  let {
    fontSize = "fs-18px",
    weight = "weight-7",
    color = "black-2",
    style,
    title,
    img,
  } = props;
  return (
    <div
      className={`food-item-card-title ${color} ${fontSize} ${weight}`}
      style={style}
    >
      {img}
      {title}
    </div>
  );
}

export default TitleBar;
