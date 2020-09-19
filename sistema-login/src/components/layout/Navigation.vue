<template>
    <div >
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-container>
               
               <b-navbar-brand :to="{name: 'Home'}" > <h5> MyApp </h5></b-navbar-brand>
             
               <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
               
                   <b-collapse id="nav-collapse" is-nav>
                       <b-navbar-nav class="ml-auto" >
                            <b-button variant="success" class="mr-1" :to="{name: 'login'} "  >Iniciar sesion</b-button>
                            <b-button variant="light"  class="mr-1" :to="{name: 'register'}"  >Registrarse</b-button>
                                                
                       </b-navbar-nav>
                    </b-collapse>
               


            </b-container>
        </b-navbar>
        
    </div>
</template>



