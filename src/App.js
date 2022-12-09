import React from "react";

import "./App.css";
import "./index.css";
import "./components/ItemListContainer/ItemListContainer.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Greeting from "./components/Greeting/Greeting";
import Footer from "./components/Footer/Footer";

//let URL = `https://635d78e707076ac24f3dbf4a.mockapi.io/productos`;

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<NavBar />
					<Greeting />
					<div className="cartCards--container">
						<ItemListContainer text="La Odontología puede solucionar tus problemas y dolores dentales" />
					</div>
				<Footer />
				</header>
			</div>
		</>
	);
}

export default App;
