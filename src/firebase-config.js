import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBR-L7kJ4JjQTkiGkYkj5cOVDHTnkV3A1Y",
    authDomain: "no-snkrs.firebaseapp.com",
    projectId: "no-snkrs",
    storageBucket: "no-snkrs.appspot.com",
    messagingSenderId: "693426100280",
    appId: "1:693426100280:web:756e0dcba0792da64deecd",
    measurementId: "G-BC19CVK664",
    databaseURL: "https://no-snkrs-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);