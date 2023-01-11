import React from "react";
import Item from "../Item/Item";

export default function ItemList(props) {
	if (Array.isArray(props.products) && props.products.length > 0) {
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
							path={`${item.categoria}/${item.id}`}
						/>
					);
				})}
			</>
		);
	} else {
		return <Item categoria="Error" />;
	}
}
