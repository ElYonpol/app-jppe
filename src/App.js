import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import "./components/ItemList/ItemList.css";
import "./components/Cart/Cart.css";

import NotFoundRouting from "./components/NotFoundPage/NotFoundRouting";
import MainHeading from "./components/MainHeading/MainHeading";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Greeting from "./components/Greeting/Greeting";
import CartContainer from "./components/CartContainer/CartContainer";
import { CartTotal } from "./components/Cart/Cart";
import PurchaseCheckOut from "./components/PurchaseCheckOut/PurchaseCheckOut";
import Footer from "./components/Footer/Footer";

import { CartContextProvider } from "./storage/cartContext";

function App() {
	return (
		<>
			<CartContextProvider>
				<BrowserRouter>
					<div className="App grid--container">
						<NavBar />
						<section id="main">
							<NotFoundRouting path="*">
								<Route
									path="/"
									element={
										<>
											<MainHeading
												intro="Portas Esquivel & Asociados"
												subtitle="Odontología de Excelencia"
											/>
											<Greeting />
										</>
									}
								/>
								<Route
									path="/category/:categoryID"
									element={
										<>
											<div className="col--main">
												<MainHeading
													intro="Portas Esquivel & Asociados"
													subtitle="Servicios por Categoría"
												/>
												<div className="cartCards--container">
													<ItemListContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/:categoryID/item/:itemID"
									element={
										<>
											<div className="col--main">
											<MainHeading
													intro="Portas Esquivel & Asociados"
													subtitle="Detalle del servicio"
												/>
												<div className="cartCardDetail--container">
													<ItemDetailContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/servicios"
									element={
										<>
											<div className="col--main">
											<MainHeading
													intro="Portas Esquivel & Asociados"
													subtitle="Servicios ofrecidos"
												/>
												<div className="cartCards--container">
													<ItemListContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/cart"
									element={
										<>
											<div className="col--main">
											<MainHeading
													intro="Portas Esquivel & Asociados"
													subtitle="Carrito de compras"
												/>
												<div className="purchaseCards--container">
													<CartTotal />
													<CartContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/purchasecheckout/:orderID"
									element={
										<>
											<div className="col--main">
											<MainHeading
													intro="Portas Esquivel & Asociados"
													subtitle="¡Gracias por su compra!"
												/>
												<div className="purchaseCards--container">
													<PurchaseCheckOut />
												</div>
											</div>
										</>
									}
								/>
							</NotFoundRouting>
						</section>
						<Footer />
					</div>
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
}

export default App;
