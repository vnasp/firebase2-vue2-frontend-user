<template>
  <div id="app">
    <nav class="d-flex flex-row justify-content-center align-items-center">
      <div class="nav-item">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <div class="separator"></div>
      </div>
      <div class="nav-item" v-if="!authState.isAuthenticated">
        <router-link :to="{ name: 'register' }">Registrarse</router-link>
        <div class="separator"></div>
      </div>
      <div class="nav-item" v-if="!authState.isAuthenticated">
        <router-link :to="{ name: 'login' }">Iniciar Sesión</router-link>
        <div class="separator"></div>
      </div>
      <div class="nav-item" v-if="authState.isAuthenticated">
        <button @click="logout" class="bg-transparent border-0">Cerrar Sesión</button>
        <div class="separator"></div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { authState } from './main';

export default {
  data() {
    return {
      authState
    };
  },
  methods: {
    async logout() {
      try {
        await signOut(auth);
        this.$router.push('/');
      } catch (error) {
        console.error('Error cerrando sesión:', error);
        alert('Error cerrando sesión: ' + error.message);
      }
    }
  }
};
</script>


<style>
@import 'bootstrap/dist/css/bootstrap.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antiadivased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-item {
  display: flex;
  align-items: center;
}

.separator {
  border-right: 1px solid purple;
  height: 100%;
  margin: 0 10px;
}
</style>
