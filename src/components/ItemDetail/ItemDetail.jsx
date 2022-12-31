import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./ItemDetail.css";
import { cartContext } from "../../storage/cartContext";

export default function ItemDetail(props) {
	const [qtyInCart, setQtyInCart] = useState(0);

	const { addToCart, removeItem, emptyCart } = useContext(cartContext);

	let urlCategoryDetail = `/category/${props.product.categoria}`;

	if (props.product === "Item no encontrado" || props.product.id === undefined) {
		return (
			<div className="cartCardDetail">
				<div className={`cartCardDetail__image cartCard--error`}></div>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__category">Error</p>
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
						<Link className="nav__link" to={urlCategoryDetail}>
							<span className="cartCardDetail-content__category">
								{props.product.categoria}
							</span>
						</Link>
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
						--{" "}
						<span>
							<Link to="/cart">
								<Button className="button-cart">Ver 🛒</Button>
							</Link>
						</span>
					</div>
				</div>
			</>
		);
	}
}
