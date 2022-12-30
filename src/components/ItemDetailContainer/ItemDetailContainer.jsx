import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../../services/mockService";

export default function ItemDetailContainer() {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let { itemID } = useParams();

	useEffect(() => {
		getSingleItem(itemID)
			.then((respuesta) => {
				setProduct(respuesta);
				setIsLoading(false);
			})
			.catch((error) => {
				console.error(
					"Error en ItemDetailContainer.jsx función getSingleItem(itemID) Item no encontrado.",
					error
				);
				setProduct(error);
				setIsLoading(false);
			});
	}, [itemID]);

	return (
		<>
			{isLoading ? <h3>Cargando...</h3> : <ItemDetail product={product} />}
		</>
	);
}
