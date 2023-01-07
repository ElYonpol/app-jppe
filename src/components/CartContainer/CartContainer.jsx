import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Cart from "../Cart/Cart";

export default function CartContainer() {
	const { cart } = useContext(cartContext);

	return (
		<>
			{cart.map((item) => {
				const key = item.id;
				console.log("CartContainer key:", key);
				return (
					<>
						<Cart
							key={key}
							id={item.id}
							articulo={item.articulo}
							categoria={item.categoria}
							imagen={item.imagen}
							claseCSS={item.claseCSS}
							title={item.title}
							body={item.body}
							precio={item.precio}
							cantidad={item.cantidad}
							cartQty={item.cartQty}
						/>
					</>
				);
			})}
		</>
	);
}
