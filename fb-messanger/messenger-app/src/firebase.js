import "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optiona
    apiKey: "AIzaSyC00bWBCFkhN1_owNcLcZ5IWpmCjEslAko",
    authDomain: "messenger-app-f2fc6.firebaseapp.com",
    projectId: "messenger-app-f2fc6",
    storageBucket: "messenger-app-f2fc6.appspot.com",
    messagingSenderId: "615552070231",
    appId: "1:615552070231:web:667360db398b1b8cd46912",
    measurementId: "G-FJQFWP5F4W"
})

const db = firebaseApp.firestore()

export default db