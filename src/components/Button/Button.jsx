import React from "react";
import CartWidget from "../NavBar/CartWidget";
import "./button.css";

export default function Button() {
	return (
		<button
			className="button-cart"
			title="Haga click para agregar 'Blanqueamiento' al carrito"
		>
			Agregar <CartWidget />
		</button>
	);
}
