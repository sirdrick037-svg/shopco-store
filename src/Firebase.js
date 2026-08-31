import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import{ getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0g1k6J7n8v5x9yZ3a2b1c4d5e6f7g8h9",
    authDomain: "shopco-1f2e3.firebaseapp.com",
    projectId: "shopco-1f2e3",
    storageBucket: "shopco-1f2e3.appspot.com",
    MessagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);