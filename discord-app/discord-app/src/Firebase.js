import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAWUvQovP-QRBnsRTmXGqJSm262--NEuAE",
    authDomain: "discord-app-93e49.firebaseapp.com",
    projectId: "discord-app-93e49",
    storageBucket: "discord-app-93e49.appspot.com",
    messagingSenderId: "124409758762",
    appId: "1:124409758762:web:574b010b02270500fbef53",
    measurementId: "G-Q00X1TTZ1D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth,provider};
  export default db