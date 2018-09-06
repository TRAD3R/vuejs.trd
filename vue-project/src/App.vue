<template>
  <div id="app">
    <h2>{{msg}}</h2>
    <app-pizza></app-pizza>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>