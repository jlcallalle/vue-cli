import Vue from "vue"; //importa libreria del npm
import App from "./App.vue"; //import para importar el app
//import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app"); //equivale a el
