import "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBcbrXSoXpKBLYGVvjr7HDfcVAvPt6OCXc",
    authDomain: "todo-app-9a31b.firebaseapp.com",
    projectId: "todo-app-9a31b",
    storageBucket: "todo-app-9a31b.appspot.com",
    messagingSenderId: "134953140668",
    appId: "1:134953140668:web:79397553375c4b80d9abb9",
    measurementId: "G-KS7H1YDRQ4"

})

const db = firebaseApp.firestore()

export default db