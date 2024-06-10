import Vue from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const authState = Vue.observable({ isAuthenticated: false });

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  authState.isAuthenticated = !!user;
});

export default authState;
