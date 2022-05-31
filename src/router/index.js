import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const Opiniones = () => import('../views/Opiniones.vue')
const Administracion = () => import('../views/Administracion.vue')
const NotFound = () => import('../views/NotFound.vue')
const EditComment = () => import('../views/EditComment.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/opiniones',
    name: 'opiniones',
    component: Opiniones
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: Administracion,
  },
  {
    path: '/editcomment/:id',
    name: 'editcomment',
    component: EditComment
  },
  {
    path: '*',
    name: 'notfound',
    component: NotFound
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
