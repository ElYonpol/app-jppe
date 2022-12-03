import { useState } from "react";
import CartWidget from "../NavBar/CartWidget";

function ItemCount(props) {
	const { onHandInventory, defaultQty } = props;

	const MAX_ITEM_INVENTORY = onHandInventory;

	const [counter, setCounter] = useState(defaultQty);

	const increaseQty = () => {
		setCounter((counter) => Math.min(counter + 1, MAX_ITEM_INVENTORY));
	};

	const decreaseQty = () => {
		setCounter((counter) => Math.max(0, counter - 1));
	};

	return (
		<>
			<div>
				<button onClick={increaseQty}>+</button>
				<span>{counter}</span>
				<button onClick={decreaseQty}>-</button>
			</div>
			<div>
				<button>
					Agregar al carrito <CartWidget />
				</button>
			</div>
		</>
	);
}
export default ItemCount