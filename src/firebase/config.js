// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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
const fb = initializeApp(firebaseConfig);

const db = getFirestore(fb);

export {db};
