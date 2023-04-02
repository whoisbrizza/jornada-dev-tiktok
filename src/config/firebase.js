
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCIvvN370TxjQ3Y249tdFOqVBTV420ntcs",
  authDomain: "tiktok-jornada-ebac.firebaseapp.com",
  projectId: "tiktok-jornada-ebac",
  storageBucket: "tiktok-jornada-ebac.appspot.com",
  messagingSenderId: "927736359668",
  appId: "1:927736359668:web:6486a7018b7951e0cacca1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;