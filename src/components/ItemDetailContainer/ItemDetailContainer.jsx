import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getSingleItem from "../../services/mockDetailService";

export default function ItemDetailContainer() {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		getSingleItem().then((respuesta) => setProduct(respuesta));
	}, []);

	return (
		<ItemDetail product={product}/>
	);
	//return <ItemDetail product={product} />;
}
