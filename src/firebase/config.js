
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6kxjt10tDyzGf5S2Q4si4C1YB7jqDDNw",
    authDomain: "manuest-app.firebaseapp.com",
    projectId: "manuest-app",
    storageBucket: "manuest-app.appspot.com",
    messagingSenderId: "1014035184294",
    appId: "1:1014035184294:web:cca74bfd350b3f04641267"
};


const app = initializeApp(firebaseConfig);

export const initFirestore = () => app