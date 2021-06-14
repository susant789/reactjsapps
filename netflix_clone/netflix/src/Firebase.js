import firebase from 'firebase';

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyDPgj-uNqLAcWvvSjorYIgx-7ljyOWc2uA",
    authDomain: "netflix-clone-bde15.firebaseapp.com",
    projectId: "netflix-clone-bde15",
    storageBucket: "netflix-clone-bde15.appspot.com",
    messagingSenderId: "788741185451",
    appId: "1:788741185451:web:b7ec4305e670cf713afcee",
    measurementId: "G-B34DN8JHVK"
})

const db = firebaseapp.firestore();
export default db;