<template>
  <div class="nohacenadaestamadre">
      <nav class="navbar navbar-dark bg-dark">

  <a class="navbar-brand" href="#"><i class="fas fa-dizzy"></i> BIENVENIDO</a>
  <a class="navbar-brand" @click="listaAlumnos"><i class="fas fa-list"></i> Lista de alumnos</a>
   <a class="navbar-brand" @click="registroCarrera"><i class="fas fa-plus"></i> Agregar carrera</a>
    <a class="navbar-brand" @click="registroAlumno"><i class="fas fa-user-plus"></i> Registrar alumno</a>
     <a class="navbar-brand" href="#"><i class="fas fa-home"></i> Home</a>
       <a class="navbar-brand" @click="inicioSesion">Salir  <i class="fas fa-sign-out-alt"></i> </a>
  
 
</nav>
<div class="login-page">
  <div align="center">
  <h2>Registro de Carrera</h2>
  </div>
  <div class="lol">
    
    <div class="lolform">
      
      <input type="text" placeholder="Nombre de la carrera" v-model="nombre"/>

      <button @click="registrar"><i class="fas fa-plus-circle"></i> Crear Carrera</button>
      
    </div>
    
  </div>
</div>
  </div>
</template>
<script>
 import {API} from '../Servicios/axios.js'
const header ={headers:{Authorization:`Token ${localStorage.getItem('token')}`}}

export default {
 
    data() {
        return{
          
           nombre:'',
         
        }
    },
     methods: {
       actualizar(id){
            // eslint-disable-next-line no-console
         console.log('ALUMNO ID: ' + id)
       },
       eliminar(id){
         // eslint-disable-next-line no-console
         console.log('ALUMNO ID: ' + id)
       },
       mostrarSeleccionado(){
         var combo = document.getElementById("combo").value;
        //var selected = combo.options[combo.selectedIndex].text;
            // eslint-disable-next-line no-console
        console.log(combo);
        this.carrera =combo
       },
       registrar(){
         API.post('http://isuri.ddns.net/adminUp/v1/carreras/carreras/', {
    
            nombre:this.nombre
              
        },
        header
        )
         .then(response => {
            // eslint-disable-next-line no-console
            console.log(response.data);
            
            // eslint-disable-next-line no-console
            console.log(response)
            alert('Se ha registrado con exito, saludos bandera')
             this.$router.push("/lista")
            
          })
         
     
       },
       inicioSesion(){
             this.$router.push("/")
        },
        registroCarrera(){
          this.$router.push("/carrera")
        },
        listaAlumnos(){
          this.$router.push("/lista")
        },
        registroAlumno(){
          this.$router.push("/registro")
        }
    }
}


</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.lol {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.lol input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.lol button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.lol button:hover,.lol button:active,.lol button:focus {
  background: #43A047;
}
.lol .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.lol .message a {
  color: #4CAF50;
  text-decoration: none;
}
.lol .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
</style>