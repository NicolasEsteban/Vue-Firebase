import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//librerias firebase
import firebase from 'firebase/app';
import 'firebase/firestore'
// configuracion de bd en firebase
const firebaseConfig = {
  apiKey: "AIzaSyDx9MxYkF_59I3gDzFxSAymTHYed11uAw4",
  authDomain: "loginbd-4f5dd.firebaseapp.com",
  databaseURL: "https://loginbd-4f5dd.firebaseio.com",
  projectId: "loginbd-4f5dd",
  storageBucket: "loginbd-4f5dd.appspot.com",
  messagingSenderId: "666050272024",
  appId: "1:666050272024:web:087801c3ac43cdac905c6d",
  measurementId: "G-GFPL9BNPE2"
};

firebase.initializeApp(firebaseConfig);
// se exporta variable con configuracion de base de datos
export const db = firebase.firestore();


Vue.config.productionTip = false

let app = null

firebase.auth().onAuthStateChanged(()=>{ // para evitar que se creen multiples 
  if(!app){                              // instancias de la aplicacion
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')    
  }
})

