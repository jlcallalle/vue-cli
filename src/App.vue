<template>
  <div id="app" class="bg-blue-400">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- Muestra componente creado-->
    <HelloWorld msg="Welcome to Your Vue.js App 123" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue"; //es5

export default {
  //es5
  name: "app",
  components: {
    //vue.componentes
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
