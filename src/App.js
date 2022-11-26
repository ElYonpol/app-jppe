import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header">
			<NavBar />
			<ItemListContainer text="La Odontología puede solucionar tus problemas y dolores dentales"/>
				</header>
			</div>
		</>
	);
}

export default App;
