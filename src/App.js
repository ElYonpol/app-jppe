import React, { useState, useEffect } from "react";

import "./App.css";
import "./index.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Item from "./components/Item/Item";
import NavBar from "./components/NavBar/NavBar";
import Greeting from "./components/Greeting/Greeting";

function App() {
	let URL = `https://635d78e707076ac24f3dbf4a.mockapi.io/productos`;
	let [fetchedCardData, setFetchedCardData] = useState([]);
	let { products } = fetchedCardData;

	useEffect(() => {
		(async function () {
			let cardData = await fetch(URL).then((res) => res.json());
			setFetchedCardData(cardData);
		})();
	}, [URL]);

	/* console.log("cardData es", cardData) */
	console.log("products es", products);

	return (
		<>
			<div className="App">
				<header className="App-header">
					<NavBar />
					<Greeting />
					<ItemListContainer
						results={products}
						text="La Odontología puede solucionar tus problemas y dolores dentales"
					/>
					<Item />
				</header>
			</div>
		</>
	);
}

export default App;
