import React, { useState } from "react";
import CartWidget from "../NavBar/CartWidget";

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
			</div>
			<div className="display-1--subtitle">
				<button className="button-cart">
					Agregar <CartWidget />
				</button>
			</div>
		</>
	);
}
export default ItemCount;
