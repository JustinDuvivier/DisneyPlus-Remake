import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup as firebaseSignInWithPopup} from 'firebase/auth';



const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "dinseyplus-41ffa.firebaseapp.com",
    projectId: "dinseyplus-41ffa",
    storageBucket: "dinseyplus-41ffa.appspot.com",
    messagingSenderId: "224541454489",
    appId: "1:224541454489:web:921b017b8373fc5597c808"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();


export const signInWithPopup = firebaseSignInWithPopup;




const db = getFirestore(app);


export default db;