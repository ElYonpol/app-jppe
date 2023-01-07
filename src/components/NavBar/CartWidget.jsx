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
			<div title="Ver Carrito">
				<span className="nav__link">🛒</span>
			</div>
			{totalQtyInCart > 0 && (
				<div className="cart__qty"  title="Ver Carrito">
					<span className="nav__list cart__qty">
						{totalItemsInCart} / {totalQtyInCart}
					</span>
				</div>
			)}
		</>
	);
}

export default CartWidget;
