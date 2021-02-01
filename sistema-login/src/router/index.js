import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Dashboard from '../views/auth/Dashboard.vue'

import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }

  
]

const router = new VueRouter({
  routes
});

router.beforeEach((to,from,next)=>{ // funcion que sirve para proteger las rutas
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    if(user){
      next();
    }else{
      next({
        name: 'login'
      });
    }
  }else{
    next();
  }
});

export default router
