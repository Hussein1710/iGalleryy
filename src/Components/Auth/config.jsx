import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDlCRcIQQde162J0oLpmkcAKrVkri2hwEw",
  authDomain: "igallery-bcb8f.firebaseapp.com",
  projectId: "igallery-bcb8f",
  storageBucket: "igallery-bcb8f.appspot.com",
  messagingSenderId: "439622808325",
  appId: "1:439622808325:web:ccabf40c34720651df7d6c",
  measurementId: "G-7G24FMVRH2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};

