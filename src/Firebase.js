import {initializeApp} from "firebase/app";
import {collection,onSnapshot,doc,setDoc, getFirestore,getDoc} from "firebase/firestore";
import { getDatabase } from "firebase/database";
import {getAuth,GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC6DcIUCdYCSlRdluZlftR5_FxaCB0nnik",
  authDomain: "disneyplusclone-2a4ec.firebaseapp.com",
  projectId: "disneyplusclone-2a4ec",
  storageBucket: "disneyplusclone-2a4ec.appspot.com",
  messagingSenderId: "883291863337",
  appId: "1:883291863337:web:d49b4b5017272ac8b31f38",
  measurementId: "G-RH81GPHBP5"
};


const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const storage = getStorage(firebaseApp);
export {db,collection,onSnapshot,doc,getDoc,auth,provider,signOut,onAuthStateChanged};
