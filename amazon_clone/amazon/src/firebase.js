// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD-RNu0yXKDwsXW5o2toysla0-h8yy6OoY",
    authDomain: "clone-66ee9.firebaseapp.com",
    projectId: "clone-66ee9",
    storageBucket: "clone-66ee9.appspot.com",
    messagingSenderId: "506495539251",
    appId: "1:506495539251:web:081dc9eb86cd889864ab46",
    measurementId: "G-5X4MKSN5PT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore(firebaseApp);

  export default db;