import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMjryXcLpXyt5_s46IxKonUWf4JR_tuPk",
  authDomain: "somos-veva.firebaseapp.com",
  projectId: "somos-veva",
  storageBucket: "somos-veva.appspot.com",
  messagingSenderId: "431563517017",
  appId: "1:431563517017:web:367a4c09692384302f9548"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)