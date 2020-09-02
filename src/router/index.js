import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Tutorial from "../views/Tutorial.vue"
import Install from "../views/Install.vue"

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
    path: "/install",
    name: "Install",
    component: Install
  },
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router
