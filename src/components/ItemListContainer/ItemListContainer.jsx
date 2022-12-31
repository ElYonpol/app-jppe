import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { getItems, getItemsCategory } from "../../services/firebase";

export default function ItemListContainer() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { categoryID } = useParams();

	useEffect(() => {
		if (categoryID === undefined) {
			getItems()
				.then((respuesta) => {
					setProducts(respuesta);
					setIsLoading(false);
				})
				.catch((error) => {
					console.error(
						"Error en ItemListContainer.jsx función getItems():",
						error
					);
					setIsLoading(false);
				});
		} else {
			getItemsCategory(categoryID)
				.then((respuestaFiltrada) => {
					setProducts(respuestaFiltrada);
					setIsLoading(false);
				})
				.catch((errorMsg) => {
					console.error(
						"Error en ItemListContainer.jsx función getItemsCategory(categoryID):",
						errorMsg
					);
					setProducts(errorMsg);
					setIsLoading(false);
				});
		}
	}, [categoryID]);

	return <>{isLoading ? <Loader /> : <ItemList products={products} />}</>;
}
