import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

Vue.use(Router);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      login: true
    }
  },
  {
    path: '/registro',
    name: 'register',
    component: Register,
  },
  {
    path: '/iniciar-sesion',
    name: 'login',
    component: Login,
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      resolve(user);
    }, reject);
  });
}

// Protegemos las rutas que requieren autenticación
router.beforeEach(async (to, from, next) => {
  const authRequired = to.matched.some(record => record.meta.login);
  if (authRequired) {
    const user = await getCurrentUser();
    if (user) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
