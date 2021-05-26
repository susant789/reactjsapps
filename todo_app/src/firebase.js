  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBcbrXSoXpKBLYGVvjr7HDfcVAvPt6OCXc",
    authDomain: "todo-app-9a31b.firebaseapp.com",
    projectId: "todo-app-9a31b",
    storageBucket: "todo-app-9a31b.appspot.com",
    messagingSenderId: "134953140668",
    appId: "1:134953140668:web:f277bfdcd9f87850d9abb9",
    measurementId: "G-4SD73CMK0F"
  });

  const db = firebaseApp.firestore();

  export default db;
