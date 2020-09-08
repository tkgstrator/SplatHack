import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Tutorial from "../views/Tutorial.vue"
import Install from "../views/Install.vue"
import Basis from "../views/Basis.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tutorials",
    name: "Tutorial",
    component: Tutorial
  },
  {
    path: "/tutorials/01",
    name: "Tutorial01",
    component: () => import("../views/Tutorial/01.vue")
  },
  {
    path: "/install",
    name: "Install",
    component: Install
  },
  {
    path: "/basis",
    name: "Basis",
    component: Basis
  },
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
