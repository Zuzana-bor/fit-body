// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxt-W8zN4hcZCFEfR6HOPx07j1ngQDSnY',
  authDomain: 'fit-body-a6d91.firebaseapp.com',
  projectId: 'fit-body-a6d91',
  storageBucket: 'fit-body-a6d91.appspot.com',
  messagingSenderId: '1005547013108',
  appId: '1:1005547013108:web:5f630cfe23faa799832fa1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
