import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Cart.css";
import { cartContext } from "../../storage/cartContext";
import { sendPurchaseOrder } from "../../services/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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

	const totalValueInCart = cartValues.totalValueInCartfn();

	let totalQtyInCart = cartValues.totalQtyInCartfn();

	let unidOunids = totalQtyInCart > 1 ? "unids" : "unid";

	function handleEmptyCart(cart) {
		emptyCart(cart);
	}

	function handlePurchaseOrder() {
		const order = {
			buyer: { name: "Pedro", phone: "1111", email: "pedro@bello.com" },
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
				<Button
					onButtonClick={() => handlePurchaseOrder()}
					className="button-cart__Purchase"
					title="Finalizar Compra"
					disabled={false}
				>
					Comprar
				</Button>
				<div>
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
			</div>
		</>
	);
}
