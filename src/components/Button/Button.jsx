import React from "react";
import "./Button.css";

export default function Button(props) {
	return (
		<button
		onClick={props.onButtonClick}
			className="button-cart"
			title={props.title}
		>{props.children || props.text}
		</button>
	);
}
