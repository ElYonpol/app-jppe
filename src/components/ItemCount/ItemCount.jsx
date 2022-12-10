import React, { useState } from "react";
import CartWidget from "../NavBar/CartWidget";
import "../ItemList/ItemList.css";

//Por ahora este componente es sólo para mostrar los símbolos + y - junto con la cantidad
//que luego el usuario iría a comprar. El límite máximo de compra es el stock del producto

function ItemCount(props) {
	const { onHandInventory } = props;

	const MAX_ITEM_INVENTORY = onHandInventory;

	const [counter, setCounter] = useState(1);

	function increaseQty() {
		setCounter(Math.min(counter + 1, MAX_ITEM_INVENTORY));
	}

	function decreaseQty() {
		setCounter(Math.max(1, counter - 1));
	}

	return (
		<>
			<div className="display-1--subtitle">
				<button onClick={increaseQty} className="button-cart">
					+
				</button>
				<span className="display-1--description"> {counter} </span>
				<button onClick={decreaseQty} className="button-cart">
					-
				</button>
				<span className="display-1--subtitle">
					<button className="button-cart">
						Agregar <CartWidget />
					</button>
				</span>
			</div>
		</>
	);
}
export default ItemCount;
