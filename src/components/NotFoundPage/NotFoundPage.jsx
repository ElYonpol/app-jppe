import React from "react";
import "../ItemDetail/ItemDetail.css";

export default function NotFoundPage() {
	return (
		<div className="col--main">
			<div className="cartCardDetail">
				<div className="cartCardDetail__image cartCard--error"></div>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__category">Error</p>
					<p className="cartCardDetail-content__title">
						Producto o Categoría inexistente
					</p>
					<p className="cartCardDetail-content__body">
						El producto o categoría buscada no existe en la base de datos.
					</p>
				</div>
			</div>
		</div>
	);
}
