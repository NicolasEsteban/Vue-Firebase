<template>
    <div class="container p-4">
        <b-row >
            <b-col class="mx-auto">
                <b-card >
                    <h3 class="tittle is-3 text-center">Crear Cuenta</h3>
                    
                        <b-form @submit="onSubmit" >

                            <b-form-group
                            id="input-group-1"
                            label="Nombre:"
                            label-for="input-1">
                            
                            <b-form-input
                            id="input-1"
                            v-model="nombre"                    
                            type="text"
                            
                            placeholder="Nombre Completo"
                            ></b-form-input>
                            </b-form-group>

                            <b-form-group
                            id="input-group-2"
                            label="Email:"
                            label-for="input-2">
                            
                            <b-form-input
                            id="input-2" 
                            v-model="email"                   
                            type="email"
                            
                            placeholder="ingresar Correo"
                            ></b-form-input>
                            </b-form-group>

                            <b-form-group
                            id="input-group-3"
                            label="Contraseña:"
                            label-for="input-3">
                            
                            <b-form-input
                            id="input-3"
                            v-model="contraseña"                    
                            type="password"
                            
                            ></b-form-input>
                            </b-form-group>

                            <b-button type="submit" class="mr-1" variant="primary">Registrame</b-button>
                            
                        </b-form>
                    
                </b-card>
            </b-col>
        </b-row>
        <br>
        <div>
            <b-alert show variant="danger" dismissible v-if="error">{{error}}
                
            </b-alert>
        </div>
    </div>
</template>

<script>
//import db from '@/firebase/init'
import firebase from 'firebase/app';
import 'firebase/auth';


export default {
    data(){
      return {
          nombre: '',
          email: '',
          contraseña: '',
          error: ''
      }
    },
    name: 'Register',
    methods: {
     onSubmit(){
            
            if(this.nombre && this.email && this.contraseña){
               // se envian datos a firebase
               firebase.auth().createUserWithEmailAndPassword(this.email,this.contraseña) 
                .then(user =>{
                    this.nombre ='';
                    this.contraseña='';
                    this.email='';
                    console.log(user);

                }).catch(error=>{
                    this.error = error.message;
                })
                this.error =''
            }else {
                this.error = "Campos requeridos"
                this.error =''
            }
        }
    },
}
</script>