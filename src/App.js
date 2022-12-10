import React from "react";

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
			<div className="App">
				<header className="App-header">
					<NavBar />
					<div className="col--main">
						<Greeting />
					</div>
					<div className="display-1--subtitle">Servicios Ofrecidos</div>
					<div className="cartCards--container">
						<ItemListContainer />
					</div>
					<div>
						<ItemDetailContainer />
					</div>
					<Footer />
				</header>
			</div>
		</>
	);
}

export default App;
