import { createContext, useState } from "react";
const cartContext = createContext({ cart: [] });
const Provider = cartContext.Provider;

function CartContextProvider(props) {
	const [cart, setCart] = useState([]);

	function addToCart(item, cartQty) {
		let indexItemInCart = cart.findIndex(
			(itemInContext) => itemInContext.id === item.id
		);
		const newCart = [...cart];

		if (indexItemInCart !== -1) {
			newCart[indexItemInCart].cartQty += cartQty;
			setCart(newCart);
		} else {
			newCart.push({ ...item, cartQty });
			setCart(newCart);
		}
	}

	function removeItem(cart) {
		//Esto no funciona todavía
		console.log("Cart Inicial", cart);
		console.log(cart.articulo);

		let indexItemInCart = cart.find(
			(itemInContext) => itemInContext.articulo === cart.articulo
		);

		console.log("Indice del item", indexItemInCart);

		const newCart = [...cart];

		if (indexItemInCart !== -1) {
			newCart.splice(indexItemInCart, 1);
			setCart(newCart);
			console.log("Cart Final", cart);
		} else {
			console.error("cartContext removeItem(item) Item no encontrado.");
		}
	}

	function emptyCart() {
		setCart([]);
	}

	function totalQtyInCartfn() {
		return cart.reduce((acc, item) => acc + item.cartQty, 0);
	}

	function totalValueInCartfn() {
		return cart.reduce((acc, item) => acc + item.cartQty * item.precio, 0);
	}

	function totalItemsInCartfn() {
		return cart.length;
	}

	return (
		<Provider
			value={{
				cart,
				addToCart,
				removeItem,
				emptyCart,
				totalItemsInCartfn,
				totalQtyInCartfn,
				totalValueInCartfn,
			}}
		>
			{props.children}
		</Provider>
	);
}

export { cartContext, CartContextProvider };
