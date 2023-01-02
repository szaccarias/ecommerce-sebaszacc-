import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfVz-0MVXqycEj8ULnpsyzvvrxds-9fbE",
  authDomain: "ecommerce-sebaszacc.firebaseapp.com",
  projectId: "ecommerce-sebaszacc",
  storageBucket: "ecommerce-sebaszacc.appspot.com",
  messagingSenderId: "94975291562",
  appId: "1:94975291562:web:078ac85bef3a729760a0d3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;