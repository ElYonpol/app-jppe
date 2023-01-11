import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "../ItemList/ItemList.css";
import "../ItemDetail/ItemDetail.css";

export default function Item(props) {
	if (
		props.categoria === "Error" ||
		props.categoria === undefined ||
		props.categoria === null
	) {
		return (
			<div className="cartCardDetail">
				<div className="cartCardDetail__image cartCard--error"></div>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__category">Error</p>
					<p className="cartCardDetail-content__title">Categoría inexistente</p>
					<p className="cartCardDetail-content__body">
						La categoría buscada no existe en la base de datos.
					</p>
				</div>
			</div>
		);
	} else {
		let urlDetail = `/${props.categoria}/item/${props.id}`;

		return (
			<>
				<div className={`cartCard ${props.claseCSS}`}>
					<div className="cartCard-content">
						<p className="cartCard-content__category">{props.categoria}</p>
						<p className="cartCard-content__title">{props.title}</p>
						<p className="cartCard-content__body">{props.body}</p>
						<p className="cartCard-content__title">
							${props.precio.toLocaleString()}
						</p>
						<Link to={urlDetail}>
							<Button className="button-cart">Ver detalle</Button>
						</Link>
					</div>
				</div>
			</>
		);
	}
}
