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
			<div>
				<span className="nav__link">🛒</span>
			</div>
			{totalQtyInCart > 0 && (
				<div className="cart__qty">
					<span className="nav__list">{totalItemsInCart}</span>
					<span> / </span>
					<span className="nav__list">{totalQtyInCart}</span>
				</div>
			)}
		</>
	);
}

export default CartWidget;
