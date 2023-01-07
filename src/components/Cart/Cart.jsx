import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Cart.css";
import { cartContext } from "../../storage/cartContext";

export default function Cart(props) {
	const { removeItem } = useContext(cartContext);

	console.log("Cart key:",props.key);
	console.log("Cart cartQty:",props.cartQty);

	let unidOunids = props.cartQty > 1 ? "unids" : "unid";
	let urlItemDetail = `/${props.categoria}/item/${props.id}`;
	let urlCategoryDetail = `/category/${props.categoria}`;

	return (
		<>
			<div className="purchaseCard">
				<Link to={urlItemDetail} title={`Ver Producto "${props.title}"`}>
					<div className={`purchaseCard__image ${props.claseCSS}`}></div>
				</Link>
				<div className="purchaseCard-content">
					<Link
						className="nav__link__cart"
						to={urlCategoryDetail}
						title={`Ver productos de la Categoría "${props.categoria}"`}
					>
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
							title={`Quitar item "${props.title}"`}
							disabled={false}
						>
							x
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

export function CartTotal() {
	const valueContext = useContext(cartContext);

	const { emptyCart } = useContext(cartContext);

	const totalValueInCart = valueContext.totalValueInCartfn();

	let totalQtyInCart = valueContext.totalQtyInCartfn();

	let unidOunids = totalQtyInCart > 1 ? "unids" : "unid";

	function handleEmptyCart(cart) {
		emptyCart(cart);
	}

	if (!totalQtyInCart) {
		return (
			<>
				<div className="display-1--description__cart">
					El Carrito está vacío.
				</div>
				<Link
					to="/servicios"
					className="nav__link__cart display-1--subtitle__cart"
				>
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
						<Button
							onButtonClick={() => handleEmptyCart()}
							className="button-cart--Total__topRight"
							title="Vaciar carrito"
							disabled={false}
						>
							🗑
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}
