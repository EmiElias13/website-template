
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm7QDGId3E1U77skhXX3CqS50Fz5u7-Ss",
  authDomain: "vue-emispace.firebaseapp.com",
  projectId: "vue-emispace",
  storageBucket: "vue-emispace.appspot.com",
  messagingSenderId: "1001338336920",
  appId: "1:1001338336920:web:2951bdc81e4e8654db02ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }