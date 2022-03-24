import React from "react";
import "./CircleCard.css";

function CircleCard(props) {
  return (
    <div className="circle-card-wrapper" style={props.wrapperStyles}>
      <div className="circle-card" style={props.style}>
        {props.content}
      </div>
      {props.title ? props.title : ""}
    </div>
  );
}

export default CircleCard;
