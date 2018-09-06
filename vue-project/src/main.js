import Vue from 'vue'
import App from './App.vue'
import Pizza from './Pizza.vue'

Vue.component('app-pizza', Pizza);
new Vue({
    el: '#app',
    render: h => h(App)
});