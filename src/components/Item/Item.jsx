import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemListContainer/ItemListContainer.css";

export default function Item(props) {
	return (
		<div className="cartCards--container">
			<div className={`cartCard ${props.claseCSS}`}>
				<div className="cartCard-content">
					<p className="cartCard-content__title">{props.title}</p>
					<p className="cartCard-content__body">{props.body}</p>
					<p className="cartCard-content__title">{props.precio}</p>
					<ItemCount onHandInventory={props.cantidad} />
				</div>
			</div>
			{/* 			<div className="cartCard cartCard--2">
				<div className="cartCard-content">
					<p className="cartCard-content__title">Prótesis Completa</p>
					<p className="cartCard-content__body">
						La solución completa a cada caso que se presenta para poder
						disfrutar de una masticación adecuada.
					</p>
					<p className="cartCard-content__title">Precio $2.000</p>
					<ItemCount onHandInventory="5"/>
				</div>
			</div> */}
		</div>
	);
}
