<template>
  

<div class="nohacenadaestamadre">
      <nav class="navbar navbar-dark bg-dark">

  <a class="navbar-brand" href="#"><i class="fas fa-dizzy"></i> BIENVENIDO</a>
  <a class="navbar-brand" href="#"><i class="fas fa-list"></i> Lista de alumnos</a>
   <a class="navbar-brand" href="#"><i class="fas fa-plus"></i> Agregar carrera</a>
    <a class="navbar-brand" href="#"><i class="fas fa-user-plus"></i> Registrar alumno</a>
     <a class="navbar-brand" href="#"><i class="fas fa-home"></i> Home</a>
       <a class="navbar-brand" href="#">Salir  <i class="fas fa-sign-out-alt"></i> </a>
  
 
</nav>
<div class="container">
<section class="search-sec">
    <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">                      
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                              <option disabled="disabled" selected="selected">Selecciona la carrera</option>
                              <option>Ingenieria en  Desarrollo de Software</option>
                              <option>Ingenieria en Petrolera </option>
                              <option>Ingenieria en Manofactura</option>
                              <option>Ingenieria Biomedica</option>
                              <option>Ingenieria Mecatronica</option>
                              <option>Ingenieria Agroindustrial</option>
                            </select>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
<section class="search-sec">
    <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">                      
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                          <input type="text" class="form-control search-slt" placeholder="Edad" v-model="edad">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn" @click="searchEdad">Search</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
<section class="search-sec">
    <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">                      
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                          <input type="text" class="form-control search-slt" placeholder="Nombre del alumno " v-model="nombre">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-danger wrn-btn" @click="searchNombre">Search</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</section>
  
 
  <div class="table-responsive-vertical">
    <table class="table table-bordered table-striped table-hover table-mc-light-red">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Edad</th>
          <th>Sexo</th>
          <th>Direccion</th>
          <th>Carrera</th>
          <th><i class="fas fa-tools"></i></th>
        </tr>

      </thead>
      <tbody>
        <tr v-for="alumno in alumnos" v-bind:key="alumno">
      <td>{{alumno.nombre}}</td>
      <td>{{alumno.apellidos}}</td>
      <td>{{alumno.edad}}</td>
      <td>{{alumno.sexo}}</td>
      <td>{{alumno.direccion}}</td>
      <td>{{alumno.carrera}}</td>
       <td> <button type="button" class="btn btn-danger" @click="eliminar(alumno.id)"><i class="fa fa-trash"></i></button> <button type="button" class="btn btn-light" @click="actualizar(alumno)"><i class="fa fa-edit"></i></button> </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>


</template>
<script>
 import {API} from '../Servicios/axios.js'
const header ={headers:{Authorization:`Token ${localStorage.getItem('token')}`}}

export default {
  created() {
          // eslint-disable-next-line no-console
      console.log(header)
     API.get('http://isuri.ddns.net/adminUp/v1/alumnos/',header) .then(response => {
            // eslint-disable-next-line no-console
           // console.log(response)
            this.alumnos = response.data
              // eslint-disable-next-line no-console
            console.log(this.alumnos)
          })
          
 },

    data() {
        return{
           alumnos:[],
           alumnos2:[],
           nombre:'',
           edad:''
        }
    },
     methods: {
       obtenerAlumnos(){
API.get('http://isuri.ddns.net/adminUp/v1/alumnos/',header) .then(response => {
            // eslint-disable-next-line no-console
           // console.log(response)
            this.alumnos = response.data
              // eslint-disable-next-line no-console
            console.log(this.alumnos)
          })
       },
       actualizar(alumno){
            // eslint-disable-next-line no-console
         console.log('ALUMNO ID: ' + alumno.nombre)
         localStorage.setItem('id', alumno.id)
         localStorage.setItem('nombre', alumno.nombre)
         localStorage.setItem('apellidos', alumno.apellidos)
         localStorage.setItem('edad', alumno.edad)
         localStorage.setItem('sexo', alumno.sexo)
         localStorage.setItem('direccion', alumno.direccion)
         this.$router.push("/editar")
       },
       eliminar(id){
          // eslint-disable-next-line no-console 
         console.log('ALUMNO ID: ' + id)

          API.delete('http://isuri.ddns.net/adminUp/v1/alumnos/'+ id ,
      
        header
      ).then(response => {
            // eslint-disable-next-line no-console
            console.log(response.data);
            
            // eslint-disable-next-line no-console
            console.log(response)
            alert('Se ha eliminado con exito')
            this.obtenerAlumnos()
            
          })
       },
        searchNombre(){
         this.alumnos=this.alumnos.filter((alumno) => alumno.nombre.includes(this.nombre));
           // eslint-disable-next-line no-console
       console.log(this.alumnos)
          },
        searchEdad(){
           this.alumnos=this.alumnos.filter((alumno) => alumno.edad.includes(this.edad));
           // eslint-disable-next-line no-console
       console.log(this.alumnos)

        }                

    }
}


</script>
<style scoped>
.container{
  margin: 20px auto;
  max-width: 960px;

}
.table{
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  background-color: #fff;

}

.table > thead >tr,
.table > tbody > tr,
.table > tfoot > tr {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.table > thead > th,
.table > tbody > th,
.table > tfoot > th, 
.table > thead > td,
.table > tbody > td,
.table > tfoot > td{
  text-align: left;
  padding: 1.6rem;
  vertical-align: top;
  border-top: 0;
    -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
} 
.table > thead > tr > th {
  font-weight: 400;
  color: #757575;
  vertical-align: bottom;
  border-bottom: 1px solid rgba (0,0,0,0.12);
}

.table > caption + thead  > tr:first-child > th,
.table > colgroup + thead  > tr:first-child > th,
.table > thead:first-child > tr:first-child > th,
.table > caption + thead  > tr:first-child > td,
.table > colgroup + thead  > tr:first-child > td,
.table > thead:first-child > tr:first-child > td{
  border-top: 0;
}

.table > tbody + tbody{
  border-top: 1px solid rgba(0,0,0,0.12);
}

.table .table{
  background: #fff;
}

.table .no-border{
  border: 0;
}

.table-condensed > thead > tr > th,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > tbody > tr > td,
.table-condensed > tfoot > tr > td{
  padding: 0;
}

.table-bordered{
  border: 0;
}
</style>

