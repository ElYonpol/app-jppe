import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

export default function ItemDetail(props) {
	return (
		<div className={`cartCardDetail ${props.product.claseCSS}`}>
			<div className="cartCardDetail-content">
				<p className="cartCardDetail-content__title">{props.product.title}</p>
				<p className="cartCardDetail-content__body">{props.product.body}</p>
				<p className="cartCardDetail-content__title">${props.product.precio}</p>
				<ItemCount onHandInventory={props.product.cantidad} />
			</div>
		</div>
	);
}