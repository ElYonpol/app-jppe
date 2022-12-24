import React, { useContext } from "react";
import "./Cart.css";
import { cartContext } from "../../storage/cartContext";

export default function Cart(props) {
	console.log(props.key);
	return (
		<>
			<div className="purchaseCard">
				<div className={`purchaseCard__image ${props.claseCSS}`}></div>
				<div className="purchaseCard-content">
					<p className="purchaseCard-content__title">{props.categoria}</p>
					<p className="purchaseCard-content__title">{props.title}</p>
					<p className="purchaseCard-content__body">{props.body}</p>
					<div className="purchaseCard-content__priceQty">
						<span>
							Total ${(props.precio * props.cartQty).toLocaleString()} -{" "}
							{props.cartQty.toLocaleString()} unids
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export function CartTotal() {
	const valueContext = useContext(cartContext);

	const totalValueInCart = valueContext.totalValueInCartfn();

	const totalQtyInCart = valueContext.totalQtyInCartfn();

	return (
		<>
			<div className="purchaseCard purchaseCard--Total">
				<div>
					<div className="purchaseCard-content__priceQty">
						<span>
							Total Compra ${totalValueInCart.toLocaleString()} -{" "}
							{totalQtyInCart.toLocaleString()} unids
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
