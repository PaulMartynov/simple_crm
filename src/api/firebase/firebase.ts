// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDskMWSZN4vZFfnfjZiOcWYKRa8p8JZ1Tk',
  authDomain: 'vue-simple-crm-b7d3f.firebaseapp.com',
  projectId: 'vue-simple-crm-b7d3f',
  storageBucket: 'vue-simple-crm-b7d3f.appspot.com',
  messagingSenderId: '579833215850',
  appId: '1:579833215850:web:5e8548f94ad163b3d14313',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default { auth };