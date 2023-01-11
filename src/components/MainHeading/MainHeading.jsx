import React from "react";
import "../../index.css";

export default function MainHeading(props) {
	return (
		<div className="col--main">
			<h1>
				<div className="display-1-intro">{props.intro}</div>
			</h1>
			<div className="display-1--subtitle">{props.subtitle}</div>
			<br />
			<br />
			{props.children}
		</div>
	);
}
