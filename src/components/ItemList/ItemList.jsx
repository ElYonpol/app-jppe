import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList(props){
    return(
		<>
			{props.products.map((item) => {
				return (
					<Item
						key={item.id}
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
    )
}