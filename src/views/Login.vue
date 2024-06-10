<template>
  <div class="container mt-4">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="signIn">
      <div class="form-group mb-4">
        <label for="email">Correo Electrónico</label>
        <input type="email" v-model="email" class="form-control" id="email" placeholder="Escribe tu correo electrónico" required>
      </div>
      <div class="form-group mb-4">
        <label for="password">Contraseña</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Escribe una contraseña" required minlength="6">
      </div>
      <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async signIn() {
      if (this.email.trim() === '' || this.password.trim() === '') return;
      try {
        const { email, password } = this;
        const auth = getAuth();
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        console.log(user)
        alert('Usuario logueado con éxito');
        this.$router.push('/home')
      } catch (error) {
        console.error('Error iniciando sesión:', error);
        alert('Error iniciando sesión: ' + error.message);
      }
    }
  }
};
</script>