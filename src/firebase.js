
import  firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCGq4DP7h_Nd2759TO6qvee0QLRcjPrRQE",
    authDomain: "clone-46.firebaseapp.com",
    projectId: "clone-46",
    storageBucket: "clone-46.appspot.com",
    messagingSenderId: "154699287534",
    appId: "1:154699287534:web:c1f3ffa28e14c670321cff",
    measurementId: "G-TF64DHRX8X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider} 