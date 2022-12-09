import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemListContainer/ItemListContainer.css";

export default function Item(props) {
	return (
			<div className={`cartCard ${props.claseCSS}`}>
				<div className="cartCard-content">
					<p className="cartCard-content__title">{props.title}</p>
					<p className="cartCard-content__body">{props.body}</p>
					<p className="cartCard-content__title">${props.precio.toLocaleString()}</p>
					<ItemCount onHandInventory={props.cantidad} />
				</div>
			</div>
	);
}
