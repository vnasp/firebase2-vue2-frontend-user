// main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { auth, onAuthStateChanged } from './firebaseConfig';

// Estado de autenticación reactivo
const authState = Vue.observable({ isAuthenticated: false });

onAuthStateChanged(auth, (user) => {
  authState.isAuthenticated = !!user;
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  data: {
    authState
  }
}).$mount('#app');

export { authState };