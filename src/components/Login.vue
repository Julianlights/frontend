<template>
  <div class="fondo">
  <div class="csslogin">
  <div class="modal-dialog text-center">
  <div class="col-sm-8 main-section">
    <div class="modal-content">
      <div class="col-12 user-img">
        <img src="https://sun9-47.userapi.com/c840535/v840535299/e2f5/pTVh28OG26s.jpg">
      </div>
      <form class="col-12">
        <div class="form-group">
          <div class="colocar">
          <i class="fas fa-user"></i>
          </div>
          <input type="text" class="form-control" placeholder="Usuario" v-model="usuario">     
        </div>
        <div class="form-group">
          <div class="colocar">
            <i class="fas fa-lock"></i>
          </div>
          <input type="password" class="form-control" placeholder="Contraseña" v-model="password">     
        </div>
        <div class="mipuntobutton">
        <button type="submit" class="btn" @click="login"><i class="fas fa-sign-in-alt">     Entrar</i> </button>
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
<script>
 import {API} from '../Servicios/axios.js'
export default {
    data() {
        return{
            usuario:'',
            password:'',
            token:'',
        }
    },
     methods: {
    login(){
     
        API.post('http://isuri.ddns.net/adminUp/v1/login', {
            username:this.usuario,
            password:this.password
        })
         .then(response => {
            // eslint-disable-next-line no-console
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token)
        
            // this.token = response.data.token;
            // eslint-disable-next-line no-console
            console.log(response)
         
            
          })
          this.$router.push("/lista")
     }
    }
}
// import {API} from '../Servicios/axios';
</script>
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