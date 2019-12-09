import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Registro from './components/Registro.vue'
import Carrera from './components/Carrera.vue'
import Lista from './components/Lista.vue'
import Editar from './components/Editar.vue'
Vue.use(VueRouter)

const router = new VueRouter ({
    mode: 'history',
    routes : [
        {
             path: "/login",
             component: Login
             
        },
        {
            path: "/registro",
             component: Registro
        },
        {
            path: "/carrera",
             component: Carrera
        },
        {
            path: "/lista",
            component: Lista
        },
        {
            path: "/editar",
            component: Editar
        },
        

    ]

})

export default router  