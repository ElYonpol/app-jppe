import React from "react";
import "./ItemListContainer.css";

export default function ItemListContainer({ text, results }) {
	let display;
	console.log(results)
	if (results) {
		display = results.map((cardProps) => {
			let { id, articulo, imagen, claseCSS, title, body, precio, cantidad } =
				cardProps;

			return (
				<>
					<div className="display-1--description">{text}</div>
					<div
						key={id}
						className="cartCards--container"
					>
						<div className={`${cardProps.claseCSS} cartCard`}>
							<div className="cartCard-content">
								<p class="cartCard-content__title">{title}</p>
								<p class="cartCard-content__body">{body}</p>
								<button
									className="button-cart"
									id={articulo}
									title={`Haga click para agregar '${title}' al carrito`}
								>
									Agregar 🛒
								</button>
							</div>
						</div>
					</div>
				</>
			);
		});
	} else {
		display = "No Services Found 😢";
	}

	return <>{display}</>;
}
