import products from "../components/data/mockdata";

//import products from "https://635d78e707076ac24f3dbf4a.mockapi.io/productos";

export default function getSingleItem() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(products[0]);
		}, 2000);
	});
}
