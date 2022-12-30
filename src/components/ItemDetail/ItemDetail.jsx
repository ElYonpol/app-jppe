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
			<div className="cartCardDetail">
				<div className={`cartCardDetail__image cartCard--error`}></div>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__title">Error</p>
					<p className="cartCardDetail-content__title">Producto inexistente</p>
					<p className="cartCardDetail-content__body">
						El producto o servicio buscado no existe en la base de datos.
					</p>
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
				props.product.title,
				" Total:",
				qtyInCart
			);
		}

		function handleRemoveItem(itemShownOnScreen) {
			removeItem(itemShownOnScreen);
		}

		function handleEmptyCart(cart) {
			emptyCart(cart);
		}

		return (
			<>
				<div className="cartCardDetail">
					<div
						className={`cartCardDetail__image ${props.product.claseCSS}`}
					></div>
					<div className="cartCardDetail-content">
						<p className="cartCardDetail-content__title">
							{props.product.categoria}
						</p>
						<p className="cartCardDetail-content__title">
							{props.product.title}
						</p>
						<p className="cartCardDetail-content__body">{props.product.body}</p>
						<div className="cartCardDetail-content__priceQty">
							<span>${props.product.precio}</span>
						</div>
						<ItemCount
							onHandInventory={props.product.cantidad}
							itemShownOnScreen={props.product.id}
							onAddToCart={handleAddToCart}
							onRemoveItem={handleRemoveItem}
							onEmptyCart={handleEmptyCart}
						/>
						<span className="cartCardDetail-content__title">
							{props.product.cantidad} unidades disponibles
						</span>{" "}
						-{" "}
						<span>
							<Link
								to="/cart"
								className="nav__link cartCardDetail-content__title"
							>
								Ir a 🛒
							</Link>
						</span>
					</div>
				</div>
			</>
		);
	}
}
