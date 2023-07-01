
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJe317FRr1lbx5ycKcwZL7lCQRF9fIRe4",
  authDomain: "facturacion-2bcac.firebaseapp.com",
  projectId: "facturacion-2bcac",
  storageBucket: "facturacion-2bcac.appspot.com",
  messagingSenderId: "953646178928",
  appId: "1:953646178928:web:b883da5739117038214ab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)