import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail(props) {
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
		return (
			<div className={`cartCardDetail ${props.product.claseCSS}`}>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__title">{props.product.title}</p>
					<p className="cartCardDetail-content__body">{props.product.body}</p>
					<p className="cartCardDetail-content__title">
						${props.product.precio}
					</p>
					<ItemCount onHandInventory={props.product.cantidad} />
					<p className="cartCardDetail-content__body">
						{props.product.cantidad} unidades disponibles
					</p>
				</div>
			</div>
		);
	}
}
