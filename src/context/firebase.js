import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkPL8-_3FXUyZl_v_kBgo91SqSiP_ElF8",
  authDomain: "basic-auth-practice-12bb4.firebaseapp.com",
  projectId: "basic-auth-practice-12bb4",
  storageBucket: "basic-auth-practice-12bb4.appspot.com",
  messagingSenderId: "841459185851",
  appId: "1:841459185851:web:2703e46f9009837eff519e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
