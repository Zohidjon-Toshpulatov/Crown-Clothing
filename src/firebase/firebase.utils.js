import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBe83LuYgwfsnnbJkbH6uN916yfOMnw8Ao",
    authDomain: "crown-db-83ca4.firebaseapp.com",
    projectId: "crown-db-83ca4",
    storageBucket: "crown-db-83ca4.appspot.com",
    messagingSenderId: "395406450813",
    appId: "1:395406450813:web:6c9fb72fdf3fe785e6d114",
    measurementId: "G-Z9W6F6ZN6L"
};

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;