import React from "react";
import "./IngredientsCard.css";
import measurementIcon from "assets/images/measurement-icon.png";

function IngredientsCard(props) {
	return (
		<a target="blank" href={props.data.link} className="dark">
			<div className="ingredient-card">
				<div>
					<div className="ingredient-card-img">
						<img src={props.img} alt="" />
					</div>
				</div>
				<div className="ingredient-card-content">
					<p className="weight-6 fs-18px ingredient-title">{props.data.name}</p>
					<div className="ingredient-weight">
						<img src={measurementIcon} alt="" />
						<p className="fs-13px light-black ">2 kgs</p>
					</div>
				</div>
			</div>
		</a>
	);
}

export default IngredientsCard;
