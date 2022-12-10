import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemList/ItemList.css";

export default function Item(props) {
	let urlDetail = `/item/${props.id}`;
	return (
		<div className={`cartCard ${props.claseCSS}`}>
			<div className="cartCard-content">
				<p className="cartCard-content__title">{props.title}</p>
				<p className="cartCard-content__body">{props.body}</p>
				<p className="cartCard-content__title">
					${props.precio.toLocaleString()}
				</p>
				<ItemCount onHandInventory={props.cantidad} />
				<Link to={urlDetail}>
					<button className="button-cart">Ver detalle</button>
				</Link>
			</div>
		</div>
	);
}
