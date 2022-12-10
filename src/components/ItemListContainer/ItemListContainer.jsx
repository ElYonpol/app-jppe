import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import getItems from "../../services/mockService";

export default function ItemListContainer() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getItems().then((respuesta) => setProducts(respuesta));
	}, []);

	return (
		<ItemList products={products} />
	);
}
