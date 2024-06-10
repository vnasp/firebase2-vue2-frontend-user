import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB7ObFUO9XbdQaeds3m48kxDHdEMv_j9r8",
  authDomain: "fir-2-vue2.firebaseapp.com",
  projectId: "fir-2-vue2",
  storageBucket: "fir-2-vue2.appspot.com",
  messagingSenderId: "882984182656",
  appId: "1:882984182656:web:2bbeb09fc5a5fd79ed5765"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Registrar usuario
const addUser = ({ email, password }) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export { auth, addUser, signInWithEmailAndPassword, onAuthStateChanged };