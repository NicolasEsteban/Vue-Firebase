<template>
    <div class="container p-4">
        <b-row >
            <b-col class="mx-auto">
                <b-card >
                    <h3 class="tittle is-3 text-center">Iniciar Secion</h3>

                    <b-form @submit="onLogin" >

                            <b-form-group
                            id="input-group-1"
                            label="Email:"
                            label-for="input-1">
                            
                            <b-form-input
                            id="input-1"                   
                            type="email"
                            v-model="email"                            
                            placeholder="ingresar Correo"
                            ></b-form-input>
                            </b-form-group>

                            <b-form-group
                            id="input-group-2"
                            label="Contraseña:"
                            label-for="input-2">
                            
                            <b-form-input
                            id="input-2"                   
                            type="password" 
                            v-model="contraseña"                          
                            ></b-form-input>
                            </b-form-group>

                            <b-button type="submit" class="mr-1" variant="primary">Ingresar</b-button>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </div>   
</template>

<script>
export default {
    data(){
      return {
          email: '',
          contraseña: '',
          error: ''
      }
    },
    name: 'Login',
    methods: {
        onLogin(){
            console.log(this.email);
            console.log(this.contraseña);
        }
    },
}
</script>