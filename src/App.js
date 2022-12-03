import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Greeting from "./components/Greeting/Greeting";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header">
					<NavBar />
					<Greeting />
					<ItemListContainer text="La Odontología puede solucionar tus problemas y dolores dentales" />
				</header>
			</div>
		</>
	);
}

export default App;
