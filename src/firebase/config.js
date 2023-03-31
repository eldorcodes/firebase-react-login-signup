// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDziA093rzBX62HcaCgwYHGINxbOozIzu4",
  authDomain: "my-database-1ffa8.firebaseapp.com",
  projectId: "my-database-1ffa8",
  storageBucket: "my-database-1ffa8.appspot.com",
  messagingSenderId: "175647222019",
  appId: "1:175647222019:web:3e75c0f3a670c47a41e136",
  measurementId: "G-LH7HE6Q8WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;