import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import "../ItemList/ItemList.css";
import { cartContext } from "../../storage/cartContext";

//Por ahora este componente es sólo para mostrar los símbolos + y - junto con la cantidad
//que luego el usuario iría a comprar. El límite máximo de compra es el stock del producto

function ItemCount(props) {
	const { onHandInventory, onAddToCart, onRemoveItem } = props;

	const MAX_ITEM_INVENTORY = onHandInventory;

	const [cartQty, setCartQty] = useState(1);

	const { cart } = useContext(cartContext);

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
				<span className="display-1--subtitle">
					<Button
						onButtonClick={() => onAddToCart(cartQty)}
						className="button-cart"
					>
						Agregar 🛒
					</Button>
				</span>
				<span className="display-1--subtitle">
					<Button
						onButtonClick={() => onRemoveItem(cart)}
						className="button-cart"
					>
						Quitar item 🗑
					</Button>
				</span>
			</div>
		</>
	);
}
export default ItemCount;
