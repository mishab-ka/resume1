import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDR9RoA_rRM8erAC6-BFRVDJvC9T0Cya_k",
    authDomain: "todo-app-f8b2a.firebaseapp.com",
    projectId: "todo-app-f8b2a",
    storageBucket: "todo-app-f8b2a.appspot.com",
    messagingSenderId: "733857874014",
    appId: "1:733857874014:web:4e420096ce7377884834cf",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);