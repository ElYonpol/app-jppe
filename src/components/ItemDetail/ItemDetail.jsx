import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./ItemDetail.css";
import { cartContext } from "../../storage/cartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemDetail(props) {
	const { addToCart } = useContext(cartContext);
	const [qtyInStock, setQtyInStock] = useState(props.product.cantidad);

	let urlCategoryDetail = `/category/${props.product.categoria}`;

	if (
		props.product === "Item no encontrado" ||
		props.product.id === undefined
	) {
		return (
			<div className="cartCardDetail">
				<div className={`cartCardDetail__image cartCard--error`}></div>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__category">Error</p>
					<p className="cartCardDetail-content__title">Producto inexistente</p>
					<p className="cartCardDetail-content__body">
						El producto o servicio buscado no existe en la base de datos.
					</p>
				</div>
			</div>
		);
	} else {
		function handleAddToCart(cartQty) {
			if (qtyInStock > 0) {
				addToCart(props.product, cartQty);
				toast.success(
					`El producto ${props.product.title} fue agregado al carrito`,
					{
						position: "top-right",
						autoClose: 1500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					}
				);
				setQtyInStock(Math.max(0, qtyInStock - cartQty));
			} else {
				toast.error(
					`El producto ${props.product.title} no tiene stock disponible`,
					{
						position: "top-right",
						autoClose: 1500,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "colored",
					}
				);
			}
		}

		return (
			<>
				<div className="cartCardDetail">
					<div
						className={`cartCardDetail__image ${props.product.claseCSS}`}
					></div>
					<div className="cartCardDetail-content">
						<Link className="nav__link" to={urlCategoryDetail}>
							<span className="cartCardDetail-content__category">
								{props.product.categoria}
							</span>
						</Link>
						<p className="cartCardDetail-content__title">
							{props.product.title}
						</p>
						<p className="cartCardDetail-content__body">{props.product.body}</p>
						<div className="cartCardDetail-content__priceQty">
							<span>${props.product.precio}</span>
						</div>
						<ItemCount
							onHandInventory={props.product.cantidad}
							itemShownOnScreen={props.product.id}
							onAddToCart={handleAddToCart}
						/>
						<ToastContainer
							position="top-right"
							autoClose={1500}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							draggable
							pauseOnHover
							theme="colored"
						/>
						<span className="cartCardDetail-content__title">
							{qtyInStock} unidades disponibles
						</span>  --  
						<span>
							<Link to="/cart">
								<Button className="button-cart">Ver 🛒</Button>
							</Link>
						</span>
					</div>
				</div>
			</>
		);
	}
}
