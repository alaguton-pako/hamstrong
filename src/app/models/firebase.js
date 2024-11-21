// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfYeXn2SrN2SdvfWBJahefJ5WhW16V-1A",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "hamstrong-30a59",
  storageBucket: "hamstrong-30a59.appspot.com",
  messagingSenderId: "893169526137",
  appId: "BA0Y4Lph79x5Y9v7qjyVmrsTZ5urGvJvj3nAzcyGGXsO1KwwIHlsMQ4mnNq1tyrkgL35RaVMG7Jd8R4CPtTEj_M",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
    