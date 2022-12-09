import React from "react";
import Item from "../Item/Item";
import "./ItemListContainer.css";
import products from "../data/mockdata";

export default function ItemListContainer() {
	return (
		<>
			{products.map((item) => {
				return (
					<Item
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
}
