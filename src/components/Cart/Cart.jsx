import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import InputForm from "../InputForm/InputForm";
import "./Cart.css";
import { cartContext } from "../../storage/cartContext";
import { sendPurchaseOrder } from "../../services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart(props) {
	const { removeItem } = useContext(cartContext);

	let unidOunids = props.cartQty > 1 ? "unids" : "unid";
	let urlItemDetail = `/${props.categoria}/item/${props.id}`;
	let urlCategoryDetail = `/category/${props.categoria}`;

	function handleRemoveItem(itemShownOnScreen) {
		toast.error(`El producto ${props.title} fue eliminado del carrito`, {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});
		removeItem(itemShownOnScreen);
	}

	return (
		<>
			<div className="purchaseCard">
				<Link to={urlItemDetail} title={`Ver Producto "${props.title}"`}>
					<div className={`purchaseCard__image ${props.claseCSS}`}></div>
				</Link>
				<div className="purchaseCard-content">
					<Link
						className="nav__link__cart"
						to={urlCategoryDetail}
						title={`Ver productos de la Categoría "${props.categoria}"`}
					>
						<span className="purchaseCard-content__category">
							{props.categoria}
						</span>
					</Link>
					<p className="purchaseCard-content__title">{props.title}</p>
					<p className="purchaseCard-content__body">{props.body}</p>
					<div className="purchaseCard-content__priceQty">
						<span>
							Total ${(props.precio * props.cartQty).toLocaleString()} -{" "}
							{props.cartQty.toLocaleString()} {unidOunids}
						</span>
						<Button
							onButtonClick={() =>
								handleRemoveItem(props.id, props.cartQty, props.title)
							}
							className="button-cart__topRight"
							title={`Quitar item "${props.title}"`}
							disabled={false}
						>
							x
						</Button>
					</div>
				</div>
			</div>
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
		</>
	);
}

export function CartTotal() {
	const cartValues = useContext(cartContext);
	let navigateToURL = useNavigate();
	const { cart, emptyCart } = useContext(cartContext);
	const [buyerData, setBuyerData] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const totalValueInCart = cartValues.totalValueInCartfn();

	let totalQtyInCart = cartValues.totalQtyInCartfn();

	let unidOunids = totalQtyInCart > 1 ? "unids" : "unid";

	function handleEmptyCart(cart) {
		emptyCart(cart);
	}

	function handlePurchaseOrder(buyerData) {
		const order = {
			buyer: buyerData,
			items: cart,
			total: totalValueInCart,
			date: new Date(),
		};
		sendPurchaseOrder(order)
			.then((orderID) => {
				navigateToURL(`/purchasecheckout/${orderID}`);
			})
			.then(() => {
				emptyCart(cart);
			});
	}

	function handleInputChange(evt) {
		let nameInput = evt.target.name;
		let value = evt.target.value;

		const newBuyerData = { ...buyerData };
		newBuyerData[nameInput] = value;
		setBuyerData(newBuyerData);
	}

	function onSubmit(evt) {
		evt.preventDefault();
		handlePurchaseOrder(buyerData);
		setBuyerData({ name: "", email: "", phone: "" });
	}

	if (!totalQtyInCart) {
		return (
			<>
				<div className="display-1--description__cart">
					El Carrito está vacío.
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

	return (
		<>
			<div className="purchaseCard purchaseCard--Total">
				<span>
					Total Compra ${totalValueInCart.toLocaleString()} -{" "}
					{totalQtyInCart.toLocaleString()} {unidOunids}
				</span>
				<Button
					onButtonClick={() => handleEmptyCart()}
					className="button-cart--Total__topRight"
					title="Vaciar carrito"
					disabled={false}
				>
					🗑
				</Button>
			</div>
			<div>
				<form className="inputForm__container">
					<InputForm
						name="name"
						title="Nombre completo: "
						type="text"
						value={buyerData.name}
						onChange={handleInputChange}
					/>
					<InputForm
						name="email"
						title="Dirección de e-mail: "
						type="email"
						value={buyerData.email}
						onChange={handleInputChange}
					/>
					<InputForm
						name="phone"
						title="Teléfono: "
						type="tel"
						value={buyerData.phone}
						onChange={handleInputChange}
					/>
					<button
						onClick={onSubmit}
						className="button-cart__Purchase"
						title="Finalizar Compra"
					>
						Comprar
					</button>
				</form>
			</div>
		</>
	);
}
