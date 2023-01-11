// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	doc,
	getDoc,
	collection,
	getDocs,
	query,
	where,
	addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCUFd--iu4D6NX8XvtYnt0kn5YhlKhkEYM",
	authDomain: "fir-test-react-e9fd7.firebaseapp.com",
	projectId: "fir-test-react-e9fd7",
	storageBucket: "fir-test-react-e9fd7.appspot.com",
	messagingSenderId: "347934879905",
	appId: "1:347934879905:web:10174ada32096c1169c0e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getSingleItem(id) {
	const serviceRef = doc(db, "services", id);

	const docSnapshot = await getDoc(serviceRef);
	const item = docSnapshot.data();
	item.id = docSnapshot.id;

	return item;
}

export async function getItems() {
	const servicesRef = collection(db, "services");

	const docsSnapshot = await getDocs(servicesRef);
	const docsArray = docsSnapshot.docs;

	const dataDocs = docsArray.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});

	return dataDocs;
}

export async function getItemsCategory(categoryID) {
	const servicesRef = collection(db, "services");

	const queryCategorySnapshot = query(
		servicesRef,
		where("categoria", "==", categoryID)
	);

	const docsSnapshot = await getDocs(queryCategorySnapshot);
	const docsArray = docsSnapshot.docs;

	const dataDocs = docsArray.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
	return dataDocs;
}

export async function sendPurchaseOrder(order) {
	const ordersRef = collection(db, "orders");

	let newPurchaseOrder = await addDoc(ordersRef, order);

	return newPurchaseOrder.id;
}
