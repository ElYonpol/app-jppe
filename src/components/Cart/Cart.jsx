import React from "react";
import "./Cart.css";
import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";

export default function Cart(props) {
    console.log(props.key)
	return (
		<>
			<tr>
				<th scope="row" className="userCart__td-title">
					{props.key}-{props.title}
				</th>
				<td className="userCart__td">
					{props.precio.toLocaleString("locale", {
						style: "currency",
						currency: "ARS",
						maximumFractionDigits: 0,
					})}
				</td>
				<td className="userCart__td">{props.cartQty}</td>
			</tr>
		</>
	);
}

export function CartTotal() {
    const valueContext = useContext(cartContext);

	const totalValueInCart = valueContext.totalValueInCartfn();

	const totalQtyInCart = valueContext.totalQtyInCartfn();

	return (
		<tr>
			<th scope="row">Total</th>
			<td>
				{totalValueInCart.toLocaleString("locale", {
					style: "currency",
					currency: "ARS",
					maximumFractionDigits: 0,
				})}
			</td>
			<td>{totalQtyInCart.toLocaleString()}</td>
		</tr>
	);
}
