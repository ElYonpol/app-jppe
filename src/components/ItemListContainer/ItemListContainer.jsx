import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import ItemList from "../ItemList/ItemList";
import getItems, { getItemsCategory } from "../../services/mockService";

export default function ItemListContainer() {
	const [products, setProducts] = useState([]);
	const { categoryID } = useParams();

	const miContexto = useContext(cartContext);
	console.log(cartContext);

	useEffect(() => {
		if (categoryID === undefined) {
			getItems()
				.then((respuesta) => {
					setProducts(respuesta);
				})
				.catch((error) =>
					console.error("ItemListContainer getItems() error:", error)
				);
		} else {
			getItemsCategory(categoryID)
				.then((respuestaFiltrada) => setProducts(respuestaFiltrada))
				.catch((errorMsg) => {
					console.error(
						"ItemListContainer getItemsCategory(categoryID) error:",
						errorMsg
					);
					setProducts(errorMsg);
				});
		}
	}, [categoryID]);

	return <ItemList products={products} />;
}
