import React from "react";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import "./NavBar.css";

function CartWidget() {
	const valueContext = useContext(cartContext);

	const totalItemsInCart = valueContext.totalItemsInCartfn();

	const totalQtyInCart = valueContext.totalQtyInCartfn();

	return (
		<>
			<span className="nav__link">🛒</span>
			<span className="nav__link">{totalItemsInCart} / </span>
			<span className="nav__link">{totalQtyInCart}</span>
		</>
	);
}

export default CartWidget;
