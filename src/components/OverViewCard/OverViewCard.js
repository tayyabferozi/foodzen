import React from "react";
import "./OverViewCard.css";

function OverViewCard(props) {
  return (
    <div className="overview-card">
      <div>
        <img src={props.img} alt="" />
      </div>
      <div>
        <p className="fs-15px weight-7 mb-5">{props.title}</p>
        <p className="fs-15px weight-4 lightest-gray">{props.subtitle}</p>
      </div>
    </div>
  );
}

export default OverViewCard;
