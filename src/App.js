import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<>
			<div className="App">
				<header className="App-header bs--navbar">
			<NavBar />
			<ItemListContainer />
				</header>
			</div>
		</>
	);
}

export default App;
