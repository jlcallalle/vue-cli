# VUE CLI

Curso Vue

### **7.- Navegacion Programatica**

Navegar automaticamente por las rutas.

<<<<<<< HEAD
En listar, se agregará un btn con link de ruta dinámico, se utiliza v-bind: to o :to, indicandole el nombre y el template de router.js
=======
En listar, ara que el link de ruta sea dinámico, se utiliza v-bind: to o :to, indicandole el nombre y el template de router.js
>>>>>>> 09b8b91af79982d206798b8b2f696c21bcef01cd

```
<router-link
    v-bind:to="{ name: 'coin-detail', params: { id: a.id } }" >
    {{ a.name }}
</router-link>
```

En el logo, si deseamos agregar el link principal
```
<router-link to="/"> Platzi Exchange a </router-link>
```
```
<router-link  :to="{ name: 'home' }"> Platzi Exchange </router-link>
```

<br>


**Forma programatica:** (dentro de una funcion del componente)
Deseamos crear un boton de detalle para cada criptomoneda direccionando a su ruta específica.

1. Creamos componente :
    - src/componentes/ PxButton.vue


En PxButton.vue, creamos método:
```
 methods: {
    buttonClick() {
      this.$emit('custom-click')
    }
  }
```
En PxButton.vue, creamos directiva click en button en template:
```
<button @click="buttonClick"></button>
```
```
TIP: v-on:click="buttonClick"  = @click="buttonClick"
```

En PxAssetsTable.vue, que es su padre importamos componente PxButton
```
import PxButton from '@/components/PxButton'
```
En PxAssetsTable.vue, agregamos en template:
```
<px-button @custom-click="goToCoin(a.id)">
    <span>Detalle</span>
</px-button>
```

En PxAssetsTable.vue, creamos método:
```
  methods: {
    goToCoin(id) {
      this.$router.push({ name: 'coin-detail', params: { id } })
    }
  }
```
<<<<<<< HEAD
Note: $router permite acceder a la instancia del router
=======
>>>>>>> 09b8b91af79982d206798b8b2f696c21bcef01cd

<br><br><br>
## 8.- Running the tests

Explain how to run the automated tests for this system

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
