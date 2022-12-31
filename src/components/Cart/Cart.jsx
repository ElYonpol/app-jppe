import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Cart.css";
import { cartContext } from "../../storage/cartContext";

export default function Cart(props) {
	const { removeItem } = useContext(cartContext);

	let unidOunids = props.cartQty > 1 ? "unids" : "unid";
	let urlItemDetail = `/item/${props.id}`;
	let urlCategoryDetail = `/category/${props.categoria}`;

	return (
		<>
			<div className="purchaseCard">
				<Link to={urlItemDetail}>
					<div className={`purchaseCard__image ${props.claseCSS}`}></div>
				</Link>
				<div className="purchaseCard-content">
					<Link className="nav__link" to={urlCategoryDetail}>
						<span className="purchaseCard-content__category">
							{props.categoria}
						</span>
					</Link>
					<p className="purchaseCard-content__title">{props.title}</p>
					<p className="purchaseCard-content__body">{props.body}</p>
					<div className="purchaseCard-content__priceQty">
						<span>
							Total ${(props.precio * props.cartQty).toLocaleString()} -{" "}
							{props.cartQty.toLocaleString()} {unidOunids}
						</span>
						<Button
							onButtonClick={() => removeItem(props.id)}
							className="button-cart__topRight"
						>
							🗑
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export function CartTotal() {
	const { valueContext } = useContext(cartContext);

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
					<div>
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
