import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app = initializeApp  ({
    apiKey: "AIzaSyBfSH_-24rAZL3Yk5-RuBZ0ZdfH8dooNUg",
    authDomain: "shopping-487b8.firebaseapp.com",
    projectId: "shopping-487b8",
    storageBucket: "shopping-487b8.appspot.com",
    messagingSenderId: "1098061923457",
    appId: "1:1098061923457:web:f9fe19dab05dd52723b980",
    measurementId: "G-8DCH289BD2"
});
const storage = getStorage(app);

export default storage