import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import "./components/ItemList/ItemList.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Greeting from "./components/Greeting/Greeting";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="App grid--container">
					<header className="App-header" id="header">
						<NavBar />
						<Routes>
							<Route
								path="/"
								element={
									<>
										<div className="col--main">
											<h1>
												<div className="display-1-intro">
													Portas Esquivel & Asociados
												</div>
											</h1>
											<Greeting />
										</div>
									</>
								}
							/>
							<Route
								path="/category/:categoryID"
								element={
									<>
										<h1>
											<div className="display-1-intro">
												Portas Esquivel & Asociados
											</div>
										</h1>
										<div className="display-1--subtitle">
											Servicios por Categoría
										</div>
										<div className="cartCards--container">
											<ItemListContainer />
										</div>
									</>
								}
							/>
							<Route
								path="/item/:itemID"
								element={
									<>
										<h1>
											<div className="display-1-intro">
												Portas Esquivel & Asociados
											</div>
										</h1>
										<div className="display-1--subtitle">
											Detalle del servicio
										</div>
										<div className="cartCards--container">
											<ItemDetailContainer />
										</div>
									</>
								}
							/>
							<Route
								path="/servicios"
								element={
									<>
										<h1>
											<div className="display-1-intro">
												Portas Esquivel & Asociados
											</div>
										</h1>
										<div className="display-1--subtitle">
											Servicios Ofrecidos
										</div>
										<div className="cartCards--container">
											<ItemListContainer />
										</div>
									</>
								}
							/>
							<Route
								path="*"
								element={
									<>
										<h1>
											<div className="display-1-intro">
												Error 404: Recurso no encontrado.
											</div>
										</h1>
									</>
								}
							/>
						</Routes>
					</header>
					<Footer />
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
