<template>
  <div class="fondo">
    <nav class="navbar navbar-dark bg-dark">

  <a class="navbar-brand" href="# "><i class="fas fa-dizzy"></i> BIENVENIDO</a>
  <a class="navbar-brand" href="#"><i class="fas fa-list"></i> Lista de alumnos</a>
   <a class="navbar-brand" href="#"><i class="fas fa-plus"></i> Agregar carrera</a>
    <a class="navbar-brand" href="#"><i class="fas fa-user-plus"></i> Registrar alumno</a>
     <a class="navbar-brand" href="#"><i class="fas fa-home"></i> Home</a>
       <a class="navbar-brand" href="#">Salir  <i class="fas fa-sign-out-alt"></i> </a>
  
 
</nav>
  <div class="csslogin">
  <div class="modal-dialog text-center">
  <div class="col-sm-8 main-section">
    <div class="modal-content">
      <div class="col-12 user-img">
        <img src="http://icons.iconarchive.com/icons/google/noto-emoji-people-profession/256/10207-man-student-light-skin-tone-icon.png" width="200" height="197">
      </div>
      <form class="col-12">
        <h2 style="color:white"> Registro </h2>
        <div class="form-group">
          <div class="colocar">
          <i class="fas fa-user"></i>
          </div>
          <input type="text" class="form-control" placeholder="Nombre" v-model="nombre">     
        </div>
        <div class="form-group">
          <div class="colocar">
            <i class="fas fa-user"></i>
          </div>
          <input type="text" class="form-control" placeholder="Apellidos" v-model="apellidos">     
        </div>
                
                <div class="form-group">
          <div class="colocar">
            <i class="fas fa-sort-numeric-up-alt"></i>
          </div>
          <input type="text" class="form-control" placeholder="Edad" v-model="edad">     
        </div>
                <div class="form-group">
          <div class="colocar">
            <i class="fas fa-envelope-open-text"></i>
          </div>
          <input type="text" class="form-control" placeholder="Direccion" v-model="direccion">     
        </div>
                <div class="form-group">
          <div class="colocar">
            <i class="fas fa-genderless"></i>
          </div>
          <input type="text" class="form-control" placeholder="Sexo" v-model="sexo">     
        </div>

                        <div class="form-group">
          <div class="colocar">
           
          </div>
                <div class="form-group">
                  <select name="Elige la carrera " class="" id="combo" @change="mostrarSeleccionado" >
      
      <option disabled="disabled" selected="selected" style="font-family: cursive">Selecciona tu carrera</option>

      <option v-for="carrera in carreras" v-bind:key="carrera" v-bind:value="carrera.id">{{carrera.nombre}}</option>
    </select>
                </div>
        </div>
        
        
        <div class="mipuntobutton">
        <button type="button" class="btn" @click="registrar"><i class="fas fa-sign-in-alt">     Entrar</i> </button>
        </div>
      </form> 
      <div class="col-12 forgot">
        <a href="https://www.fisimat.com.mx/quienes-somos/">Click aqui</a>

      </div>
    </div>  <!---- Final de mi container modal--->
  </div>
  </div>
  </div>
  </div>
</template>

<style>
.csslogin{
  font-family: 'Roboto', sams-serif;
  background-size: cover;
 
  

}


body{
   background: url('http://img.netbian.com/file/2017/1207/5dd4b7e6b57c7e77c2354f782cfc2a74.jpg') no-repeat center center fixed;
   background-size: cover;
}

.main-section{
  margin: 0 auto;
  margin-top: 130px;
}

.modal-content{
  background-color: #3b4653;
  opacity: .85;
  padding: 0 18px;
  box-shadow: 0px 0px 3px #848484;
}

.user-img{
  margin-top: -50px;
  margin-bottom: 35px;

  
}

.user-img img{
  height: 100px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #848484;


}

.form-group input{
  height: 42px;
  border-radius: 5px;
  border: 0;
  font-size: 18px;
  padding-left: 54px;

}

.form-group::before{

  position: absolute;
  font-size: 22px;
  color: #555e60;
  left: 28px;
  padding-top: 4px;

}



.colocar{
   position: absolute;
  font-size: 22px;
  color: #555e60;
  left: 28px;
  padding-top: 4px;

}

.btn{
   background-color: #27c2a5;
   color: #fff;
   font-size: 19px;
   padding: 7px 14px;
   border-radius: 5px;
   border-bottom: 4px solid #219882;
}

.btn:hover, .btn:focus{
  background-color: #25a890;
  border-bottom: 4px solid #25a890!important;
}
.svg-inline--fa{
  font-size: 20px;
  margin-right: 7px;
}

.forgot{
  padding: 5px 0 25px;
}

.forgot a{
  color: #c2fbfe;
}

</style>

<script>
 import {API} from '../Servicios/axios.js'
const header ={headers:{Authorization:`Token ${localStorage.getItem('token')}`}}

export default {
  created() {
          // eslint-disable-next-line no-console
      console.log(header)
     API.get('http://isuri.ddns.net/adminUp/v1/carreras/carreras/',header) .then(response => {
            // eslint-disable-next-line no-console
           // console.log(response)
            this.carreras = response.data
              // eslint-disable-next-line no-console
            console.log(this.carreras)
          })
 },
    data() {
        return{
           carreras:[],
           nombre:'',
           apellidos:'',
           edad:'',
           direccion:'',
           sexo:'',
           carrera:''
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
         API.post('http://isuri.ddns.net/adminUp/v1/alumnos-registro/', {
    
            nombre:this.nombre,
            apellidos:this.apellidos,
            edad:this.edad,
            carrera:this.carrera,
            direccion:this.direccion,
            sexo:this.sexo,   
        },
        header
        )
         .then(response => {
            // eslint-disable-next-line no-console
            console.log(response.data);
            
            // eslint-disable-next-line no-console
            console.log(response)
            alert('Se ha registrado con exito')
             this.$router.push("/lista")
            
          })
         
     
       }
    }
}


</script>