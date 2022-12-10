import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemList/ItemList.css";

export default function ItemDetail(props) {
	return (
		<div className={`cartCard ${props.product.claseCSS}`}>
			<div className="cartCard-content">
				<p className="cartCard-content__title">{props.product.title}</p>
				<p className="cartCard-content__body">{props.product.body}</p>
				<p className="cartCard-content__title">${props.product.precio}</p>
				<ItemCount onHandInventory={props.product.cantidad} />
			</div>
		</div>
	);
}
