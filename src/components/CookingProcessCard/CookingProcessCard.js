import React from "react";
import "./CookingProcessCard.css";

function CookingProcessCard(props) {
	return (
		<div className="cooking-process-card">
			<div>
				<div className="cooking-process-count fs-25px">{props.order + 1}</div>
			</div>
			<p className="cooking-process-disc fs-15px light-black weight-4">
				{props.data}
			</p>
		</div>
	);
}

export default CookingProcessCard;
