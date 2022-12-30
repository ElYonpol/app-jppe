import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Cart.css";
import { cartContext } from "../../storage/cartContext";

export default function Cart(props) {
	const { removeItem } = useContext(cartContext);

	let unidOunids = props.cartQty > 1 ? "unids" : "unid";

	return (
		<>
			<div className="purchaseCard">
				<div className={`purchaseCard__image ${props.claseCSS}`}></div>
				<div className="purchaseCard-content">
					<p className="purchaseCard-content__category">{props.categoria}</p>
					<p className="purchaseCard-content__title">{props.title}</p>
					<p className="purchaseCard-content__body">{props.body}</p>
					<div className="purchaseCard-content__priceQty">
						<span>
							Total ${(props.precio * props.cartQty).toLocaleString()} -{" "}
							{props.cartQty.toLocaleString()} {unidOunids}
						</span>
						<Button
							onButtonClick={() => removeItem(props.id)}
							className="button-cart"
						>
							X
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export function CartTotal() {
	const valueContext = useContext(cartContext);

	const totalValueInCart = valueContext.totalValueInCartfn();

	let totalQtyInCart = valueContext.totalQtyInCartfn();

	let unidOunids = totalQtyInCart > 1 ? "unids" : "unid";

	if (!totalQtyInCart) {
		return (
			<>
				<div className="display-1--subtitle">El Carrito está vacío.</div>
				<Link to="/servicios" className="nav__link display-1--subtitle">
					Regresar a Servicios
				</Link>
			</>
		);
	}

	return (
		<>
			<div className="purchaseCard purchaseCard--Total">
				<div>
					<div className="purchaseCard-content__priceQty">
						<span>
							Total Compra ${totalValueInCart.toLocaleString()} -{" "}
							{totalQtyInCart.toLocaleString()} {unidOunids}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
