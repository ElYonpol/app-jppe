import React, { useState, useEffect /* useContext */ } from "react";
import { useParams } from "react-router-dom";
/* import { cartContext } from "../../storage/cartContext"; */
import ItemList from "../ItemList/ItemList";
import getItems, { getItemsCategory } from "../../services/mockService";

export default function ItemListContainer() {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const { categoryID } = useParams();

	/* const miContexto = useContext(cartContext); */

	useEffect(() => {
		if (categoryID === undefined) {
			getItems()
				.then((respuesta) => {
					setProducts(respuesta);
					setIsLoading(false);
				})
				.catch((error) =>
					console.error("ItemListContainer getItems() error:", error)
				);
		} else {
			getItemsCategory(categoryID)
				.then((respuestaFiltrada) => {
					setProducts(respuestaFiltrada);
					setIsLoading(false);
				})
				.catch((errorMsg) => {
					console.error(
						"ItemListContainer getItemsCategory(categoryID) error:",
						errorMsg
					);
					setProducts(errorMsg);
				});
		}
	}, [categoryID]);

	return (
		<>{isLoading ? <h3>Cargando...</h3> : <ItemList products={products} />}</>
	);
}
