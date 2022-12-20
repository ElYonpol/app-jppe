import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { cartContext } from "../../storage/cartContext";

export default function ItemDetail(props) {
	const [qtyInCart, setQtyInCart] = useState(0);

	const { addToCart, removeItem, emptyCart } = useContext(cartContext);

	if (props.product === "Item no encontrado") {
		return (
			<div className={`cartCardDetail cartCard--error`}>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__title">Error</p>
					<p className="cartCardDetail-content__body">Producto inexistente</p>
				</div>
			</div>
		);
	} else {
		function handleAddToCart(cartQty) {
			setQtyInCart(cartQty);
			addToCart(props.product, cartQty);

			console.log(
				"Se agregaron al carrito:",
				cartQty,
				"unidades de",
				props.product.title
			);
		}

		function handleRemoveItem(itemShownOnScreen) {
			removeItem(itemShownOnScreen);
		}

		function handleEmptyCart(cart) {
			emptyCart(cart);
		}

		return (
			<div className={`cartCardDetail ${props.product.claseCSS}`}>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__title">{props.product.title}</p>
					<p className="cartCardDetail-content__body">{props.product.body}</p>
					<p className="cartCardDetail-content__title">
						${props.product.precio}
					</p>
					<ItemCount
						onHandInventory={props.product.cantidad}
						itemShownOnScreen={props.product.id}
						onAddToCart={handleAddToCart}
						onRemoveItem={handleRemoveItem}
						onEmptyCart={handleEmptyCart}
					/>
					<Link to="/cart" className="nav__link cartCardDetail-content__body">
						Ir a 🛒
					</Link>
					<p className="cartCardDetail-content__body">
						{props.product.cantidad} unidades disponibles
					</p>
				</div>
			</div>
		);
	}
}
