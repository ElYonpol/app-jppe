import React from "react";
import "./InputForm.css"

export default function InputForm(props) {
	return (
		<div>
			<label className="display-1--description inputForm__label" htmlFor={props.name}>
				{props.title}
			</label>
			<input className="inputForm__input"
				value={props.value}
				name={props.name}
				type={props.type}
				onChange={props.onChange}
			/>
		</div>
	);
}
