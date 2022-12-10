import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../services/mockService";

export default function ItemDetailContainer() {
	const [product, setProduct] = useState([]);

	let { itemID } = useParams();

	useEffect(() => {
		getSingleItem(itemID)
			.then((respuesta) => {
				setProduct(respuesta);
			})
			.catch((error) =>
				console.error("ItemDetailContainer Item no encontrado", error)
			);
	}, [itemID]);

	return <ItemDetail product={product} />;
	//return <ItemDetail product={product} />;
}
