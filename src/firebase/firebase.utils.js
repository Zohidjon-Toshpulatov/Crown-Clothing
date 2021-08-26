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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;