<template>
  <div id="app">
    <h2>{{msg}}</h2>
      <!--Передача параметров дочерним компонентам (обязательно нужно забайндидь)-->
    <app-pizza :pizzaName="name" :pizzaPrice="price"></app-pizza>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        msg: 'Title для App.vue',
        name: "Маргарита",
        price: 300
    }
  }
}
</script>