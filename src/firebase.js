import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAleFmSXaTywmAyNhkPE5ipOX__psawzTY",
  authDomain: "test-webd.firebaseapp.com",
  projectId: "test-webd",
  storageBucket: "test-webd.appspot.com",
  messagingSenderId: "173670500690",
  appId: "1:173670500690:web:bc57e658a783220889528b",
  measurementId: "G-ZXK0TEKNCM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, analytics,db }; 