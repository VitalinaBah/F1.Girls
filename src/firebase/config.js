import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCzYfAIQrJLeq00q4MKT6XB9ipjUd7qCnw",
    authDomain: "f1girls-98385.firebaseapp.com",
    projectId: "f1girls-98385",
    storageBucket: "f1girls-98385.firebasestorage.app",
    messagingSenderId: "339994420383",
    appId: "1:339994420383:web:ee6e9b73544e0c5a53eeaa",
    measurementId: "G-M78M2HP00M"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

