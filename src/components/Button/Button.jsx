import React from "react";
import "./Button.css";

export default function Button(props) {
	return (
		<button
		onClick={props.onButtonClick}
			className={props.className}
			title={props.title}
			disabled={props.disabled}
		>{props.children || props.text}
		</button>
	);
}
