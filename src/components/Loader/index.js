import React from "react";
import { HashLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
	return (
		<div className="loader_container">
			<HashLoader size={80} color="#79add2" />
		</div>
	);
};

export default Loader;
