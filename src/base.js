import firebase from 'firebase/app';
import "firebase/storage";

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCKC7Ckmv2_K8Nru0Gm1JA_a6cMJni22Vk",
    authDomain: "frb-frs-uploadimage.firebaseapp.com",
    databaseURL: "https://frb-frs-uploadimage-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "frb-frs-uploadimage",
    storageBucket: "frb-frs-uploadimage.appspot.com",
    messagingSenderId: "1074074263067",
    appId: "1:1074074263067:web:5eac4cce4482dfe8fba2be"
  };
  // Initialize Firebase
 export const app = firebase.initializeApp(firebaseConfig);
