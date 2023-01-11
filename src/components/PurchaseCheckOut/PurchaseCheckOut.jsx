import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PurchaseCheckOut() {
	const { orderID } = useParams();

	return (
		<>
			<div className="display-1--description">
				Su número de orden de compra es
				<p className="display-1--subtitle">{orderID}</p>
			</div>
			<Link
				to="/servicios"
				className="nav__link__cart display-1--subtitle__cart"
			>
				Regresar a Servicios
			</Link>
		</>
	);
}
