# VUE CLI

Curso Vue

### **7.- Navegacion Programatica**

Navegar automaticamente por las rutas.

En listar, se agregará un btn con link de ruta dinámico, se utiliza v-bind: to o :to, indicandole el nombre y el template de router.js

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
Note: $router permite acceder a la instancia del router


## 8.- Utilizar Componentes de terceros

Uso de plugins Loader, vue-spinners y para gráfica vue-chartkick
* https://github.com/Saeris/vue-spinners
* https://github.com/ankane/vue-chartkick

En main.js
$router permite acceder a la instancia del router

En main.js, importamos las 2 librerias

```
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

import { dollarFilter, percentFilter } from '@/filters'

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
```

Home.vue

Se agrega la propiedad bounce-loader, se debe indicar cuando empieza y termina.

```
<bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
```
Que se muestre cuando esta cargando: agregamos isLoading

```
data() {
    return {
      isLoading: false,
    }
  },
  created() {
    this.isLoading = true
    api
      .getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  }

```

una vez cargado que el valor isLoading es false de nuevo.

Agregar grafica de precio

```
<line-chart
    class="my-10"
    :colors="['orange']"
    :min="min"
    :max="max"
    :data="history.map(h => [h.date, parseFloat(h.priceUsd).toFixed(2)])"
/>
```
Nota: con Vue.use, se puede integrar componentes de terceros


Agregar funcionalidad, mejores ofertas de cambio y 
obtener la url de exchange

En oferta de cambio, En api, crear funcion: 

```
function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data)
}
```

En CoinDetail.vue, en metodo getCoin():


```
data() {
    return {
        markets: []
    }

```

```
Promise.all([
        api.getAsset(id),
        api.getAssetHistory(id),
        api.getMarkets(id)
      ])
        .then(([asset, history, markets]) => {
          this.asset = asset
          this.history = history
          this.markets = markets
        })
        .finally(() => (this.isLoading = false))
```



## 9.- Filtros y ordenamiento

En PxAssetsTable.vue

```
<input
    class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
    id="filter"
    placeholder="Buscar..."
    type="text"
    v-model="filter"
/>
```

Definimos:

```
data() {
    return {
        filter: ''
    }
}
```

Creamos computer property ..
....



## 9.- Navegación Dinámica

```
<router-link
  v-for="l in links"
  :key="l.title"
  :to="l.to"
  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
>{{ l.title }}</router-link>
```