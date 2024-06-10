<template>
  <div class="container mt-4">
    <h2>Registrarse</h2>
    <form @submit.prevent="addUser" class="border rounded-4 p-3">
      <div class="form-group mb-4">
        <label for="email">Correo Electrónico</label>
        <input type="text" v-model="email" class="form-control" id="email" placeholder="Escribe tu correo electrónico" required>
      </div>
      <div class="form-group mb-4">
        <label for="password">Contraseña</label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Escribe una contraseña" required minlength="6">
      </div>
      <button type="submit" class="btn btn-primary">Agregar</button>
    </form>
  </div>
</template>

<script>
import { addUser } from '../firebaseConfig';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async addUser() {
      if (this.email.trim() === '' || this.password.trim() === '') return;
      try {
        const newUser = {
          email: this.email,
          password: this.password
        };
        await addUser(newUser);
        this.email = '';
        this.password = '';
        alert('Usuario registrado con éxito');
        this.$router.push('/home')
      } catch (error) {
        console.error('Error registrando un usuario:', error);
        alert('Error en el registro: ' + error.message);
      }
    }
  }
};
</script>