<template>
    <div >
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-container>
               
               <b-navbar-brand :to="{name: 'Home'}" > <h5> Login </h5></b-navbar-brand>
             
               <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
               
                   <b-collapse id="nav-collapse" is-nav>
                       <b-navbar-nav class="ml-auto" >
                           <template v-if="user">
                                <b-nav-item-dropdown right>
                                    <template v-slot:button-content>
                                        <em>{{user.displayName}}</em>
                                    </template>
                                    <b-dropdown-item href="#">Dashboard</b-dropdown-item>
                                    <b-dropdown-item @click.prevent="logout">Cerrar sesion</b-dropdown-item>
                                </b-nav-item-dropdown>
                           </template>
                           <template v-else>
                            <b-button variant="success" class="mr-1" :to="{name: 'login'} "  >Iniciar sesion</b-button>
                            <b-button variant="light"  class="mr-1" :to="{name: 'register'}"  >Registrarse</b-button>
                           </template>                   
                       </b-navbar-nav>
                    </b-collapse>
               


            </b-container>
        </b-navbar>
        
    </div>
</template>

<script>

import firebase from 'firebase/app';

export default {
    data() {
        return {
            user: null
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push({name: 'login'});
            });
        }
    },
    created() {
        firebase.auth().onAuthStateChanged(user=>{ // para obtener datos usuario logeado
            if(user){
                this.user = user;
            }else{
                this.user = null;
            }
        })
    },
}
</script>



