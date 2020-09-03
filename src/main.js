import Vue from "vue"
import VueHighlightJS from "vue-highlight.js"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import router from "./router"

import css from "highlight.js/lib/languages/css"
import javascript from "highlight.js/lib/languages/javascript"
import vue from "vue-highlight.js/lib/languages/vue"

// import "highlight.js/styles/androidstudio.css"
import "highlight.js/styles/arta.css"

Vue.use(VueHighlightJS, {
  // Register only languages that you want
  languages: {
    css,
    javascript,
    vue
  }
});
// Vue.use(VueHighlightJS)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  el: "#app",
  render: h => h(App)
}).$mount("#app")
