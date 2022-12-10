import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList(props) {
	if (Array.isArray(props.products)) {
		return (
			<>
				{props.products.map((item) => {
					return (
						<Item
							key={item.id}
							id={item.id}
							articulo={item.articulo}
							categoria={item.categoria}
							imagen={item.imagen}
							claseCSS={item.claseCSS}
							title={item.title}
							body={item.body}
							precio={item.precio}
							cantidad={item.cantidad}
						/>
					);
				})}
			</>
		);
	} else {
		return (
			<>
				<Item categoria="Error" />
			</>
		);
	}
}
