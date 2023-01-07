import React, { useState } from "react";
import Button from "../Button/Button";
import "../ItemDetail/ItemDetail.css";
import "../Button/Button.css"

//Por ahora este componente es para mostrar los símbolos + y - junto con la cantidad
//que luego el usuario iría a comprar, el botón de "Agregar item" y 
//el botón para ir al carrito.
//El límite máximo de compra es el stock del producto.

function ItemCount(props) {
	const { onHandInventory, onAddToCart } = props;

	const MAX_ITEM_INVENTORY = onHandInventory;

	const [cartQty, setCartQty] = useState(1);

	function increaseQty() {
		setCartQty(Math.min(cartQty + 1, MAX_ITEM_INVENTORY));
	}

	function decreaseQty() {
		setCartQty(Math.max(1, cartQty - 1));
	}

	return (
		<>
			<div className="display-1--subtitle">
				<Button onButtonClick={increaseQty} className="button-cart">
					+
				</Button>
				<span className="display-1--description"> {cartQty} </span>
				<Button onButtonClick={decreaseQty} className="button-cart">
					-
				</Button>
			</div>
			<div className="display-1--subtitle">
				<span>
					<Button
						onButtonClick={() => onAddToCart(cartQty)}
						className="button-cart"
					>
						Agregar item 🛒
					</Button>
				</span>
			</div>
		</>
	);
}
export default ItemCount;
