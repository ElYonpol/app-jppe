import { useState, useEffect } from "react";

export default function Greeting() {
	const [person, setPerson] = useState("...");

	console.log("Este es un render del componente con estado: ", person);

	useEffect(() => {
		console.log("El componente ya fue montado");
		setPerson("Usuario");
	},[]);

	return (
		<>
			<div className="display-1--description">Hola {person}</div>
		</>
	);
}
