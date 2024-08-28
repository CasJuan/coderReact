
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW18KgTcJpn0OhDdPXhGGfPKa1A7IBvpo",
  authDomain: "guitarherro-4f97c.firebaseapp.com",
  projectId: "guitarherro-4f97c",
  storageBucket: "guitarherro-4f97c.appspot.com",
  messagingSenderId: "1036104548663",
  appId: "1:1036104548663:web:56fd991cebce4df2529ab2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);