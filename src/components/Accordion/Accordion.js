import React from "react";
import "./Accordion.css";
import arrow from "assets/images/arrow.png";

function Accordion({ data }) {
	let [active, setActive] = React.useState(false);
	let accordionBodyRef = React.useRef("");

	const toggleAccordion = () => {
		setActive(!active);
	};

	return (
		<div className="accordion">
			<div onClick={toggleAccordion} className="accordion-header">
				<p className="fs-20px weight-7 light-black">{data.question}</p>
				<img
					src={arrow}
					alt=""
					className={active ? `accordion-btn active` : "accordion-btn"}
				/>
			</div>
			<div
				className="accordion-body"
				ref={accordionBodyRef}
				style={{
					height: active ? accordionBodyRef.current.scrollHeight + "px" : "0",
				}}
			>
				<div className="accordion-body-wrapper">
					<p className="fs-18px lightest-gray">{data.answer}</p>
				</div>
			</div>
		</div>
	);
}

export default Accordion;
